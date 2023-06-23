const MegaMenuLinks = ({ title, item }) => {
  const content = (
    <ul
      role='list'
      aria-labelledby={`${title}-heading`}
      className='mt-6 space-y-6 sm:mt-4 sm:space-y-4'
    >
      <li key={item.name} className='flex'>
        <a href={item.href} className='font-medium text-gray-900 hover:text-blue-600'>
          {item.name}
        </a>
      </li>
    </ul>
  )
  return content
}

export default MegaMenuLinks