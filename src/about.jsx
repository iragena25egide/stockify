import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import { AiOutlineRocket, AiOutlineEye } from 'react-icons/ai'; // Importing relevant Ant Design icons

const AboutStockify = () => {
//   useEffect(() => {
//     AOS.init({ duration: 2000, once: true });
//   }, []);

  return (
    <div className="bg-white p-8">
      <div className="container mx-auto">
        <div className="bg-gradient-to-b from-blue-200 to-white rounded-lg p-8 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-black mb-4" >
            About <span className="text-blue-600">Stockify</span>
          </h2>
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            <div className="lg:w-2/3" >
              <p className="text-gray-700 mb-6 leading-relaxed">
                <span className="font-bold text-blue-600">Stockify</span> is a cutting-edge platform designed to revolutionize how individuals and businesses invest and trade in the stock market. With an intuitive user interface, real-time data insights, and expert tools, Stockify empowers users to make informed financial decisions. We aim to break down barriers to entry, making stock trading accessible, transparent, and empowering for everyone—whether you're a seasoned investor or a beginner taking your first steps in the financial world.
              </p>
            </div>
            <div className="lg:w-1/3 lg:pl-8" >
              <img
                src="../assets/images/stockify-logo.png"
                alt="Stockify Logo"
                className="rounded-lg shadow-md mx-auto lg:mx-0"
              />
            </div>
          </div>
        </div>

        <div className="space-y-8 w-full lg:w-3/3 flex flex-col lg:flex-row justify-between mt-8">
          {/* Mission Card */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex-1 lg:mr-4 hover:bg-gradient-to-b from-blue-200 to-white" >
            <div className="flex items-center mb-6">
              <AiOutlineRocket size={40} className="mr-6 text-blue-600" /> {/* Rocket icon */}
              <h3 className="text-2xl font-semibold text-gray-900">
                Our <span className="text-blue-600">Mission</span>
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To democratize access to the stock market by offering reliable, secure, and user-friendly trading tools that empower individuals and businesses to build a better financial future.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex-1 lg:ml-4 hover:bg-gradient-to-b from-blue-200 to-white"  >
            <div className="flex items-center mb-6">
              <AiOutlineEye size={40} className="mr-6 text-blue-600" /> {/* Eye icon */}
              <h3 className="text-2xl font-semibold text-gray-900">
                Our <span className="text-blue-600">Vision</span>
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To become the world's most trusted stock trading platform, fostering financial independence and literacy while driving growth and innovation in the investment industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutStockify;
