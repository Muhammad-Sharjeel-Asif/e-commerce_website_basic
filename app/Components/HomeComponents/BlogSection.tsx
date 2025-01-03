import Image from "next/image";
import Link from "next/link";
import Pic01 from "./HomeFoodCategory02.jpg"
import Pic02 from "./HomeBlog01.jpg"
import Pic03 from "../AboutUs/AboutUsPic01.jpg"
import Like from "./ThumbsUp.png"
import Chat from "./ChatDots.png"
import Share from "./Share.png"

const BlogPosts = () => {
    const blogPosts = [
        {
            image: Pic01,
            date: "10 February 2022",
            title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
        },
        {
            image: Pic02,
            date: "10 February 2022",
            title: "Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A",
        },
        {
            image: Pic03,
            date: "10 February 2022",
            title: "Curabitur rutrum velit ac congue malesuada",
        },
    ];

    return (
        <section className="mx-20 text-white pt-12 px-6">
            {/* Section Header */}
            <div className="text-center mb-8">
                <p className="italic text-[#FF9F0D] text-[32px] mb-2">Blog Post</p>
                <h2 className="text-5xl font-bold mb-8">
                    <span className="text-[#FF9F0D]">La</span>test News & Blog
                </h2>
            </div>

            {/* Blog Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
                {blogPosts.map((post, index) => (
                    <div
                        key={index}
                        className="overflow-hidden border border-[#94959B]"
                    >
                        {/* Image */}
                        <div className="relative">
                            <Image
                                src={post.image}
                                alt={post.title}
                                className="w-full h-[349px] object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="mx-4 py-4">
                            <p className="text-orange-400 text-sm mb-2">{post.date}</p>
                            <h3 className="text-2xl font-bold mb-4">{post.title}</h3>

                            {/* Learn More */}
                            <div className="flex items-center justify-between text-gray-300 text-sm">
                                <Link href="#">Learn More</Link>

                                {/* Icons */}
                                <div className="flex space-x-2">
                                    <Image src={Like} alt="Like" />
                                    <Image src={Chat} alt="Chat" />
                                    <Image src={Share} alt="Share" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BlogPosts;  