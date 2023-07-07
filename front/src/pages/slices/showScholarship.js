import { Fragment } from 'react'
import { Transition, Dialog } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'

const ShowScholarship = ({ position, close, open }) => {
  const content = (
    <Transition appear show={open} as={Fragment}>
      <Dialog as='div' className='relative z-60' onClose={close}>
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
          <div className='flex min-h-full items-center justify-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-7xl transform overflow-hidden rounded-2xl bg-white align-middle shadow-xl transition-all'>
                <div className='relative bg-blue-50'>
                  <div className='absolute inset-x-0 bottom-0'>
                    <svg
                      viewBox='0 0 224 12'
                      fill='currentColor'
                      className='w-full -mb-1 text-white'
                      preserveAspectRatio='none'
                    >
                      <path d='M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z' />
                    </svg>
                  </div>
                  <div className='px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
                    <div className='relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center'>
                    <Dialog.Title
                      as='h1'
                      className='text-3xl font-bold leading-6 py-6 md:py-12'
                    >
                      {position.title}
                    </Dialog.Title>
                      <p className='mb-6 text-base text-blue-600 md:text-lg'>
                        <a href={position.website}>Visit website</a>
                        <span className='mx-9'>·</span>
                        <a href={position.email}>Contact us</a>
                      </p>
                    </div>
                  </div>
                  <div className='px-4 md:px-8'>
                    <div className='h-1/2' />
                    <div className='relative grid mx-auto overflow-hidden bg-blue-100 rounded-md shadow max-w-6xl sm:grid-cols-3 gap-2 p-6'>
                      <div>
                        <h4>Award Value</h4>
                        <p>{position.award?.value}</p>
                      </div>
                      <div>
                        <h4>{position.eligibility?.who?.title}</h4>
                        {position.eligibility?.who?.body.map((p, i) => <p key={i}>{p}</p>)}
                      </div>
                      <div>
                        <h4>{position.eligibility?.location?.title}</h4>
                        <p>
                          {position.eligibility?.location?.body.length} nationalities,
                          <a href='/'> See full list</a>
                        </p>
                      </div>
                      <div>
                        <h4>Award Year</h4>
                        <p>{position.award?.year}</p>
                      </div>
                      <div className='inline-block p-2'>
                        
                        
                      </div>

                      <div className='inline-block'>
                        <div>
                          <h4>Award Purpose</h4>
                          <div>
                            {position.award?.purpose?.tags.map((p, i) => <p key={i} className='mr-4 inline-flex break-all'>{p}</p>)}
                          </div>
                        </div>
                      </div>
                      <div className='inline-block'>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='max-w-6xl mx-auto px-6 md:px-8'>
                  <div className=''>
                    <Dialog.Description>
                      <h2 className='text-xl font-normal my-10'>About</h2>
                      {position.about.map((p, i) => <p key={i} className='mb-2'>{p}</p>)}
                    </Dialog.Description>
                  </div>
                  
                  <div className='mt-10 xl:-mx-8 border-2 border-blue-100 rounded-md p-6'>
                    <h2 className='uppercase'>Award details</h2>
                    <dl className=''>
                      <div className='sm:flex w-full'>
                        <dt className='sm:w-1/3 lg:w-1/4'>Award value</dt>
                        <dd className='sm:w-2/3 lg:w-3/4 sm:text-right'>{position.award?.value}</dd>
                      </div>
                    </dl>
                  </div>

                  <div className='mt-10 xl:-mx-8 border-2 border-blue-100 rounded-md p-6'>
                    <h2 className='uppercase'>Eligibility</h2>
                    <dl className=''>
                      <div className='sm:flex w-full'>
                        <dt className='sm:w-1/3 lg:w-1/4'>Award value</dt>
                        <dd className='sm:w-2/3 lg:w-3/4 sm:text-right'>{position.award?.value}</dd>
                      </div>
                    </dl>
                  </div>

                  <div className='mt-10 xl:-mx-8 border-2 border-blue-100 rounded-md p-6'>
                    <h2 className='uppercase'>Application process</h2>
                    <dl className=''>
                      <div className='sm:flex w-full'>
                        <dt className='sm:w-1/3 lg:w-1/4'>Award value</dt>
                        <dd className='sm:w-2/3 lg:w-3/4 sm:text-right'>{position.award?.value}</dd>
                      </div>
                    </dl>
                  </div>

                  <div className='mt-10 xl:-mx-8 border-2 border-blue-100 rounded-md p-6'>
                    <h2 className='uppercase'>Key dates</h2>
                    <dl className=''>
                      <div className='sm:flex w-full'>
                        <dt className='sm:w-1/3 lg:w-1/4'>Application deadline</dt>
                        <dd className='sm:w-2/3 lg:w-3/4 sm:text-right'>{position.award?.value}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
                
                <div className='px-4 md:px-8'>
                  <p className='text-[4rem] text-gray-500 p-6'>
                    {position.endDate}
                  </p>
                  <div className='text-left'>
                    <h2 className='font-bold text-lg'>Eligibility</h2>
                    <p className='flex mb-2'>
                      <CheckIcon color='blue' width={18} />
                      <span className='ml-2 text-gray-700'>Under 30 years</span>
                    </p>
                  </div>
                  <p className=''>
                  By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
                  By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
                  By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
                  By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
                  By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
                  By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
                  By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
                  By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
                  By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
                  By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
                  By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
                  By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
                  By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
                  By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
                  By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
                  By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
                  By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
                  By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
                  By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
                  By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
                  By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
                  By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
                  By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
                  </p>
                  <div className='my-10'>
                    <a href='/' className='justify-center rounded-md border border-transparent bg-blue-600 px-10 md:px-14 lg:px-20 py-2.5 text-sm text-white font-medium hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'>Apply now</a>
                  </div>
                </div>

                <div className='text-center'>
                  <button
                    type='button'
                    className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                    onClick={close}
                  >
                    Got it, thanks!
                  </button>
                  <button className='ml-3 text-gray-600 hover:text-blue-600 text-sm font-medium' type='button'>
                    Add to cart
                  </button>
                </div>
                <div className='mt-9 p-4 md:p-8 text-center'>
                  <p className='text-xs text-gray-500'>
                    This scholarship position is given to provide an overview to our scholarship service options with the option to get the process handled by our agents for a premium. To learn more about what your project will entail, do reach out to us on any of the <a href='/contact'>options we've provided</a></p>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
  return content
}

export default ShowScholarship