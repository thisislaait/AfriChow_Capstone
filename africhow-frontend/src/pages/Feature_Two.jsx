import React from 'react'
import Accordion from "../components/accordions/Accordion"
import processData from "../components/data/how-it-works"



const Feature_Two = () => {
  const specificIDs = [1, 2, 3, 4, 5]
  const filteredData = processData.filter(item => specificIDs.includes(item.id));

  return (
    <div className='lg:hidden w-full mt-2 min-h-full bg-opacity-25'>
        <div className='flex flex-col justify-center px-8 '>
          <section className='text-center -mt-28'>
              <h3 className='text-4xl font-black '>FAQS</h3>
              <hr className='border-b-2 border-black w-12 mx-auto my-4' />
              <p className='text-xs mb-6'>Simplify and track accepted orders, access bills and customer contacts with ease for an efficient delivery workflow</p>
          </section>
          <section className='h-full section-banner bkground w-full rounded-2xl'>
            <div className='py-3 px-5 font-bold'>
              <h1 className='text-5xl text-white'>100%</h1>
              <h1 className='text-sm'>payout</h1>
              <button className='banner-btn text-white px-2 py-1 rounded-sm -pt-6 bg-black'>first 30 days</button>
            </div>
          </section>

          <section className=' h-full flex justify-center item-center w-full'>
            <div className=' w-full flex flex-col justify-center mb-12 pt-5'>
            {
                filteredData.map((item, key) => (
                  <Accordion key={key} data={item}/>
                ))
              }
            </div>
          </section>
        </div>
    </div>
  )
}


export default Feature_Two