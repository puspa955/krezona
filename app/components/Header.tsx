"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar: React.FC = () => {
  const [nav, setNav] = useState<boolean>(false);
  

  const handleNav = (): void => {
    setNav(!nav);
  };

  
  return (
    <div
      className='bg-white fixed left-0 top-0 w-full z-10 ease-in duration-300 border'
    >
      <div className='max-w-[1440px] max-h-[99px] m-auto flex justify-between items-center text-[#3D3D4E]'>
        <Link href='/'>
          <h1 className='font-bold text-4xl px-5'>
          LOGO
          </h1>
        </Link>
        <ul className='hidden sm:flex'>
          <li className='p-4  hover:text-blue-500'>
            <Link href='/'>Home</Link>
          </li>
          <li className='p-4  hover:text-blue-500'>
            <Link href='/#about'>About</Link>
          </li>
          <li className='p-4  hover:text-blue-500'>
            <Link href='/#services'>Services</Link>
          </li>
          <li className='p-4  hover:text-blue-500'>
            <Link href='/#help'>Help</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20}/>
          ) : (
            <AiOutlineMenu size={20}  />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
            <li onClick={handleNav} className='p-4 text-xl hover:text-blue-500'>
              <Link href='/'>Home</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-xl hover:text-blue-500'>
              <Link href='/#about'>About</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-xl hover:text-blue-500'>
              <Link href='/services'>Services</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-xl hover:text-blue-500'>
              <Link href='/help'>Help</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
