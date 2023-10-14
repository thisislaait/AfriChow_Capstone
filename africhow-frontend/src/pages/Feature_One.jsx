import {useState} from 'react'
import Meal from "../assets/Camp Images/Onay Beach.jpg"



const Feature_One = () => {

  return (
    <div className='lg:hidden w-full min-h-screen bg-opacity-25'>
        <div className='relative flex flex-col justify-center px-8'>
          <section className=' section-header w-full flex flex-col'>
              <div className='text-center'>
                <h3 className='text-4xl font-black mt-2'>TOP FEATURES</h3>
                <hr className='border-b-2 border-black w-12 mx-auto mt-4' />
                <p className='text-xs py-4'>Simplify and track accepted orders, access bills and customer contacts with ease for an efficient delivery workflow</p>
              </div>
          </section>
          <section className=' section-header w-full flex flex-col justify-between gap-6 mt-8 mb-24 '>
              <div className='text-center border-2 border-gray-200 rounded-md px-4 shadow-lg'>
                <h3 className='text-base font-bold mt-4'>Elevate your restaurant</h3>
                <p className='text-xs py-4'>From enabling a hassle free preorder process, to intuitive sales management, we provide the tools you need for your restaurant to thrive</p>

                  <div className='flex w-full gap-3'>
                    <div className='flex justify-between items-center border-2 mb-8 w-1/2 shadow-lg rounded-md pr-3'>
                        <div className='flex items-center gap-2 px-4'>
                          <img src= {Meal} alt="" srcset="" className='w-4 h-4 rounded-full' />
                          <div className='flex flex-col text-left justify-start my-3'>
                            <p className='meal_name font-semibold'>Shrimp rice</p>
                            <p className='meal_price font-bold text-gray-500'>N1,500</p>
                          </div>
                        </div>
                        <div>
                          <p className='add_meal px-1 border border-green-800 bg-lime-300'>+</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-center border-2 mb-8 w-1/2 shadow-lg rounded-md pr-3'>
                        <div className='flex items-center gap-2 px-4'>
                          <img src= {Meal} alt="" srcset="" className='w-4 h-4 rounded-full' />
                          <div className='flex flex-col text-left justify-start my-3'>
                            <p className='meal_name font-semibold'>Reo noodles</p>
                            <p className='meal_price font-bold text-gray-500'>N3,200</p>
                          </div>
                        </div>
                        <div>
                          <p className='add_meal px-1 border border-green-800 bg-lime-300'>+</p>
                        </div>
                    </div>
                  </div>
              </div>
              <div className='flex gap-3 w-full'>
                <div className='flex flex-col w-1/2 gap-2'>
                  <div className='text-center border-2 border-gray-200 rounded-md px-4 '>
                    <h3 className='text-base font-bold mt-4'>View Payouts</h3>
                    <p className='text-xs py-4'>Captivate new customers drawn to African cuisine with your location.</p>
                  </div>
                  <div className='text-center border-2 border-gray-200 rounded-md px-4 shadow-lg'>
                    <h3 className='text-base font-bold mt-4'>Track Orders</h3>
                    <p className='text-xs py-4'>Captivate new customers drawn to African cuisine with your location.</p>
                  </div>
                </div>
                <div className='flex flex-col w-1/2 h-full gap-2'>
                  <div className='text-center border-2 border-gray-200 rounded-md h-1/2 px-4 '>
                    <h3 className='text-base font-bold mt-4'>View Payouts</h3>
                    <p className='text-xs py-4'>Captivate new customers drawn to African cuisine with your location.Captivate new customers</p>
                  </div>
                  <div className='feature-btn text-start border-2 border-gray-200 rounded-md px-4 pb-6 shadow-lg bg-lime-300 '>
                    <h3 className='text-sm font-bold mt-4'>See other features here</h3>
                    <a href="http://" className='border-b pb-1 border-black font-semibold'>See more <span> &rarr; </span></a>
                  </div>
                </div>
              </div>
          </section>
        </div>
    </div>
  )
}


export default Feature_One