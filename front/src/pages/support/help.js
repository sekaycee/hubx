import React from 'react'
import Newsletter from '../slices/newsletter'
import FeaturesSix from '../../partials/common/FeaturesSix'
import { Question } from 'react-bootstrap-icons'

const Card = ({url, title}) => {
  return (
    <div className='flex items-center p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-110 hover:text-blue-600'>
      <div className='mr-2'>
        <svg
          className='w-6 h-6 text-deep-purple-accent-400 sm:w-8 sm:h-8'
          stroke='currentColor'
          viewBox='0 0 52 52'
        >
          <polygon
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
            fill='none'
            points='29 13 14 29 25 29 23 39 38 23 27 23'
          />
        </svg>
      </div>
      <span>
        <a href={url}>{title}</a>
      </span>
    </div>
  )
}

const Help = () => {
  const elements = [
    {id: 1, icon: '', title: 'Getting started', count: 12, href: '/'},
    {id: 2, icon: '', title: 'Your profile', count: 18, href: '/'},
    {id: 3, icon: '', title: 'Project management', count: 20, href: '/'},
    {id: 4, icon: '', title: 'Payments', count: 14, href: '/'},
    {id: 5, icon: '', title: 'Billing & Accounts', count: 8, href: '/'},
    {id: 6, icon: '', title: 'Support', count: 7, href: '/'}
  ]
  const links = [
    {title: 'Change the world by being yourself.', href: '/'},
    {title: 'Die with memories, not dreams.', href: '/'},
    {title: 'What we think, we become.', href: '/'},
    {title: 'Be so good they can’t ignore you.', href: '/'},
    {title: 'Simplicity is the ultimate sophistication.', href: '/'},
    {title: 'Yesterday you said tomorrow. Just do it today.', href: '/'},
  ]

  const content = (
    <main>
      <section className='mt-[5rem]'>
        <div className='relative overflow-hidden'>
          <div className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24'>
            <div className='text-center'>
              <h1 className='text-4xl sm:text-6xl font-bold text-gray-800 dark:text-gray-200'>
                How can we help?
              </h1>

              <div className='mt-7 sm:mt-12 mx-auto max-w-3xl relative font-medium'>
                <form>
                  <div className='relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-900/[.2]'>
                    <div className='flex-[1_0_0%]'>
                      <label for='help' className='block text-sm text-gray-700 font-medium dark:text-white'><span className='sr-only'>Search for answers</span></label>
                      <input type='email' name='help' id='help' className='p-2.5 block w-full border-transparent rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-400' placeholder='Search for answer' />
                    </div>
                    <div className='flex-[0_0_auto]'>
                      <a className='p-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800' href='/'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke-width='1.5'
                          stroke='currentColor'
                          className='h-5 w-5'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </form>
                <div className='mt-1 text-gray-700'>
                  <span className='text-sm'>
                    Common searches include: funding, research proposals, quote
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mt-[5rem]'>
        <div className='text-center'>
          <h2 className='text-4xl'>Explore our Knowledge Base</h2>
        </div>
        <div className='px-4 py-16 mx-auto max-w-4xl md:px-24 lg:px-8 lg:py-20'>
          <div className='grid gap-8 row-gap-5 lg:grid-cols-3 md:grid-cols-2'>
            {
              elements.map(el => (
                <FeaturesSix key={el.id} title={el.title} count={el.count} icon={el.icon} url={el.href} />
              ))
            }
          </div>
        </div>
      </section>

      <section>
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
          <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
            <div>
              <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-blue-900 uppercase rounded-full bg-blue-100'>
                Get help with our
              </p>
            </div>
            <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
              <span className='relative inline-block'>
                <svg
                  viewBox='0 0 52 24'
                  fill='currentColor'
                  className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
                >
                  <defs>
                    <pattern
                      id='a0b40128-6963-4319-aeeb-471e92fa2d74'
                      x='0'
                      y='0'
                      width='.135'
                      height='.30'
                    >
                      <circle cx='1' cy='1' r='.7' />
                    </pattern>
                  </defs>
                  <rect
                    fill='url(#a0b40128-6963-4319-aeeb-471e92fa2d74)'
                    width='52'
                    height='24'
                  />
                </svg>
                <span className='relative'>Featured</span>
              </span>{' '}
              <span className='text-blue-600'>articles</span>
            </h2>
            <p className='text-base text-gray-700 md:text-lg'>
              To help you get started on your passionate quest to have your interest in our service
              offerings sated and your academic and|or professional needs met.
            </p>
          </div>
          <div className='max-w-lg space-y-3 sm:mx-auto lg:max-w-xl'>
            { links.map((link, idx) => (<Card key={idx} title={link.title} url={link.href} />)) }
          </div>
        </div>
      </section>

      <section>
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
          <div className='grid gap-10 lg:grid-cols-2'>
            <div className='lg:pr-10'>
              <a
                href='/'
                aria-label='Go Home'
                title='Logo'
                className='inline-block mb-5'
              >
                <div className='flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50'>
                  <Question size={40} />
                </div>
              </a>
              <h5 className='mb-4 text-4xl font-extrabold leading-none'>
                Can't find what
                <br className='hidden md:block' />
                you are{' '}
                <span className='inline-block text-blue-600'>
                  looking for
                </span>?
              </h5>
              <div className='my-9'>
                <a
                  href='/contact'
                  className='rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                >
                  Contact us
                </a>
              </div>
              <hr className='mb-5 border-gray-300' />
              <div className='flex items-center space-x-4'>
                <a
                  href='/'
                  className='text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400'
                >
                  <svg viewBox='0 0 24 24' fill='currentColor' className='h-5'>
                    <path d='M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z' />
                  </svg>
                </a>
                <a
                  href='/'
                  className='text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400'
                >
                  <svg viewBox='0 0 30 30' fill='currentColor' className='h-6'>
                    <circle cx='15' cy='15' r='4' />
                    <path d='M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z' />
                  </svg>
                </a>
                <a
                  href='/'
                  className='text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400'
                >
                  <svg viewBox='0 0 24 24' fill='currentColor' className='h-5'>
                    <path d='M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z' />
                  </svg>
                </a>
                <a
                  href='/'
                  className='text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400'
                >
                  <svg viewBox='0 0 24 24' fill='currentColor' className='h-6'>
                    <path d='M23.8,7.2c0,0-0.2-1.7-1-2.4c-0.9-1-1.9-1-2.4-1C17,3.6,12,3.6,12,3.6h0c0,0-5,0-8.4,0.2 c-0.5,0.1-1.5,0.1-2.4,1c-0.7,0.7-1,2.4-1,2.4S0,9.1,0,11.1v1.8c0,1.9,0.2,3.9,0.2,3.9s0.2,1.7,1,2.4c0.9,1,2.1,0.9,2.6,1 c1.9,0.2,8.2,0.2,8.2,0.2s5,0,8.4-0.3c0.5-0.1,1.5-0.1,2.4-1c0.7-0.7,1-2.4,1-2.4s0.2-1.9,0.2-3.9v-1.8C24,9.1,23.8,7.2,23.8,7.2z M9.5,15.1l0-6.7l6.5,3.4L9.5,15.1z' />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <img
                className='object-cover w-full h-56 rounded shadow-lg sm:h-96'
                src='https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260'
                alt=''
              />
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  )
  return content
}

export default Help