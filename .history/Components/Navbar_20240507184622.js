'use client';
import React from 'react';
import Link from "next/link";
import Image from "next/image";
// import "../Components/Navbar.module.css"
import '@Components/Navbar.module.css'

const Navbar = () => {
    return (
        <>
            <nav className="navContainer">
                <div className="navRow">
                    <div className="navCol">
                        <div className="navLogo">
                            <Link href='/'>
                                <Image
                                    src="/vercel.svg"
                                    alt="vercel Logo"
                                    className="vercelLogo"
                                    width={100}
                                    height={24}
                                    priority
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="navCol">
                        <div className="navMenu">
                            <ul className="list">
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

                    <div className="navCol">
                        <div className="cart">
                            <button>Cart</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar