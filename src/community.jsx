import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { AiOutlineGlobal, AiOutlineTool, AiOutlineCalendar } from 'react-icons/ai';

const CommunityComponent = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <div>
      {/* Community Section */}
      <div className="bg-gray-50 p-8">
        <div className="container mx-auto">
          <div className="bg-gradient-to-b from-blue-200 to-white rounded-lg p-8 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-black mb-4" data-aos="fade-down">
              Join the <span className="text-blue-600">Stockify Community</span>
            </h2>
            <div className="flex flex-col lg:flex-row items-center lg:items-start">
              <div className="lg:w-2/3" data-aos="fade-down">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  At <span className="font-bold text-blue-600">Stockify</span>, we believe in the power of collaboration and shared growth. Our community is made up of investors, traders, and financial enthusiasts from around the globe, all coming together to learn, grow, and succeed in the world of stock trading. Whether you're a beginner or an expert, you'll find a supportive network and valuable resources to enhance your trading journey.
                </p>
              </div>
              <div className="lg:w-1/3 lg:pl-8" data-aos="fade-down">
                <img
                  src="../assets/images/community.png"
                  alt="Stockify Community"
                  className="rounded-lg shadow-md mx-auto lg:mx-0"
                />
              </div>
            </div>
          </div>

          <div className="space-y-8 w-full lg:w-3/3 flex flex-col lg:flex-row justify-between mt-8">
            {/* Networking Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg flex-1 lg:mr-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-b from-blue-200 to-white min-h-[300px]" data-aos="fade-down">
              <div className="flex items-center mb-6">
                <AiOutlineGlobal size={40} className="mr-6 text-blue-600" />
                <h3 className="text-2xl font-semibold text-gray-900">
                  Global <span className="text-blue-600">Networking</span>
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Connect with a global network of like-minded individuals, exchange ideas, and gain insights from diverse perspectives to enhance your trading strategies.
              </p>
            </div>

            {/* Resources Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg flex-1 lg:mx-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-b from-blue-200 to-white min-h-[300px]" data-aos="fade-down">
              <div className="flex items-center mb-6">
                <AiOutlineTool size={40} className="mr-6 text-blue-600" />
                <h3 className="text-2xl font-semibold text-gray-900">
                  Exclusive <span className="text-blue-600">Resources</span>
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Gain access to exclusive tools, webinars, and market insights tailored to help you stay ahead in the fast-paced stock trading industry.
              </p>
            </div>

            {/* Events Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg flex-1 lg:ml-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-b from-blue-200 to-white min-h-[300px]" data-aos="fade-down">
              <div className="flex items-center mb-6">
                <AiOutlineCalendar size={40} className="mr-6 text-blue-600" />
                <h3 className="text-2xl font-semibold text-gray-900">
                  Engaging <span className="text-blue-600">Events</span>
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Participate in interactive events such as live trading sessions, Q&A forums, and workshops led by industry experts to elevate your trading skills.
              </p>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default CommunityComponent;
