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
      <div className='lg:max-w-[1440px] lg:max-h-[99px] lg:mx-36 max-w-[430px] mx-[16px] flex justify-between items-center text-[#3D3D4E]'>
        <Link href='/'>
          <h1 className='font-extrabold text-4xl'>
          LOGO
          </h1>
        </Link>
        <ul className='hidden sm:flex lg:flex items-center lg:gap-10'>
          <li className='p-4  hover:font-bold lg:max-w-[80px]'>
            <Link href='/'>Home</Link>
          </li>
          <li className='p-4  hover:font-bold lg:max-w-[80px]'>
            <Link href='/#services'>Services</Link>
          </li>
          <li className='p-4  hover:font-bold lg:max-w-[80px]'>
            <Link href='/#refer'>Referral</Link>
          </li>
          <li className='p-4  hover:font-bold lg:max-w-[80px]'>
            <Link href='/#intro'>About</Link>
          </li>
          <button className="px-6 py-2  bg-[#3D3D4E] text-white rounded-md">
            Book an Appointment
          </button>
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
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300'
          }
        >
          <ul>
            <li onClick={handleNav} className='p-4 text-xl hover:font-bold lg:max-w-[80px]'>
              <Link href='/'>Home</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-xl hover:font-bold lg:max-w-[80px]'>
              <Link href='/#services'>Services</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-xl hover:font-bold lg:max-w-[80px]'>
              <Link href='/#refer'>Referral</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-xl hover:font-bold lg:max-w-[80px]'>
              <Link href='/#intro'>About</Link>
            </li>
            <button className="mt-6 px-6 py-2 bg-[#3D3D4E] text-white rounded-md">
            Book an Appointment
          </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
