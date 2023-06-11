import { React } from 'react'
import { Capsule, BrightnessHighFill, BuildingFillCheck, HeartPulseFill, CashStack, Bank2 } from 'react-bootstrap-icons'

const Job = () => {
  const jobs = [
    {
      image: BrightnessHighFill,
      title: 'Fullstack Software Engineer',
      desc: 'Needs to possess the requisite capacities including but not limited to; DevOps, Low-Level and Higher-Level programming skills among many others',
      href: '/services/career/jobs'
    },
    {
      image: CashStack,
      title: 'Chartered Accountant',
      desc: 'Accounting jobs from startups to well-established corporations are readily available',
      href: '/services/career/jobs'
    },
    {
      image: BuildingFillCheck,
      title: 'Interior Design',
      desc: 'Jobs available for interior designers and designers of any ilk. We also provide support to any prospective client',
      href: '/services/career/jobs'
    },
    {
      image: HeartPulseFill,
      title: 'Registered Nurse|Midwife',
      desc: 'Get access to well-paying nursing, midwivery and care jobs. Our database while nonexhaustive, is sure to meet your caregiving career pathway',
      href: '/services/career/jobs'
    },
    {
      image: Capsule,
      title: 'Registered Pharmacist',
      desc: 'You will not have much difficulty in procuring a job in a pharmaceutical establishment, outlet or hospital',
      href: '/services/career/jobs'
    },
    {
      image: Bank2,
      title: 'Legal Practitioner',
      desc: 'We provide instant access to chambers in search of legal practitioners, with additonal internship opportunities',
      href: '/services/career/jobs'
    }
  ]

return (
  <div>
    <div className='max-w-xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-2xl'>
      <p className='inline-block px-3 py-px mb-10 text-xs font-semibold uppercase md:mb-2 tracking-wider text-blue-900 rounded-full bg-blue-100'>
        Corporate jobs
      </p>
      <p className='text-base text-gray-700 md:text-lg'>
        Get access to our database of current jobs openings, finely curated to help you get started or progress in your career.
      </p>
    </div>
    <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
      {jobs.map((item) => (
        <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
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
        href='/services/career#jobs'
        className='rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
      >
        View all jobs
      </a>
    </div>
  </div>
)}

export default Job