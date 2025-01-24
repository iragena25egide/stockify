import React, { useRef, useState } from "react";
import BlockchainComponent from "./landingPage";
import AboutStockify from "./about";
import CommunityComponent from "./community";
import CustomerReviews from "./customreview";
import QuoteForm from "./demo";
import Price from "./price";
import QuoteSection from "./contact";
import Footer from "./Footer";

export function App() {
  const [menuOpen, setMenuOpen] = useState(false); // Initialize menuOpen state
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const communityRef = useRef(null);
  const demoRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between px-4 py-3 md:px-8 bg-blue-600 sticky text-white">
        <div className="text-2xl font-bold">
          <h1 className="text-4xl font-bold">STOCKIFY</h1>
        </div>

        {/* Hamburger menu for small screens */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.75h16.5M3.75 12h16.5M3.75 18.25h16.5"
              />
            </svg>
          </button>
        </div>

        {/* Navigation for larger screens */}
        <nav
          className={`flex-col md:flex md:flex-row items-center gap-6 ${
            menuOpen ? "block" : "hidden"
          } md:block`}
        >
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
          <button
            className="mt-4 md:mt-0 px-6 py-3 bg-white text-blue-600 rounded-full font-medium shadow-md"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(demoRef);
            }}
          >
            Get Demo
          </button>
        </nav>

        
      </div>

      {/* Sections */}
      <div ref={homeRef}>
        <BlockchainComponent />
      </div>

      {/* Statistics Section */}
      

      <div ref={aboutRef}>
        <AboutStockify />
      </div>
      <div>
        <Price />
      </div>

      <div ref={communityRef}>
        <CustomerReviews />
      </div>
      <div ref={demoRef}>
        <QuoteSection />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
