"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
    {
        title: "HOME",
        path: "#home",
    },
    {
        title: "ABOUT US",
        path: "#about",
    },
    {
        title: "GALLERY",
        path: "#projects",
    },
    {
        title: "CONTACT",
        path: "#contact",
    },
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
    <nav className="fixed mx-auto border border-[#000000] top-0 left-0 right-0 z-10 bg-black bg-opacity-100">
        <div className="flex container lg:py-4 flex-wrap items-center justify-normal     mx-auto px-4 py-2">
            <Link
                href={"/"}
                className="text-2xl md:text-5xl text-white font-semibold"
            >
            <Image
                src="/images/nakaeng-muay-thai-logo.jpg"
                alt="logo image"
                className='rounded-full w-[80px] h-[80px] relative lg:w-[120px] lg:h-[100px] ml-4 lg:ml-15 mt-4 mb-3 mr-20'
                width={100}
                height={100}
            />
            </Link>

            <div className='mobile-menu block md:hidden'>
                {
                !navbarOpen ? (
                    <button onClick = {() => setNavbarOpen(true)}
                    className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                    <Bars3Icon className='h-5 w-5' />
                    </button>
                    ) : (
                    <button onClick = {() => setNavbarOpen(false)}
                    className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                    <XMarkIcon className='h-5 w-5' />
                    </button>
                    )
                    }
            </div>

            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className="flex p-4 pr-10 md:p-0 md:flex-row md:space-x-8 mt-0 ">
                {navLinks.map((link, index) => (
                    <li key={index}>
                    <NavLink href={link.path} title={link.title} />
                    </li>
                ))}
                </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
    );
};

export default Navbar;