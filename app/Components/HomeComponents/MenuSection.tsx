import Image from "next/image";
import Pic01 from "./HomeMenu01.jpg"
import Pic02 from "./HomeMenu02.jpg";
import Pic03 from "../Menu_Component/Menu02.jpg"
import Pic04 from "./HomeMenu03.jpg"
import Pic05 from "./HomeMenu04.jpg"
import Pic06 from "./HomeAbout03.jpg"
import Pic07 from "./HomeMenu06.jpg"
import Pic08 from "./HomeFoodCategory02.jpg"
import Dish from "./HomeMenuDish.png"
import Leaf from "./HomeMenuLeaf.png"

export default function Menu() {
    const menuItems = [
        { title: "Lettuce Leaf", price: "12.5", image: Pic01 },
        { title: "Glow Cheese", price: "12.5", image: Pic02 },
        { title: "Fresh Breakfast", price: "14.5", image: Pic03 },
        { title: "Italian Pizza", price: "14.5", image: Pic04 },
        { title: "Mild Butter", price: "12.5", image: Pic05 },
        { title: "Slice Beef", price: "12.5", image: Pic06 },
        { title: "Fresh Bread", price: "12.5", image: Pic07 },
        { title: "Mushroom Pizza", price: "12.5", image: Pic08 },
    ];

    return (
        <div className="text-white min-h-screen mt-8 mb-20 mx-24">
            {/* Title */}
            <div className="text-center py-10">
                <h3 className="italic text-[#FF9F0D] text-[32px] my-4">Classic & pick</h3>
                <h1 className="text-5xl font-bold">
                    <span className="text-[#FF9F0D]">Fr</span>om Our Menu
                </h1>
            </div>

            {/* Category Tabs */}
            <div className="flex justify-center space-x-20 text-xl mb-8">
                {["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack", "Soups"].map(
                    (category, index) => (
                        <div
                            key={index}
                            className={`hover:text-[#FF9F0D] cursor-pointer hover:font-bold ${category === "Breakfast" ? "text-[#FF9F0D] font-bold" : ""
                                }`}
                        >
                            {category}
                        </div>
                    )
                )}
            </div>

            {/* Menu Content */}
            <div className="flex items-center">
                {/* Food Image on Left */}
                <div className="relative flex justify-center items-center">
                    {/* Leaf Image (Base Image) */}
                    <div className="relative">
                        <Image
                            src={Leaf}
                            alt="Leaf Image"
                            width={415} // Set width
                            height={406} // Set height
                            className="rounded-full object-cover"
                        />

                        {/* Dish Image (Overlay Image) */}
                        <Image
                            src={Dish}
                            alt="Dish Image"
                            className="rounded-full absolute top-[45%] left-[46%] transform -translate-x-1/2 -translate-y-1/2"
                        />
                    </div>
                </div>


                {/* Menu Items */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 w-full md:w-2/3">
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center space-x-2 rounded-md"
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                className="w-[80px] h-[79px] rounded-lg object-cover"
                            />
                            <div className="flex flex-col justify-between">
                                <h3 className="text-xl font-bold">{item.title}</h3>
                                <p className="text-sm">Lacus nisi, et ac dapibus velit in consequat.</p>
                                <p className="text-[#FF9F0D] text-lg font-bold">{item.price}$</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
