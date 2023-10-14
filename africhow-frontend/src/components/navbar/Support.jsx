import {useState} from 'react'
import Accordion from "../accordions/NavTitles"
import processData from "../data/navigations"
import Services from "../accordions/Services"


const Dropdown = () => {

  const specificIDs = [4]
  const filteredData = processData.filter(item => specificIDs.includes(item.id));

  const handleAccordionClick = (Services) => {
    setActiveComponent(Services);
  };

  return (
    <div className='lg:hidden w-full bg-opacity-25'>
        <div className='h-screen relative flex flex-col pt-28 px-8'>
              {
                filteredData.map((item, key) => (
                  <Accordion key={key} data={item} 
                  onAccordionClick={() => handleAccordionClick('services')} />

                ))
              }
        </div>
    </div>
  )
}


export default Dropdown