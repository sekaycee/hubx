import React from 'react'
import Newsletter from '../slices/newsletter'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/24/outline'

const Terms = () => {
  const content = (
    <main>
      <section>
        <div class='relative overflow-hidden'>
          <div aria-hidden='true' class='flex absolute -top-96 left-1/2 transform -translate-x-1/2'>
            <div class='bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900'></div>
            <div class='bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70'></div>
          </div>

          <div class='relative z-10'>
            <div class='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:pt-[10rem]'>
              <div class='max-w-2xl text-center mx-auto'>
                <p class='inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400'>
                  HubX: A vision for 2023
                </p>

                <div class='mt-5 max-w-2xl'>
                  <h1 class='block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200'>
                    Terms of Service
                  </h1>
                </div>

                <div class='mt-5 max-w-3xl'>
                  <p class='text-lg text-gray-600 dark:text-gray-400'>Last updated: Monday 26th, June 2023.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='relative isolate overflow-hidden bg-white px-4 py-16 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-2 sm:py-32 lg:overflow-visible lg:px-8 lg:py-20 mx-auto'>
          <div className='absolute inset-0 -z-10 overflow-hidden'>
            <svg
              className='absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]'
              aria-hidden='true'
            >
              <defs>
                <pattern
                  id='e813992c-7d03-4cc4-a2bd-151760b470a0'
                  width={200}
                  height={200}
                  x='50%'
                  y={-1}
                  patternUnits='userHubXOnUse'
                >
                  <path d='M100 200V.5M.5 .5H200' fill='none' />
                </pattern>
              </defs>
              <svg x='50%' y={-1} className='overflow-visible fill-gray-50'>
                <path
                  d='M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z'
                  strokeWidth={0}
                />
              </svg>
              <rect width='100%' height='100%' strokeWidth={0} fill='url(#e813992c-7d03-4cc4-a2bd-151760b470a0)' />
            </svg>
          </div>
          <div className='mx-auto grid grid-col-3 md:grid-cols-6 gap-x-4 gap-y-8 lg:mx-0 lg:gap-y-10'>
            <div className='sticky text-right md:top-4 md:col-start-6 sm:row-span-1 sm:row-start-1 md:overflow-hidden'>
              <div className='p-1'>
                <div><a href='/'>Accounts</a></div>
                <div><a href='/'>External Links</a></div>
                <div><a href='/'>Termination</a></div>
                <div><a href='/'>Governing Law</a></div>
                <div><a href='/'>Changes</a></div>
              </div>
            </div>
            <div className='col-span-2 md:col-span-5 md:col-start-1 md:row-start-1 md:mx-auto grid w-full lg:grid-cols-1 md:gap-x-8'>
              <div className='lg:pr-4'>
                <div className='text-gray-700'>
                  <div className='text-base leading-7 text-gray-700'>
                    <p>Thanks for using our products and services ('Services'). The Services are provided by HubX Ltd. ('HubX'), founded in March 2023 with UK company registration number 14722644.</p>
                    <p className='mt-6'>By using our Services, you are agreeing to these terms. Please read them carefully.</p>
                    <p className='mt-6'>Our Services are very diverse, so sometimes additional terms or product requirements (including age requirements) may apply. Additional terms will be available with the relevant Services, and those additional terms become part of your agreement with us if you use those Services.</p>
                  </div>
                  
                  <div>
                    <h3 className='mt-16 text-2xl font-bold tracking-tight text-gray-900'>1. Accounts</h3>
                    <p className='mt-6'>
                      When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
                    </p>
                  </div>
                  <div>
                    <h3 className='mt-16 text-2xl font-bold tracking-tight text-gray-900'>2. Links to other websites</h3>
                    <p className='mt-6'>
                      Our Service may contain links to third-party web sites or services that are not owned or controlled by HubX.
                    </p>
                    <p className='mt-6'>
                      HubX has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that HubX shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
                    </p>
                    <p className='mt-6'>
                      We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.
                    </p>
                  </div>
                  <div>
                    <h3 className='mt-16 text-2xl font-bold tracking-tight text-gray-900'>3. Termination</h3>
                    <p className='mt-6'>
                      We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                    </p>
                    <p className='mt-6'>
                      All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
                    </p>
                    <p className='mt-6'>
                      We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                    </p>
                    <p className='mt-6'>
                      Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
                    </p>
                    <p className='mt-6'>
                      All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
                    </p>
                  </div>
                  <div>
                    <h3 className='mt-16 text-2xl font-bold tracking-tight text-gray-900'>4. Governing law</h3>
                    <p className='mt-6'>
                      These Terms shall be governed and construed in accordance with the laws of UK, without regard to its conflict of law provisions.
                    </p>
                    <p className='mt-6'>
                      Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.
                    </p>
                  </div>
                  <div>
                    <h3 className='mt-16 text-2xl font-bold tracking-tight text-gray-900'>5. Changes</h3>
                    <p className='mt-6'>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
                    <p className='mt-6'>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  )
  return content
}

export default Terms