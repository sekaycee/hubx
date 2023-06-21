const InputWordCount = () => {
  return (
    <div className='mt-3'>
      <label htmlFor='wordcount' className='block text-sm font-medium leading-6 text-gray-900'>
        Enter word count
      </label>
      <div className='mt-2'>
        <input
          type='number'
          name='wordcount'
          id='wordcount'
          autoComplete='wordcount'
          className='block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
        />
      </div>
    </div>
  )
}

export default InputWordCount