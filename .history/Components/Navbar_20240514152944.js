'use client';
import React, {useRef} from 'react';
import Link from "next/link";
import Image from "next/image";
import globalNavbar from '../Components/Navbar.module.css';
import { IoMdCart } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";

const Navbar = () => {
    const toggleCart = () => {
        if(ref.current.classList.contains('translate-x-full')){
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')
        }else if(!ref.current.classList.contains('translate-x-full')){
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('translate-x-full')
        }
    }
    const ref = useRef();
    return (
        <>
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
                                <li><Link href={"/tshirts"}>T-Shirts</Link></li>
                                <li><Link href={"/hoodies"}>Hoodies</Link></li>
                                <li><Link href={"/stickers"}>Stickers</Link></li>
                                <li><Link href={"/mugs"}>Mugs</Link></li>
                                <li><Link href={"/contact"}>Contact</Link></li>
                                <li><Link href={"/login"}>Login</Link></li>
                                <li><Link href={"/signup"}>Sign up</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div onClick={toggleCart} className={`${globalNavbar.navCol}`}>
                        <div className={`${globalNavbar.cart}`}>
                            <button className={`${globalNavbar.btnCart}`}><IoMdCart /></button>
                        </div>
                    </div>
                </div>
                
                <div ref={ref} className="sideCart fixed top-0 right-0 bottom-0 z-10 bg-slate-400 p-10 transition-transform transform translate-x-full">
                    <h2 className='font-bold text-xl'>Shopping Cart</h2>
                    <span onClick={toggleCart} className='absolute top-2 right-2 cursor-pointer text-2xl text-pink-50'><IoCloseCircle /></span>
                    <ol>
                        <li><span className='w-2/3 bg-red-50'>T-Shirt - Wear the code</span></li>
                        <li><span className='w-2/3 bg-green-50'>1</span></li>
                    </ol>
                </div>
            </nav>
        </>
    )
}

export default Navbar