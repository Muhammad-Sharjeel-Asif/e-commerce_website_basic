import Image from "next/image";
import Pic01 from "./Blog02.jpg";
import Pic02 from "./Pic10.jpg";
import Pic03 from "./Pic11.jpg";
import Pic04 from "./Pic12.jpg";
import Pic05 from "./Pic13.jpg";
import Pic06 from "./Pic14.jpg";
import Eye from "./Eye.png";

const PhotoGallery = () => {
    const photos = [
        Pic01,
        Pic02,
        Pic03,
        Pic04,
        Pic05,
        Pic06,
    ];

    return (
        <div className="border border-[#E0E0E0] p-4 mt-5">
            <div className="mx-2 my-4">
                <h4 className="text-[#333333] text-xl font-bold mb-4">Photo Gallery</h4>
                <div className="grid grid-cols-3 gap-x-2 gap-y-4">
                    {photos.map((photo, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden border border-gray-200"
                        >
                            {/* Parent container to define width and height */}
                            <div className="relative w-full h-[92px]">
                                <Image
                                    src={photo}
                                    alt={`Gallery Image ${index + 1}`}
                                    fill
                                    className="w-full h-[92px] object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            {/* Overlay with icon */}
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Image
                                    src={Eye}
                                    // fill="none"
                                    // viewBox="0 0 24 24"
                                    // strokeWidth="1.5"
                                    // stroke="currentColor"
                                    width={10}
                                    height={10}
                                    alt=""
                                    className="w-10 h-10 text-white rotate-90"
                                />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 10l4.553-4.553a1.125 1.125 0 011.544 0l2.709 2.709a1.125 1.125 0 010 1.544L19 15m-3.5 3.5L12 21m-7.5-7.5L3 19m0 0l1.769-1.768a1.125 1.125 0 011.544 0L9 19"
                                    />
                                {/* </> */}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default PhotoGallery;
