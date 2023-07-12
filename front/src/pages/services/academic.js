import React from 'react'
import Newsletter from '../slices/newsletter'
import ScholarshipSnip from '../slices/scholarship'

const Academic = () => {
  const content = (
    <main>
      <section className='py-36' style={{ background: 'linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.17) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)' }}>
        <div className='max-w-screen-xl mx-auto px-4 md:text-center md:px-8'>
          <div className='max-w-xl space-y-3 md:mx-auto'>
            <h3 className='text-blue-600 font-semibold'>
              Professional academic services
            </h3>
            <p className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
              Build your future with us
            </p>
            <p className='text-gray-600'>
              Get outstanding help with our academic-oriented services, sure to benefit your scholarly pursuits.
              With our dedicated team of incredible agents and talents, we've got you covered.
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
        <div className='p-4 md:px-8 my-36 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl'>
          <ScholarshipSnip />
        </div>
      </section>

      <Newsletter />
    </main>
  )
  return content
}

export default Academic