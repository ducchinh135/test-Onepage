import React from "react";

const PromoSection = () => {
  return (
    <section className="relative w-full  min-h-screen flex overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="/bgVoucherSection.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t via-transparent to-black/100"></div>
      </div>
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-12">
        <div className="flex flex-col md:flex-row justify-between items-center p-8 rounded-xl"
          style={{
            background: 'linear-gradient(90deg, #422B98 0%, #6E48FE 100%)'
          }}>
            <div className="md:w-7/12 mb-8 md:mb-0">
            <p className="text-white font-bold text-lg mb-12">Redeem Code</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#D9D9D9] mb-4">
                Grant discounts and in-game bonuses to your players
              </h2>
              <form className="flex flex-col gap-4 max-w-md">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  className="px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-300 flex-grow focus:outline-none focus:ring-2 focus:ring-appstore-red"
                />
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-md transition-colors whitespace-nowrap"
                >
                  Redeem Code
                </button>
              </form>
            </div>
            <div className="md:w-4/12">
              <div className="relative">
                <div className="w-[440px] mx-auto">
                  <img
                    src="/imgGift.png"
                    alt="Gift Box"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
