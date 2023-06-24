import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { React } from 'react'

const Newsletter = () => {
  const subscribe = (e) => {
    e.target.preventDefault()
  }

  const content = (
    <section className='py-28 relative'>
      <div className='relative z-10 max-w-screen-xl mx-auto px-4 justify-between items-center gap-12 md:px-8 md:flex'>
        <div className='flex-1 max-w-lg'>
          <h3 className='text-3xl font-bold'>
            Get our beautiful newsletter straight to your inbox.
          </h3>
        </div>
        <div className='flex-1 mt-6 md:mt-0'>
          <form onSubmit={subscribe} className='flex items-center gap-x-3 md:justify-end'>
            <div className='relative'>
              <EnvelopeIcon className='w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto' />
              <input
                name='email'
                type='email'
                required
                autoComplete='email'
                placeholder='Enter your email'
                className='w-full pl-12 pr-3 py-2 text-gray-500 bg-white outline-2 border focus:border-blue-600 shadow-sm rounded-lg'
              />
            </div>
            <button className='block rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className='absolute inset-0 w-full h-full' style={{ background: 'linear-gradient(137.92deg, rgba(192, 132, 252, 0) 20.43%, rgba(232, 121, 249, 0.26) 49.66%, rgba(204, 171, 238, 0) 92.38%)' }}></div>
    </section>
  )
  return content
}

export default Newsletter