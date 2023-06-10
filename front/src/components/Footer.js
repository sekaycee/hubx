import { React } from 'react'
import { Facebook, Instagram, Twitter } from 'react-bootstrap-icons'

const linkStyle = 'block mt-3 text-sm font-medium text-gray-600 duration-300 hover:text-blue-700'
const services = [
  { name: 'Translation', class: linkStyle, href: '/services/translation' },
  { name: 'Digital Marketing', class: linkStyle, href: '/services/digital-marketing' },
  { name: 'Writing', class: linkStyle, href: '/services/writing' },
  { name: 'Programming', class: linkStyle, href: '/services/programming' },
  { name: 'Design', class: linkStyle, href: '/services/design' },
  { name: 'Proofreading', class: linkStyle, href: '/services/proofreading' },
  { name: 'Photography', class: linkStyle, href: '/services/photography' },
  { name: 'Accommodation', class: linkStyle, href: '/services/accommodation' },
]
const company = [
  { name: 'Leadership', class: linkStyle, href: '/company/team' },
  { name: 'Investors', class: linkStyle, href: '/company/investors' },
  { name: 'Affiliates', class: linkStyle, href: '/company/affiliates' },
  { name: 'Our Impact', class: linkStyle, href: '/company/impact' },
  { name: 'Podcast', class: linkStyle, href: '/company/podcast' },
  { name: 'Licensing', class: linkStyle, href: '/company/licensing' },
  { name: 'Privacy Policy', class: linkStyle, href: '/company/privacy' },
  { name: 'Terms of Service', class: linkStyle, href: '/company/terms' },
]
const about = [
  { name: 'Introduction', class: linkStyle, href: '/about/us' },
  { name: 'Press', class: linkStyle, href: '/about/press' },
  { name: 'Careers', class: linkStyle, href: '/about/jobs' },
  { name: 'How Tos', class: linkStyle, href: '/about/how-tos' },
  { name: 'Contact', class: linkStyle, href: '/about/contact' },
]
const support = [
  { name: 'Help', class: linkStyle, href: '/support/help' },
  { name: 'Trust and Safety', class: linkStyle, href: '/support/trust' },
  { name: 'FAQs', class: linkStyle, href: '/support/faqs' },
  { name: 'Inquiries', class: linkStyle, href: '/support/inquiries' },
]

const Footer = () => {
  const content = (
    <footer className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
      <div class='mx-auto max-w-screen-2xl mb-12'>
        <div class='flex flex-col items-center justify-between gap-2 border-t border-b py-7 md:flex-row'>
          <div class='mb-3 text-center md:mb-0 md:text-left'>
            <span class='font-bold uppercase tracking-widest text-gray-800'>Newsletter</span>
            <p class='text-gray-500'>Subscribe to our newsletter</p>
          </div>

          <form class='flex w-full gap-2 md:max-w-md'>
            <input placeholder='Email' class='w-full flex-1 rounded-md border bg-gray-50 px-3 py-2 text-gray-800 placeholder-gray-500 outline-none ring-blue-300 transition duration-100 focus:ring' />

            <button class='inline-block rounded-md bg-blue-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-blue-300 transition duration-100 hover:bg-blue-600 focus-visible:ring active:bg-blue-700 md:text-base'>Send</button>
          </form>
        </div>
      </div>

      <div className='grid gap-16 row-gap-10 mb-8 lg:grid-cols-6'>
        <div className='md:max-w-md lg:col-span-2'>
          <a
            href='/'
            aria-label='Go home'
            title='Company'
            className='inline-flex items-center'
          >
            <span className='text-xl font-bold tracking-wide text-gray-800 uppercase'>
              Hub
            </span>
            <img width={16} height={16} src='/media/logos/logo-default.svg' alt='Logo'/>
            <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
              Consulting
            </span>
          </a>
          <div className='mt-4 lg:max-w-sm'>
            <p className='text-sm text-gray-800'>
              Welcome to HubX, the consultancy arm of HubX limited: 
              Founded in March 2023 with UK company registration number 14722644.
            </p>
            <p className='mt-4 text-sm text-gray-800'>
              At HubX, we believe that every student has the potential to succeed and excel, 
              and it is our mission to help them realise their full potential.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4'>
          <div>
            <div className='text-xs font-semibold text-gray-800 tracking-wide uppercase'>Category</div>
            {services.map((link) => (
              <a className={link.class} href={link.href}>{link.name}</a>
            ))}
          </div>
          <div>
            <div className='text-xs font-semibold text-gray-800 tracking-wide uppercase'>Company</div>
            {company.map((link) => (
              <a className={link.class} href={link.href}>{link.name}</a>
            ))}
          </div>
          <div>
            <div className='text-xs font-semibold text-gray-800 tracking-wide uppercase'>About</div>
            {about.map((link) => (
              <a className={link.class} href={link.href}>{link.name}</a>
            ))}
          </div>
          <div>
            <div className='text-xs font-semibold text-gray-800 tracking-wide uppercase'>Support</div>
            {support.map((link) => (
              <a className={link.class} href={link.href}>{link.name}</a>
            ))}
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-between py-5 border-t sm:flex-row'>
        <p className='text-sm text-gray-600'>
          © Copyright 2023 HubX Consulting. All rights reserved.
        </p>
        <div className='flex items-center mt-4 space-x-4 sm:mt-0'>
          <a
            href='https://twitter.com/hubx-consulting'
            className='text-gray-500 transition-colors duration-300 hover:text-blue-400'
          >
            <Twitter size={16} />
          </a>
          <a
            href='https://instagram.com/hubx-consulting'
            className='text-gray-500 transition-colors duration-300 hover:text-purple-400'
          >
            <Instagram size={16} />
          </a>
          <a
            href='https://facebook.com/hubx-consulting'
            className='text-gray-500 transition-colors duration-300 hover:text-blue-700'
          >
            <Facebook size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
  return content
}

export default Footer