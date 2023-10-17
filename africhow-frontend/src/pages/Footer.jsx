import React from 'react'


const Footer = () => {
  return (
    <div className='w-full pt-20 pb-4 px-10 bg-black '>
        <section className='flex justify-between'>
            <div className='flex'>
                <h3 className='text-white text-base font-bold'>AfriChow</h3>
            </div>
            <div className='flex justify-between gap-4 text-sm'>
                <ul>
                    <li className='text-white'>About</li>
                    <li className='text-white'>Support</li>
                    <li className='text-white'>FAQs</li>
                </ul>
                <ul>
                    <li className='text-white'>Meta</li>
                    <li className='text-white'>Instagram</li>
                    <li className='text-white'>X (Twitter)</li>
                </ul>
                
            </div>
        </section>
        <hr className='mt-12'/>
        <div className='flex mt-3 text-xs justify-between gap-2'>
            <h3 className='text-white '>All rights reserved <span>&copy;</span> AfriChow2023</h3>
            <p>Terms of Use</p>
        </div>
</div>
  )
}


export default Footer