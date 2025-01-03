'use client'

import Link from "next/link";
import Image from "next/image";
import Search from '@/app/Public/MagnifyingGlass.png'
import User from '@/app/Public/User.png'
import Premium from '@/app/Public/Tote.png'
import Cart from "./ShoppingList/Cart";

import { useStateContext } from '../context/StateContext'

export default function Header() {
    const { showCart, setShowCart } = useStateContext()

    return (
        <>
            <header className="h-[90px] flex-wrap flex items-center" >
                <div className="flex h-8 flex-1 justify-around items-center w-[1320px] lg:min-w-[1320px]">
                    <div className="text-2xl h-8 font-bold">
                        Food<span className="text-[#FF9F0D]">tuck</span>
                    </div>

                    <nav className="hidden md:flex space-x-10 h-6">
                        <Link href={"/Home"} className="font">Home</Link>
                        <Link href={"/Menu"} className="font">Menu</Link>
                        <Link href={"/Blog"} className="font">Blog</Link>
                        <Link href={"/Pages"} className="font">Pages</Link>
                        <Link href={"/About"} className="font">About</Link>
                        <Link href={"/"} className="font">Shop</Link>
                        <Link href={"/Contact"} className="font">Contact</Link>
                    </nav>
                    <div className="flex h-6 gap-x-3">
                        <Image src={Search} alt="Search" />
                        <Link href={'/SignUp'}><Image src={User} alt="User" /> </Link>
                        <button onClick={() => setShowCart(true)}><Image src={Premium} alt="Premium" /> </button>

                    </div>
                </div>
            </header>
            {showCart && <Cart />}
        </>
    );
}
