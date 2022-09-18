import Image from 'next/image'
import { HiHome, HiChartBar, HiClock, HiDotsHorizontal } from "react-icons/hi"
import { BsSearch } from "react-icons/bs";
import { FaMicrophoneAlt } from "react-icons/fa";
import React from 'react'

function Sidebar() {
  return (
    <section className="fixed top-0 z-40  flex flex-col p-4 items-center shrink-0  bg-black w-[50px] md:w-[80px]
    h-screen space-y-8 drop-shadow-md">
        <Image 
            src="https://rebrand.ly/af77f9"
            width={52}
            height={52}
            alt=""
            objectFit='contain'
            className='cursor-pointer'
        />
    <div className='space-y-8 shrink-0 md:shrink'>
        <HiHome className='text-white h-7 w-7 cursor-pointer'/>
        <BsSearch className='text-white h-6 w-6 opacity-70 cursor-pointer hover:opacity-100' />
        <FaMicrophoneAlt className='text-white h-6 w-6 opacity-70 cursor-pointer hover:opacity-100' />
        <HiChartBar className='text-white h-6 w-6 opacity-70 cursor-pointer hover:opacity-100'/>
        <HiClock className='text-white h-6 w-6 opacity-70 cursor-pointer hover:opacity-100'/>
        <HiDotsHorizontal className='text-white h-6 w-6 opacity-70 cursor-pointer hover:opacity-100'/>

    </div>
        
    </section>

  )
}

export default Sidebar