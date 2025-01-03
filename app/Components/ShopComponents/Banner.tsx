import Image from "next/image";
import BannerPic from "@/app/Components/ShopComponents/Banner.jpg";
import React from "react";
import Arrow from "@/app/Components/ShopComponents/ArrowCircleRight.png"

const Banner = () => {
    return (
        <div
            className="relative w-[248px] h-[286px] my-5 bg-cover bg-center flex "
            style={{ backgroundImage: `url(${BannerPic.src})` }}
        >
            {/* Banner Content */}
            <div className="flex flex-col justify-between p-7 text-white">
                <div>

                    <h2 className="font-bold">Perfect Taste</h2>
                    <h1 className="text-xl font-bold py-1">
                        Classic Restaurant
                    </h1>
                    <p className="text-[#FF9F0D] font-bold py-2">45.00$</p>
                </div>
                <div>

                    <button className="flex items-center">
                        Shop Now <span><Image src={Arrow} alt="Shop" className="ml-2" /></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
