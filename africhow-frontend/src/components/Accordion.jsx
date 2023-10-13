import React from 'react'

const Accordion = () => {
  return (
    <div className='bg-white p-5 border-b-2 border-gray-300 w-{280px} group mt-5'>
        <div className='flex items-center'>
            <div className='w-full group-[.is-active]:font-bold'>
                what's your name ?
            </div>
            <div className='text-xl group-[.is-active]:rotate-[270deg]'>
                <span> &rarr; </span>
            </div>
        </div>
        <div className=' overflow-hidden max-h-0 group-[.is-active]:max-h-[50px]'>
            My name is Ugo
        </div>
    </div>
  )
}

export default Accordion