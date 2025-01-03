import Image from "next/image";
import Pic01 from "./HomeAbout01.jpg"
import Pic02 from "./HomeAbout02.jpg"
import Pic03 from "./HomeAbout03.jpg"
import Tick from "./Tick.png"

const AboutSection = () => {
    return (
        <section className="mx-24 text-white pt-20 px-6 md:px-12">
            <div className="container mx-auto grid md:grid-cols-2 gap-8">
                {/* Text Content */}
                <div className="grid gap-y-5">
                    <h2 className="text-[#FF9F0D] italic text-[32px] leading-10">
                        about us
                    </h2>
                    <h3 className="text-5xl font-bold mb-4">
                        <span className="text-[#FF9F0D]">We</span> Create the best<br /> foody product
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                    </p>
                    {/* Bullet Points */}
                    <ul className="space-y-4 mb-6">
                        <li className="flex items-center">
                            <Image src={Tick} width={17} height={12.24} alt="tick" className="mr-3" />
                            Lacus nisl, et ac dapibus sit eu velit in consequat.
                        </li>
                        <li className="flex items-center">
                            <Image src={Tick} width={17} height={12.24} alt="tick" className="mr-3" />
                            Quisque diam pellentesque bibendum non dui volutpat fringilla
                        </li>
                        <li className="flex items-center">
                            <Image src={Tick} width={17} height={12.24} alt="tick" className="mr-3" />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </li>
                    </ul>
                    {/* Read More Button */}
                    <button className="bg-[#FF9F0D] w-[190px] h-[60px] rounded-full">
                        Read More
                    </button>
                </div>

                {/* Images Section */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                        <Image
                            src={Pic01} /* Replace with actual image */
                            alt="Main Food"
                            className="w-full h-[330px] rounded-md object-cover"
                        />
                    </div>
                    <div>
                        <Image
                            src={Pic02}
                            alt="Food Item 1"
                            className="w-full h-[150px] md:h-[200px] rounded-md object-cover"
                        />
                    </div>
                    <div>
                        <Image
                            src={Pic03}
                            alt="Food Item 2"
                            className="w-full h-[194px] md:h-[200px] rounded-md object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
