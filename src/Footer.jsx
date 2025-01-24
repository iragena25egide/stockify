import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 py-4 text-center">
      <p className="text-sm font-sulphur text-white">
        &copy; {currentYear} Stockify. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
