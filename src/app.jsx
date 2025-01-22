import React, { useRef } from "react";
import BlockchainComponent from "./landingPage";
import AboutStockify from "./about";
import CommunityComponent from "./community";
import CustomerReviews from "./customreview";
import QuoteForm from "./demo";

export function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const communityRef = useRef(null);
  const demoRef=useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center px-8 py-4 bg-blue-600 sticky                 text-white">
        <div className="text-xl font-bold">
          <h1 className="text-4xl font-bold">STOCKIFY</h1>
        </div>
        <nav className="flex gap-6">
          <a
            href="#"
            className="hover:underline"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(homeRef);
            }}
          >
            HOME
          </a>
          <a
            href="#"
            className="hover:underline"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(aboutRef);
            }}
          >
            ABOUT US
          </a>
          <a
            href="#"
            className="hover:underline"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(communityRef);
            }}
          >
            REVIEW
          </a>
        </nav>
        <button className="px-6 py-3 bg-white text-blue-600 rounded-full font-medium shadow-md" onClick={(e) => {
              e.preventDefault();
              scrollToSection(demoRef);
            }}>
          Get Demo
        </button>
      </div>

      {/* Sections */}
      <div ref={homeRef}>
        <BlockchainComponent />
      </div>
      <div ref={aboutRef}>
        <AboutStockify />
      </div>
      <div ref={demoRef}>
        <QuoteForm />
      </div>
      <div ref={communityRef}>
        <CustomerReviews />
      </div>
    </div>
  );
}

export default App;
