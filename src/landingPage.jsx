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

    
      <div className="bg-white rounded-lg shadow-lg mx-8 lg:mx-32 p-4">
        <h2 className="text-center text-3xl font-bold text-blue-800 mb-6 font-sulphur">
          Choose Your Plan
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
       
          <div className="border rounded-lg shadow p-6 text-center">
            <h3 className="text-xl font-bold text-blue-600 font-sulphur">Basic</h3>
            <p className="text-gray-500 mb-4 font-sulphur">Perfect for beginners</p>
            <p className="text-3xl font-bold text-blue-800 mb-4 font-sulphur">5000 RWF</p>
            <p className="text-sm text-gray-400 mb-6 font-sulphur">per month</p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600">
              Select Plan
            </button>
          </div>

          {/* Standard Plan */}
          <div className="border rounded-lg shadow p-6 text-center bg-blue-50">
            <h3 className="text-xl font-bold text-blue-600 font-sulphur">Standard</h3>
            <p className="text-gray-500 mb-4 font-sulphur">Ideal for regular users</p>
            <p className="text-3xl font-bold text-blue-800 mb-4 font-sulphur">7000 RWF</p>
            <p className="text-sm text-gray-400 mb-6 font-sulphur">per month</p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600">
              Select Plan
            </button>
          </div>

          {/* Premium Plan */}
          <div className="border rounded-lg shadow p-6 text-center">
            <h3 className="text-xl font-bold text-blue-600 font-sulphur">Premium</h3>
            <p className="text-gray-500 mb-4 font-sulphur">Best for professionals</p>
            <p className="text-3xl font-bold text-blue-800 mb-4 font-sulphur">10000 RWF</p>
            <p className="text-sm text-gray-400 mb-6 font-sulphur">per month</p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600">
              Select Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainComponent;
