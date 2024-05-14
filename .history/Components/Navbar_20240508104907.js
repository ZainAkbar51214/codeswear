'use client';
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import globalNavbar from '../Components/Navbar.module.css';
import { IoMdCart } from "react-icons/io";

const Navbar = () => {
    return (
        <>
        <header class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      <a class="mr-5 hover:text-white">First Link</a>
      <a class="mr-5 hover:text-white">Second Link</a>
      <a class="mr-5 hover:text-white">Third Link</a>
      <a class="hover:text-white">Fourth Link</a>
    </nav>
    <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl xl:block lg:hidden">Tailblocks</span>
    </a>
    <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Button
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </div>
</header>
            <nav className={`${globalNavbar.navContainer}`}>
                <div className={`${globalNavbar.navRow}`}>
                    <div className={`${globalNavbar.navCol}`}>
                        <div className={`${globalNavbar.navLogo}`}>
                            <Link href='/'>
                                <Image
                                    src="/vercel.svg"
                                    alt="vercel Logo"
                                    className={`${globalNavbar.vercelLogo}`}
                                    width={100}
                                    height={24}
                                    priority
                                />
                            </Link>
                        </div>
                    </div>
                    <div className={`${globalNavbar.navCol}`}>
                        <div className={`${globalNavbar.navMenu}`}>
                            <ul className={`${globalNavbar.list}`}>
                                <li><Link href={"/"}>Home</Link></li>
                                <li><Link href={"/about"}>About</Link></li>
                                <li><Link href={"/tshirts"}>T-Shirts</Link></li>
                                <li><Link href={"/mugs"}>Mugs</Link></li>
                                <li><Link href={"/contact"}>Contact</Link></li>
                                <li><Link href={"/login"}>Login</Link></li>
                                <li><Link href={"/signup"}>Sign up</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className={`${globalNavbar.navCol}`}>
                        <div className={`${globalNavbar.cart}`}>
                            <button className={`${globalNavbar.btnCart}`}><IoMdCart /></button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar