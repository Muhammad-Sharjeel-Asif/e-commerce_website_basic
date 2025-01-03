"use client";

import { urlFor } from "@/sanity/lib/image";
import React, { useState } from "react";
import Image from "next/image";
import { fetchChefs } from "@/sanity/utils";
import { chefProp } from "../Chef_components/ChefSection";
import { useEffect } from "react";
import Link from "next/link";

const MeetOurChef = () => {
  const [chefData, setChefData] = useState<chefProp[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const chefsPerPage = 4;
  const intervalTime = 5000;


  // Fetch chefs on component mount
  useEffect(() => {
    const getChefs = async () => {
      const data = await fetchChefs();
      setChefData(data);
    };
    getChefs();
  }, []);

  // Automatically cycle through chefs
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) =>
        prevIndex + chefsPerPage >= chefData.length ? 0 : prevIndex + chefsPerPage
      );
    }, intervalTime);

    return () => clearInterval(interval); // Clear interval on unmount
  }, [chefData.length]);

  // Calculate the chefs to display
  const visibleChefs = chefData.slice(startIndex, startIndex + chefsPerPage);

  return (
    <section className="mx-28 text-white pb-12 px-6">
      <div className="container mx-auto text-center">
        {/* Section Header */}
        <p className="italic text-[#FF9F0D] text-[32px] mb-2">Chefs</p>
        <h2 className="text-5xl font-bold mb-8">
          <span className="text-[#FF9F0D]">Me</span>et Our Chef
        </h2>

        {/* Chef Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleChefs.map((chef: chefProp, index: number) => (
            <div key={index} className="relative overflow-hidden aspect-[4/5]">
              {/* Chef Image */}
              <Image
                src={urlFor(chef.image).url()}
                alt={chef.name}
                fill
                className="w-full h-[391px] object-cover rounded-md"
              />

              {/* Overlay for Name and Role */}
              <div className="absolute bottom-0 left-0 w-[181px] h-[67px] bg-gradient-to-t bg-white to-transparent text-[#333333] py-2 px-4 rounded-bl-md">
                <h3 className="text-left text-lg font-bold leading-tight">
                  {chef.name}
                </h3>
                <p className="text-left text-sm">{chef.designation}</p>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="mt-12">
          <Link href="/Chef" className="bg-transparent border border-[#FF9F0D] text-white py-2 px-4 rounded-full w-[155px] h-[50px]">
            See More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MeetOurChef;
