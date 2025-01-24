import React, { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Iragena Egide",
    image: "../assets/khalipa.png",
    review: "Stockify Greatness",
    comment:
      "Stockify helps to boost my business performance. It also provides a way to track transactions in business.",
    stars: 5,
  },
];

const CustomerReviews = () => {
  const currentYear = new Date().getFullYear();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-blue-900 text-white p-8 md:py-16 relative overflow-hidden mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 p-6 space-y-6 text-center lg:text-left">
            <div className="bg-blue-500 p-4 rounded-full inline-block mx-auto lg:mx-0">
              <FaQuoteLeft className="text-white text-4xl" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              What Our Customers Say
            </h2>
            <p className="mt-4 text-lg leading-relaxed font-sulphur">
              Hear from our satisfied customers about how Stockify transformed
              their business.
            </p>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 px-6 relative">
            <div
              className="flex transition-transform duration-700"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                width: `${testimonials.length * 100}%`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white text-black rounded-lg p-6 shadow-lg flex-shrink-0 w-full lg:w-[85%] mx-auto"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                  <h4 className="text-lg font-bold text-center">
                    {testimonial.review}
                  </h4>
                  <p className="text-gray-700 text-center mb-2 font-light">
                    {testimonial.comment}
                  </p>
                  <p className="text-center text-yellow-500">
                    {"⭐".repeat(testimonial.stars)}
                  </p>
                </div>
              ))}
            </div>

            {/* Dot Navigation */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-4 h-4 rounded-full ${
                    index === currentIndex ? "bg-blue-400" : "bg-gray-400"
                  }`}
                  onClick={() => handleDotClick(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Footer Section */}
      
    </div>
  );
};

export default CustomerReviews;
