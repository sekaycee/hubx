import React from 'react'
import Newsletter from '../slices/newsletter'

const Jobs = () => {
  return (
    <></>
  )
}

const Career = () => {
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

export { Career, Jobs }