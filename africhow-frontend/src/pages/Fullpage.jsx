import React from 'react'

const Fullpage = () => {
  return (
    <div className='fullscreen lg:block md:block h-screen w-screen hidden overflow-hidden'>
        <h3 className='px-12 py-6 text-xl font-bold'>africhow</h3>
        <section className=' h-screen flex flex-col justify-center px-12'>
            <h1 className='text-5xl font-bold mr-80'>View App on <br/>Mobile Only</h1>
            <p className='text-xl mt-5 pr-96'>Receive food orders anytime and everywhere</p>
            <a href="#" className='px-8 py-3 bg-green-500 w-40 mt-3 text-sm font-bold'>Get Started</a>

        </section>
    </div>
  )
}

export default Fullpage