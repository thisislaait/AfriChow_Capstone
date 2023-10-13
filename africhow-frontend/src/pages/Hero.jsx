import React from 'react';


const Hero = () => {
  return (
    <div className=' hero-image h-screen relative bg-black -top-20 -z-10'>
      <section className='h-screen items-center relative md:flex md:flex-col md:justify-center'>
        
        <div className='absolute bottom-16 pl-12 flex flex-col'>
          <h1 className='hero-text font-black -mt-10 text-white md:text-center md:text-7xl'>
            Connect <br/>with <span className='italic'>hungry</span> <br/>Customers
          </h1>
          <div className='flex md:justify-center'>
            <button className='text-base bg-green-600 text-white py-3 px-5 font-black mt-4 pointer'>
              Get Started Today <span> &rarr; </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;