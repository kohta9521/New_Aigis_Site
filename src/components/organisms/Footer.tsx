import React from "react";

// components
import Logo from "../atoms/Logo";

const Footer = () => {
  return (
    <div className="w-screen h-96">
      <div className="">
        <Logo id="footer-logo" link="/" size="md" />
      </div>
    </div>
  );
};

export default Footer;
