import mammoth from 'mammoth'
import { Fragment, useState } from 'react'
import ProjectFile from './quote/projectFile'
import InputWordCount from './quote/inputWordCount'
import OutputWordCount from './quote/outputWordCount'
import ProjectDuration from './quote/projectDuration'
import { Listbox, Transition, Dialog } from '@headlessui/react'
import { version, getDocument, GlobalWorkerOptions } from 'pdfjs-dist'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { BookHalf, Clipboard2Data, Clock, Code, HouseExclamation, Pencil, Projector, TelephoneOutbound, Tools, Translate } from 'react-bootstrap-icons'
//import ShowQuote from './quote/showQuote'

GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${version}/pdf.worker.js`

const services = [
  { id: 1, cat: 'Proofreading and editing', icon: BookHalf, charges: [
    { hcharge: 1, dcharge: .8, wcharge: .5, mcharge: .3 }
  ] },
  {
    id: 2,
    cat: 'CV or Cover letter reviews',
    icon: Clipboard2Data
  },
  {
    id: 3,
    cat: 'Personal statement writing',
    icon: Pencil
  },
  {
    id: 4,
    cat: 'Poster or Presentation',
    icon: Projector
  },
  {
    id: 5,
    cat: 'Mentorship',
    icon: TelephoneOutbound
  },
  {
    id: 6,
    cat: 'Accommodation',
    icon: HouseExclamation
  },
  {
    id: 7,
    cat: 'Hourly consultation',
    icon: Clock
  },
  {
    id: 8,
    cat: 'Translation',
    icon: Translate
  },
  {
    id: 9,
    cat: 'Programming',
    icon: Code
  },
  {
    id: 10,
    cat: 'Design',
    icon: Tools
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const getTextFromPDF = async (file) => {
  const fileReader = new FileReader()

  return new Promise((resolve, reject) => {
    fileReader.onload = async () => {
      try {
        const typedArray = new Uint8Array(fileReader.result)
        const pdf = await getDocument(typedArray).promise
        let extractedText = ''

        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i)
          const content = await page.getTextContent()
          const textItems = content.items.map((item) => item.str) 
          extractedText += textItems.join(' ')
        }
        resolve(extractedText)
      } catch (err) {
        reject(err)
      }
    }
    fileReader.readAsArrayBuffer(file)
  })
}

const getTextFromDOCX = async (file) => {
  const fileReader = new FileReader()

  return new Promise((resolve, reject) => {
    fileReader.onload = async () => {
      try {
        const arrayBuffer = fileReader.result
        const result = await mammoth.extractRawText({ arrayBuffer })
        const extractedText = result.value.replace(/\n/g, ' ').trim()

        resolve(extractedText)
      } catch(err) {
        reject(err)
      }
    }
    fileReader.readAsArrayBuffer(file)
  })
}

const getTextFromTXT = async (file) => {
  const fileReader = new FileReader()

  return new Promise((resolve, reject) => {
    fileReader.onload = () => {
      const extractedText = fileReader.result

      resolve(extractedText)
    }
    fileReader.onerror = reject

    fileReader.readAsText(file)
  })
}

const InstantQuote = () => {
  const [quote, setQuote] = useState(0)
  const [filename, setFilename] = useState('')
  const [wordCount, setWordCount] = useState(0)
  const [quoteOpen, setQuoteOpen] = useState(false)
  const [selected, setSelected] = useState(services[3])

  function closeModal() {
    setQuoteOpen(false)
  }

  function openModal() {
    setQuoteOpen(true)
  }

  const countWords = (text) => {
    let count = 1
    let words = text.replace(/\n|\s+|\t|\r/g, ' ')

    for (let i = 0; i < words.length; i++) {
      if (words[i-1] !== ' ' && words[i] === ' ' && words[i+1] !== ' ') {
        count++
      }
    }
    return count
  }

  const getWordCount = async (event) => {
    const file = event.target.files[0]
    

    if(file) {
      try {
        let text = ''
        let words = 0

        if (file.type === 'application/pdf') {
          text = await getTextFromPDF(file)
        } else if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
          text = await getTextFromDOCX(file)
        } else if (file.type === 'text/plain') {
          text = await getTextFromTXT(file)
        } else {
          throw new Error('Unsupported file format')
        }

        words = countWords(text)
        setWordCount(words)
        setFilename(file.name)
      } catch(err) {
        console.error(err)
        setWordCount(0)
      }
    }
  }

  const getInstantQuote = () => {
    const quote = 100
    setQuote(quote)
  }

  const content = (
    <div>
      <h1 className='block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white'>Get an instant <span className='text-blue-600'>quotation</span></h1>
      <p className='mt-3 text-lg text-gray-800 dark:text-gray-400'>Hand-picked professionals and expertly crafted solutions, designed for any kind of student or professional.</p>
      
      <form action='getInstantQuote()'>
        <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
          <div className='sm:col-span-3'>
            <Listbox value={selected} onChange={setSelected}>
              {({ open }) => (
                <>
                  <Listbox.Label htmlFor='category' className='block text-sm font-medium leading-6 text-gray-900'>Project categories</Listbox.Label>
                  <div className='block relative mt-2'>
                    <Listbox.Button id='category' className='block relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6'>
                      <span className='flex items-center'>
                        <selected.icon />
                        <span className='ml-3 block truncate'>{selected.cat}</span>
                      </span>
                      <span className='pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2'>
                        <ChevronUpDownIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
                      </span>
                    </Listbox.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      leave='transition ease-in duration-100'
                      leaveFrom='opacity-100'
                      leaveTo='opacity-0'
                    >
                      <Listbox.Options className='absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                        {services.map((item) => (
                          <Listbox.Option
                            key={item.id}
                            className={({ active }) =>
                              classNames(
                                active ? 'bg-blue-600 text-white' : 'text-gray-900',
                                'relative cursor-default select-none py-2 pl-3 pr-9'
                              )
                            }
                            value={item}
                          >
                            {({ selected, active }) => (
                              <>
                                <div className='flex items-center'>
                                  <item.icon />
                                  <span
                                    className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                  >
                                    {item.cat}
                                  </span>
                                </div>

                                {selected ? (
                                  <span
                                    className={classNames(
                                      active ? 'text-white' : 'text-blue-600',
                                      'absolute inset-y-0 right-0 flex items-center pr-4'
                                    )}
                                  >
                                    <CheckIcon className='h-5 w-5' aria-hidden='true' />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>
          </div>
          
          {selected.id !== 7 && <ProjectDuration />}
        </div>

        {selected.id !== 7 && <ProjectFile getWordCount={getWordCount} filename={filename} />}

        {filename && <OutputWordCount wordCount={wordCount} />}

        {!filename && <InputWordCount />}

        <div className='mt-3 grid'>
          <button onClick={openModal} type='button' className='inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-2 px-3 dark:focus:ring-offset-gray-800'>Get instant quote</button>
        </div>
        <Transition appear show={quoteOpen} as={Fragment}>
          <Dialog as='div' className='relative z-10' onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-black bg-opacity-25' />
            </Transition.Child>

            <div className='fixed inset-0 overflow-y-auto'>
              <div className='flex min-h-full items-center justify-center p-4 text-center'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-out duration-300'
                  enterFrom='opacity-0 scale-95'
                  enterTo='opacity-100 scale-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100 scale-100'
                  leaveTo='opacity-0 scale-95'
                >
                  <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all'>
                    <Dialog.Title
                      as='h3'
                      className='text-lg font-medium leading-6 text-gray-900'
                    >
                      Here's the quote
                    </Dialog.Title>
                    <Dialog.Description>
                      For your {selected.cat.toLowerCase()} gig
                    </Dialog.Description>
                    <div className='mt-2'>
                      <p className='text-[3rem] text-gray-500'>
                        ${quote}.00
                      </p>
                    </div>

                    <div className='mt-4'>
                      <button
                        type='button'
                        className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                        onClick={closeModal}
                      >
                        Got it, thanks!
                      </button>
                      <button className='ml-3 text-gray-600 hover:text-blue-600 text-sm font-medium' type='button'>
                        Add to cart
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </form>
    </div>
  )
  return content
}

export default InstantQuote