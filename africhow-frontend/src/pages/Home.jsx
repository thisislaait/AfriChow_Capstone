import React, { useState } from 'react';
import Nav from '../components/Nav';
import Hero from '../pages/Hero'; // Import the Hero component
import F_One from '../pages/Feature_One';
import F_Two from '../pages/Feature_Two';
import F_Three from '../pages/Feature_Three';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isChowDropdownOpen, setChowDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setChowDropdownOpen(false);
  };
  const toggleDropdown = () => {
    setChowDropdownOpen(!isChowDropdownOpen);
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='lg:hidden w-full bg-black-300 min-h-screen bg-opacity-25'>
      <Nav toggleMenu={toggleMenu} menuOpen={menuOpen} />
      <div className='snap-y snap-mandatory h-screen relative'>
        <Hero /> 
        <F_One />
        <F_Two />
        <F_Three />
      </div>
    </div>
  );
};

export default Home;
