import React from 'react'
import Sitemap from '../slices/sitemap'
import HeroSnip from '../slices/heroSnip'
import Newsletter from '../slices/newsletter'
import ScholarshipSnip from '../slices/scholarship'
import ServiceInsights from '../slices/serviceInsights'

const Academic = () => {
  const info = {
    title: 'Professional academic services',
    tagline: 'Build your future with us',
    desc: 'Get outstanding help with our academic-oriented services, sure to benefit your scholarly pursuits.\nWith our dedicated team of incredible agents and talents, we\'ve got you covered.'
  }
  const services = [
    { title: 'Scholarship awards', desc: '...', url: 'scholarships' },
    { title: 'Proofreading and Editing', desc: '...', url: 'proofreading' },
    { title: 'CV or Resume check', desc: '...', url: 'cv-check' },
    { title: 'Presentation review', desc: '...', url: 'presentation' },
    { title: 'Translation', desc: '...', url: 'translation' },
    { title: 'Conciarge', desc: '...', url: 'conciarge' },
    { title: 'Accommodation', desc: '...', url: 'accommodation' },
    { title: 'Content writing', desc: '...', url: 'writing' }
  ]
  const insights = [
    { id: 1, title: 'Build effective research proposals', summary: '...', image: 'https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500', slug: '' },
    { id: 2, title: 'Processed your visa yet?', summary: '...', image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260', slug: '' },
    { id: 3, title: 'How to apply for admissions', summary: '...', image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260', slug: '' },
    { id: 4, title: 'Get that scholarship!', summary: '...', image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260', slug: '' }
  ]

  const content = (
    <main>
      <section>
        <HeroSnip hero={info} />
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
          <ScholarshipSnip />
        </div>
      </section>

      <section>
        <div className='px-8 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:py-20'>
          <div className='sm:text-center my-16'>
            <p className='inline-block px-3 py-px mb-10 text-xs font-semibold uppercase md:mb-2 tracking-wider text-blue-900 rounded-full bg-blue-100'>
              Career insights
            </p>
          </div>
          <ServiceInsights title='academic' insights={insights} />
        </div>
      </section>

      <section>
        <Sitemap />
      </section>

      <Newsletter />
    </main>
  )
  return content
}

export default Academic