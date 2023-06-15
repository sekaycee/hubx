import { React, useState } from 'react'
import { Question, Award, BookHalf, CalendarCheck, CarFront, ClipboardCheck, Airplane, Briefcase, PatchCheck, BookmarkStar, ListNested, GlobeEuropeAfrica, Boxes, ClipboardPulse } from 'react-bootstrap-icons'
import Scholarship from './slices/scholarship'
import Job from './slices/job'
import { POSTS } from './config/blog'
import { TESTIMONIALS } from './config/testimonials'
import Newsletter from './slices/newsletter'
import Gradient from './slices/gradient'

const Home = () => {
  const tabItems = [
    { 
      name: 'Jobs', 
      component: Job
    },
    { 
      name: 'Scholarships', 
      component: Scholarship
    }
  ]

  const [selectedItem, setSelectedItem ] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const content = (
    <main>
      {/* Hero */}
      <section className='relative isolate px-6 pt-14 lg:px-8'>
        <Gradient />
        <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
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
                className='rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
              >
                Get started
              </a>
              <a href='/services' className='text-sm font-semibold leading-6 text-gray-900 hover:text-blue-700'>
                Learn more <span aria-hidden='true'>→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-18rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-38rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </section>

      {/* Features */}
      <section className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='max-w-3xl mx-auto text-center'>
          <p className='inline-block px-3 py-px mb-12 md:mb-16 text-xs font-semibold tracking-wider text-blue-900 uppercase rounded-full bg-blue-100'>Services overview</p>
        </div>
        <div className='grid text-center row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3'>
          <div className='p-8 border-b sm:border-r'>
            <div className='max-w-md'>
              <div className='flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 sm:w-16 sm:h-16'>
                <Award size={28} />
              </div>
              <h6 className='mb-2 font-semibold leading-5'>University Application</h6>
              <p className='mb-3 text-sm text-gray-900'>
                Personal statements, Statements of interest, Research proposals, Admission and funding counseling
              </p>
            </div>
          </div>
          <div className='p-8 border-b lg:border-r'>
            <div className='max-w-md text-center'>
              <div className='flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 sm:w-16 sm:h-16'>
                <BookHalf size={28} />
              </div>
              <h6 className='mb-2 font-semibold leading-5'>Proofreading & Feedback</h6>
              <p className='mb-3 text-sm text-gray-900'>
                Theses, Dissertations, Essays, Citation checks, Translation, Conference/Research posters, Term papers
              </p>
            </div>
          </div>
          <div className='p-8 border-b sm:border-r lg:border-r-0'>
            <div className='max-w-md text-center'>
              <div className='flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 sm:w-16 sm:h-16'>
                <CalendarCheck size={28} />
              </div>
              <h6 className='mb-2 font-semibold leading-5'>Hourly Consultation</h6>
              <p className='mb-3 text-sm text-gray-900'>
                One on one Academic mentorship, Essay support and Career guidance
              </p>
            </div>
          </div>
          <div className='p-8 border-b lg:border-b-0 lg:border-r'>
            <div className='max-w-md text-center'>
              <div className='flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 sm:w-16 sm:h-16'>
                <CarFront size={28} />
              </div>
              <h6 className='mb-2 font-semibold leading-5'>Concierge Services</h6>
              <p className='mb-3 text-sm text-gray-900'>
                Accommodation bookings, Personalized shopping, Flight booking and Airport pickup
              </p>
            </div>
          </div>
          <div className='p-8 border-b sm:border-b-0 sm:border-r'>
            <div className='max-w-md text-center'>
              <div className='flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 sm:w-16 sm:h-16'>
                <ClipboardCheck size={28} />
              </div>
              <h6 className='mb-2 font-semibold leading-5'>CV/Resume Check</h6>
              <p className='mb-3 text-sm text-gray-900'>
                Tailored for job applications, Interview practice and Personal statement reviews
              </p>
            </div>
          </div>
          <div className='p-8'>
            <div className='max-w-md text-center'>
              <div className='flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 sm:w-16 sm:h-16'>
                <Airplane size={28} />
              </div>
              <h6 className='mb-2 font-semibold leading-5'>Translocation</h6>
              <p className='mb-3 text-sm text-gray-900'>
                Proven immigration advice and Functional visa guidance
              </p>
            </div>
          </div>
        </div>
        <div className='text-center mt-7'>
          <a
            href='/services/quote'
            className='rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
          >
            Get instant quote
          </a>
        </div>
      </section>

      {/* Application */}
      <section className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='grid gap-10 lg:grid-cols-2'>
          <div className='flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg'>
            <div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-100'>
              <Briefcase size={28} />
            </div>
            <div className='max-w-xl mb-6'>
              <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
                Need help applying for
                <br className='hidden md:block' />
                {' '}an{' '}
                <span className='inline-block text-blue-600'>
                  admission or job elsewhere?
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
                className='rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
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

      {/* Jobs and Scholarships */}
      <section className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='mb-10'>
          <ul role='tablist' className='border-b flex md:place-content-center gap-x-3 overflow-x-auto text-sm'>
            {
              tabItems.map((item, idx) => (
                <li key={idx} className={`py-2 border-b-2 ${selectedItem === idx ? 'border-blue-600 text-blue-600' : 'border-white text-gray-500'}`}>
                  <button
                    role='tab'
                    aria-selected={selectedItem === idx ? true : false}
                    aria-controls={`tabpanel-${idx + 1}`}
                    className='py-2.5 px-4 rounded-lg duration-150 hover:text-blue-600 hover:bg-gray-50 active:bg-gray-100 font-medium'
                    onClick={() => setSelectedItem(idx)}
                  >
                    {item.name}
                  </button>
                </li>
              ))
            }
          </ul>
        </div>
        <div>
          <ul>
            {
              tabItems.map((item, idx) => (selectedItem === idx ? (
                <li key={idx}>
                  <item.component />
                </li>
              ) : '' ))
            }
          </ul>  
        </div>
      </section>

      {/* Service Deliverables */}
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
            <span className='inline-block text-blue-600'>choose us?</span>
          </h2>
          <p className='text-base text-gray-700 md:text-lg'>
            We believe there's no love or hate without reason, as such
            we've got some compelling reasons for you to love and work with us
          </p>
        </div>
        <div className='grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3'>
          <div className='p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2'>
            <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-blue-100'>
              <Boxes size={24} />
            </div>
            <h6 className='mb-2 font-semibold leading-5'>Custom solutions</h6>
            <p className='text-sm text-gray-900'>
              Our solutions for our customers are customized 
              to suit the customer's need for maximum efficiency and support.
            </p>
          </div>
          <div className='p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2'>
            <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-blue-100'>
              <BookmarkStar size={24} />
            </div>
            <h6 className='mb-2 font-semibold leading-5'>Reliable information</h6>
            <p className='text-sm text-gray-900'>
              We constantly research the most recent information 
              for your needs to provide high quality and trustworthy service to you.
            </p>
          </div>
          <div className='p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2'>
            <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-blue-100'>
              <ClipboardPulse size={24} />
            </div>
            <h6 className='mb-2 font-semibold leading-5'>Effective support</h6>
            <p className='text-sm text-gray-900'>
              We have a high response rate to customer enquiries 
              and we are always on-call to fulfill your service requirements.
            </p>
          </div>
          <div className='p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2'>
            <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-blue-100'>
              <ListNested size={24} />
            </div>
            <h6 className='mb-2 font-semibold leading-5'>Proven guidelines</h6>
            <p className='text-sm text-gray-900'>
              Our team consist of individuals who successfully underwent the process, 
              proving its effectiveness. As such you are in great hands.
            </p>
          </div>
          <div className='p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2'>
            <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-blue-100'>
              <GlobeEuropeAfrica size={24} />
            </div>
            <h6 className='mb-2 font-semibold leading-5'>Great network</h6>
            <p className='text-sm text-gray-900'>
              We provide you with networking opportunities, 
              allowing you to form significant connections to boost your prospects.
            </p>
          </div>
          <div className='p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2'>
            <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-blue-100'>
              <PatchCheck size={24} />
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
            className='rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
          >
            Learn more
          </a>
        </div>
      </section>

      {/* Popular Services */}
      <section className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='max-w-xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-2xl'>
          <p className='inline-block px-3 py-px mb-1 text-xs font-semibold uppercase md:mb-2 tracking-wider text-blue-900 rounded-full bg-blue-100'>
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
              Academic Pathway
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
              Career Pathway
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
              Mentorship
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

      {/* Testimonials */}
      <section className='py-14'>
        <div className='max-w-screen-xl mx-auto px-4 md:px-8'>
          <div className='max-w-3xl mx-auto text-center'>
            <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-blue-900 uppercase rounded-full bg-blue-100'>What people are saying</p>
            <ul>
              {
                TESTIMONIALS.map((item, idx) => (
                  currentTestimonial === idx ? (
                    <li key={idx}>
                      <figure>
                        <blockquote>
                          <p className='text-gray-800 text-xl font-semibold sm:text-2xl'>
                            “{item.quote}“
                          </p>
                        </blockquote>
                        <div className='mt-6'>
                          <div className='mt-3'>
                            <span className='block text-gray-800 font-semibold'>{item.name}</span>
                            <span className='block text-gray-600 text-sm mt-0.5'>{item.title}</span>
                          </div>
                        </div>
                      </figure>
                    </li>
                  ) : ''
                ))
              }
            </ul>
          </div>
          <div className='mt-6'>
            <ul className='flex gap-x-3 justify-center'>
              {
                TESTIMONIALS.map((item, idx) => (
                  <li key={idx}>
                    <button className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-blue-600 focus:ring ${currentTestimonial === idx ? 'bg-blue-600' : 'bg-gray-300'}`}
                      onClick={() => setCurrentTestimonial(idx)}
                    ></button>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className='bg-white py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>From our {' '}
              <span className='inline-block text-blue-600'>insights pool</span>
            </h2>
            <p className='mt-2 text-lg leading-8 text-gray-600'>
              Learn how to fast-track your academic|career goals with our expert advice.
            </p>
          </div>
          <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
            {POSTS.map((post) => (
              <article key={post.id} className='flex max-w-xl flex-col items-start justify-between'>
                <div className='flex items-center gap-x-4 text-xs'>
                  <time dateTime={post.datetime} className='text-gray-500'>
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className='relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100'
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className='group relative'>
                  <h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
                    <a href={post.href}>
                      <span className='absolute inset-0' />
                      {post.title}
                    </a>
                  </h3>
                  <p className='mt-5 line-clamp-3 text-sm leading-6 text-gray-600'>{post.description}</p>
                </div>
                <div className='relative mt-8 flex items-center gap-x-4'>
                  <div className='flex items-center justify-center h-10 w-10 rounded-full bg-gray-50'>
                    <post.author.imageUrl />
                  </div>
                  <div className='text-sm leading-6'>
                    <p className='font-semibold text-gray-900'>
                      <a href={post.author.href}>
                        <span className='absolute inset-0' />
                        {post.author.name}
                      </a>
                    </p>
                    <p className='text-gray-600'>{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Support */}
      <section className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='max-w-screen-sm sm:text-center sm:mx-auto'>
          <a
            href='/'
            aria-label='View'
            className='inline-block mb-5 rounded-full sm:mx-auto'
          >
            <div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-100'>
              <Question size={48} />
            </div>
          </a>
          <h2 className='mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
            Still {' '}
            <span className='inline-block text-blue-600'>unsure</span> where to {' '}
            <span className='inline-block text-blue-600'>start?</span>
          </h2>
          <p className='text-base text-gray-700 md:text-lg sm:px-4'>
            We are available for a free 15-minute consultation to help you get started.
          </p>
          <hr className='w-full my-8 border-gray-300' />
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <a
              href='/about/contact'
              className='rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </main>
  )
  return content
}

export default Home