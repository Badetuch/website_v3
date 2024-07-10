"use client"
import React from "react";
import Image from 'next/image'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
    const router = useRouter();

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

    const handleLogoClick = () => {
        router.push('https://badespeak.net');
    };

    return (
      <div className="container mx-auto justify-between flex items-center px-12 py-3 text-[24px]">
        <div className="flex items-center">
            <div className="pr-3">
            <Image
                src="/img/LOGO.png"
                width={47}
                height={47}
                alt="Logo"
                quality={100}
                unoptimized= {true}
                onClick={handleLogoClick}
                className="cursor-pointer"
            />
        </div>
        <span className="font-bold cursor-pointer" onClick={handleLogoClick}>BADE</span>
        <span className="font-light cursor-pointer" onClick={handleLogoClick}>SPEAK</span>
        </div>
        <div className="flex items-center text-right font-medium px-12 text-[18px]">
            <span className="px-2">Log in</span>
        <button type="button" onClick={handleConnectClick} className="focus:outline-none text-white focus:ring-0 focus:ring-offset-0 font-bold rounded text-base px-4 py-1 ml-4 me-2 bg-connect-red hover:bg-rose-700">
            CONNECT
            </button>
        </div>
    </div>
    );
  };
  
  export default Header;