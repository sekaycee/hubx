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
      <section className='h-screen place-items-center'>
        <div className='text-center text-[10rem] mt-[20rem]'>Coming Soon</div>
      </section>
      <InstantQuote />

      <Newsletter />
    </main>
  )
  return content
}

export {
  Academic, Accommodation, Career, Conciarge, Consultation, CVCheck, Design, DigitalMarketing,
  Mentorship, Photography, Programming, Proofreading, Service, Translation, Writing
}
