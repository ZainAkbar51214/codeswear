'use client';
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import globalnavbar from "../Components/navbar.module.css";

const Navbar = () => {
    return (
        <>
            <nav className={globalnavbar.navContainer}>
                <div className={globalnavbar.navRow}>
                    <div className={globalnavbar.logoCol}>
                        <div className={globalnavbar.navLogo}>
                            <Link href='/'>
                                <Image
                                    src="/vercel.svg"
                                    alt="vercel Logo"
                                    className={globalnavbar.vercelLogo}
                                    width={100}
                                    height={24}
                                    priority
                                />
                            </Link>
                        </div>
                    </div>
                    <div className={globalnavbar.navCol}>
                        <div className={globalnavbar.navMenu}>
                            <ul className={globalnavbar.list}>
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

                    <div className={globalnavbar.cartCol}>
                        <div className={globalnavbar.cart}>
                            <button>Cart</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar