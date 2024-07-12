"use client";
import React from "react";
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { handleConnectClick } from "@/utils/alerts";
import AnimatedTooltip from "./ui/animated-tooltip";

const Header: React.FC = () => {
    const router = useRouter();

    const handleLogoClick = () => {
        router.push('https://badespeak.net');
    };

    const tooltipItem = {
        id: 1,
        name: "Coming Soon",
        designation: "",
        image: "/img/user-icon.png", // Example image, replace with your own if necessary
    };

    return (
      <div className="container .sticky .top-0 mx-auto justify-between flex items-center px-12 py-3 text-[24px]">
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
            <AnimatedTooltip item={tooltipItem} />
            <button type="button" onClick={handleConnectClick} className="focus:outline-none text-white focus:ring-0 focus:ring-offset-0 font-bold rounded text-base px-4 py-1 ml-4 me-2 bg-connect-red hover:bg-rose-700">
                CONNECT
            </button>
        </div>
    </div>
    );
};

export default Header;
