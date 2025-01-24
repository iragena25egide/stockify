import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const QuoteSectionPage = () => {
  return (
    <div className="bg-gradient-to-b from-blue-200 to-white text-white py-10 px-5 lg:px-20">
      <style>
        {`
          @keyframes fadeInDown {
            0% {
              opacity: 0;
              transform: translateY(-30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeInDown {
            animation: fadeInDown 1s ease-out forwards;
          }
        `}
      </style>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
          <div className="animate-fadeInDown">
            <h2 className="text-3xl font-semibold text-gray-900">
              Get a <span className="text-blue-600">quote</span>
            </h2>
            <p className="text-gray-700 mt-4">
              Fill up the form and our Team will get back to you within 24 hours.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <div className="flex items-center space-x-4">
              <FiPhone className="text-xl text-blue-600" />
              <span className="text-gray-700">+0123 4567 8910</span>
            </div>
            <div className="flex items-center space-x-4">
              <FiMail className="text-xl text-blue-600" />
              <span className="text-gray-700">hello@flowbase.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <FiMapPin className="text-xl text-blue-600" />
              <span className="text-gray-700">102 Street 2714 Don</span>
            </div>
          </div>

          <div className="flex space-x-4 mt-8">
            <a href="#" className="bg-blue-800 p-3 rounded-full hover:bg-blue-700">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-blue-800 p-3 rounded-full hover:bg-blue-700">
              <FaTwitter />
            </a>
            <a href="#" className="bg-blue-800 p-3 rounded-full hover:bg-blue-700">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <form>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2 text-blue-800"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2 text-blue-800"
                  htmlFor="email"
                >
                  Mail
                </label>
                <div className="flex items-center border border-gray-300 p-3 rounded focus-within:ring-2 focus-within:ring-blue-600">
                  <FiMail className="text-blue-800 mr-3" />
                  <input
                    type="email"
                    id="email"
                    className="w-full focus:outline-none"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2 text-blue-800"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                  rows="4"
                  placeholder="Write your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-800 text-white py-3 rounded hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteSectionPage;
