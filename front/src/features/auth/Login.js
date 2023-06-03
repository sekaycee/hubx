import { React } from 'react'

const Login = () => {
  return (
    <main>
      <section className='relative isolate px-6 pt-14 lg:px-8'>
        <div className='mx-auto max-w-2xl py-24 sm:py-48 lg:py-56 text-center'>
          <h1 className='mb-4'>Login</h1>
          <form className=''>
            <div>
              <input className='p-2 w-80 rounded border' type='email' placeholder='Email'/>
            </div>
            <div className='mt-4'>
              <input className='p-2 w-80 rounded border' type='password' placeholder='Password'/>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Login