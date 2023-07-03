import Newsletter from '../slices/newsletter'
import InstantQuote from '../slices/quote'
import Academic from './academic'
import Accommodation from './accommodation'
import Career from './career'
import Conciarge from './conciarge'
import Consultation from './consultation'
import CVCheck from './cvCheck'
import Design from './design'
import DigitalMarketing from './digitalMarketing'
import Mentorship from './mentorship'
import Photography from './photography'
import Programming from './programming'
import Proofreading from './proofreading'
import Translation from './translation'
import Writing from './writing'

const Service = () => {
  const content = (
    <main>
      <section id='quote' className='mt-[10rem] mb-[5rem] grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <aside className=''>
          <InstantQuote />
        </aside>
        
        <div className='relative ml-4'>
          <img className='w-full rounded-md' src='https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&h=800&q=80' alt='Services' />
          <div className='absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 mr-4 -ml-4 lg:mt-6 lg:-mb-6 lg:mr-6 lg:-ml-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0'></div>

          <div className='absolute bottom-0 left-0'>
            <svg className='w-2/3 ml-auto h-auto text-white dark:text-slate-900' width='630' height='451' viewBox='0 0 630 451' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <rect x='531' y='352' width='99' height='99' fill='currentColor'/>
              <rect x='140' y='352' width='106' height='99' fill='currentColor'/>
              <rect x='482' y='402' width='64' height='49' fill='currentColor'/>
              <rect x='433' y='402' width='63' height='49' fill='currentColor'/>
              <rect x='384' y='352' width='49' height='50' fill='currentColor'/>
              <rect x='531' y='328' width='50' height='50' fill='currentColor'/>
              <rect x='99' y='303' width='49' height='58' fill='currentColor'/>
              <rect x='99' y='352' width='49' height='50' fill='currentColor'/>
              <rect x='99' y='392' width='49' height='59' fill='currentColor'/>
              <rect x='44' y='402' width='66' height='49' fill='currentColor'/>
              <rect x='234' y='402' width='62' height='49' fill='currentColor'/>
              <rect x='334' y='303' width='50' height='49' fill='currentColor'/>
              <rect x='581' width='49' height='49' fill='currentColor'/>
              <rect x='581' width='49' height='64' fill='currentColor'/>
              <rect x='482' y='123' width='49' height='49' fill='currentColor'/>
              <rect x='507' y='124' width='49' height='24' fill='currentColor'/>
              <rect x='531' y='49' width='99' height='99' fill='currentColor'/>
            </svg>
          </div>
        </div>
      </section>

      <section className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
          <div className='mx-auto max-w-2xl mb-8 lg:mb-14 text-center'>
            <h2 className='text-3xl lg:text-4xl text-gray-800 font-bold dark:text-gray-200'>
              Explore tools
            </h2>
            <p className='mt-3 text-gray-800 dark:text-gray-200'>
              The powerful and flexible agency for all kinds of students and professionals.
            </p>
          </div>
          
          <div className='mx-auto max-w-3xl grid grid-cols-12 gap-6 lg:gap-8'>
            <div className='col-span-6 sm:col-span-4 text-center'>
              <svg className='mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-gray-200' xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
                <path d='M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z'/>
                <path d='M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z'/>
              </svg>
              <div className='mt-2 sm:mt-6'>
                <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-200'>
                  Responsive
                </h3>
              </div>
            </div>
            
            <div className='col-span-6 sm:col-span-4 text-center'>
              <svg className='mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-gray-200' xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
                <path d='M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z'/>
                <path d='M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z'/>
                <path d='M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z'/>
              </svg>
              <div className='mt-2 sm:mt-6'>
                <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-200'>
                  Customizable
                </h3>
              </div>
            </div>
            
            <div className='col-span-6 col-start-4 sm:col-span-4 text-center'>
              <svg className='mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-gray-200' xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
                <path d='M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z'/>
                <path d='M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z'/>
              </svg>
              <div className='mt-2 sm:mt-6'>
                <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-200'>
                  24/7 Support
                </h3>
              </div>
            </div>
          </div>
          
          <div className='mt-20 grid grid-cols-12 items-center gap-x-2 sm:gap-x-6 lg:gap-x-8'>
            <div className='hidden md:block col-span-4 md:col-span-3'>
              <img className='rounded-xl' src='https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80' alt='' />
            </div>
            <div className='col-span-4 md:col-span-3'>
              <img className='rounded-xl' src='https://images.unsplash.com/photo-1587613991119-fbbe8e90531d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1003&q=80' alt='' />
            </div>
            <div className='col-span-4 md:col-span-3'>
              <img className='rounded-xl' src='https://images.unsplash.com/photo-1554295405-abb8fd54f153?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=652&q=80' alt='' />
            </div>
            <div className='col-span-4 md:col-span-3'>
              <img className='rounded-xl' src='https://images.unsplash.com/photo-1640622300473-977435c38c04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80' alt='' />
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
    </main>
  )
  return content
}

export {
  Academic, Accommodation, Career, Conciarge, Consultation, CVCheck, Design, DigitalMarketing,
  Mentorship, Photography, Programming, Proofreading, Service, Translation, Writing
}
