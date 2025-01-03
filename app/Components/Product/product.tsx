"use client";

import BgPic from '../../Components/BgPic';
import Header from "../../Components/Header"
import picType01 from '../../Components/ShopDetails/productType01.jpg';
import picType02 from '../../Components/ShopDetails/productType02.jpg';
import picType03 from '../../Components/ShopDetails/productType03.jpg';
import picType04 from '../../Components/ShopDetails/productType04.jpg';
import Image from "next/image";
import leftArrow from '../../Components/ShopDetails/leftArrow.png';
import rightArrow from '../../Components/ShopDetails/rightArrow.png';
import minus from '../../Components/ShopDetails/Minus.png';
import plus from '../../Components/ShopDetails/Plus.png';
import Cart from '@/app/Public/Tote.png';
import heart from '../../Components/ShopDetails/heart.png';
import compare from '../../Components/ShopDetails/compare.png';
import yt from '../../Components/ShopDetails/yt.png';
import facebook from '../../Components/ShopDetails/facebook.png';
import twitter from '../../Components/ShopDetails/twitter.png';
import vk from '../../Components/ShopDetails/vk.png';
import insta from '../../Components/ShopDetails/insta.png';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { urlFor } from '@/sanity/lib/image';
import { useStateContext } from "../../context/StateContext";
import SimilarProduct from './SimilarProduct';

const thumbnails = [
    { src: picType01, alt: "Thumbnail 1" },
    { src: picType02, alt: "Thumbnail 2" },
    { src: picType03, alt: "Thumbnail 3" },
    { src: picType04, alt: "Thumbnail 4" },
];

export interface productProps {
    quantity: number;
    image: SanityImageSource;
    name: string;
    price: number;
    discount: number;
    slug: string;
    description: string;
    category: string;
    _id: string
}

export default function ShopList({
    product,
    productData,
}: {
    product: productProps;
    productData: productProps[];
}) {
    const { decQty, incQty, qty, onAdd } = useStateContext();

      
    return (
        <>
            <Header />
            <section className="bg-white font-sans text-[#333333]">

                <BgPic PageHeading='Our Shop' PageName='Shop' />

                <div className="bg-white min-h-screen px-24 py-20 gap-x-8 text-[#333333]">
                    <div className="container mx-auto p-4 md:p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[596px]">
                            {/* Left - Image Gallery */}
                            <div className="grid grid-cols-4 gap-4 items-center">
                                {/* Thumbnails on the Left */}
                                <div className="col-span-1 grid grid-rows-4 gap-4 h-full">
                                    {thumbnails.map((thumbnail, index) => (
                                        <div className="relative" key={index}>
                                            <Image
                                                src={thumbnail.src}
                                                alt={thumbnail.alt}
                                                className="absolute inset-0 object-cover rounded-sm border border-gray-300 cursor-pointer"
                                                fill
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Main Image on the Right */}
                                <div className="col-span-3 relative h-full">
                                    <Image
                                        src={urlFor(product.image).url()}
                                        alt={product.name}
                                        className="absolute inset-0 object-cover rounded-sm"
                                        fill
                                    />
                                </div>
                            </div>

                            {/* Right - Product Details */}
                            <div>
                                <div className="flex items-center justify-between space-x-2">
                                    <span className="bg-[#FF9F0D] text-white text-sm px-4 py-1 rounded-md">
                                        In stock
                                    </span>
                                    <div className="flex gap-x-4">
                                        <span className="text-[#828282] text-lg flex"><Image src={leftArrow} alt="left arrow" />Prev</span>
                                        <span className="text-[#828282] text-lg flex">Next<Image src={rightArrow} alt="right arrow" /></span>
                                    </div>
                                </div>
                                <h1 className="text-5xl font-bold mt-3 mb-8">{product.name}</h1>
                                <p className="text-gray-600 mt-4">
                                    {product.description}
                                </p>

                                <hr className="border-[#E0E0E0] my-6" />

                                <div className="mt-4">
                                    <span className="text-2xl font-bold">{product.price}.00$</span>
                                    <div className="flex items-center mt-2">
                                        <div className="flex items-center space-x-1 text-[#FF9F0D]">
                                            {/* Star Ratings */}
                                            {[...Array(5)].map((_, i) => (
                                                <span key={i}>&#9733;</span>
                                            ))}
                                        </div>
                                        <span className="ml-2 text-[#828282]"><span className="px-2">|</span> 5.0 Rating</span>
                                        <span className="ml-2 text-[#828282]"><span className="px-2">|</span> 22 Reviews</span>
                                    </div>
                                </div>

                                <p className="mt-4 text-lg text-[#333333]">Dictum/cursus/Risus</p>

                                {/* Quantity Selector */}
                                <div className="flex items-center space-x-4 mt-6">
                                    <div className="flex items-center border border-[#828282]">
                                        <button className="px-4 py-[17px] border border-r-[#828282]" onClick={decQty}>
                                            <Image src={minus} alt="minus" />
                                        </button>
                                        <span className="w-12 text-center text-[#333333] text-xl font-bold border-0 focus:ring-0 focus:outline-none"
                                            defaultValue="1">{qty}
                                        </span>
                                        <button className="px-4 py-2 border border-l-[#828282]" onClick={incQty}>
                                            <Image src={plus} alt="plus" />
                                        </button>
                                    </div>

                                    <button onClick={() => onAdd(product, qty) }  className="bg-[#FF9F0D] text-white pl-5 pr-10 py-2 text-lg flex gap-x-2"><Image src={Cart} alt="Cart" />
                                        Add to cart
                                    </button>
                                </div>

                                <hr className="border-[#E0E0E0] mt-8 mb-6" />

                                {/* Wishlist and Compare */}
                                <div className="flex items-center space-x-6 mt-4 text-[#4F4F4F] text-lg">
                                    <button className="flex items-center gap-x-2"><Image src={heart} alt="heart" />Add to Wishlist</button>

                                    <button className="flex items-center gap-x-2"><Image src={compare} alt="compare" />Compare</button>

                                </div>

                                {/* Category and Tags */}
                                <div className="items-center mt-4 text-[#4F4F4F] text-lg">
                                    <p>
                                        <span className="text-[#333333]">Category:</span> {product.category}
                                    </p>
                                    <p>
                                        <span className="text-[#333333]">Tag:</span> Our Shop
                                    </p>
                                </div>

                                {/* Share Icons */}
                                <div className="flex items-center space-x-4 mt-6">
                                    <span className="text-[#333333] text-lg">Share:</span>
                                    <div className="flex space-x-2">
                                        {/* Replace # with real links */}
                                        <Image src={yt} alt="youtube" />
                                        <Image src={facebook} alt="facebook" />
                                        <Image src={twitter} alt="twitter" />
                                        <Image src={vk} alt="vk" />
                                        <Image src={insta} alt="insta" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Similar Products */}
                        <SimilarProduct productData={productData} />
                    </div>
                </div>
            </section >
        </>
    );
}
