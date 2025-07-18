import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function NavbarLandingPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-gray-900 p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="flex items-center mb-4 md:mb-0">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
            <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
          </div>
          <span className="text-white text-2xl font-bold">VI-Predict</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-row space-x-8 items-center text-lg">
          <Link to="/" className="text-white hover:text-green-400 transition-colors py-2 px-4 rounded-lg focus:outline-none">
            Home
          </Link>
          <Link to="/features" className="text-white hover:text-green-400 transition-colors py-2 px-4 rounded-lg focus:outline-none">
            Features
          </Link>
          <Link to="/about" className="text-white hover:text-green-400 transition-colors py-2 px-4 rounded-lg focus:outline-none">
            About
          </Link>
          <Link to="/contact" className="text-white hover:text-green-400 transition-colors py-2 px-4 rounded-lg focus:outline-none">
            Contact
          </Link>
          <Link to="/login" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-colors">
            Sign in
          </Link>
        </div>

        {/* Toggle Button (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none z-50"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 transition-opacity duration-300 z-40 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={closeMenu}
      />

      {/* Side Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 shadow-lg z-50 transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden flex flex-col pt-8`}
      >
        {/* <button
          onClick={closeMenu}
          className="absolute top-4 right-4 text-white"
          aria-label="Close Menu"
        >
          <FaTimes size={24} />
        </button> */}
        <nav className="flex flex-col space-y-6 mt-8 px-8">
          <Link to="/" onClick={closeMenu} className="text-white hover:text-green-400 transition-colors text-lg">
            Home
          </Link>
          <Link to="/features" onClick={closeMenu} className="text-white hover:text-green-400 transition-colors text-lg">
            Features
          </Link>
          <Link to="/about" onClick={closeMenu} className="text-white hover:text-green-400 transition-colors text-lg">
            About
          </Link>
          <Link to="/contact" onClick={closeMenu} className="text-white hover:text-green-400 transition-colors text-lg">
            Contact
          </Link>
          <Link to="/login" onClick={closeMenu} className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-colors mt-4">
            Sign in
          </Link>
        </nav>
      </div>
    </nav>
  );
}