import Link from "next/link";
import BgPic from "../Components/BgPic";
import Header from "../Components/Header"

export default function ErrorPage() {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-white">
        <BgPic PageHeading="404 Error" PageName="404" />

        {/* Signup Form Section */}
        <section className="p-10 relative bg-white pt-36 flex flex-col items-center">
          <div className="w-[630px] text-center">
            <h3 className="text-[96px] font-bold text-[#FF9F0D] mb-6">404</h3>
            <p className="font-bold text-[32px] mb-4 text-[#333333]">
              Oops! Looks like something went wrong
            </p>
            <p className="text-[18px] mb-4 text-[#4F4F4F]">
              Page cannot be found! We ll have it figured out in no time.
            </p>
            <p className="text-[18px] mb-6 text-[#4F4F4F]">
              Meanwhile, check out these fresh ideas:
            </p>
            {/* Button */}
            <Link href="/">
              <button className="bg-[#FF9F0D] text-white text-[18px] font-bold px-4 py-4 rounded-md hover:bg-[#e8890b]">
                Go Back to Home
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}