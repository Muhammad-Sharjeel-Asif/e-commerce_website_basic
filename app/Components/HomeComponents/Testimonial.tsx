import Pic from "./Testimonial.jpg";
import Image from "next/image";
import Quote from "./Quotes.png"
import Rating from '../ShoppingList/Rating';

const Testimonial = () => {
    return (
        <section className="mx-24 text-white py-12 px-6 md:px-12">
            <div className="mb-8">
                <p className="italic text-[#FF9F0D] text-[32px] mb-2">Testimonials</p>
                <h2 className="text-5xl font-bold pb-16">What our client are saying</h2>
            </div>

            {/* Testimonial Card */}
            <div className="bg-white mt-12 max-w-3xl mx-auto p-6 md:p-8 rounded-lg relative shadow-lg">
                {/* Client Image */}
                <div className="absolute mb-6 -top-10 left-1/2 transform -translate-x-1/2">
                    <Image
                        src={Pic}
                        alt="Client"
                        className="w-[132.92px] h-[133.97px] rounded-full object-cover"
                    />
                </div>

                {/* Quote Icon */}
                <div className="text-center mt-12 pt-12 pb-7 flex justify-center ">
                    <Image src={Quote} alt="Quote" className="w-12 h-12" />
                </div>

                {/* Testimonial Text */}
                <p className="text-center text-[#4F4F4F] text-lg mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                </p>

                {/* Rating and Client Details */}
                <div className="text-center">
                    <div className='flex flex-col'>
                        <span className="flex gap-x-1 justify-center">
                            {Array.from({ length: 5 }, (_, i) => (
                                <Rating key={i} filled={i < 4} width={24} height={24} />
                            ))}
                        </span>
                    </div>

                    {/* Client Name and Designation */}
                    <h3 className="text-2xl font-bold py-4 text-[#333333]">Alamin Hasan</h3>
                    <p className="text-[#828282]">Food Specialist</p>
                </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12 space-x-2">
                <span className="w-[15px] h-4 rounded-full bg-[#FF9F0D]"></span>
                <span className="w-[15px] h-4 rounded-full bg-[#FF9F0D4D]"></span>
                <span className="w-[15px] h-4 rounded-full bg-[#FF9F0D4D]"></span>
                <span className="w-[15px] h-4 rounded-full bg-[#FF9F0D4D]"></span>
            </div>
        </section>
    );
};

export default Testimonial;

// #CDCDCD40