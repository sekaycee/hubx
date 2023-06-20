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
    <main className='pt-[10rem] max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8'>
      <section className='mb-[5rem] grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center'>
        <aside className=''>
          <InstantQuote />
        </aside>
        
        <div className='relative ml-4'>
          <img className='w-full rounded-md' src='https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&h=800&q=80' alt='Image Description' />
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

      <Newsletter />
    </main>
  )
  return content
}

export {
  Academic, Accommodation, Career, Conciarge, Consultation, CVCheck, Design, DigitalMarketing,
  Mentorship, Photography, Programming, Proofreading, Service, Translation, Writing
}
