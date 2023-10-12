import React from 'react';


const Hero = () => {
  return (
    <div className='snap-y snap-mandatory h-screen relative'>
      <section className='hero-image h-screen snap-start items-center relative overflow-hidden md:flex md:flex-col md:justify-center'>
        
        <div className='absolute bottom-28 pl-12 flex flex-col'>
          <h1 className='hero-text font-black -mt-10 text-white md:text-center md:text-7xl'>
            Connect with <br /> <span className='italic'>hungry</span> Customers
          </h1>
          <div className='flex md:justify-center'>
            <button className='text-xl bg-green-200 border-black text-black py-3 px-5 font-black mt-4 pointer'>
              Get Started Today <span> &rarr; </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;