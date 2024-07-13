import React from 'react'
import Image from 'next/image'
import { BackgroundBeams } from './ui/background-beams'

const Footer = () => {
  return (
    <footer className="bg-[#05020D] rounded-lg shadow ">
      <hr className=" border-[#3F3F3F] border-1" />
        <div className="w-full max-w-screen-xl p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
                    <li>
        
                        <a href="#" className="text-[16px] font-regular hover:underline hover:text-white transition-colors duration-200 me-4 md:me-6">Links</a>
                    </li>
                    <li>
                      
                      <a href="#" className="text-[16px] font-regular hover:underline hover:text-white transition-colors duration-200 me-4 md:me-6">About Us</a>
                    </li>
                    <li>
                      
                        <a href="#" className="text-[16px] font-regular hover:underline hover:text-white transition-colors duration-200 me-4 md:me-6">Imprint</a>
                    </li>
                    <li>
                        <a href="#" className="text-[16px] font-regular hover:underline hover:text-white transition-colors duration-200 me-4 md:me-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="text-[16px] font-regular hover:underline hover:text-white transition-colors duration-200 me-4 md:me-6">TeamSpeak Rules</a>
                    </li>
                    <li>
                        <a href="#" className="text-[16px] font-regular hover:underline hover:text-white transition-colors duration-200 me-4 md:me-6">Status</a>
                    </li>
                </ul>
            </div>
            <span className="block text-sm text-gray-500 sm:text-center">© 2024 Badespeak. All Rights Reserved.</span>
        </div>
         <div className="h-3 bg-light-red/[0.25] inset-x-0 rounded-full blur-2xl"></div> {/* Radient Glow */} 
    </footer>


  )
}

export default Footer