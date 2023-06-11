import { React } from 'react'
import { Facebook, Instagram, Twitter } from 'react-bootstrap-icons'

const linkStyle = 'block mt-3 text-sm font-medium text-gray-600 duration-300 hover:text-blue-700'
const services = [
  { name: 'Translation', class: linkStyle, href: '/services/translation' },
  { name: 'Writing', class: linkStyle, href: '/services/writing' },
  { name: 'Programming', class: linkStyle, href: '/services/programming' },
  { name: 'Design', class: linkStyle, href: '/services/design' },
  { name: 'Proofreading', class: linkStyle, href: '/services/proofreading' }
]
const company = [
  { name: 'Leadership', class: linkStyle, href: '/company/team' },
  { name: 'Investors', class: linkStyle, href: '/company/investors' },
  { name: 'Affiliates', class: linkStyle, href: '/company/affiliates' },
  { name: 'Our Impact', class: linkStyle, href: '/company/impact' },
  { name: 'Podcast', class: linkStyle, href: '/company/podcast' },
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
const legal = [
  { name: 'Cookies', class: linkStyle, href: '/legal/cookies' },
  { name: 'Licensing', class: linkStyle, href: '/legal/licensing' },
  { name: 'Privacy', class: linkStyle, href: '/legal/privacy' },
  { name: 'Terms', class: linkStyle, href: '/legal/terms' },
]

const Footer = () => {
  const content = (
    <footer className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
      <div className='grid gap-16 row-gap-10 mb-8 lg:grid-cols-6'>
        <div className='text-center md:text-left md:max-w-md lg:col-span-2'>
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
          <div className='my-4 lg:max-w-sm'>
            <p className='text-sm text-gray-800'>
              Welcome to HubX, the consultancy arm of HubX limited: 
              Founded in March 2023 with UK company registration number 14722644.
            </p>
            <p className='mt-4 text-sm text-gray-800'>
              At HubX, we believe that every student and professional has the potential to excel, 
              as such we've made it our mission to help them in their pursuit of excellence.
            </p>
          </div>
          <div className='text-center lg:text-left'>
            <a
              href='https://twitter.com/hubx-consulting'
              className='inline-block mr-4 text-gray-500 transition-colors duration-300 hover:text-blue-400'
            >
              <Twitter size={16} />
            </a>
            <a
              href='https://instagram.com/hubx-consulting'
              className='inline-block mr-4 text-gray-500 transition-colors duration-300 hover:text-purple-400'
            >
              <Instagram size={16} />
            </a>
            <a
              href='https://facebook.com/hubx-consulting'
              className='inline-block text-gray-500 transition-colors duration-300 hover:text-blue-700'
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4'>
          <div className='text-center md:text-left'>
            <div className='text-xs font-semibold text-gray-800 tracking-wide uppercase'>Category</div>
            {services.map((link) => (
              <a className={link.class} href={link.href}>{link.name}</a>
            ))}
          </div>
          <div className='text-center md:text-left'>
            <div className='text-xs font-semibold text-gray-800 tracking-wide uppercase'>Company</div>
            {company.map((link) => (
              <a className={link.class} href={link.href}>{link.name}</a>
            ))}
          </div>
          <div className='text-center md:text-left'>
            <div className='text-xs font-semibold text-gray-800 tracking-wide uppercase'>About</div>
            {about.map((link) => (
              <a className={link.class} href={link.href}>{link.name}</a>
            ))}
          </div>
          <div className='text-center md:text-left'>
            <div className='text-xs font-semibold text-gray-800 tracking-wide uppercase'>Support</div>
            {support.map((link) => (
              <a className={link.class} href={link.href}>{link.name}</a>
            ))}
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-between text-sm text-gray-600 py-5 border-t md:flex-row'>
        <p>
          © Copyright 2023 HubX Inc.
        </p>
        <nav className='flex text-center mt-3 md:mt-0 font-normal'>
          {legal.map((item) => (
            <a className='mx-1 duration-300 hover:text-blue-600' href={item.href}>{item.name}</a>
          ))}
        </nav>
        <p className='mt-3 md:mt-0'>All rights reserved.</p>
      </div>
    </footer>
  )
  return content
}

export default Footer