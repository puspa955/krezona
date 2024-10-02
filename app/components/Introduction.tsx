import React from 'react';
import Image from 'next/image';
import intro from '../../public/intro.png';
import { IoCheckmarkCircle } from "react-icons/io5";

export default function Check() {
  return (
    <div className='lg:max-w-[1440px] lg:max-h-[1000px] lg:mx-[120px] max-w-[430px] mx-[20px] text-gray-800 flex items-center justify-center flex-col'>
      <div className="grid lg:grid-cols-3 gap-8 lg:mt-40">
        
        {/* First Grid - Content */}
        <div className="flex flex-col gap-4">
          <h2 className="lg:text-[35px] text-[24px] font-semibold mt-16">Empowering Independence, Together</h2>
          <p className="lg:text-[24px] text-[16px] text-gray-800 ">
            Impact care seeks to provide good quality services for people with disabilities.
          </p>
          
          <p className='flex items-center gap-2 pt-4 lg:text-[25px] text-[16px] text-gray-800 font-bold'>
            <IoCheckmarkCircle className='text-[#3D3D4E] lg:size-7 size-5' />15+ Years of excellence
          </p>
          <p className='flex items-center gap-2 pt-3 lg:text-[25px] text-[16px] text-gray-800 font-bold'>
            <IoCheckmarkCircle className='text-[#3D3D4E] lg:size-7 size-5' />A Multispeciality hospital
          </p>
          <p className='flex items-center gap-2 pt-3 lg:text-[25px] text-[16px] text-gray-800 font-bold'>
            <IoCheckmarkCircle className='text-[#3D3D4E] lg:size-7 size-5' />24/7 Hour Medical Service
          </p>
          <p className='flex items-center gap-2 pt-3 lg:text-[25px] text-[16px] text-gray-800 font-bold'>
            <IoCheckmarkCircle className='text-[#3D3D4E] lg:size-7 size-5' />A team of professionals
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
            height={145} 
            width={248} 
            src={intro} 
            loading="eager" 
            alt="Intro Image" 
            className="lg:hidden rounded-full"
          />
        </div>

        {/* Third Grid - Same Content as First */}
        <div className="flex flex-col gap-4">
         
          <p className="lg:text-[24px] text-[16px] text-gray-800 lg:mt-40">
            Impact care seeks to provide good quality services for people with disabilities.
          </p>
          
        </div>

      </div>
    </div>
  );
}