import Image from "next/image";
import Pic01 from "./WhyUs01.jpg";
import Pic02 from "./HomeFoodCategory02.jpg";
import Pic03 from "./WhyUs03.jpg";
import Pic04 from "../Menu_Component/Menu02.jpg";
import Pic05 from "./WhyUs06.jpg";
import Pic06 from "./WhyUs05.jpg";
import Icon01 from "./Hamburger.png"
import Icon02 from "./Cookie.png"
import Icon03 from "./Wine.png"

export default function WhyChooseUs() {
  return (
    <div className="flex mx-[132px] mb-20 gap-x-14">

      {/* Left: Image Grid */}
      <div className="flex flex-col w-1/2 overflow-hidden gap-y-2">

        <div className="flex items-end w-full gap-x-3">
          <Image
            src={Pic01}
            alt="Tacos"
            height={356}
            className="h-[356px] rounded-md object-cover "
          />

          <Image
            src={Pic02}
            alt="Burger"
            height={231}
            className="h-[231px] rounded-md object-cover "
          />
        </div>

        <div className="flex items-start gap-x-2">
          <Image
            src={Pic03}
            alt="Chef Plate"
            className="w-[224px] rounded-md object-cover "
          />
          <Image
            src={Pic04}
            alt="Sandwich"
            className="h-[226px] rounded-md w-[221px] object-cover object-center"
          />

          <div>
            <Image
              src={Pic05}
              alt="Pasta"
              className="h-[168px] rounded-md w-[161px] object-cover "
            />

            <Image
              src={Pic06}
              alt="Pasta"
              className="h-[166px] rounded-md w-[161px] object-cover "
            />
          </div>
        </div>
      </div>


      {/* Right: Content Section */}
      <div className="flex flex-col w-1/2 space-y-6 mt-20">
        <div>
          <h3 className="italic text-[#FF9F0D] text-[32px]">Why Choose Us</h3>
          <h1 className="text-5xl font-bold">
            <span className="text-[#FF9F0D]">Ex</span>tra ordinary taste And Experienced
          </h1>
          <p className="leading-relaxed mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in <br /> consequat.
          </p>

          {/* Icons Section */}
          <div className="flex justify-start gap-6 mt-6">
            <div className="flex flex-col items-center text-center">
              <div className="h-[100px] w-[102px] bg-[#FF9F0D] rounded-md flex items-center justify-center ">
                <Image src={Icon01} alt="Hamburger" />
              </div>
              <p className="mt-2 text-lg ">Fast Food</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="h-[100px] w-[102px] bg-[#FF9F0D] rounded-md flex items-center justify-center ">
                <Image src={Icon02} alt="Lunch" />
              </div>
              <p className="mt-2 text-lg ">Lunch</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="h-[100px] w-[102px] bg-[#FF9F0D] rounded-md flex items-center justify-center ">
                <Image src={Icon03} alt="Wine" />
              </div>
              <p className="mt-2 text-lg ">Wine</p>
            </div>
          </div>

          {/* Experience Box */}
          <div className="flex mt-7">
          <span className="w-[10px] bg-[#FF9F0D] rounded-l-md"></span>
          <div className="bg-white flex items-center justify-evenly px-6 py-4 rounded-r-md w-[364px] shadow-lg">
            <p className="text-5xl text-[#FF9F0D] font-bold">30+</p>
            <p className="text-[#1E1E1E] text-xl">
              Years of <br />
              <span className="text-2xl font-bold">Experienced</span>
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
