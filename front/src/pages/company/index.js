import { useState } from 'react'
import Affiliates from './affiliates'
import Investors from './investors'
import Jobs from './jobs'
import Podcast from './podcast'
import Team from './team'
//import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Trusted',
    icon:
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='w-5 h-5'>
        <path fillRule='evenodd' d='M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z' clipRule='evenodd' />
      </svg>
  },
  {
    name: 'Over 50+ videos',
    icon:
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='w-5 h-5'>
        <path fillRule='evenodd' d='M1 4.75C1 3.784 1.784 3 2.75 3h14.5c.966 0 1.75.784 1.75 1.75v10.515a1.75 1.75 0 01-1.75 1.75h-1.5c-.078 0-.155-.005-.23-.015H4.48c-.075.01-.152.015-.23.015h-1.5A1.75 1.75 0 011 15.265V4.75zm16.5 7.385V11.01a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .138.112.25.25.25h1.5a.25.25 0 00.25-.25zm0 2.005a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .108.069.2.165.235h1.585a.25.25 0 00.25-.25v-1.11zm-15 1.11v-1.11a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25v1.125a.25.25 0 01-.164.235H2.75a.25.25 0 01-.25-.25zm2-4.24v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V11.01a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25zm13-2.005V7.88a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .138.112.25.25.25h1.5a.25.25 0 00.25-.25zM4.25 7.63a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V7.88a.25.25 0 01.25-.25h1.5zm0-3.13a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V4.75a.25.25 0 01.25-.25h1.5zm11.5 1.625a.25.25 0 01-.25-.25V4.75a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5zm-9 3.125a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z' clipRule='evenodd' />
      </svg>
  },
  {
    name: '400 ratings',
    icon:
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='w-5 h-5'>
        <path fillRule='evenodd' d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z' clipRule='evenodd' />
      </svg>
  }
]

const stats = [
  {
      data: '30',
      title: 'People'
  },
  {
      data: '1000+',
      title: 'Projects'
  },
  {
      data: '500+',
      title: 'Customers'
  },
  {
      data: 'A couple',
      title: 'Coffee breaks'
  },
]

const Company = () => {
  return (
    <main className='mx-auto max-w-screen-2xl px-4 md:px-8'>
      <section className='my-24'>
        <div class="relative overflow-hidden">
          <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div class="max-w-2xl text-center mx-auto">
              <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl dark:text-white">Designed for you to get more <span class="text-blue-600">efficient</span></h1>
              <p class="mt-3 text-lg text-gray-800 dark:text-gray-400">Explore in-demand careers and develop cutting edge skills.</p>
            </div>

            <div class="mt-10 relative max-w-5xl mx-auto">
              <div class="w-full object-cover h-96 sm:h-[480px] bg-[url('https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80')] bg-no-repeat bg-center bg-cover rounded-xl"></div>

              <div class="absolute inset-0 w-full h-full">
                <div class="flex flex-col justify-center items-center w-full h-full">
                  <a class="inline-flex justify-center items-center gap-x-1.5 text-center text-sm bg-white text-gray-800 hover:text-gray-600 rounded-full transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:bg-black dark:text-gray-200 dark:hover:text-gray-400 dark:focus:ring-offset-black" href="#">
                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
                    </svg>
                    Play the overview
                  </a>
                </div>
              </div>

              <div class="absolute bottom-12 -left-20 -z-[1] w-48 h-48 bg-gradient-to-b from-orange-500 to-white p-px rounded-lg dark:to-slate-900">
                <div class="bg-white w-48 h-48 rounded-lg dark:bg-slate-900"></div>
              </div>

              <div class="absolute -top-12 -right-20 -z-[1] w-48 h-48 bg-gradient-to-t from-blue-600 to-cyan-400 p-px rounded-full">
                <div class="bg-white w-48 h-48 rounded-full dark:bg-slate-900"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-14'>
        <div className='max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex md:px-8'>
          <div className='sm:hidden lg:block lg:max-w-xl'>
            <img src='https://images.unsplash.com/photo-1622675363311-3e1904dc1885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' className='rounded-lg' alt='' />
          </div>
          <div className='mt-6 gap-12 sm:mt-0 md:flex lg:block'>
            <div className='max-w-2xl'>
              <h3 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
                We do our best to make customers always happy
              </h3>
              <p className='mt-3 max-w-xl'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis sollicitudin quam ut tincidunt.
              </p>
            </div>
            <div className='flex-none mt-6 md:mt-0 lg:mt-6'>
              <ul className='inline-grid gap-y-8 gap-x-14 grid-cols-2'>
                {
                  stats.map((item, idx) => (
                    <li key={idx} className=''>
                      <h4 className='text-4xl text-blue-600 font-semibold'>{item.data}</h4>
                      <p className='mt-3 font-medium'>{item.title}</p>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
          <div className='lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center'>
            <div className='lg:col-span-7'>
              <div className='grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10'>
                <div className='col-span-4'>
                  <img className='rounded-xl' src='https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80' alt='Image Description' />
                </div>

                <div className='col-span-3'>
                  <img className='rounded-xl' src='https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80' alt='Image Description' />
                </div>

                <div className='col-span-5'>
                  <img className='rounded-xl' src='https://images.unsplash.com/photo-1600194992440-50b26e0a0309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80' alt='Image Description' />
                </div>
              </div>
            </div>

            <div className='mt-5 sm:mt-10 lg:mt-0 lg:col-span-5'>
              <div className='space-y-6 sm:space-y-8'>
                <div className='space-y-2 md:space-y-4'>
                  <h2 className='font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200'>
                    Collaborative tools to design user experience
                  </h2>
                  <p className='text-gray-500'>
                    Use our tools to explore your ideas and make your vision come true. Then share your work easily.
                  </p>
                </div>

                <ul role='list' className='space-y-2 sm:space-y-4'>
                  <li className='flex space-x-3'>
                    <svg className='flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500' width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z' fill='currentColor' fill-opacity='0.1'/>
                      <path d='M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z' fill='currentColor'/>
                    </svg>

                    <span className='text-sm sm:text-base text-gray-500'>
                      <span className='font-bold'>Less routine</span> – more creativity
                    </span>
                  </li>

                  <li className='flex space-x-3'>
                    <svg className='flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500' width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z' fill='currentColor' fill-opacity='0.1'/>
                      <path d='M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z' fill='currentColor'/>
                    </svg>

                    <span className='text-sm sm:text-base text-gray-500'>
                      Hundreds of thousands saved
                    </span>
                  </li>

                  <li className='flex space-x-3'>
                    <svg className='flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500' width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z' fill='currentColor' fill-opacity='0.1'/>
                      <path d='M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z' fill='currentColor'/>
                    </svg>

                    <span className='text-sm sm:text-base text-gray-500'>
                      Scale budgets <span className='font-bold'>efficiently</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export { Company, Affiliates, Investors, Jobs, Podcast, Team }