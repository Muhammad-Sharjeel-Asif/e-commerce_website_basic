import Link from "next/link";
import Image from "next/image";
import BgPic from "@/app/Components/BgPic";
import Google from "@/app/Public/Google.png";
import Apple from "@/app/Public/Apple.png";
import Email from "@/app/Public/EnvelopeSimple (1).png";
import Lock from "@/app/Public/Lock.png";
import Header from "../Components/Header"

export default function SigninPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        <div>
          {/* Header Section */}
          <BgPic PageHeading='404 Error' PageName='404' />
        </div>

        {/* Signin Form Section */}
        <section className="w-[424px] h-[642px] mx-auto mt-[120px]">
          <div className="container mx-auto max-w-md bg-[#FFFFFF] shadow-lg rounded-md p-8">
            <h3 className="text-xl font-bold mb-6 text-[#333333]">Sign In</h3>
            <form>
              <div className="w-[360px] h-11 mt-4">
                <div>
                  <Image
                    src={Email}
                    alt="User Icon"
                    width={24}
                    height={24}
                    className="absolute mx-4 my-[8px]"
                  /></div>
                <input
                  type="email"
                  className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300 placeholder:text-[#333333] pl-12 placeholder:leading-6"
                  placeholder="Email"
                />
              </div>

              <div className="w-[360px] h-11 mt-4">
                <div>
                  <Image
                    src={Lock}
                    alt="User Icon"
                    width={24}
                    height={24}
                    className="absolute mx-4 my-[8px]"
                  /></div>
                <input
                  type="password"
                  className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300 placeholder:text-[#333333] pl-12 placeholder:leading-6"
                  placeholder="Password"
                />
              </div>
              <div className="flex items-center mt-2 mb-4 text-[#E0E0E0]">
                <input type="checkbox" className="mr-2 bg-[#FF9F0D]" />
                <span className="text-[#333333]">Remember me?</span>
              </div>
              <button
                type="submit"
                className="w-full bg-[#FF9F0D] hover:bg-[#FF9F0D] text-white font-bold py-2 rounded"
              >
                Sign In
              </button>
              <p className="text-center mt-4">
                <Link href="/forgot-password" className="text-[#FF9F0D]">Forgot password?</Link>
              </p>
            </form>
            <div className="text-center mt-8">
              <p>or</p>
              <button className="bg-transparent border border-[#E0E0E0] text-[#4F4F4F] rounded mt-2 flex items-center w-[360px] h-11 relative mx-auto">
                <Image src={Google} alt="Google" height={20} width={20} className="h-6 my-3 mx-4" />
                <span className="absolute inset-0 flex justify-center items-center">Sign up with Google</span>
              </button>

              <button className="bg-transparent border border-[#E0E0E0] text-[#4F4F4F] rounded mt-2 flex items-center w-[360px] h-11 relative mx-auto">
                <Image src={Apple} alt="Google" height={20} width={20} className="h-6 my-3 mx-4" />
                <span className="absolute inset-0 flex justify-center items-center">Sign up with Apple</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}