import Image from "next/image";
import Link from "next/link";
import FbIcon from "./FbIcon.png"
import InstaIcon from "./Instagram.png"
import Twitter from "./Twit.png"
import Pin from "./PinInterest.png"
import Youtube from "./Youtube.png"

const Footer = () => {
  return (
    <footer className="flex bg-[#4F4F4F] justify-between px-20 text-white py-4">
      <div className="flex container mx-auto items-center">
        <p>Copyright © 2022 by Ayeman. All Rights Reserved.</p>
      </div>
      <div className="flex justify-center gap-4">
        <Link href={"/"} className="h-[35.85px] w-[33px] bg-white flex justify-center items-center">
          <Image src={FbIcon} alt="Fb" width={10} height={18} className="bg-" />
        </Link>

        <Link href={"/"} className="h-[35.85px] w-[33px] bg-white flex justify-center items-center">
          <Image src={Twitter} alt="Fb" width={16} height={18} className="bg-" />
        </Link>

        <Link href={"/"} className="h-[35.85px] w-[33px] bg-white flex justify-center items-center">
          <Image src={InstaIcon} alt="Fb" width={14} height={18} className="bg-" />
        </Link>

        <Link href={"/"} className="h-[35.85px] w-[33px] bg-white flex justify-center items-center">
          <Image src={Youtube} alt="Fb" width={18} height={18} className="bg-" />
        </Link>

        <Link href={"/"} className="h-[35.85px] w-[33px] bg-white flex justify-center items-center">
          <Image src={Pin} alt="Fb" width={16} height={18} className="bg-" />
        </Link>
      </div>
    </footer >
  );
};

export default Footer;
