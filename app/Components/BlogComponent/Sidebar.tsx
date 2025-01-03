// import Link from "next/link";
import PhotoGallery from "./PhotoGallery";
import Image from "next/image";
import Glass from "@/app/Public/MagnifyingGlass.png";
import BlogPic from "./Blog.jpg";
import star from "./star.png";
import fb from "./fb.png";
import twitter from "./twitter.png";
import insta from "./insta.png";
import picart from "./picart.png";
import pic01 from './Pic01.jpg';
import pic02 from './Pic02.jpg';
import pic03 from '../HomeComponents/WhyUs05.jpg';
import pic04 from './Pic04.jpg';
import pic05 from './Pic05.jpg';
import pic06 from './Pic06.jpg';
import pic07 from './Pic07.jpg';
import pic08 from './Pic08.jpg';
import pic09 from './Pic09.jpg';
import FollowUs from "./FollowUs";
// import { title } from "process";

const recentPosts = [
    { image: pic01 },
    { image: pic02 },
    { image: pic03 },
    { image: pic04 }
];

const filterMenu = [
    { image: pic05, title: 'Chicken Fry', price: 26 },
    { image: pic06, title: 'Burger Food', price: 46 },
    { image: pic07, title: 'Pizza', price: 16 },
    { image: pic08, title: 'Fresh Fruits', price: 36 },
    { image: pic09, title: 'Vegetable', price: 16 }
];

const tags = [
    "Sandwich",
    "Tikka",
    "Bbq",
    "Restaurant",
    "Chicken Sharma",
    "Health",
    "Fastfood",
    "Food",
    "Pizza",
    "Burger",
    "Chicken",
];

const Sidebar = () => {
    return (
        <aside className="w-full lg:w-1/3">
            {/* Author Bio */}
            <div className='flex border border-[#E0E0E0] w-full justify-between'>
                <input
                    type="text"
                    placeholder="Search Your Keword.."
                    className=" placeholder:pl-6" />
                <span><Image src={Glass} alt='Glass' className='bg-[#FF9F0D] h-[60px] p-5 w-[66px]' /></span>
            </div>

            <div className="border border-[#E0E0E0] p-4 my-11">
                <div className="mx-1 my-4">

                    <Image
                        src={BlogPic}
                        alt="Author profile"
                        className="rounded-full w-[115.55px] mx-auto mb-4"
                    />
                    <h3 className="text-center text-xl text-[#333333] pt-2 pb-1 font-bold">Prince Miyako</h3>
                    <p className="text-center text-[#828282]">
                        Blogger/Photographer
                    </p>
                    <div className="flex justify-center items-center gap-x-1 my-2">
                        <Image src={star} alt="star" className="w-[13.85px] pt-1" />
                        <Image src={star} alt="star" className="w-[13.85px] pt-1" />
                        <Image src={star} alt="star" className="w-[13.85px] pt-1" />
                        <Image src={star} alt="star" className="w-[13.85px] pt-1" />
                        <Image src={star} alt="star" className="w-[13.85px] pt-1" />
                        <span className="text-[#828282] text-sm pl-1">(1 Review)</span>
                    </div>
                    <div className="text-[#828282] text-center">
                        Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit.Veritatis distinctio, odio
                        eligendi suscipit reprehenderit atque
                    </div>
                    <div className="flex justify-center gap-x-4 my-5">
                        <Image src={fb} alt="fb" />
                        <Image src={twitter} alt="twitter" />
                        <Image src={insta} alt="insta" />
                        <Image src={picart} alt="picart" />
                    </div>
                </div>
            </div>

            {/* Recent Posts */}
            <div className="border border-[#E0E0E0] p-4 my-11">
                <div className="mx-2 my-4">
                    <h4 className="text-[#333333] text-xl font-bold mb-4">Recent Posts</h4>
                    <ul className="space-y-4">
                        {recentPosts.map((post, index) => (
                            <li key={index} className="flex justify-between gap-x-4">
                                <span className="flex space-x-4 items-center">
                                    <Image
                                        src={post.image}
                                        alt="Thumbnail"
                                        className="w-28 h-20 object-cover rounded"
                                    />
                                </span>
                                <span className="flex flex-col gap-y-2">
                                    <p className="text-[#828282] text-sm">June 22, 2020</p>
                                    <p className="text-[#4F4F4F]">
                                        Lorem ipsum dolor sit cing
                                        elit, sed do.
                                    </p>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>


            {/* Filter By Menu */}
            <div className="border border-[#E0E0E0] p-4 my-11">
                <div className="mx-2 my-4">
                    <h4 className="text-[#333333] text-xl font-bold mb-4">Filter By Menu</h4>
                    <ul className="space-y-4">
                        {filterMenu.map((post, index) => (
                            <li key={index} className="flex gap-x-4">
                                <span className="flex space-x-4 items-center">
                                    <Image
                                        src={post.image}
                                        alt="Thumbnail"
                                        className="w-16 h-16 object-cover rounded"
                                    />
                                </span>
                                <span className="flex justify-between w-48 2xl:w-auto items-center text-[#333333]">
                                    <p className="font-bold">
                                        {post.title}
                                    </p>
                                    <p>{post.price}</p>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Categories */}
            <div className="border border-[#E0E0E0] p-4 mt-11">
                <div className="mx-2 my-4">
                    <h4 className="text-[#333333] text-xl font-bold mb-4">Popular Tags</h4>
                    <div className="flex flex-wrap gap-4">
                        {tags.map((tag, index) => (
                            <button
                                key={index}
                                className="px-5 py-2 text-sm border border-[#E0E0E0] text-[#4F4F4F] inline-flex items-center justify-center"
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>

            </div>;
            {/* Photo Gallery */}
            <PhotoGallery />

            <FollowUs />

        </aside>
    );
};

export default Sidebar;
