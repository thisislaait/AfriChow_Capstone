import {useState} from 'react'
import Accordion from "../components/accordions/Accordion"
import processData from "../components/data/how-it-works"


const Feature_One = () => {

  const specificIDs = [1, 3, 4]
  const filteredData = processData.filter(item => specificIDs.includes(item.id));


  return (
    <div className='lg:hidden w-full min-h-screen bg-opacity-25'>
        <div className='h-screen relative flex flex-col justify-center px-8'>
          <section className=' section-header h-screen w-full flex flex-col'>
              <div className='text-center'>
                <h3 className='text-4xl font-bold mt-2'>How it works</h3>
                <hr className='border-b-2 border-black 2 w-12 mx-auto mt-4' />
                <p className='text-xs py-4'>Simplify and track accepted orders, access bills and customer contacts with ease for an efficient delivery workflow</p>
              </div>
              {
                filteredData.map((item, key) => (
                  <Accordion key={key} data={item}/>
                ))
              }
          </section>
        </div>
    </div>
  )
}


export default Feature_One