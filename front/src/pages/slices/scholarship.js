import { React } from 'react'
import { Box2HeartFill, BrightnessHighFill, BuildingFillCheck } from 'react-bootstrap-icons'

const Scholarship = () => {
  const scholarships = [
    {
      image: BrightnessHighFill,
      title: 'Gates Cambridge Scholarship',
      desc: 'For non-US internationals pursuing MSc or PhD degrees. Scholarship is either part-time or full-time and deadline is course-dependent',
      href: 'https://www.student-funding.cam.ac.uk/fund/gates-cambridge-scholarship-2022'
    },
    {
      image: Box2HeartFill,
      title: 'Canada Graduate Scholarship',
      desc: 'Get funding for your graduate studies for universities in Canada. Deadline is the 1st of December yearly',
      href: 'https://www.nserc-crsng.gc.ca/Students-Etudiants/PG-CS/CGSM-BESCM_eng.asp'
    },
    {
      image: BuildingFillCheck,
      title: 'Chevening Scholarship',
      desc: 'Provide funding for students pursuing BSc degrees. Proposed open date of early August till early November',
      href: 'https://www.chevening.org/scholarships/application-timeline'
    },
  ]

  return (
    <div>
      <div className='max-w-xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-2xl'>
        <p className='inline-block px-3 py-px mb-10 text-xs font-semibold uppercase md:mb-2 tracking-wider text-blue-900 rounded-full bg-blue-100'>
          University scholarships
        </p>
        <p className='text-base text-gray-700 md:text-lg'>
          Get access to our database of current scholarships finely curated to help finance your academic journey.
        </p>
      </div>
      <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
        {scholarships.map((item, idx) => (
          <div key={idx} className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="relative p-5 bg-white rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                  <item.image size={16} />
                </div>
                <h6 className="font-semibold leading-5">{item.title}</h6>
              </div>
              <p className="mb-2 text-sm text-gray-900">
                {item.desc}
              </p>
              <a
                href={item.href}
                aria-label=""
                className="inline-flex items-center text-sm font-semibold transition-colors duration-200 hover:text-blue-600"
              >
                Learn more
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className='text-center mt-10'>
        <a
          href='/services/academic#scholarships'
          className='rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
        >
          Find a scholarship
        </a>
      </div>
    </div>
  )
}

export default Scholarship