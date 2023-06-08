import { React } from 'react'

const Home = () => {
  const content = (
    <main>
      <section className='relative isolate px-6 pt-14 lg:px-8'>
        <div className='mx-auto max-w-2xl py-24 sm:py-48 lg:py-56'>
          <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
            <div className='relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
              Announcing our next round of funding.{' '}
              <a href='/blog/funding' className='font-semibold text-blue-600'>
                <span className='absolute inset-0' aria-hidden='true' />
                Read more <span aria-hidden='true'>&rarr;</span>
              </a>
            </div>
          </div>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
              Connecting you to your goals
            </h1>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              A tech-enabled consulting firm for students worldwide. First hand counselling to gain admissions, scholarships, jobs, accomodation and much more.
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <a
                href='/register'
                className='rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
              >
                Get started
              </a>
              <a href='/services' className='text-sm font-semibold leading-6 text-gray-900 hover:text-blue-700'>
                Learn more <span aria-hidden='true'>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='grid gap-10 lg:grid-cols-2'>
          <div className='flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg'>
            <div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-100'>
              <svg className='text-blue-700 w-7 h-7' viewBox='0 0 24 24'>
                <polyline
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeMiterlimit='10'
                  points=' 8,5 8,1 16,1 16,5'
                  strokeLinejoin='round'
                />
                <polyline
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeMiterlimit='10'
                  points='9,15 1,15 1,5 23,5 23,15 15,15'
                  strokeLinejoin='round'
                />
                <polyline
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeMiterlimit='10'
                  points='22,18 22,23 2,23 2,18'
                  strokeLinejoin='round'
                />
                <rect
                  x='9'
                  y='13'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeMiterlimit='10'
                  width='6'
                  height='4'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
            <div className='max-w-xl mb-6'>
              <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
                Need help applying for
                <br className='hidden md:block' />
                {' '}an{' '}
                <span className='inline-block text-blue-700'>
                  admission or job abroad?
                </span>
              </h2>
              <p className='text-base text-gray-700 md:text-lg'>
                We've got you covered. 
                Our team of past and present international students and professionals 
                can help you today.
              </p>
            </div>
            <div>
              <a
                href='/about/contact'
                className='rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
              >
                Connect with us
              </a>
              <a
                href='/services/application' className='text-sm font-semibold leading-6 text-gray-900 ml-5 hover:text-blue-700'>
                Learn more <span aria-hidden='true'>→</span>
              </a>
            </div>
          </div>
          <div className='flex items-center justify-center -mx-4 lg:pl-8'>
            <div className='flex flex-col items-end px-3'>
              <img
                className='object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56'
                src='https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
                alt=''
              />
              <img
                className='object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40'
                src='https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
                alt=''
              />
            </div>
            <div className='px-3'>
              <img
                className='object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80'
                src='https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500'
                alt=''
              />
            </div>
          </div>
        </div>
      </section>

      <section className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
          <div>
            <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-blue-900 uppercase rounded-full bg-blue-100'>
              Service deliverables
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
                    id='d9d7687a-355f-4502-8ec4-7945db034688'
                    x='0'
                    y='0'
                    width='.135'
                    height='.30'
                  >
                    <circle cx='1' cy='1' r='.7' />
                  </pattern>
                </defs>
                <rect
                  fill='url(#d9d7687a-355f-4502-8ec4-7945db034688)'
                  width='52'
                  height='24'
                />
              </svg>
              <span className='relative'>Why</span>
            </span>{' '}
            <span className='inline-block text-blue-700'>choose us?</span>
          </h2>
          <p className='text-base text-gray-700 md:text-lg'>
            We believe there's no love or hate without reason, as such
            we've got some compelling reasons for you to love and work with us
          </p>
        </div>
        <div className='grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3'>
          <div className='p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2'>
            <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50'>
              <svg
                className='w-10 h-10 text-deep-purple-accent-400'
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
            <h6 className='mb-2 font-semibold leading-5'>Custom solutions</h6>
            <p className='text-sm text-gray-900'>
              Our solutions for our customers are customized 
              to suit the customer's need for maximum efficiency and support.
            </p>
          </div>
          <div className='p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2'>
            <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50'>
              <svg
                className='w-10 h-10 text-deep-purple-accent-400'
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
            <h6 className='mb-2 font-semibold leading-5'>Reliable information</h6>
            <p className='text-sm text-gray-900'>
              We constantly research the most recent information 
              for your needs to provide high quality and trustworthy service to you.
            </p>
          </div>
          <div className='p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2'>
            <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50'>
              <svg
                className='w-10 h-10 text-deep-purple-accent-400'
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
            <h6 className='mb-2 font-semibold leading-5'>Effective support</h6>
            <p className='text-sm text-gray-900'>
              We have a high response rate to customer enquiries 
              and we are always on-call to fulfill your service requirements.
            </p>
          </div>
          <div className='p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2'>
            <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50'>
              <svg
                className='w-10 h-10 text-deep-purple-accent-400'
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
            <h6 className='mb-2 font-semibold leading-5'>Proven guidelines</h6>
            <p className='text-sm text-gray-900'>
              Our team consist of individuals who successfully underwent the process, 
              proving its effectiveness. As such you are in great hands.
            </p>
          </div>
          <div className='p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2'>
            <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50'>
              <svg
                className='w-10 h-10 text-deep-purple-accent-400'
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
            <h6 className='mb-2 font-semibold leading-5'>Great network</h6>
            <p className='text-sm text-gray-900'>
              We provide you with networking opportunities, 
              allowing you to form significant connections to boost your prospects.
            </p>
          </div>
          <div className='p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2'>
            <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50'>
              <svg
                className='w-10 h-10 text-deep-purple-accent-400'
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
            <h6 className='mb-2 font-semibold leading-5'>Quality service</h6>
            <p className='text-sm text-gray-900'>
              We have a meticulous time-tested process, 
              that enables us provide you the best service towards achiving your goal.
            </p>
          </div>
        </div>
        <div className='text-center'>
          <a
            href='/services'
            className='rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
          >
            Learn more
          </a>
        </div>
      </section>

      <section className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='max-w-xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-2xl'>
          <p className='mb-1 text-xs font-semibold tracking-wide uppercase md:mb-2'>
            Popular Services
          </p>
          <p className='text-base text-gray-700 md:text-lg'>
            We've carefully curated the most popular services on offer.
            You can check them out and if they're in line with your needs, 
            you can register and create a project.
          </p>
        </div>
        <div className='grid gap-6 row-gap-5 lg:grid-cols-3'>
          <div>
            <img
              className='object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96'
              src='https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500'
              alt=''
            />
            <h5 className='mb-2 text-xl font-bold leading-none sm:text-2xl'>
              University Admission
            </h5>
            <p className='text-gray-700'>
              We offer counseling for unviersity options tailored to you and 
              help you gain admission (paid/scholarship) to any university of your choice.
            </p>
            <div className='mt-2'>
              <a href='/services' className='text-sm font-semibold leading-6 text-gray-900 hover:text-blue-700'>
                Learn more <span aria-hidden='true'>→</span>
              </a>
            </div>
          </div>
          <div>
            <img
              className='object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96'
              src='https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
              alt=''
            />
            <h5 className='mb-2 text-xl font-bold leading-none sm:text-2xl'>
              Work Abroad
            </h5>
            <p className='text-gray-700'>
              We offer counseling on job opportunities based on your qualifications and 
              help you through your application process.
            </p>
            <div className='mt-2'>
              <a href='/services' className='text-sm font-semibold leading-6 text-gray-900 hover:text-blue-700'>
                Learn more <span aria-hidden='true'>→</span>
              </a>
            </div>
          </div>
          <div>
            <img
              className='object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96'
              src='https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
              alt=''
            />
            <h5 className='mb-2 text-xl font-bold leading-none sm:text-2xl'>
              Accommodation Acquisition
            </h5>
            <p className='text-gray-700'>
              We provide guidance on affordable accomodation strategies and help you secure an accomodation for the duration of your studies.
            </p>
            <div className='mt-2'>
              <a href='/services' className='text-sm font-semibold leading-6 text-gray-900 hover:text-blue-700'>
                Learn more <span aria-hidden='true'>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='max-w-screen-sm sm:text-center sm:mx-auto'>
          <a
            href='/'
            aria-label='View'
            className='inline-block mb-5 rounded-full sm:mx-auto'
          >
            <div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50'>
              <svg
                className='w-12 h-12 text-deep-purple-accent-400'
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
          </a>
          <h2 className='mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
            Still unsure where to start?
          </h2>
          <p className='text-base text-gray-700 md:text-lg sm:px-4'>
            We are available for a free 15 minutes consultation to help you get started.
          </p>
          <hr className='w-full my-8 border-gray-300' />
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <a
              href='/about/contact'
              className='rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>
    </main>
  )
  return content
}

export default Home