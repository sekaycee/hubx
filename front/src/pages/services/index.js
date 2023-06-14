import Newsletter from '../../partials/Newsletter'
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
    <>
      <section className='h-screen place-items-center'>
        <div className='text-center text-[10rem] mt-[20rem]'>Coming Soon</div>
      </section>
      <Newsletter />
    </>
  )
  return content
}

export {
  Academic, Accommodation, Career, Conciarge, Consultation, CVCheck, Design, DigitalMarketing,
  Mentorship, Photography, Programming, Proofreading, Service, Translation, Writing
}
