import { useState } from 'react'

const FaqsCard = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='border rounded-md shadow-sm mb-2'>
      <button
        type='button'
        aria-label='Open item'
        title='Open item'
        className='flex items-center justify-between w-full p-4 focus:outline-none'
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className='text-lg font-medium'>{title}</p>
        <div className='flex items-center justify-center w-8 h-8 border rounded-full'>
          <svg
            viewBox='0 0 24 24'
            className={`w-3 text-gray-600 transition-transform duration-200 ${
              isOpen ? 'transform rotate-180' : ''
            }`}
          >
            <polyline
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeMiterlimit='10'
              points='2,7 12,17 22,7'
              strokeLinejoin='round'
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className='p-4 pt-0'>
          <p className='text-gray-700'>{children}</p>
        </div>
      )}
    </div>
  );
};

const FAQs = () => {
  const faqs = [
    {
      q: "Can I cancel at anytime?",
      a: "Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback."
    },
    {
      q: "My team has credits. How do we use them?",
      a: "Once your team signs up for a subscription plan. This is where we sit down, grab a cup of coffee and dial in the details."
    },
    {
      q: "How does HubX's pricing work?",
      a: "Our subscriptions are tiered, whereas payment for our one-time services are not. Understanding the task at hand and ironing out the wrinkles is key."
    },
    {
      q: "How secure is HubX Consulting?",
      a: "Protecting the data you trust to HubX Consulting is our foremost priority. This part is really crucial in keeping the project in line to completion."
    },
    {
      q: "How do I get access to a resource I purchased?",
      a: "If you lose the link for a resource you purchased, don't panic! We've got you covered. You can login to your account, tap your avatar in the upper right corner, and tap Purchases. If you didn't create a login or can't remember the information, you can use our handy Redownload page, just remember to use the same email you originally made your purchases with."
    },
    {
      q: "How to upgrade license type?",
      a: "There may be times when you need to upgrade your license from the original type you purchased and we have a solution that ensures you can apply your original purchase cost to the new license purchase."
    },
    {
      q: "?",
      a: "."
    },
    {
      q: "?",
      a: "."
    },
    {
      q: "?",
      a: "."
    }
  ]
  const [activeQuestion, setActiveQuestion] = useState(0)

  const toggleAnswer = (idx) => {
    if (activeQuestion === idx) setActiveQuestion(null)
    else setActiveQuestion(idx)
  }

  return (
    <main className='my-64'>
      <section className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div class='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
          <div class='grid md:grid-cols-5 gap-10'>
            <div class='md:col-span-2'>
              <div class='max-w-xs'>
                <h2 class='text-2xl font-bold md:text-4xl md:leading-tight dark:text-white'>Frequently<br />asked questions</h2>
                <p class='mt-1 hidden md:block text-gray-600 dark:text-gray-400'>Answers to the most frequently asked questions. Still confused? Feel free to get in touch</p>
              </div>
            </div>

            <div class='md:col-span-3'>
              <div class='hs-accordion-group divide-y divide-gray-200 dark:divide-gray-700'>
                {
                  faqs.map((item, idx) => (
                    <FaqsCard key={idx} title={item.q}>
                      {item.a}
                    </FaqsCard>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    
  )
}

export default FAQs