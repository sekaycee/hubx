import { React } from 'react'
import { Facebook, Instagram, Twitter } from 'react-bootstrap-icons'

const Footer = () => {
  const content = (
    <footer className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
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
            <a href='/services/' className='block mt-4 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              Graphic Design
            </a>
            <a href='/services/' className='block mt-3 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              Digital Marketing
            </a>
            <a href='/services/' className='block mt-3 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              Writing and Translation
            </a>
            <a href='/services/' className='block mt-3 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              Programming
            </a>
            <a href='/services/' className='block mt-3 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              Consultation
            </a>
            <a href='/services/' className='block mt-3 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              Mentorship
            </a>
            <a href='/services/' className='block mt-3 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              Photography
            </a>
          </div>
          <div>
            <div className='text-xs font-semibold text-gray-800 tracking-wide uppercase'>About</div>
            <a href='/about/intro' className='block mt-4 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              Introduction
            </a>
            <a href='/about/press' className='block mt-3 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              Press
            </a>
            <a href='/about/jobs' className='block mt-3 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              Careers
            </a>
            <a href='/about/license' className='block mt-3 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              Licensing
            </a>
            <a href='/about/privacy' className='block mt-3 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              Privacy Policy
            </a>
            <a href='/about/terms' className='block mt-3 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              Terms and Conditions
            </a>
          </div>
          <div>
            <div className='text-xs font-semibold text-gray-800 tracking-wide uppercase'>Support</div>
            <a href='/support/' className='block mt-4 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              Help
            </a>
            <a href='/support/' className='block mt-3 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              Trust and Safety
            </a>
            <a href='/support/' className='block mt-3 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              FAQs
            </a>
            <a href='/support/' className='block mt-3 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              Inquiries
            </a>
            <a href='/support/' className='block mt-3 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              How Tos
            </a>
          </div>
          <div>
            <div className='text-xs font-semibold text-gray-800 tracking-wide uppercase'>Company</div>
            <a href='/company/' className='block mt-4 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              Leadership
            </a>
            <a href='/company/' className='block mt-3 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              Investors
            </a>
            <a href='/company/' className='block mt-3 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              Affiliates
            </a>
            <a href='/company/' className='block mt-3 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              Our Impact
            </a>
            <a href='/company/' className='block mt-3 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              Podcast
            </a>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-between py-5 border-t sm:flex-row'>
        <p className='text-sm text-gray-600'>
          © Copyright 2023 HubX Consulting. All rights reserved.
        </p>
        <div className='flex items-center mt-4 space-x-4 sm:mt-0'>
          <a
            href='/'
            className='text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400'
          >
            <Twitter size={16} />
          </a>
          <a
            href='/'
            className='text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400'
          >
            <Instagram size={16} />
          </a>
          <a
            href='/'
            className='text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400'
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