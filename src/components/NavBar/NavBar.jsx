

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/NewKanjaAutoLOGO.png'; 

const NavBar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility

  // Determine the current page
  const isServicePage = location.pathname === '/services';
  const isContactPage = location.pathname === '/contact';

  // Set the navigation link class based on the current page
  const navLinkClass = isServicePage || isContactPage ? 'text-black' : 'text-white';

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute z-50 flex items-center justify-between w-full px-4 py-4 bg-transparent md:px-20">
      {/* Logo */}
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="object-contain h-20 md:h-24" />
      </div>

      {/* Desktop Navigation */}
      <div className="items-center hidden space-x-8 md:flex">
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className={`font-semibold ${navLinkClass} hover:text-yellow-500 transition-colors duration-300`}>
              Vehicle Recover Nottingham & UK Nationwide
            </Link>
          </li>
          <li>
            <Link to="/services" className={`font-semibold ${navLinkClass} hover:text-yellow-500 transition-colors duration-300`}>
              Our Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className={`font-semibold ${navLinkClass} hover:text-yellow-500 transition-colors duration-300`}>
              Contact Us
            </Link>
          </li>
        </ul>
        <button className="px-4 py-2 font-bold text-black transition duration-300 bg-yellow-500 rounded hover:bg-black hover:text-white">
          Call 24/7: 0730 1977207
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex md:hidden">
        <button onClick={toggleMenu} className="text-2xl text-yellow-500">&#9776;</button> {/* Hamburger icon in dark black */}
      </div>

      {/* Mobile Menu Navigation */}
      {isMenuOpen && (
        <div className="absolute left-0 w-full p-4 bg-gray-800 top-16 md:hidden">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link to="/" className={`font-semibold text-white hover:text-yellow-500`} onClick={() => setIsMenuOpen(false)}>
                Vehicle Recover Nottingham & UK Nationwide
              </Link>
            </li>
            <li>
              <Link to="/services" className={`font-semibold text-white hover:text-yellow-500`} onClick={() => setIsMenuOpen(false)}>
                Our Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`font-semibold text-white hover:text-yellow-500`} onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="flex justify-center mt-4">
            <button className="px-4 py-2 font-bold text-black transition duration-300 bg-yellow-500 rounded hover:bg-black hover:text-white">
              Call 24/7: 0730 1977207
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

