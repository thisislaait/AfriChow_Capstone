import React from 'react'
import Order from "../assets/Hero Image.jpg";
import Accordion from "../components/Accordion"


const Feature_One = () => {
  return (
    <div className='lg:hidden w-full min-h-screen bg-opacity-25'>
        <div className='snap-y snap-mandatory h-screen relative flex flex-col justify-center px-8'>
          <section className=' section-header h-screen snap-start w-full flex flex-col'>
              <div className='text-center'>
                <h3 className='text-4xl font-bold mt-16'>How it works</h3>
                <hr className='border-b-2 border-black 2 w-12 mx-auto mt-4' />
                <p className='text-sm py-4'>Simplify and track accepted orders, access bills and customer contacts with ease for an efficient delivery workflow</p>
              </div>
              <Accordion />
          </section>
        </div>
    </div>
  )
}


export default Feature_One