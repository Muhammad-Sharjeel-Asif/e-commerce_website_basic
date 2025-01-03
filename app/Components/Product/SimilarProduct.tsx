import { productProps } from './product';
import React from 'react'
import Image from 'next/image';
import leftArrow from '../../Components/ShopDetails/leftArrow.png';
import rightArrow from '../../Components/ShopDetails/rightArrow.png';
import { useState } from 'react';
import ProductTrack from './ProductTrack';
import { urlFor } from '@/sanity/lib/image';

const SimilarProduct = ({
    productData,
}: {
    productData: productProps[];
}) => {
    const [startIndex, setStartIndex] = useState(0);
    const visibleCount = 4;

    const handleNext = () => {
        if (startIndex + visibleCount < productData.length) {
            setStartIndex(startIndex + visibleCount);
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - visibleCount);
        }
    };
    return (
        <div className="container mx-auto px-4 mt-40">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Similar Products</h2>
                {/* Navigation Arrows */}
                <div className="flex space-x-2">
                    {/* Left Arrow */}
                    {startIndex > 0 && (
                        <button
                            onClick={handlePrev}
                            className="p-2 rounded-full bg-[#fbf7f2] hover:bg-gray-200"
                        >
                            <Image src={leftArrow} alt="left arrow" />
                        </button>
                    )}
                    {/* Right Arrow */}
                    {startIndex + visibleCount < productData.length && (
                        <button
                            onClick={handleNext}
                            className="p-2 rounded-full bg-[#FF9F0D] text-white hover:bg-orange-600">
                            <Image src={rightArrow} alt="right arrow" />
                        </button>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {productData.slice(startIndex, startIndex + visibleCount).map((product: productProps, index: number) => (
                    <div
                        key={index}
                        className="relative bg-white overflow-hidden">
                        <ProductTrack image={urlFor(product.image).url()} name={product.name} slug={product.slug} />
                        <div className="pt-2">
                            <h3 className="text-lg font-semibold">{product.name}</h3>
                            <div className="flex items-center">
                                <span className="text-orange-500 font-bold">${product.price}.00</span>
                                {product.discount && (
                                    <span className="text-gray-400 text-sm line-through ml-2">
                                        ${product.discount}.00
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div >
        </div >
    )
}

export default SimilarProduct;