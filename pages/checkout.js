import React from 'react';
import Link from 'next/link';
import { IoBagCheck } from "react-icons/io5";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const checkout = ({ cart, subTotal, addToCart, removeToCart }) => {
    return (
        <div className='container m-auto'>
            <h1 className='font-bold text-3xl my-8 text-center'>checkout</h1>
            <h2>1. Delivery Details</h2>
            <div className="mx-auto flex my-4">
                <div className="px-2 w-1/2">
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <div className="px-2 w-1/2">
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
            </div>
            <div className="px-2 w-full">
                <div className="relative mb-4">
                    <label htmlFor="address" className="leading-7 text-sm text-gray-600">Message</label>
                    <textarea name='address' id="address" cols="30" rows="10" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
            </div>

            <div className="mx-auto flex my-4">
                <div className="px-2 w-1/2">
                    <div className="relative mb-4">
                        <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
                        <input type="phone" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <div className="px-2 w-1/2">
                    <div className="relative mb-4">
                        <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
                        <input type="text" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
            </div>

            <div className="mx-auto flex my-4">
                <div className="px-2 w-1/2">
                    <div className="relative mb-4">
                        <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
                        <input type="text" id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <div className="px-2 w-1/2">
                    <div className="relative mb-4">
                        <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">PinCode</label>
                        <input type="text" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
            </div>

            <h2 className='font-semibold text-xl'>2. Review Cart Items & Pay</h2>
            <div className="sideCart z-10 bg-slate-800 px-8 py-10 ">
                <ol className='list-decimal text-white'>
                    {Object.keys(cart).length == 0 && <div className='m-2'>Your cart is Empty!</div>}
                    {Object.keys(cart).map((k) => {
                        return <li key={k}>
                            <div className='item flex my-5'>
                                <div className='w-2/3 font-semibold'>{cart[k].name}</div>
                                <div className='flex items-center justify-center font-semibold w-1/3'><CiCircleMinus onClick={() => { removeToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='mx-1 text-2xl cursor-pointer' /> {cart[k].qty} <CiCirclePlus onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='mx-1 text-pink-400 text-2xl cursor-pointer' /></div>
                            </div>
                        </li>
                    })}
                </ol>
                <span className='font-bold text-white'>Subtotal: ${subTotal}</span>
            </div>
            <div className="m-4">
                <Link href={'/checkout'}><button className="flex items-center gap-2 text-white bg-slate-500 border-0 py-2 px-4 focus:outline-none hover:bg-slate-600 rounded text-lg"><IoBagCheck /> Pay ${subTotal}</button></Link>
            </div>

        </div>
    )
}

export default checkout