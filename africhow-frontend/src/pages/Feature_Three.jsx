import React from 'react'
import Footer from '../pages/Footer'
import Canada from '../pages/Assets/Camp Images/Latik Riverside.jpg'


const Feature_Three = () => {
  return (
    <div className='h-screen w-full '>
      <div className='items-center flex flex-col justify-between w-full gap-5'>
        <section className='text-center'>
            <h3 className='text-4xl font-black uppercase '>Our Locations</h3>
            <hr className='border-b-2 border-black w-12 mx-auto my-4' />
            <p className='text-xs mb-6 px-16'>We help restaurant owners spread their meals to these areas</p>
        </section>
        <section className=' location-canada flex flex-col justify-center font-bold'>
                <img src= {Canada} alt="" srcset="" />
                <h3 className='-mt-12 flex justify-center bg-green-100 bg-opacity-50 py-3 text-xl'>Canada</h3>
          </section>
          <section className=' location-canada flex flex-col justify-center font-bold'>
                <img src= {Canada} alt="" srcset="" />
                <h3 className='-mt-12 flex justify-center bg-green-100 bg-opacity-50 py-3 text-xl'>United Kingdom</h3>
          </section>
          <section className=' location-canada flex flex-col justify-center font-bold'>
              <img src= {Canada} alt="" srcset="" />
              <h3 className='-mt-12 flex justify-center bg-green-100 bg-opacity-50 py-3 text-xl'>America</h3>
        </section>
        <div className='flex justify-center'>
          <button className='text-base bg-[#33CC9F] rounded-md bg-opacity-80 py-4 px-20 font-black pointer my-6 '>
            Get started today
          </button>
      </div>
        
      </div>
      <Footer />
    </div>
  )
}


export default Feature_Three