
const ManualDualRangeSlider = () => {
  return (
    <div>
      <h4 className="font-bold text-xl text-[#333333] mb-4">Filter by Price</h4>

      {/* Range Bar */}
      <div className="relative w-full h-[5px] bg-[#FF9F0D] rounded-full">
        {/* Left Wheel */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-[10.49px] h-[11px] bg-[#FF9F0D] border-2 border-white rounded-full shadow-md"
          style={{ left: "0%" }}
        ></div>

        {/* Right Wheel */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-[10.49px] h-[11px] bg-[#FF9F0D] border-2 border-white rounded-full shadow-md"
          style={{ left: "100%" }}
        ></div>
      </div>

      {/* Price Labels */}
      <div className="flex justify-between text-[#1E1E1E] mt-2 mb-4">
        <span>From $0 to $8000</span>
        <span>Filter</span>
      </div>
    </div>

  );
};

export default ManualDualRangeSlider;