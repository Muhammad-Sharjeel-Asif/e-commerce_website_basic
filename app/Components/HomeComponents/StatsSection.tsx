import StatsBg from "./Home02.jpg"
import Image from "next/image";
import Cap from "../Menu_Component/Cap.png"
import Burger from "../Menu_Component/Burger.png"
import Spoon from "../Menu_Component/Spoon.png"
import Pizza from "../Menu_Component/Pizza.png"
// import StatsBg from "./Components/Home Components/Home02.jpg"

// import { UserGroupIcon, CakeIcon, StarIcon, EmojiHappyIcon } from '@heroicons/react/solid';
// import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';


export default function StatsSection() {
    return (
        <section className="relative h-[360px] bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${StatsBg.src})`,
                backgroundColor: 'rgba(0, 0, 0, 0.6)'
            }}>
            <div className="absolute inset-0 bg-black opacity-75">
            <div className="relative z-10 py-16 text-center text-white items-center">
                <div className="container px-20 grid grid-cols-1 md:grid-cols-4">
                    {/* Single Stat */}
                    <div className="flex flex-col justify-center">
                        <Image src={Cap} alt="Cap" className="mx-24 mt-4" />
                        <p className="mt-2 text-2xl font-bold pl-14">Professional Chefs</p>
                        <h3 className="text-[40px] font-bold mb-20 pl-6">420</h3>
                    </div>

                    <div>
                    <Image src={Burger} alt="Burger" className="mx-14 mt-4" />
                    <p className="mt-2 text-2xl font-bold">Items Of Food</p>
                        <h3 className="text-[40px] font-bold mb-20">320</h3>
                    </div>

                    <div>
                    <Image src={Spoon} alt="Spoon" className="mx-14 mt-4" />
                    <p className="mt-2 text-2xl font-bold">Years Of Experienced</p>
                        <h3 className="text-[40px] font-bold mb-20">30+</h3>
                    </div>

                    <div>
                    <Image src={Pizza} alt="Pizza" className="ml-14 mt-4" />
                    <p className="mt-2 text-2xl font-bold">Happy Customers</p>
                        <h3 className="text-[40px] font-bold mb-20">220</h3>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
}




// style={{
//     backgroundImage: `url(${StatsBg.src})`,
//     backgroundColor: 'rgba(0, 0, 0, 0.6)'
// }}