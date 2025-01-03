import React from 'react'
import Image from 'next/image'
import Pic01 from './HomeFoodCategory01.jpg'
import Pic02 from './HomeFoodCategory02.jpg'
import Pic03 from './HomeFoodCategory03.jpg'
import Pic04 from './HomeFoodCategory04.jpg'

const FoodCategory = () => {
  const items = [
    { id: 1, img: Pic01, labels: ["Save 30%", "Fast Food Dish"], alt: "Save 50% on Fast Food" },
    { id: 2, img: Pic02, alt: "Delicious Burgers" },
    { id: 3, img: Pic03, alt: "Healthy Salads" },
    { id: 4, img: Pic04, alt: "Desserts" },
  ];

  return (
    <section className='md:px-[135px] flex flex-col md:flex-row md:items-center relative lg:min-h-screen justify-between overflow-hidden'>
      <div className="container mx-auto text-center">
        <h2 className="text-[#FF9F0D] italic text-[32px] leading-10">
          Food Category
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-[#FF9F0D]">Ch</span>oose Food Item
        </h2>

        {/* Grid of food items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="relative">
              {/* Image of the food item */}
              <Image
                src={item.img}
                alt={item.alt}
                height={328}
                className="w-full h-56 object-cover rounded-md"
              />

              {/* Overlay label for the first image */}
              {item.labels && item.labels.map((label, index) => (
                <span
                  key={index}
                  className={`absolute items-center font-semibold px-4 py-2 rounded-md ${index === 0 ? 'bg-[#FFF5F5] text-lg text-[#FF9F0D] top-14 left-1/2 transform -translate-x-1/2' : 'bg-[#FF9F0D] text-xl text-[#FFF5F5] top-28 w-[206px] left-0'}`}
                  style={index !== 0 ? { marginLeft: 'px' } : {}}
                >
                  {label}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FoodCategory;
