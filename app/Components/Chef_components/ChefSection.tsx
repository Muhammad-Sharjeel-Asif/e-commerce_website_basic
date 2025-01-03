import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { fetchChefs } from "@/sanity/utils"; 
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface chefProp {
  image: SanityImageSource;
  name: string;
  designation: string;
}

const ChefSection = async () => {
  const chefData = await fetchChefs();

  return (
    <div className="container px-16 pb-16 mt-20 mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {chefData.map((chef: chefProp, index: number) => (
          <div
            key={index}
            className={`rounded-lg shadow-lg bg-white flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl ${
              index === 6
                ? "border-gray-200"
                : "border-4 border-transparent hover:border-gray-200"
            }`}
          >
            <div className="relative aspect-[4/5]">
              <Image
                src={urlFor(chef.image).url()}
                alt={chef.name}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>

            <div className="p-4 text-center">
              <h3 className="text-gray-800 font-bold text-lg">{chef.name}</h3>
              <p className="text-gray-600">{chef.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefSection;
