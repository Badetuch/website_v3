import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer>
      <hr className="border-[#151515] border-xs" />
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a className="flex items-center">
              <Image src="/img/LOGO_white.svg" width={40} height={39.51} className="h-8 me-3" alt="Badespeak Logo" />
              <div className="self-center whitespace-nowrap">
                <span className="font-bold text-[24px] cursor-pointer">BADE</span>
                <span className="font-light text-[24px] cursor-pointer">SPEAK</span>
              </div>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-[20px] font-bold text-white ">Links</h2>
              <ul className="text-[#686868] font-normal">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline hover:text-white">Privacy Policy</a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" className="hover:underline hover:text-white">TeamSpeak Rules</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-[20px] font-bold text-white ">About Us</h2>
              <ul className="text-[#686868] font-normal">
                <li className="mb-4">
                  <a href="https://github.com/Badespeak" className="hover:underline hover:text-white">Imprint</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 Badespeak</span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="https://x.com/badespeak" target='_blank' className="text-gray-500 hover:text-white ms-5">
              <Image src="/img/x_logo.svg" width={20} height={20} alt="X Logo" />
            </a>
            <a href="https://github.com/Badespeak" target="_blank" className="text-gray-500 hover:text-white ms-5">
              <Image src="/img/github_logo.svg" width={20} height={20} alt="GitHub Logo" />
            </a>
          </div>
        </div>
      </div>
      <div className="h-3 bg-light-red/[0.25] inset-x-0 rounded-full blur-2xl"></div> {/* Radient Glow */}
    </footer>
  );
}

export default Footer;
