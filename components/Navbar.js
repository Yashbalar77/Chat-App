'use client';
import react from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { UserButton } from '@clerk/nextjs';
//import { useUser } from '@clerk/nextjs';

const Navbar = () => {
  //const user = useUser()
  //console.log(user.user)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <Link href="/" className="text-white font-bold text-xl">
          iChat
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link href="/forums" className="text-gray-300 hover:text-white">
            Forums
          </Link>
          <Link href="/userchat" className="text-gray-300 hover:text-white">
            UserChat
          </Link>
          <li className='flex justify-center items-center'>
            <UserButton/>
          </li>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-gray-800 z-10">
            <div className="flex flex-col p-4">
              <Link href="/" className="text-gray-300 hover:text-white py-2">
                Home
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white py-2">
                About
              </Link>
              <Link href="/services" className="text-gray-300 hover:text-white py-2">
                Services
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white py-2">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;