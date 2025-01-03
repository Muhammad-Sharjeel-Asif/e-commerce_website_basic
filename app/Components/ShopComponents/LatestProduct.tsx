import Image from 'next/image';
import React from 'react'
import Pic10 from "./Shop10.jpg"
import Rating from '../ShoppingList/Rating';

const initialCartItems = [
    { name: "Pizza", price: 35, image: Pic10, rating: 2 },
    { name: "Cupcake", price: 35, image: Pic10, rating: 2 },
    { name: "Cookies", price: 35, image: Pic10, rating: 2 },
    { name: "Burger", price: 35, image: Pic10, rating: 2 },
];

const LatestProduct = () => {
    return (
        <section className="text-[#4F4F4F]">
            <h4 className="font-bold text-xl mb-4">Latest Product</h4>

            {initialCartItems.map((item, index) => (
                <div key={index}>
                    <div className="flex items-start">
                        <Image
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover my-1 mr-4"
                            width={70.67}
                            height={65}
                        />
                        {/* Star Ratings */}
                        <div className='flex flex-col'>
                            <span>{item.name}</span>
                            <span className="flex gap-x-[0.6px]">
                                {Array.from({ length: 5 }, (_, i) => (
                                    <Rating key={i} filled={i < item.rating} width={9.84} height={9} />
                                ))}
                            </span>
                            <span className='text-sm'>${item.price.toFixed(2)}</span>
                        </div>
                    </div>
                    {/* </td> */}
                </div>
            ))}
        </section>
    )
}

export default LatestProduct;