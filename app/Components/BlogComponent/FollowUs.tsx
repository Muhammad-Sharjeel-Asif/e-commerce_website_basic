// import { FaTwitter, FaYoutube, FaPinterest, FaInstagram, FaFacebookF } from "react-icons/fa";
import Image from "next/image";
import fb from "./fb.png";
import twitter from "./twitter.png";
import insta from "./insta.png";
import picart from "./picart.png";
import Youtube from "./Youtube.png.png"

const FollowUs = () => {
    const icons = [
        { icon: twitter, link: "#" },
        { icon: Youtube, link: "#" },
        { icon: picart, link: "#" },
        { icon: insta, link: "#" },
        { icon: fb, link: "#" },
    ];

    return (
        <div className="border border-[#E0E0E0] p-4 mt-11">
            <div className="mx-2 my-4">
                <h4 className="text-[#333333] text-xl font-bold mb-4">Follow Us</h4>
                <div className="flex justify-center gap-4">
                    {icons.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            className={`w-12 h-12 flex items-center justify-center transition bg-[#FAF7F2] hover:bg-[#FF9F0D]`}
                        >
                            <Image src={item.icon} alt='Image' className="text-xl" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FollowUs;