"use client";
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { handleConnectClick } from "@/utils/alerts";
import {Tooltip} from "@nextui-org/tooltip";

const Header: React.FC = () => {
    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);

    const handleLogoClick = () => {
        return <link href='/'/>
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const placements = [
        "top-start",
        "top",
        "top-end",
        "bottom-start",
        "bottom",
        "bottom-end",
        "left-start",
        "left",
        "left-end",
        "right-start",
        "right",
        "right-end",
      ];

      const colors = ["default", "primary", "secondary", "success", "warning", "danger", "foreground"];

    return (
        <div className={`sticky top-0 z-50 transition duration-500 ${isScrolled ? ' bg-opacity-70 backdrop-blur-sm' : ''}`}>
            <div className="container mx-auto justify-between flex items-center px-12 pt-3 text-[24px]">
                <div className="flex items-center">
                    <div className="pl-16 pr-3">
                        <Image
                            src="/img/LOGO.svg"
                            width={47}
                            height={47}
                            alt="Logo"
                            quality={100}
                            unoptimized={true}
                            onClick={handleLogoClick}
                            className="cursor-pointer"
                        />
                    </div>
                    <span className="font-bold cursor-pointer" onClick={handleLogoClick}>BADE</span>
                    <span className="font-light cursor-pointer" onClick={handleLogoClick}>SPEAK</span>
                </div>
                <div className="flex items-center text-right font-medium px-12 text-[18px]">
                <div className="relative mr-2">
                    <Tooltip
                        content={
                            <div className="flex items-center justify-center h-full">
                                Coming soon
                            </div>
                        }
                    showArrow={true}
                    placement="bottom"
                    size="sm"
                    className="bg-tooltip-grey bg-opacity-60 text-white rounded-md shadow-xl text-sm h-7 w-28">
                        <span className="cursor-pointer">Log In</span>
                    </Tooltip>
                </div>

                    <button
                        type="button"
                        onClick={handleConnectClick}
                        className="focus:outline-none text-white focus:ring-0 focus:ring-offset-0 font-bold rounded text-base px-4 py-1 ml-4 me-2 bg-connect-red hover:bg-rose-700"
                    >
                        CONNECT
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
