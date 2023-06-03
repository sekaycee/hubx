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
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' fill='currentColor' className='flex-shrink-0 w-5 h-5 rounded-full dark:text-blue-700'>
              <path d='M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z'></path>
            </svg>
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
            <div class='text-xs font-semibold text-gray-800 tracking-wide uppercase'>Category</div>
            <a href='/services/' class='block mt-4 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              Graphic Design
            </a>
            <a href='/services/' class='block mt-3 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              Digital Marketing
            </a>
            <a href='/services/' class='block mt-3 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              Writing and Translation
            </a>
            <a href='/services/' class='block mt-3 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              Programming
            </a>
            <a href='/services/' class='block mt-3 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              Consultation
            </a>
            <a href='/services/' class='block mt-3 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              Mentorship
            </a>
            <a href='/services/' class='block mt-3 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              Photography
            </a>
          </div>
          <div>
            <div class='text-xs font-semibold text-gray-800 tracking-wide uppercase'>About</div>
            <a href='/about/intro' class='block mt-4 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              Introduction
            </a>
            <a href='/about/press' class='block mt-3 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              Press
            </a>
            <a href='/about/jobs' class='block mt-3 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              Careers
            </a>
            <a href='/about/license' class='block mt-3 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              Licensing
            </a>
            <a href='/about/privacy' class='block mt-3 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              Privacy Policy
            </a>
            <a href='/about/terms' class='block mt-3 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              Terms and Conditions
            </a>
          </div>
          <div>
            <div class='text-xs font-semibold text-gray-800 tracking-wide uppercase'>Support</div>
            <a href='/support/' class='block mt-4 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              Help
            </a>
            <a href='/support/' class='block mt-3 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              Trust and Safety
            </a>
            <a href='/support/' class='block mt-3 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              FAQs
            </a>
            <a href='/support/' class='block mt-3 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              Inquiries
            </a>
            <a href='/support/' class='block mt-3 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              How Tos
            </a>
          </div>
          <div>
            <div class='text-xs font-semibold text-gray-800 tracking-wide uppercase'>Company</div>
            <a href='/company/' class='block mt-4 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              Leadership
            </a>
            <a href='/company/' class='block mt-3 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              Investors
            </a>
            <a href='/company/' class='block mt-3 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              Affiliates
            </a>
            <a href='/company/' class='block mt-3 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
              Our Impact
            </a>
            <a href='/company/' class='block mt-3 text-sm font-medium text-gray-600 duration-300 hover:text-deep-purple-accent-400'>
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