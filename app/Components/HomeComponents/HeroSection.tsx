import React from "react";
import Image from "next/image";
import Pic01 from "./Home01.png";
import BgPic from "./HomeBg.jpg";
import SocialSidebar from "./SocialSideBar";
import Searchbar from './Searchbar'
import Link from "next/link";
import Premium from '@/app/Public/Tote.png'

const HeroSection = () => {
  return (
    <>
      <section className="md:px-[135px] flex flex-col md:flex-row md:items-center py-0 relative lg:min-h-screen items-center justify-between overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={BgPic}
            alt="Background"
            layout="fill"
            objectFit="cover"
            priority
            className="brightness-[.10]"
          />
        </div>

        {/* Header */}
        <div className="absolute top-0 left-0 w-full z-20 ">
          <header className="h-[90px] flex-wrap flex items-center" >

            <div className="h-8 flex-1 items-center">
              <div className="text-2xl h-8 font-bold text-center">Food<span className="text-[#FF9F0D]">tuck</span></div>


              <div className="flex justify-between mx-32">
                <nav className="hidden md:flex space-x-8 h-6">
                  <div className="group relative inline-block">
                    <Link href={"/"} className="font">Home</Link>
                    <span className="absolute left-1/2 transform -translate-x-1/2 mt-6 w-[7px] h-[7px] bg-[#FF9F0D] rounded-full "></span>
                  </div>

                  <Link href={'/Menu'} className="font">Menu</Link>
                  <Link href={"/Blog"} className="font">Blog</Link>
                  <Link href={"/Pages"} className="font">Pages</Link>
                  <Link href={"/About"} className="font">About</Link>
                  <Link href={"/"} className="font">Shop</Link>
                  <Link href={"/Contact"} className="font">Contact</Link>
                </nav>
                <div className="flex h-6 justify-between">
                  <Searchbar />
                  <Image src={Premium} alt="Premium" className="ml-2" />
                </div>
              </div>
            </div>
          </header>
        </div>

        {/* Content */}
        <div className="relative z-10 mt-16 text-white flex justify-between items-center gap-10">
          <div>
            <SocialSidebar />
          </div>

          <div className="space-y-4 w-full">
            {/* Left Section */}
            <h2 className="text-[#FF9F0D] italic text-[32px] leading-10 mt-8">
              It’s Quick & Amusing!
            </h2>
            <h1 className="text-6xl lg:text-6xl font-bold leading-[68px]">
              <span className="text-yellow-500">Th</span>e Art of Speed Food
              Quality
            </h1>
            <p className="leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
            </p>
            <button className="bg-[#FF9F0D] px-6 text-[#E0DFDF] rounded-full w-[190px] h-[60px]">
              See Menu
            </button>
          </div>

          {/* Right Section */}
          <div className="relative mt-8">
            {/* Main Dish Image */}
            <Image
              src={Pic01}
              alt="Food Dish"
              width={1020}
              height={1000}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;