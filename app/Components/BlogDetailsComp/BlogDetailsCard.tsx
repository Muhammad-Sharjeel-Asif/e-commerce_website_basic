import React from "react";
import Image from "next/image";
import Pic01 from "./BlogDetails01.jpg";
import Pic02 from "./BlogDetails02.jpg";
import Calender from "../BlogComponent/Calendar.png"
import Chats from "../BlogComponent/Chats.png"
import User from "../BlogComponent/UserCirclePlus.png"
import Pagination from "../ShopComponents/Pagination";
import Sidebar from "../BlogComponent/Sidebar";
import Quotation from "./Quotes.png"

const BlogPost = [
    { title: "10 Reasons To Do A Digital Detox Challenge", image: Pic01 },
];

const BlogLayout = () => {
    return (
        <div className="bg-white min-h-screen px-28">
            <div className="container mx-auto pt-20 flex flex-wrap lg:flex-nowrap gap-8">
                {/* Main Content */}
                <main className="w-full lg:w-3/4">
                    {BlogPost.map((post, index) => (
                        <article key={index} className="overflow-hidden">
                            <div className="relative">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-[520px] object-cover"
                                // width={500}
                                // height={300}
                                />
                                {/* Date Badge */}
                                <div className="absolute top-4 left-4 bg-[#FF9F0D] w-[59.93px] h-[60px] text-white rounded-md">
                                    <p className="text-center font-bold text-lg pt-1">14</p>
                                    <p className="text-center">Feb</p>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="pt-4">
                                {/* Metadata */}
                                <div className="flex items-center text-[#4F4F4F] space-x-4">
                                    <p className="flex items-center">
                                        <span className="mr-1"> <Image src={Calender} alt="Calender" /> </span> Feb 14, 2022 /
                                    </p>
                                    <p className="flex items-center">
                                        <span className="mr-1"> <Image src={Chats} alt="Chats" /> </span> 3 /
                                    </p>
                                    <p className="flex items-center">
                                        <span className="mr-1"><Image src={User} alt="User" /></span> Admin
                                    </p>
                                </div>
                            </div>

                            <div className="pt-4">
                                <h2 className="text-2xl font-bold text-[#333333]">
                                    {post.title}
                                </h2>

                                <p className="text-[#4F4F4F] mt-10">
                                    Netus pretium tellus nulla commodo massa adipiscing in elementum magna congue condimentum placerat habitasse potenti ac orci a quisque tristique elementum et viverra at condimentum scelerisque eu mi. Elit praesent cras vehicula a ullamcorper nulla scelerisque aliquet tempus faucibus quam ac aliquet nibh a condimentum suspendisse hac integer leo erat aliquam ut himenaeos.
                                </p>
                                <p className="text-[#4F4F4F] mt-4">Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac.
                                    Nec hac et vestibulum duis a tincidunt per a aptent interdum purus feugiat a id aliquet erat
                                    himenaeos nunc torquent euismod adipiscing adipiscing dui gravida justo.
                                </p>

                                {/* Quote */}
                                <div className="bg-[#FF9F0D] p-6 flex my-12">
                                    {/* Quote Icon */}
                                    <div className="text-4xl mr-4"><Image src={Quotation} alt="Quotation" className="w-32 h-10" /></div>
                                    {/* Quote Text */}
                                    <p className="text-2xl font-bold">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                                    </p>
                                </div>

                                <p className="text-[#4F4F4F] mt-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>

                                <div className="container mx-auto pt-8">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                        {/* Text Section */}
                                        <div>
                                            <p className="text-[#4F4F4F]">
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                                            </p>
                                            <p className="text-[#4F4F4F] mt-4">
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                                            </p>
                                        </div>

                                        {/* Image Section */}
                                        <div className="flex justify-center">
                                            <Image
                                                src={Pic02}
                                                alt="Delicious Food"
                                                className="w-[424px] h-[366px] object-cover"
                                                // width={400}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <p className="text-[#4F4F4F] mt-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>

                                <p className="text-[#4F4F4F] mt-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>

                            </div>
                        </article>
                    ))}
                </main>

                {/* Sidebar */}
                <Sidebar />
            </div>


            <div className="pb-20">
                <Pagination />
            </div>


        </div>
    );
};

export default BlogLayout;
