import Image from "next/image";
import Fb from "./Fb2.png"
import Pininterest from "./PicArt.png"
import Twitter from "./Twitter.png"
import Link from "next/link";


// components/SocialSidebar.js
export default function SocialSidebar() {
  return (
<div className="flex flex-col items-center justify-center h-screen visible mt-10 opacity-100">

      {/* Top Line */}
      <div className="w-px h-[158px] bg-white"></div>

      {/* Social Icons */}
      <div className="flex flex-col space-y-4 my-4 text-gray-300">
        <Link href="#" className="hover:text-white">
          <Image src={Fb} alt="Fb" />
        </Link>

        <Link href="#" className="text-yellow-500 hover:text-yellow-600">
          <Image src={Twitter} alt="Fb" />
        </Link>

        <Link href="#" className="hover:text-white">
          <Image src={Pininterest} alt="Fb" />
        </Link>
      </div>

      {/* Bottom Line */}
      <div className="w-px h-[147px] bg-white"></div>
    </div>
  );
}
