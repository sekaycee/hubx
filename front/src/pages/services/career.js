import React from 'react'
import JobSnip from '../slices/job'
import Newsletter from '../slices/newsletter'
import { SITEMAP } from '../config/sitemap'

const Career = () => {
  const services = [
    { title: 'Job openings', desc: '...', url: 'jobs' },
    { title: 'Proofreading and Editing', desc: '...', url: 'proofreading' },
    { title: 'CV or Resume check', desc: '...', url: 'cv-check' },
    { title: 'Presentation review', desc: '...', url: 'presentation' },
    { title: 'Translation', desc: '...', url: 'translation' },
    { title: 'Conciarge', desc: '...', url: 'conciarge' },
    { title: 'Accommodation', desc: '...', url: 'accommodation' },
    { title: 'Content writing', desc: '...', url: 'writing' }
  ]
  const insights = [
    { id: 1, title: 'Build killer resumes', summary: '...', image: 'https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500', slug: '' },
    { id: 2, title: 'What is a presentation review?', summary: '...', image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260', slug: '' },
    { id: 3, title: 'How to form remote teams', summary: '...', image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260', slug: '' },
    { id: 4, title: 'Ace that interview!', summary: '...', image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260', slug: '' }
  ]
  const sitemap = SITEMAP

  const content = (
    <main>
      <section className='py-36' style={{ background: 'linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.17) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)' }}>
        <div className='max-w-screen-xl mx-auto px-4 md:text-center md:px-8'>
          <div className='max-w-xl space-y-3 md:mx-auto'>
            <h3 className='text-blue-600 font-semibold'>
              Professional career services
            </h3>
            <p className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
              Build your future with us
            </p>
            <p className='text-gray-600'>
              Get outstanding orientation to help you effectively navigate the challenges of your career goals.
              With our dedicated team of awesome agents and talents, we've got you covered.
            </p>
          </div>
          <div className='mt-4'>
            <a href='/register' className='inline-block py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none'>
              Get started
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className='bg-gray-100'>
          <div className='relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <div className='absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0'>
              <svg
                viewBox='0 0 88 88'
                className='w-full max-w-screen-xl text-blue-200'
              >
                <circle fill='currentColor' cx='44' cy='44' r='15.5' />
                <circle
                  fillOpacity='0.2'
                  fill='currentColor'
                  cx='44'
                  cy='44'
                  r='44'
                />
                <circle
                  fillOpacity='0.2'
                  fill='currentColor'
                  cx='44'
                  cy='44'
                  r='37.5'
                />
                <circle
                  fillOpacity='0.3'
                  fill='currentColor'
                  cx='44'
                  cy='44'
                  r='29.5'
                />
                <circle
                  fillOpacity='0.3'
                  fill='currentColor'
                  cx='44'
                  cy='44'
                  r='22.5'
                />
              </svg>
            </div>
            <div className='relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
              {services.map((s, idx) => (
                <a key={idx} href={'/services/' + s.url}>
                  <div className='flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl'>
                    <div className='p-5'>
                      <div className='flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-blue-50'>
                        <svg
                          className='w-8 h-8 text-blue-600'
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
                      <p className='mb-2 font-bold'>{s.title}</p>
                      <p className='text-sm leading-5 text-gray-900'>{s.desc}</p>
                    </div>
                    <div className='w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-blue-600 group-hover:scale-x-100' />
                  </div>
                </a>
                
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='p-4 md:px-8 my-36 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl'>
          <JobSnip />
        </div>
      </section>

      <section>
        <div className='px-8 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:py-20'>
          <div className='sm:text-center my-16'>
            <p className='inline-block px-3 py-px mb-10 text-xs font-semibold uppercase md:mb-2 tracking-wider text-blue-900 rounded-full bg-blue-100'>
              Career insights
            </p>
          </div>
          <div className='flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8'>
            <h2 className='max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group'>
              <span className='inline-block mb-1 sm:mb-4'>
                View insights from our pool
                <br className='hidden md:block' />
                related to career services.
              </span>
              <div className='h-1 ml-auto duration-300 origin-left transform bg-blue-600 scale-x-30 group-hover:scale-x-100' />
            </h2>
            <p className='text-gray-700 lg:text-sm lg:max-w-md'>
              They say 'Knowledge is power'. So from our insights, we intend to arm you with the ability to glean free yet important elements, to solve the challenges you encounter in your career adventure. With this and our service offerings you'll be well-positioned to succeed, if not now then most definitely in the near-future.
            </p>
          </div>
          <div className='grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2'>
            {insights.map((i) => (
              <a href='/' aria-label='View Item' key={i.id}>
                <div className='relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
                  <img
                    className='object-cover w-full h-56 md:h-64 xl:h-80'
                    src={i.image}
                    alt={i.title}
                  />
                  <div className='absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100'>
                    <p className='mb-4 text-lg font-bold text-gray-100'>{i.title}</p>
                    <p className='text-sm tracking-wide text-gray-300'>{i.summary}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className='text-center'>
            <a
              href='/blog/'
              aria-label=''
              className='inline-flex items-center font-semibold transition-colors duration-200 text-blue-600 hover:text-blue-800'
            >
              See more
              <svg
                className='inline-block w-3 ml-2'
                fill='currentColor'
                viewBox='0 0 12 12'
              >
                <path d='M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z' />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section>
        <div>
          <div className='flex flex-col px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 lg:flex-row'>
            <div className='mb-5 lg:w-1/3 lg:mb-0 lg:mr-20'>
              <h2 className='relative mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
                <span className='relative inline-block'>
                  <svg
                    viewBox='0 0 52 24'
                    fill='currentColor'
                    className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-700 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
                  >
                    <defs>
                      <pattern
                        id='6bfa0e57-faa2-4bb2-ac0e-310782e5eb2d'
                        x='0'
                        y='0'
                        width='.135'
                        height='.30'
                      >
                        <circle cx='1' cy='1' r='.7' />
                      </pattern>
                    </defs>
                    <rect
                      fill='url(#6bfa0e57-faa2-4bb2-ac0e-310782e5eb2d)'
                      width='52'
                      height='24'
                    />
                  </svg>
                  <span className='relative'>Our</span>
                </span>{' '}
                sitemap
              </h2>
              <p className='mb-4 text-gray-900 lg:mb-6'>
                Get instant access to important links across the site.
              </p>
              <a
                href='/sitemap'
                aria-label=''
                className='inline-flex items-center font-semibold transition-colors duration-200 text-blue-600 hover:text-deep-purple-800'
              >
                Learn more
                <svg
                  className='inline-block w-3 ml-2'
                  fill='currentColor'
                  viewBox='0 0 12 12'
                >
                  <path d='M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z' />
                </svg>
              </a>
            </div>
            <div className='flex-grow pt-1'>
              <div className='flex items-center mb-3'>
                <span className='font-bold tracking-wide text-gray-900'>
                  Important links
                </span>
                <span className='ml-1'>
                  <svg
                    className='w-5 h-5 mt-px text-blue-600'
                    stroke='currentColor'
                    viewBox='0 0 52 52'
                  >
                    <polygon
                      strokeWidth='4'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      fill='none'
                      points='29 13 14 29 25 29 23 39 38 23 27 23'
                    />
                  </svg>
                </span>
              </div>
              <div>
                <ul className='grid grid-cols-2 gap-3 sm:grid-cols-4'>
                  {sitemap.map((s, idx) => (
                    <li key={idx} className='col-span-1'>
                      <a href={s.url} className='transition-colors duration-300 hover:text-blue-700'>{s.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className='relative'>
            <img
              className='object-cover w-full h-56 sm:h-96'
              src='https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
              alt=''
            />
            <div className='absolute inset-0 bg-gray-900 bg-opacity-50' />
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  )
  return content
}

export default Career