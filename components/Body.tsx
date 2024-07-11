"use client"
import React from 'react';
import { CustomButton } from '@/components/ui/moving-border';
import { StaticButton } from './ui/staticButton';
import Image from 'next/image';
import Swal from 'sweetalert2'


const Body = () => {

const handleConnectClick = () => {
  Swal.fire({
      title: 'WARNING',
      html: `
      <div style="font-weight: Normal">
          By connecting, you are accepting our <a href="/terms" target="_blank" style='color:#F5284A;'>Terms of Service</a> and <a href="/privacy" target="_blank" style='color:#F5284A;'>Privacy Policy</a>.
      </div>
  `,
      //text: 'By connecting, you are accepting our hrefToS and privacy policy. ',
      icon: 'info',
      color: '#fff',
      showCancelButton: true,
      denyButtonText: 'Abort',
      confirmButtonText: 'CONNECT',
      confirmButtonColor: '#F5284A', 
      background: '#1A1A1B',
      customClass: {
          title: 'custom-title',
      }
  }).then((result) => {
      if (result.isConfirmed) {
          window.location.href = 'ts3server://badespeak.net?port=9987';
          Swal.fire({
              title: "CONNECTED!",
              color: '#fff',
              text: "Please confirm the connection popup in your browser. Have fun!",
              icon: "success",
              confirmButtonColor: '#F5284A', 
              background: '#1A1A1B',
              customClass: {
                  title: 'custom-title',
              }

          });
      }
  });
};


  return (
    <div className="py-64 px-4 mx-auto max-w-fit text-center">
      <div className='mb-4 leading-none md:text-5xl lg:text-6xl'>
        <span className="text-[110px] text-red-500 font-bold">X </span>
        <span className="text-[110px] font-bold">online Users</span>
         <div className="text-[25px] py-3 tracking-normal leading-8 font-normal max-w-4xl text-second-text">
          A community like no other with never seen before features, such as
          verification, trustfactor, report- and ban-function and much more.
        </div>
        <div>
      <CustomButton
        borderRadius="1rem"
        onClick={handleConnectClick}
        className="bg-transparent text-white font-normal text-[23px] border-connect-red hover:bg-connect-red active:bg-rose-800 transition-colors duration-300"
      >
        <div className='pr-3'>
        <Image src='/img/LOGO_white.png' alt='Icon' width={21} height={21} /></div>
        JOIN NOW
      </CustomButton>
      <StaticButton
        borderRadius="1rem"
        className="bg-white shadow-[0_0px_30px_-4px_rgba(255,255,255,255)] pt-1 text-black font-normal text-[23px] hover:border-transparent border-white hover:text-white hover:bg-transparent active:border-white active:text-white transition-colors duration-300 active:border"
      >
        Live Viewer
      </StaticButton>
      </div>
    </div>
      </div>
  );
};

export default Body;
