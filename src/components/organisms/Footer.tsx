import React from "react";

// next

// components
import Logo from "../atoms/Logo";

const Footer = () => {
  return (
    <div className="w-screen h-auto pt-10 pb-5 border ">
      <div className="w-10/12 mx-auto">
        <div className="sm:flex sm:justify-between">
          {/* Logo */}
          <div className="w-auto mb-4">
            <Logo id="footer-logo" link="/" size="md" />
          </div>
          <p className="text-xs mt-10 text-gray-500 font-semibold sm:text-base sm:mt-0">
            COMPANY INFORMATION
            <br />
            株式会社Aigis
            <br />
            東京都港区南麻布
            <br />
          </p>
        </div>
      </div>
      <p className="text-xs text-center text-gray-500 font-semibold mt-4">
        © 2025 Aigis Tokyo
      </p>
    </div>
  );
};

export default Footer;
