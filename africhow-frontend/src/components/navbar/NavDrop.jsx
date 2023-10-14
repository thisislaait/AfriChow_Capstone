import {useState} from 'react'
import Accordion from "../accordions/NavDropdown"
import processData from "../data/navigations"


const Nav_Drop = () => {

  const specificIDs = [5, 6, 7, 8]
  const filteredData = processData.filter(item => specificIDs.includes(item.id));


  return (
    <div className='lg:hidden w-full bg-opacity-25'>
        <div className='flex flex-col justify-center px-8'>
          <section className=' mt-4 w-full flex flex-col'>
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


export default Nav_Drop