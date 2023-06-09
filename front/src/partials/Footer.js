import { React } from 'react'
import { Facebook, Instagram, Twitter } from 'react-bootstrap-icons'

const linkStyle = 'block mt-3 text-sm font-medium text-gray-600 duration-300 hover:text-blue-600 dark:text-gray-400'
const links = {
  services: [
    { name: 'Translation', class: linkStyle, href: '/services/translation' },
    { name: 'Writing', class: linkStyle, href: '/services/writing' },
    { name: 'Programming', class: linkStyle, href: '/services/programming' },
    { name: 'Design', class: linkStyle, href: '/services/design' },
    { name: 'Proofreading', class: linkStyle, href: '/services/proofreading' }
  ],
  company: [
    { name: 'Leadership', class: linkStyle, href: '/company/team' },
    { name: 'Jobs', class: linkStyle, href: '/company/jobs' },
    { name: 'Insights', class: linkStyle, href: '/blog' },
    { name: 'Investors', class: linkStyle, href: '/company/investors' },
    { name: 'Affiliates', class: linkStyle, href: '/company/affiliates' }
  ],
  about: [
    { name: 'Intro', class: linkStyle, href: '/about/us' },
    { name: 'Press', class: linkStyle, href: '/about/press' },
    { name: 'How Tos', class: linkStyle, href: '/about/how-tos' },
    { name: 'Our Impact', class: linkStyle, href: '/about/impact' },
    { name: 'Contact', class: linkStyle, href: '/contact' },
  ],
  support: [
    { name: 'Help', class: linkStyle, href: '/support/help' },
    { name: 'FAQs', class: linkStyle, href: '/support/faqs' },
    { name: 'Podcast', class: linkStyle, href: '/company/podcast' },
    { name: 'Inquiries', class: linkStyle, href: '/support/inquiries' },
    { name: 'Trust and Safety', class: linkStyle, href: '/support/trust' }
  ],
  legal: [
    { name: 'Terms', class: linkStyle, href: '/legal/terms' },
    { name: 'Cookies', class: linkStyle, href: '/legal/cookies' },
    { name: 'Privacy', class: linkStyle, href: '/legal/privacy' },
    { name: 'Licensing', class: linkStyle, href: '/legal/licensing' }
  ]
}

const Footer = () => {
  const content = (
    <footer className='px-8 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl font-medium'>
      <div className='grid gap-16 row-gap-10 mb-8 lg:grid-cols-6'>
        <div className='text-center md:text-left lg:col-span-2'>
          <a
            href='/'
            aria-label='Go home'
            title='Company'
            className='inline-flex items-center'
          >
            <span className='text-xl font-bold tracking-wide text-gray-900 uppercase'>
              Hub
            </span>
            <img width={16} height={16} src='/media/logos/hubx-logo.svg' alt='Logo'/>
            <span className='ml-2 text-xl font-bold tracking-wide text-gray-900 uppercase'>
              Consulting
            </span>
          </a>
          <div className='my-2 text-sm lg:max-w-sm text-gray-600 dark:text-gray-400'>
            <p>
              Welcome to HubX, the consultancy division of HubX limited: 
              Founded in March 2023 with UK company registration number 14722644.
            </p>
            <p className='mt-2'>
              At HubX, we believe that every student and professional have the potential to excel, 
              as such we have made it our mission to support them in their pursuit of excellence.
            </p>
          </div>
          <div className='text-center md:text-left'>
            <a
              href='https://twitter.com/hubx-consulting'
              className='inline-block mr-4 text-gray-600 transition-colors duration-300 hover:text-blue-400'
            >
              <Twitter size={16} />
            </a>
            <a
              href='https://instagram.com/hubx-consulting'
              className='inline-block mr-4 text-gray-600 transition-colors duration-300 hover:text-purple-400'
            >
              <Instagram size={16} />
            </a>
            <a
              href='https://facebook.com/hubx-consulting'
              className='inline-block text-gray-600 transition-colors duration-300 hover:text-blue-700'
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4'>
          <div className='text-center md:text-left'>
            <div className='text-xs font-semibold text-gray-900 tracking-wide uppercase my-2'>About</div>
            {links.about.map((link, idx) => (
              <a key={idx} className={link.class} href={link.href}>{link.name}</a>
            ))}
          </div>
          <div className='text-center md:text-left'>
            <div className='text-xs font-semibold text-gray-900 tracking-wide uppercase my-2'>Category</div>
            {links.services.map((link, idx) => (
              <a key={idx} className={link.class} href={link.href}>{link.name}</a>
            ))}
          </div>
          <div className='text-center md:text-left'>
            <div className='text-xs font-semibold text-gray-900 tracking-wide uppercase my-2'>Company</div>
            {links.company.map((link, idx) => (
              <a key={idx} className={link.class} href={link.href}>{link.name}</a>
            ))}
          </div>
          <div className='text-center md:text-left'>
            <div className='text-xs font-semibold text-gray-900 tracking-wide uppercase my-2'>Resources</div>
            {links.support.map((link, idx) => (
              <a key={idx} className={link.class} href={link.href}>{link.name}</a>
            ))}
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-between text-sm text-gray-600 py-5 border-t md:flex-row'>
        <p>
          © Copyright 2023 HubX Inc.
        </p>
        <nav className='flex text-center'>
          {links.legal.map((item, idx) => (
            <a key={idx} className={`md:mt-0 mx-1 ${linkStyle}`} href={item.href}>{item.name}</a>
          ))}
        </nav>
        <p className='mt-3 md:mt-0'>All rights reserved.</p>
      </div>
    </footer>
  )
  return content
}

export default Footer