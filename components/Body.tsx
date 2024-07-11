"use client"
import React from 'react';
import { CustomButton } from '@/components/ui/moving-border';
import { StaticButton } from './ui/staticButton';
import Image from 'next/image';
import Swal from 'sweetalert2';


const Body = () => {

  const handleConnectClick = () => {
    Swal.fire({
      title: 'WARNING',
      html: `
      <div style="font-weight: Normal">
          By connecting, you are accepting our <a href="/terms" target="_blank" style='color:#F5284A;'>Terms of Service</a> and <a href="/privacy" target="_blank" style='color:#F5284A;'>Privacy Policy</a>.
      </div>
  `,
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

  const handleLiveViewerClick = () => {
    const div = document.createElement("div");
    div.setAttribute("class", "ts3index-viewer");
    div.setAttribute("data-serverid", "298545");
    div.setAttribute("data-autoreload", "true");
    div.setAttribute("data-style", "bgcolor=1A1A1B&font=Verdana&color=FFFFFF");

    const link = document.createElement("a");
    link.href = "https://ts3index.com/?page=server&id=298545";
    link.appendChild(document.createTextNode("Please Refresh"));
    div.appendChild(link);

    const c = document.createElement("script");
    c.type = "text/javascript";
    c.async = true;
    c.src = "https://ts3index.com/viewer/script.js";

    const s = document.getElementsByTagName("script")[0];
    if (s && s.parentNode) {
      s.parentNode.insertBefore(c, s);
    }

    Swal.fire({
      html: div.outerHTML, // Use outerHTML to include the entire div structure
      customClass: {
        popup: 'salert'
      },
      confirmButtonColor: '#F5284A', 
      background: '#1A1A1B',
      confirmButtonText: 'Close',
    });
  };

  return (
    <div className="py-[260px] px-4 mx-auto max-w-fit content-center text-center">
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
              <Image src='/img/LOGO_white.png' alt='Icon' width={21} height={21} />
            </div>
            JOIN NOW
          </CustomButton>
          <StaticButton
            borderRadius="1rem"
            className="bg-white ml-16 my-6 shadow-[0_0px_30px_-4px_rgba(255,255,255,255)] pt-1 text-black font-normal text-[23px] hover:border-transparent border-white hover:text-white hover:bg-transparent active:border-white active:text-white transition-colors duration-300 active:border"
            onClick={handleLiveViewerClick}
          >
            Live Viewer
          </StaticButton>
        </div>
      </div>
    </div>
  );
};

export default Body;
