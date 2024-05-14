'use client';
import React, { useRef, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import globalNavbar from '../Components/Navbar.module.css';
import { IoMdCart } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";
import { CiCirclePlus, CiCircleMinus  } from "react-icons/ci";

const Navbar = () => {
    const [count, setCount] = useState(0);

    const inc = () => {
        setCount(count + 1);
    }
    const desc = () => {
        if(count <= 0){
            setCount(0)
        }
        else{
            setCount(count - 1);
        }
    }

    const toggleCart = () => {
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')
        } else if (!ref.current.classList.contains('translate-x-full')) {
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

                <div ref={ref} className="w-80 sideCart fixed top-0 right-0 bottom-0 z-10 bg-slate-800 px-8 py-10 transition-transform transform translate-x-full">
                    <h2 className='font-bold text-xl text-white'>Shopping Cart</h2>
                    <span onClick={toggleCart} className='absolute top-2 right-2 cursor-pointer text-2xl text-pink-50'><IoCloseCircle /></span>
                    <ol className='list-decimal text-white'>
                        <li>
                            <div className='item flex my-5'>
                                <div className='w-2/3 font-semibold'>T-Shirt - Wear the code</div>
                                <div className='flex items-center justify-center font-semibold w-1/3'><CiCircleMinus onClick={desc} className='mx-1 text-2xl cursor-pointer' /> {count} <CiCirclePlus onClick={inc} className='mx-1 text-pink-400 text-2xl cursor-pointer' /></div>
                            </div>
                        </li>
                        <li>
                            <div className='item flex my-5'>
                                <div className='w-2/3 font-semibold'>T-Shirt - Wear the code</div>
                                <div className='flex items-center justify-center font-semibold w-1/3'><CiCircleMinus onClick={desc} className='mx-1 text-2xl cursor-pointer' /> {count} <CiCirclePlus onClick={inc} className='mx-1 text-pink-400 text-2xl cursor-pointer' /></div>
                            </div>
                        </li>
                        <li>
                            <div className='item flex my-5'>
                                <div className='w-2/3 font-semibold'>T-Shirt - Wear the code</div>
                                <div className='flex items-center justify-center font-semibold w-1/3'><CiCircleMinus onClick={desc} className='mx-1 text-2xl cursor-pointer' /> {count} <CiCirclePlus onClick={inc} className='mx-1 text-pink-400 text-2xl cursor-pointer' /></div>
                            </div>
                        </li>
                        <li>
                            <div className='item flex my-5'>
                                <div className='w-2/3 font-semibold'>T-Shirt - Wear the code</div>
                                <div className='flex items-center justify-center font-semibold w-1/3'><CiCircleMinus onClick={desc} className='mx-1 text-2xl cursor-pointer' /> {count} <CiCirclePlus onClick={inc} className='mx-1 text-pink-400 text-2xl cursor-pointer' /></div>
                            </div>
                        </li>
                        
                    </ol>
                    <button className="flex mx-auto mt-16 text-white bg-slate-500 border-0 py-2 px-8 focus:outline-none hover:bg-slate-600 rounded text-lg">Checkout</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar