"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { IconContext } from 'react-icons';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoGithub } from 'react-icons/io';


const Footer = () => {
  const [status, setStatus] = useState('Checking...');

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch('/api/status');
        const data = await res.json();
        setStatus(data.status === 'healthy' ? 'Healthy' : 'Unhealthy');
      } catch (error) {
        console.error('Failed to fetch status:', error);
        setStatus('Status - Unknown');
      }
    };

    fetchStatus();

    // Poll every 60 seconds
    const interval = setInterval(fetchStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer>
      <hr className="border-[#151515] border-xs" />
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="md:mb-0">
            <a className="flex items-center">
              <Image src="/img/LOGO_white.svg" width={40} height={39.51} className="h-10 me-3" alt="Badespeak Logo" />
              <div className="self-center whitespace-normal">
                <span className="font-bold text-[24px] cursor-pointer">BADE</span>
                <span className="font-light text-[24px] cursor-pointer">SPEAK</span>
              </div>
            </a>
            <div className="ps-1">
              <div className="font-light text-[13px] pt-2 pb-0 text-[#686868]">
                A project by{' '}
                <a href="https://x.com/badespeakowner" target="_blank" className="text-[#0070F3]">
                  @badespeakowner
                </a>
              </div>
              <div className="font-light text-[13px] text-[#686868]">© 2024 Badespeak</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-48 sm:gap-28 sm:grid-cols-3">
            <div>
              <h2 className="mb-2 text-[20px] font-bold text-white">Links</h2>
              <ul className="text-[#686868] font-normal">
                <li className="hover:text-white">
                  <a href="https://status.badespeak.net/" target="_blank">
                    Status <span className={status === 'Healthy' ? 'text-[#0070F3]' : 'text-[#F00]'}>• {status}</span>
                  </a>
                </li>
                <li className="mb-1">
                  <a href="https://Badespeak.net/ts3-rules" className="hover:text-white">
                    TeamSpeak Rules
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2 text-[20px] font-bold text-white">About Us</h2>
              <ul className="text-[#686868] font-normal">
                <li className="mb-1">
                  <a href="https://Badespeak.net/imprint" className="hover: hover:text-white">
                    Imprint
                  </a>
                </li>
                <li>
                  <a href="https://Badespeak.net/privacy-policy" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex mt-0 sm:justify-center mb-16">
              <a href="https://x.com/badespeak" target="_blank" className="text-gray-500 hover:text-white ms-5">
                <IconContext.Provider value={{ color: "#686868", className: "contactIcon" }}>
                  <FaXTwitter size={20} />
                </IconContext.Provider>
              </a>
              <a href="https://github.com/Badespeak" target="_blank" className="text-gray-500 hover:text-white ms-5">
                <IconContext.Provider value={{ color: "#686868", className: "contactIcon" }}>
                  <IoLogoGithub size={20} />
                </IconContext.Provider>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="h-3 bg-light-red/[0.25] inset-x-0 rounded-full blur-2xl"></div> {/* Radient Glow */}
    </footer>
  );
};

export default Footer;
