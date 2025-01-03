// import Hero from "../Hero/page";
import Image from "next/image";
import CaretLeft from "@/app/Public/CaretLeft.png"
import CaretRight from "@/app/Public/CaretRight.png"
import Arrow from "@/app/Public/ArrowRight.png"
import Pic01 from "@/app/Components/Checkout01.jpg"
import BgPic from '../Components/BgPic';
import Header from "../Components/Header"

export default function Checkout() {
  return (
    <>
      <Header />
      <section className="bg-white font-sans text-[#333333]">

        <BgPic PageHeading='Checkout Page' PageName='Checkout' />

        <div className="flex flex-col md:flex-row p-24 gap-x-8">
          {/* Left Section - Shipping and Billing Address */}
          <div className="flex-1 ml- w-2/3 lg:min-w-2/3">
            <h2 className="text-xl font-bold mb-6">Shipping Address</h2>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* First Name and Last Name */}
              <div>
                <label className="block  font-medium mb-1">First name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 h-14 lg:min-h-14 px-4 py-2" />
              </div>
              <div>
                <label className="block  font-medium mb-1">Last name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300  h-14 lg:min-h-14 px-4 py-2" />
              </div>

              {/* Email Address and Phone Number */}
              <div>
                <label className="block  font-medium mb-1">Email address</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 h-14 lg:min-h-14 px-4 py-2" />
              </div>
              <div>
                <label className="block  font-medium mb-1">Phone number</label>
                <input
                  type="tel"
                  className="w-full border border-gray-300 h-14 lg:min-h-14 px-4 py-2" />
              </div>

              {/* Company and Country */}
              <div>
                <label className="block  font-medium mb-1">Company</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 h-14 lg:min-h-14 px-4 py-2" />
              </div>
              <div>
                <label className="block font-medium mb-1">Country</label>
                <select className="w-full border border-gray-300 h-14 lg:min-h-14 px-4 py-2 text-[#828282]">
                  <option value="">Choose country</option>
                  <option value="US">United States</option>
                  <option value="PAK">Pakistan</option>
                  <option value="ENG">England</option>
                  {/* Add more options */}
                </select>
              </div>

              {/* City and Zip Code */}
              <div>
                <label className="block font-medium mb-1">City</label>
                <select className="w-full border border-gray-300 h-14 lg:min-h-14 px-4 py-2 text-[#828282]">
                  <option value="">Choose city</option>
                  <option value="KAR">Karachi</option>
                  <option value="NY">New York</option>
                  <option value="LD">London</option>
                  {/* Add more options */}
                </select>
              </div>
              <div>
                <label className="block font-medium mb-1">Zip code</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 h-14 lg:min-h-14 px-4 py-2" />
              </div>

              {/* Address 1 and Address 2 */}
              <div>
                <label className="block  font-medium mb-1">Address 1</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 h-14 lg:min-h-14 px-4 py-2" />
              </div>
              <div>
                <label className="block  font-medium mb-1">Address 2</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 h-14 lg:min-h-14 px-4 py-2" />
              </div>
            </form>

            {/* Billing Address */}
            <div className="mt-6 flex flex-col">
              <h2 className="text-xl font-bold mb-1">Billing Address</h2>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox rounded-none border-gray-300" />
                <span className="ml-2 text-sm">Same as shipping address</span>
              </label>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex justify-between gap-x-6">
              <button className="w-full h-14 border border-[#E0E0E0] text-[#4F4F4F] justify-center flex items-center">
                <Image src={CaretLeft} alt="Left" className="mr-1" /> Back to cart
              </button>
              <button className="w-full h-14 bg-[#FF9F0D] text-white justify-center flex items-center">
                Proceed to shipping <Image src={CaretRight} alt="Right" className="ml-1" />
              </button>
            </div>
          </div>

          {/* Right Section - Order Summary */}
          <div className="w-1/3 lg:w-1/3 md:w-1/3 h-auto border border-[#E0E0E0] mb-6 px-6">
            <div>
              {/* Order Items */}
              {[1, 2, 3].map((item, index) => (
                <div key={index}>
                  <div className="flex items-center space-x-4 min-h-[104px] text-[#333333]">
                    <Image
                      src={Pic01}
                      alt="Chicken Tikka Kabab"
                      className="w-16 h-16 object-cover"
                      width={82.72}
                      height={88}
                    />
                    <div>
                      <p className="font-bold">Chicken Tikka Kabab</p>
                      <p className="text-sm text-[#4F4F4F]">150 gm net</p>
                      <p className="text-sm text-[#4F4F4F]">$5</p>
                    </div>
                  </div>
                  <hr className="border-t-1 border-[#E0E0E0] my-[10px]" />
                </div>
              ))}
            </div>

            {/* Summary Details */}
            <div className="mt-7 space-y-4 text-[#4F4F4F]">
              <div className="flex justify-between">
                <span>Sub-total</span>
                <span className="text-[#4F4F4F]">$130</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-[#4F4F4F]">Free</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-[#4F4F4F]">25%</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span className="text-[#4F4F4F]">$54.76</span>
              </div>

              <hr className="border-t-1 border-[#E0E0E0]" />

              <div className="flex justify-between mt-1 text-[#333333] text-[18px] leading-[26px]">
                <span>Total</span>
                <span className="font-bold">$432.65</span>
              </div>
            </div>

            {/* Place Order Button */}
            <button className="w-full h-14 bg-[#FF9F0D] mt-7 text-white rounded-md flex justify-center items-center">
              Place an order <Image src={Arrow} alt="Arrow" className="ml-2" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}