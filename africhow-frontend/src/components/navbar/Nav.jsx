import React from 'react'
import HamBurger from "../navbar/Assets/hamburger white1.svg";
import Close from "../navbar/Assets/Close.svg";
import Nav_Drop from "../navbar/NavDrop"

const Nav = ({ toggleMenu, menuOpen , toggleDropdown }) => {

  return (
    <div className='px-10 py-10 bg-green-200 text-white flex justify-between items-center top-0 right-0 left-0 z-10 bg-transparent'>
      <div className='flex gap-6 justify-center items-center'>
        <img src= {HamBurger} alt="" srcset="" className='w-9 cursor-pointer rotate-180 border-2 border-black p-2 bg-black' onClick={toggleMenu} />
        <h3 className='text-base font-black text-white'>AfriChow</h3>
      </div>
      <div className='flex md:justify-center'>
        <button className='text-sm bg-[#33CC9F] rounded-sm bg-opacity-80 text-white py-1 px-5 font-black pointer'>
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
        <div className='absolute top-8 mt-4 left-12 cursor-pointer flex items-center' >
          <div className='h-3 w-20 pt-10 pr-4 flex justify-center items-center gap-3 fixed z-30' >
            <img src= { Close } alt="" srcset="" className='z-30 relative stroke-current bg-black p-2 border-2 w-20' onClick={toggleMenu} />
            <h3 className='z-30 text-black font-semibold' onClick={toggleMenu} >Menu</h3>
          </div>
          <div className='flex'>
            <h1 className='z-30 text-black flex ml-44 font-bold fixed items-center py-2'>AfriChow</h1>
          </div>
        </div>
      )}

      
      
      {/* full screen menu */}
      {menuOpen && (
        <div className='fixed top-0 left-0 right-16 bottom-0 pt-2 bg-green-50 text-black flex flex-col justify-center items-start gap-3 z-20 pl-7'>
          <ul className='text-2xl font-semibold mb-'>
            <li className='my-5 cursor-pointer' onClick={toggleDropdown}>
            <Nav_Drop />
            </li>
          </ul>
          <div className='py-1 px-7 flex items-center justify-center gap-2'>
            <p id='subscribe' className='text-xs font-semibold pl-2'>Never miss a message</p>
            <form>
              <button className='bg-green-500 text-black font-bold py-2 px-4 text-xs' type='submit'>
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