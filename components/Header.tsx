import React from "react";
import Image from 'next/image'

const Header: React.FC = () => {
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
        <button type="button" className="focus:outline-none text-white hover:bg-red-800 focus:ring-0 focus:ring-offset-0 font-bold rounded text-base px-4 py-1 ml-4 me-2 dark:bg-connect-red dark:hover:bg-rose-600">
            CONNECT
            </button>
        </div>
    </div>
    );
  };
  
  export default Header;