import React from "react";
import { CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen flex overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="/bgHero.png"
          alt="Background"
          className="w-full h-[100%] object-cover "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-transparent to-red-900/80"></div>
      </div>
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <div className="md:w-3/4 lg:w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
              Welcome to Apps Store
            </h1>

            <div
              className="rounded-xl p-px"
              style={{
                background:
                  "linear-gradient(155.5deg, #C9C9C9 -0.69%, #000000 47.92%, #C9C9C9 100.69%)",
              }}
            >
              <div className="bg-[#240500F7] p-4 sm:p-6 md:p-8 rounded-xl relative h-full w-full ">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                  Get +20% more!
                </h2>
                <p className="text-gray-300 mb-4 text-sm sm:text-base">
                  Offer extra discount to players on Web Shop purchases.
                </p>

                <div className="flex flex-wrap gap-4 mb-4 text-gray-200">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-white mr-2" />
                    <span>Official Store</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-white mr-2" />
                    <span>Secure Payments</span>
                  </div>
                </div>

                <button className="bg-red-600 cursor-pointer hover:bg-red-700 text-white mr-2 flex items-center text-sm py-3 px-10 sm:py-4 sm:px-12 md:px-20 rounded-lg">
                  VIEW OFFERS
                </button>
              </div>
            </div>

            {/* Crystal Images - Positioned Absolutely */}
            <div className="hidden md:block absolute right-30 top-20">
              <img src="/imageSpell.png" className="w-60 h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
