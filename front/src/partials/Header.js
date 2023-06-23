import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  BriefcaseIcon,
  PaperAirplaneIcon,
  AcademicCapIcon,
  BuildingOffice2Icon,
  BuildingLibraryIcon,
  LightBulbIcon,
  DocumentTextIcon,
  XMarkIcon,
  HomeModernIcon,
  NewspaperIcon,
  IdentificationIcon,
  LifebuoyIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import MegaMenuLinks from './header/MegaMenuLinks'

const navigation = {
  services: [
    { name: 'Academic', description: 'Bootstrap your academic goals', href: '/services/academic', icon: AcademicCapIcon },
    { name: 'Scholarships', description: 'Access our list of current scholarship positions', href: '/services/scholarships', icon: BuildingLibraryIcon },
    { name: 'Career', description: 'Get help fast-tracking your career goals', href: '/services/career', icon: BuildingOffice2Icon },
    { name: 'Jobs', description: 'Access our curated listing of job openings', href: '/services/jobs', icon: BriefcaseIcon },
    { name: 'Mentorship', description: 'Let our professors guide you', href: '/services/mentorship', icon: LightBulbIcon },
    { name: 'CV Check', description: 'Check the validity of your CV and Resume', href: '/services/cv-check', icon: DocumentTextIcon },
    { name: 'Conciarge', description: 'Get help moving from one place to another', href: '/services/conciarge', icon: PaperAirplaneIcon },
  ],
  about: [
    { name: 'Introduction', description: 'Bootstrap and fast-track your academic|career goals', href: '/about/us', icon: HomeModernIcon },
    { name: 'Press', description: 'Hear what people say about us', href: '/about/press', icon: NewspaperIcon },
    { name: 'How Tos', description: 'Get to know how we work', href: '/about/how-tos', icon: LifebuoyIcon }
  ],
  insights: {
    categories: [
      {name: 'Scholarship', href: ''},
      {name: 'Company', href: ''},
      {name: 'Translation', href: ''},
      {name: 'Academic', href: ''},
      {name: 'Career', href: ''}
    ],
    tags: [
      {name: 'School', href: ''},
      {name: 'Finance', href: ''},
      {name: 'Proposal', href: ''},
      {name: 'Resume', href: ''},
      {name: 'Copywriting', href: ''},
      {name: 'Jobs', href: ''},
      {name: 'View all', href: ''}
    ],
    recents: [
      {title: 'Fund acquisition', desc: 'Get the latest news on our funding efforts. The latest round have only been the best yet, with projected growth in multiple key areas.',
        image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80', date: '', alt: 'funding', href: ''},
      {title: 'New podcast series', desc: 'Tune in to our all-new podcast series on ways to maximize the effects of the efforts you employ for a successful academic or career endeavour.',
        image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80', date: '', alt: 'podcast', href: ''}
    ]
  },
  company: [
    { name: 'Careers', description: 'We are currently hiring', href: '/company/jobs', icon: IdentificationIcon },
  ],
  callsToAction: [
    { name: 'How it works', href: '/about/process', icon: PlayCircleIcon },
    { name: 'Contact support', href: '/contact', icon: PhoneIcon },
  ]
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // const linkStyle = 'block mt-3 text-sm font-medium text-gray-600 duration-300 hover:text-blue-600'

  const content = (
    <header className='absolute inset-x-0 top-0 z-50'>
      <nav className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8' aria-label='Global'>
        <div className='flex lg:flex-1'>
          <a href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>HubX Consulting</span>
            <div className='flex items-center justify-center w-8 h-8 rounded-full bg-blue-100'>
              <img width={16} height={16} src='/media/logos/hubx-logo.svg' alt='Logo' />
            </div>
          </a>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>

        <Popover.Group className='hidden lg:flex lg:gap-x-12'>
          <Popover className='relative'>
            <Popover.Button className='flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900'>
              Services
              <ChevronDownIcon className='h-5 w-5 flex-none text-gray-900' aria-hidden='true' />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute -left-4 top-full z-50 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5'>
                <div className='p-4'>
                  {navigation.services.map((item) => (
                    <div
                      key={item.name}
                      className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50'
                    >
                      <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
                        <item.icon className='h-6 w-6 text-gray-600 group-hover:text-blue-600' aria-hidden='true' />
                      </div>
                      <div className='flex-auto'>
                        <a href={item.href} className='block font-semibold text-gray-900'>
                          {item.name}
                          <span className='absolute inset-0' />
                        </a>
                        <p className='mt-1 text-gray-600'>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50'>
                  {navigation.callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100'
                    >
                      <item.icon className='h-5 w-5 flex-none text-gray-400' aria-hidden='true' />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className='relative'>
            <Popover.Button className='flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900'>
              About
              <ChevronDownIcon className='h-5 w-5 flex-none text-gray-900' aria-hidden='true' />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute -left-36 top-full z-50 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5'>
                <div className='p-4'>
                  {navigation.about.map((item) => (
                    <div
                      key={item.name}
                      className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50'
                    >
                      <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
                        <item.icon className='h-6 w-6 text-gray-600 group-hover:text-blue-600' aria-hidden='true' />
                      </div>
                      <div className='flex-auto'>
                        <a href={item.href} className='block font-semibold text-gray-900'>
                          {item.name}
                          <span className='absolute inset-0' />
                        </a>
                        <p className='mt-1 text-gray-600'>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          {/* <a href='/blog' className='text-sm font-semibold leading-6 text-gray-900'>
            Insights
          </a> */}

          <Popover className='flex'>
            {({ open }) => (
              <>
                <div className='relative flex'>
                  <Popover.Button className='flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900'>
                    Insights
                    <ChevronDownIcon className='h-5 w-5 flex-none text-gray-900' aria-hidden='true' />
                  </Popover.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-200'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='transition ease-in duration-150'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <Popover.Panel className='absolute inset-x-0 top-full text-sm text-gray-500'>
                    {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                    <div className='absolute inset-0 top-1/2 bg-white shadow' aria-hidden='true' />

                    <div className='relative bg-white'>
                      <div className='mx-auto max-w-7xl px-8'>
                        <div className='grid grid-cols-2 gap-x-8 gap-y-10 py-16'>
                          <div className='col-start-2 grid grid-cols-2 gap-x-8'>
                            {navigation.insights.recents.map((item, idx) => (
                              <div key={idx} className='group relative text-base sm:text-sm'>
                                <div className='aspect-h-9 aspect-w-16 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75'>
                                  <img
                                    src={item.image}
                                    alt={item.alt}
                                    className='w-full object-cover rounded-lg h-36'
                                  />
                                </div>
                                <a href={item.href} className='mt-4 block font-medium text-gray-900'>
                                  <span className='absolute inset-0 z-10' aria-hidden='true' />
                                  {item.title}
                                </a>
                                <p>{item.desc}</p>
                                <p aria-hidden='true' className='mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-600'>
                                  Learn more
                                  <svg class='w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1' width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <path fill-rule='evenodd' clip-rule='evenodd' d='M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z' fill='currentColor'/>
                                  </svg>
                                </p>
                              </div>
                            ))}
                          </div>
                          <div className='row-start-1 grid grid-cols-2 gap-x-8 gap-y-10 text-sm'>
                            <div>
                              <p id='cat-heading' className='font-medium text-gray-500'>
                                Categories
                              </p>
                              {navigation.insights.categories.map((cat) => (
                                <MegaMenuLinks title={'cat'} item={cat} />
                              ))}
                            </div>
                            <div>
                              <p id='tag-heading' className='font-medium text-gray-500'>
                                Tags
                              </p>
                              {navigation.insights.tags.map((tag) => (
                                <MegaMenuLinks title={'tag'} item={tag} />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <a href='/company' className='text-sm font-semibold leading-6 text-gray-900'>
            Company
          </a>
        </Popover.Group>

        {/* <Popover.Group className='hidden lg:ml-8 lg:block lg:self-stretch'>
          <div className='flex h-full space-x-8'></div>

        </Popover.Group> */}

        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <a href='/login' className='text-sm font-semibold leading-6 text-gray-900 hover:text-blue-700'>
            Log in <span aria-hidden='true'>&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog as='div' className='lg:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className='fixed inset-0 z-50' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <a href='/' className='-m-1.5 p-1.5'>
              <span className='sr-only'>HubX Consulting</span>
              <div className='flex items-center justify-center w-8 h-8 rounded-full bg-blue-100'>
                <img width={16} height={16} src='/media/logos/hubx-logo.svg' alt='Logo'/>
              </div>
            </a>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                <Disclosure as='div' className='-mx-3'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                        Service
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className='mt-2 space-y-2'>
                        {[...navigation.services, ...navigation.callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as='a'
                            href={item.href}
                            className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              
                <Disclosure as='div' className='-mx-3'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                        About
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className='mt-2 space-y-2'>
                        {navigation.about.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as='a'
                            href={item.href}
                            className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href='/blog'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Insights
                </a>
                <a
                  href='/company'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Company
                </a>
              </div>
              <div className='py-6'>
                <a
                  href='/login'
                  className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Log in
                </a>
                <a
                  href='/register'
                  className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
  return content
}

export default Header