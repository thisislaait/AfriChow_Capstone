import React from 'react'
import Order from "../assets/order mgt.png";


const Feature_One = () => {
  return (
    <div className='lg:hidden w-full min-h-screen bg-opacity-25'>
        <div className='snap-y snap-mandatory h-screen relative flex justify-center'>
            <section className='h-screen snap-start w-full m-8 ml-10 -mr-36 mt-8'>
                <h3 className='text-4xl font-bold mt-16'>Order Management</h3>
                <p className='text-xl mt-8'>Simplify and track accepted orders, access bills and customer contacts with ease for an efficient delivery workflow</p>
            </section>
            <section className='h-screen flex justify-center items-center snap-start'>
                <img src= {Order} alt="" srcset="" className='w-full' />
            </section>
        </div>
    </div>
  )
}


export default Feature_One