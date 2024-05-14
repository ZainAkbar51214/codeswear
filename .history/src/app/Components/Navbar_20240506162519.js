'use client';
import React from 'react';
import Link  from "next/link";
import Image from "next/image";
import globalnavbar from "../Components/navbar.module.css";

const Navbar = () => {
    return (
        <>
            <nav className={globalnavbar.navContainer}>
                <div className={globalnavbar.navRow}>
                    <div className={globalnavbar.navCol}>
                        <div className={globalnavbar.navLogo}>
                            <Image
                                src="/vercel.svg"
                                alt="vercel Logo"
                                className={globalnavbar.vercelLogo}
                                width={100}
                                height={24}
                                priority
                            />
                        </div>
                    </div>
                    <div className={globalnavbar.navCol}>
                        <div className={globalnavbar.navMenu}>
                            <ul>
                                <li><Link href={"/"}>Home</Link></li>
                                <li><Link href={"/about"}>About</Link></li>
                                <li><Link href={"/tshirts"}>Blogs</Link></li>
                                <li><Link href={"/contact"}>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar