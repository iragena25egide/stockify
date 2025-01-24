import React from "react";

const BlockchainComponent = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('../assets/bg.jpg')",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(30, 58, 138, 0.8)",
      }}
    >
      

    
      <div className="flex w-full justify-center items-center px-8 lg:px-12 py-4">
       
        <div className="text-white">
        <h1 className="text-white text-5xl font-sulphur leading-tight mb-6 animate-fade-in text-center">
          Welcome to <span className="text-blue-300">Stockify</span>
        </h1>
        <p className="text-white text-2xl mb-8 font-sulphur">
          Your ultimate platform for trading and managing your stocks
          effortlessly.
        </p>
        </div>
      </div>

      <div className="py-4 w-[80%] flex justify-end mt-40 mx-auto rounded-lg p-8 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 font-sulphur">Our Impact</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-5xl font-bold text-blue-600 font-sulphur">1M+</p>
              <p className="text-gray-600 font-sulphur">Users</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-5xl font-bold text-blue-600 font-sulphur">5M+</p>
              <p className="text-gray-600 font-sulphur">Trades</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-5xl font-bold text-blue-600 font-sulphur">500+</p>
              <p className="text-gray-600 font-sulphur">Businesses</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-5xl font-bold text-blue-600 font-sulphur">50+</p>
              <p className="text-gray-600 font-sulphur">Countries</p>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default BlockchainComponent;
