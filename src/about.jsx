import React, { useRef } from 'react';

const InvestmentManager = () => {
  // Create a ref for the QuoteSection
  const quoteRef = useRef(null);

  // Scroll function that will be called on button click
  const scrollToQuoteSection = () => {
    quoteRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-blue-400 to-blue-950 min-h-screen flex items-center justify-center px-6 md:px-12">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          {/* Optional: Add a background image */}
          {/* <img
            src="../assets/blue-black.png"
            alt="Background"
            className="w-full h-full object-cover"
          /> */}
        </div>

        {/* Content container */}
        <div className="text-center md:text-left max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Section: Heading and Text */}
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-white font-sulphur">
              Stay Ahead of Your Inventory with Stockify
            </h1>
            <p className="text-white mt-4 text-base md:text-lg font-sulphur">
              Stockify is a cutting-edge platform designed to revolutionize how individuals
              and businesses invest and trade in the stock market. With an intuitive user
              interface, real-time data insights, and expert tools, Stockify empowers users
              to make informed financial decisions. We aim to break down barriers to entry,
              making stock trading accessible, transparent, and empowering for everyone—
              whether you're a seasoned investor or a beginner taking your first steps in
              the financial world.
            </p>
            <div className="mt-6">
              <button
                className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition transform hover:scale-105 hover:bg-blue-700 font-sulphur"
                onClick={scrollToQuoteSection}
              >
                Request Demo
              </button>
            </div>
          </div>

          {/* Right Section: Floating Image */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Circle */}
            <div
              className="relative bg-blue-300 rounded-full w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex items-center justify-center"
            >
              {/* Floating image */}
              <img
                src="../assets/Stockmen02.png"
                alt="Floating Stockify"
                className="absolute top-0 object-contain max-w-[80%] lg:max-w-[90%]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentManager;
