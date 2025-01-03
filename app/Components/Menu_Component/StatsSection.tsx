import Image from 'next/image';

const StatsSection = () => {
    return (
      <div className="py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {/* Professional Chefs */}
            <div className="flex flex-col items-center">
              <Image src="/icons/chef.svg" alt="Chef Icon" className="w-14 h-14 mb-4" />
              <h2 className="text-3xl font-bold text-orange-400">420</h2>
              <p className="text-white">Professional Chefs</p>
            </div>
  
            {/* Items Of Food */}
            <div className="flex flex-col items-center">
              <Image src="/icons/food.svg" alt="Food Icon" className="w-14 h-14 mb-4" />
              <h2 className="text-3xl font-bold text-orange-400">320</h2>
              <p className="text-white">Items Of Food</p>
            </div>
  
            {/* Years Of Experience */}
            <div className="flex flex-col items-center">
              <Image src="/icons/experience.svg" alt="Experience Icon" className="w-14 h-14 mb-4" />
              <h2 className="text-3xl font-bold text-orange-400">30+</h2>
              <p className="text-white">Years Of Experienced</p>
            </div>
  
            {/* Happy Customers */}
            <div className="flex flex-col items-center">
              <Image src="/icons/pizza.svg" alt="Pizza Icon" className="w-14 h-14 mb-4" />
              <h2 className="text-3xl font-bold text-orange-400">220</h2>
              <p className="text-white">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default StatsSection;
  