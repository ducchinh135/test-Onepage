import React from "react";
import { Search, LogIn, ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-black py-4 px-4 sm:px-6 md:px-10 flex flex-wrap justify-between items-center">
      <div className="flex items-center">
        <a href="/" className="flex items-center">
          <div className="p-1.5 mr-2">
            <img src="/store_logo_app.png" />
          </div>
        </a>
      </div>

      <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 ml-4 lg:ml-8 text-gray-300 order-3 md:order-2 w-full md:w-auto mt-4 md:mt-0">
        <a href="#" className="hover:text-white flex items-center font-bold">
          <img src="/icons/moneyIcon.png" className="w-6 h-6 mr-2" />
          Direct Top up
        </a>
        <a href="#" className="hover:text-white flex items-center font-bold">
          <img src="/icons/percentIcon.png" className="w-6 h-6 mr-2" />
          Voucher
        </a>
        <a href="#" className="hover:text-white flex items-center font-bold">
          <img src="/icons/questionIcon.png" className="w-6 h-6 mr-2" />
          Support
        </a>
      </nav>

      <div className="flex items-center ml-auto order-2 md:order-3">
      <div className="relative mr-2">
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="bg-white rounded-lg py-1.5 px-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-appstore-red w-[150px] sm:w-[200px] md:w-[250px]"
          />
        </div>

        <div className="bg-red-600 cursor-pointer hover:bg-red-700 text-white mr-2 flex items-center text-sm py-1.5 px-3 sm:py-1 sm:px-3 rounded-lg">
          Log In
        </div>

        <div className="flex items-center">
          <div className="w-8 h-6 overflow-hidden rounded-sm flex items-center justify-center">
            <img
              src="https://flagcdn.com/w40/us.png"
              alt="English"
              className="max-w-none h-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
