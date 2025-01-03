"use client"

import Image from 'next/image';
import React, { useRef } from 'react';
import { AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import minus from '../../Components/ShopDetails/Minus.png';
import plus from '../../Components/ShopDetails/Plus.png';
import { TiDeleteOutline } from 'react-icons/ti';
import { useStateContext } from '../../context/StateContext'
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';

const Cart = () => {
    const cartRef = useRef<HTMLDivElement | null>(null);
    const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext()

    return (
        <div ref={cartRef} className='w-screen bg-black text-black bg-opacity-50 fixed right-0 top-0 z-[100] transition-all duration-1000 ease-in-out'>
            <div className='h-screen w-[600px] bg-white float-right p-[40px_10px] relative'>
                <button type='button' className='flex items-center text-[18px] font-medium cursor-pointer gap-2 ml-2 border-none bg-transparent' onClick={() => setShowCart(false)}>
                    <AiOutlineLeft />
                    <span className='text-black text-center'>Your Cart</span>
                    <span className='ml-3 text-[#f02d34]'>({totalQuantities} items)</span>
                </button>

                {cartItems.length < 1 && (
                    <p className="m-10 text-center flex flex-col items-center justify-center">
                        <AiOutlineShopping size={150} className="" />
                        <h3 className="mt-4 text-lg font-medium">Your cart is empty</h3>
                        <Link href="/">
                            <button
                                type="button"
                                className="mt-6 px-4 py-2 bg-[#FF9F0D] text-white rounded"
                                onClick={() => setShowCart(false)}
                            >
                                Continue Shopping
                            </button>
                        </Link>
                    </p>
                )}

                <div className='mt-4 overflow-auto max-h-[70vh] p-[20px_10px] space-y-4'>
                    {cartItems.length >= 1 && cartItems.map((items) => (
                        <div key={items._id} className="flex gap-6 p-5 rounded-lg border border-gray-200 bg-white">
                            {/* Image Section */}
                            <div className="overflow-hidden w-24 h-24 flex-shrink-0">
                                <Image
                                    src={items.image ? urlFor(items.image).url() : ""}
                                    alt={items.name}
                                    className="object-cover h-full"
                                    width={96}
                                    height={96}
                                />
                            </div>

                            {/* Details Section */}
                            <div className="flex flex-col flex-1 justify-between">
                                {/* Product Name and Price */}
                                <div className="flex justify-between items-center mb-4">
                                    <h5 className="text-lg font-semibold text-gray-800">{items.name}</h5>
                                    <h4 className="text-xl font-bold text-gray-900">${items.price}.00</h4>
                                </div>

                                {/* Quantity Selector */}
                                <div className="flex justify-between">
                                    <div className='flex items-center gap-x-4'>
                                        <span className="text-gray-600 text-sm">Quantity:</span>
                                        <div className='flex items-center gap-x-4'>
                                            <div className="flex items-center border border-[#828282]">
                                                <button className="px-4 py-[19px] border-r h-full border-[#828282]" onClick={() => toggleCartItemQuantity(items._id, 'dec')}>
                                                    <Image src={minus} alt="minus" />
                                                </button>
                                                <span
                                                    className="px-4 text-center text-[#333333] text-xl font-medium">
                                                    {items.quantity}
                                                </span>
                                                <button className="px-4 py-[10px] border-l h-full border-[#828282]" onClick={() => toggleCartItemQuantity(items._id, 'inc')}>
                                                    <Image src={plus} alt="plus" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <button className='text-2xl text-[#f02d34] cursor-pointer bg-transparent border-none' onClick={() => onRemove(items)}><TiDeleteOutline /></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {cartItems.length >= 1 && (
                    <div className='absolute bottom-2 right-1 w-full px-[65px] py-[30px]'>
                        <div className='flex justify-between'>
                            <h3>SubTotal:</h3>
                            <h3>${totalPrice}.00</h3>
                        </div>
                        <div className='flex justify-between'>
                            <h3>Shipping Fee</h3>
                            <h3>$10.00</h3>
                        </div>
                        <hr className="border-gray-300 my-2" />
                        <div className='flex justify-between'>
                            <h2 className='font-bold text-lg'>Total</h2>
                            <h2 className='font-bold text-lg'>${(totalPrice + 10).toFixed(2)}</h2>
                        </div>
                        <div className='w-full m-auto'>
                            <button className='w-full py-3 text-lg font-semibold text-white rounded-lg bg-[#FF9F0D]'>Pay Now</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;