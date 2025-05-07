import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-12 ">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">ORDER</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Return & Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Cancellation/Order
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Payments
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  DMCA
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">RESOURCES</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Payment Methods
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms of Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">CUSTOMERS</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Store Examples
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="bg-red-600 rounded-md inline-block px-4 py-2 mb-4">
              <span className="text-white font-bold">CONTACT US</span>
            </div>
            <div className="flex flex-col spacey-y-2">
              <a href="#" className="text-gray-400 hover:text-white">
                X
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Linkedln
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Pinterest
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-between">
          <div>
            <a href="/" className="flex items-center">
              <div className="p-1.5 mr-2">
                <img src="/store_logo_app.png" />
              </div>
            </a>
          </div>
          <div className="flex items-center">
            <p className="text-gray-500 text-sm mr-2">
              © 2023 HAPPY PTE, LTD. All Rights Reserved.
            </p>

            <div className="flex space-x-2 text-gray-500 text-sm">
              <span>|</span>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="#" className="hover:text-white">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
