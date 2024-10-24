import { useState } from 'react';
import Link from 'next/link';

export default function Headers() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-pink-50 font-sans">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-center p-5 bg-white shadow-md">
        <div className="flex justify-between items-center w-full md:w-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-pink-600">Dippin’ Donuts</h1>
          {/* Hamburger Icon for Mobile */}
          <button
            className="md:hidden block text-pink-600 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
        {/* Navigation */}
        <nav className={`${menuOpen ? 'block' : 'hidden'} md:flex w-full md:w-auto`}>
          <ul className={`flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-pink-600 mt-4 md:mt-0 bg-white md:bg-transparent p-5 md:p-0 shadow-md md:shadow-none`} >
            <li><Link href="/#home" className="hover:text-pink-500">Home</Link></li>
            <li><Link href="#about-us" className="hover:text-pink-500">About Us</Link></li>
            <li><Link href="#order-online" className="hover:text-pink-500">Order Online</Link></li>
            <li><Link href="#menu" className="hover:text-pink-500">Menu</Link></li>
            <li><Link href="#locations" className="hover:text-pink-500">Locations</Link></li>
            <li><Link href="#contact" className="hover:text-pink-500">Contact Us</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

