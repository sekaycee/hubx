export const COURSES = [
  'Software Engineering','Medicine and Surgery','Pharmacy','Geology','Computer Science'
]

export const LOCATIONS = [
  'Nigeria','United Kingdom','United States','China','Israel'
]

export const SCHOLARSHIPS = [
  {
    id: 1,
    logo: '',
    title: 'Gates Cambridge Scholarship',
    about: ['The Gates Cambridge Scholarship programme was established in October 2000 by a donation of US$210m from the Bill and Melinda Gates Foundation to the University of Cambridge; this is the largest ever single donation to a UK university.', 'Each year Gates Cambridge offers c.80 full-cost scholarships to outstanding applicants from countries outside the UK to pursue a postgraduate degree in any subject available at the University of Cambridge. Approximately two-thirds of these awards will be offered to PhD students, with approximately 25 awards available in the US round and 55 available in the International round.', 'There are at least 225 Scholars from c. 50 countries studying in Cambridge at any one time who pursue the full range of subjects available at the University and are spread across its departments and Colleges.', 'The Gates Cambridge mission is to build a global network of future leaders committed to improving the lives of others. It aims to achieve this mission by selecting outstanding scholars, providing them with financial and non-financial support at one of the world’s leading universities and facilitating community building at and beyond Cambridge.'],
    email: 'info@gatescambridge.org',
    website: 'https://www.gatescambridge.org/',
    award: {
      value: '£30,000 ~ £60,000 (annual)',
      duration: 'Course length',
      purpose: {
        tags: ['Fees (International)', 'Maintenance', 'Student visa cost', 'Student immigration health surcharge'],
        para: ['']
      },
      year: '2023/24',
      basis: {
        tags: [''],
        para: ['']
      }
    },
    eligibility: {
      who: { title: 'Who can apply?', body: ['Prospective applicant'] },
      level: { title: 'Level of study', body: ['Masters', 'PhD'] },
      mode: { title: 'Mode of study', body: ['Full Time', 'Part Time'] },
      location: { title: 'Available to', body: LOCATIONS },
      course: { title: 'Course', body: COURSES }
    },
    process: [
      { head: 'Opt in for funding through the Applicant Portal?', body: 'Yes', label: '' },
      { head: 'Additional questions in the Applicant Portal?', body: 'Yes' }
    ],
    dates: {
      deadline: { local: 'Wednesday 12 October 2022', international: 'either 1 December 2022 or 5 January 2023' },
      results: { local: '01 February 2023', international: '01 April 2023' }
    }
  },
  {
    id: 2,
    title: ''
  },
  {
    id: 3,
    title: ''
  },
  {
    id: 4,
    title: ''
  }
]