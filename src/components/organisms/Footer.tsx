import React from "react";

// next

// components
import Logo from "../atoms/Logo";

const Footer = () => {
  return (
    <div className="w-screen h-auto pt-10 pb-3 border ">
      <div className="w-11/12 mx-auto">
        <div className="sm:flex">
          {/* Logo */}
          <div className="w-auto mb-4">
            <Logo id="footer-logo" link="/" size="md" />
          </div>
          <p className="text-sm text-gray-500 font-semibold">
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
