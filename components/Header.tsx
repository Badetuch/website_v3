"use client"
import React from "react";
import Image from 'next/image'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Header: React.FC = () => {

    const handleConnectClick = () => {
        Swal.fire({
            title: 'WARNING',
            html: `
            <div>
                By connecting, you are accepting our <a href="/terms" target="_blank" style='color:#F5284A;'>Terms of Service</a> and <a href="/privacy" target="_blank" style='color:#F5284A;'>Privacy Policy</a>.
            </div>
        `,
            //text: 'By connecting, you are accepting our hrefToS and privacy policy. ',
            icon: 'info',
            color: '#fff',
            showCancelButton: true,
            denyButtonText: 'Abort',
            confirmButtonText: 'Connect',
            confirmButtonColor: '#F5284A', 
            background: '#1A1A1B',
            customClass: {
                title: 'custom-title',
            }
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'ts3server://badespeak.net?port=9987';
                Swal.fire({
                    title: "Connected!",
                    text: "Please confirm the connection popup in your browser",
                    icon: "success",
                });
            }
        });
    };
    return (
      <div className="container mx-auto justify-between flex items-center font-sans px-12 py-3 text-2xl">
        <div className="flex items-center">
            <div className="pr-3">
            <Image
                src="/img/LOGO.png"
                width={47}
                height={47}
                alt="Logo"
                quality={100}
                unoptimized= {true}
            />
        </div>
        <span className="font-bold">BADE</span>
        <span className="font-light">SPEAK</span>
        </div>
        <div className="flex items-center text-right font-sans font-medium px-12 text-lg">
            <span className="px-2">Log in</span>
        <button type="button" onClick={handleConnectClick} className="focus:outline-none text-white hover:bg-rose-600 focus:ring-0 focus:ring-offset-0 font-bold rounded text-base px-4 py-1 ml-4 me-2 dark:bg-connect-red dark:hover:bg-rose-600">
            CONNECT
            </button>
        </div>
    </div>
    );
  };
  
  export default Header;