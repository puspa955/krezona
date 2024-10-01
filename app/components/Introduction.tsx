import React from 'react';
import Image from 'next/image';
import intro from '../../public/intro.png';
import { IoCheckmarkCircle } from "react-icons/io5";

export default function Check() {
  return (
    <div className='text-gray-800 flex items-center justify-center flex-col relative pb-20 lg:px-4'>
      <div className="grid lg:grid-cols-3 gap-8 lg:px-36">
        
        {/* First Grid - Content */}
        <div className="flex flex-col gap-4">
          <h2 className="text-[35px] font-semibold mt-14">Empowering Independence, Together</h2>
          <p className="text-[24px] text-gray-800">
            Impact care seeks to provide good quality services for people with disabilities.
          </p>
          
          <p className='flex items-center gap-2 pt-4 text-[25px] text-gray-800 font-bold'>
            <IoCheckmarkCircle className='text-[#3D3D4E] size-7' />15+ Years of excellence
          </p>
          <p className='flex items-center gap-2 pt-3 text-[25px] text-gray-800 font-bold'>
            <IoCheckmarkCircle className='text-[#3D3D4E] size-7' />A Multispeciality hospital
          </p>
          <p className='flex items-center gap-2 pt-3 text-[25px] text-gray-800 font-bold'>
            <IoCheckmarkCircle className='text-[#3D3D4E] size-7' />24/7 Hour Medical Service
          </p>
          <p className='flex items-center gap-2 pt-3 text-[25px] text-gray-800 font-bold'>
            <IoCheckmarkCircle className='text-[#3D3D4E] size-7' />A team of professionals
          </p>
          
        </div>

        {/* Second Grid - Image */}
        <div className="flex justify-center items-center">
          <Image 
            height={600} 
            width={500} 
            src={intro} 
            loading="eager" 
            alt="Intro Image" 
            className="hidden lg:block rounded-full"
          />
          <Image 
            height={200} 
            width={330} 
            src={intro} 
            loading="eager" 
            alt="Intro Image" 
            className="lg:hidden"
          />
        </div>

        {/* Third Grid - Same Content as First */}
        <div className="flex flex-col gap-4 mt-28">
         
          <p className="text-[24px] text-gray-800">
            Impact care seeks to provide good quality services for people with disabilities.
          </p>
          
        </div>

      </div>
    </div>
  );
}