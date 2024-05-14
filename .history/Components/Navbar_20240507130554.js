'use client';
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import globalNavbar from "../Components/navbar.module.css";

const Navbar = () => {
    return (
        <>
            <nav className={globalNavbar.navContainer}>
                <div className={globalNavbar.navRow}>
                    <div className={globalNavbar.col1}>
                        <div className={globalNavbar.navLogo}>
                            <Link href='/'>
                                <Image
                                    src="/vercel.svg"
                                    alt="vercel Logo"
                                    className={globalNavbar.vercelLogo}
                                    width={100}
                                    height={24}
                                    priority
                                />
                            </Link>
                        </div>
                    </div>
                    <div className={globalNavbar.col2}>
                        <div className={globalNavbar.navMenu}>
                            <ul className={globalNavbar.list}>
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

                    <div className={globalNavbar.col3}>
                        <div className={globalNavbar.cart}>
                            <button>Cart</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar