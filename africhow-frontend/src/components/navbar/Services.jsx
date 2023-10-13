import {useState} from 'react'
import Accordion from "../accordions/Services"
import processData from "../data/how-it-works"


const Dropdown = () => {

  const specificIDs = [5, 6, 7]
  const filteredData = processData.filter(item => specificIDs.includes(item.id));


  return (
    <div className='lg:hidden w-full bg-opacity-25'>
        <div className='flex flex-col justify-center px-8'>
              {
                filteredData.map((item, key) => (
                  <Accordion key={key} data={item}/>
                ))
              }
        </div>
    </div>
  )
}


export default Dropdown