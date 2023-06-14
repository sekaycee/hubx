import React from 'react'
import Newsletter from '../slices/newsletter'

const Intro = () => {
  const links = [
    { name: 'Open roles', href: '/company/jobs' },
    { name: 'Internship program', href: '/services/career' },
    { name: 'Our values', href: '/about/us' },
    { name: 'Meet our leadership', href: '/company/team' },
  ]
  const stats = [
    { name: 'Offices worldwide', value: '7' },
    { name: 'Full-time colleagues', value: '30+' },
    { name: 'Hours per week', value: '70' },
    { name: 'Paid time off', value: '2 months' },
  ]

  const content = (
    <main>
      <section className='py-28' style={{ background: 'linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.17) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)' }}>
        <div className='max-w-screen-xl mx-auto px-4 md:text-center md:px-8'>
          <div className='max-w-xl space-y-3 md:mx-auto'>
            <h3 className='text-indigo-600 font-semibold'>
              Get to know us
            </h3>
            <p className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
              For an exciting collaboration
            </p>
            <p className='text-gray-600'>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
          <div className='mt-4'>
            <a href='javascript:void(0)' className='inline-block py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none'>
              Get started
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className='relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32'>
          <img
            src='https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply'
            alt='Hubx'
            className='absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center'
          />
          <div
            className='hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl'
            aria-hidden='true'
          >
            <div
              className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20'
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div
            className='absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu'
            aria-hidden='true'
          >
            <div
              className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20'
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl lg:mx-0'>
              <h2 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>Work with us</h2>
              <p className='mt-6 text-lg leading-8 text-gray-300'>
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua.
              </p>
            </div>
            <div className='mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none'>
              <div className='grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10'>
                {links.map((link) => (
                  <a key={link.name} href={link.href}>
                    {link.name} <span aria-hidden='true'>&rarr;</span>
                  </a>
                ))}
              </div>
              <dl className='mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4'>
                {stats.map((stat) => (
                  <div key={stat.name} className='flex flex-col-reverse'>
                    <dt className='text-base leading-7 text-gray-300'>{stat.name}</dt>
                    <dd className='text-2xl font-bold leading-9 tracking-tight text-white'>{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
    </main>
  )
  return content
}

export default Intro





