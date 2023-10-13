import React from 'react'
import HamBurger from "../navbar/Assets/hamburger white.svg";
import Close from "../navbar/Assets/Close.svg";
import Services from "../navbar/Services"
import { Link } from "react-router-dom";

const Nav = ({ toggleMenu, menuOpen , toggleDropdown }) => {

  return (
    <div className='px-10 py-6 bg-green-200 text-white flex justify-between items-center top-0 right-0 left-0 z-10 bg-transparent'>
      <div className='flex gap-6 '>
        <img src= {HamBurger} alt="" srcset="" className='w-8 cursor-pointer rotate-180 border-2 border-black p-2 bg-black' onClick={toggleMenu} />
        <h3 className='text-base font-black text-white'>Africhow</h3>
      </div>
      <div className='flex md:justify-center'>
        <button className='text-sm bg-green-600 border-black text-white py-1 px-5 font-black pointer'>
          Login
        </button>
      </div>
      {/*<div>
        <Link to="/profile">
          <img src= {Avatar} alt="" srcset="" className='w-8 cursor-pointer' />
        </Link>
        
      </div>*/}

      {/* Close button */}
      {menuOpen && (
        <div className='absolute top-8 left-16 cursor-pointer flex items-center gap-20' >
          <div className='h-3 w-10 py-2 pr-4 flex justify-center items-center gap-3' >
            <img src= { Close } alt="" srcset="" className='z-30 relative stroke-current' onClick={toggleMenu} />
            <h3 className='z-30 text-gray-500 font-semibold' onClick={toggleMenu} >Menu</h3>
          </div>
        </div>
      )}

      
      
      {/* full screen menu */}
      {menuOpen && (
        <div className='fixed top-0 left-0 right-16 bottom-0 pt-16 bg-green-100 text-black flex flex-col items-center justify-center ease-out delay-500s duration-300 z-20'>
          <ul className='text-2xl font-semibold mb-5'>
            <li className='my-5 cursor-pointer' onClick={toggleDropdown}>
              <Services />
            </li>
          </ul>
          <div className='mt-auto p-4 flex items-center gap-4'>
            <p id='subscribe' className='text-sm font-semibold'>Join Our Mailing List</p>
            <form>
              <button className='bg-green-500 text-black font-bold py-2 px-4 text-sm' type='submit'>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Nav