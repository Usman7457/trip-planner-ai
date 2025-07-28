import React from "react";
import FooterBottom from "./footer-bottom";
import FooterTop from "./footer-top";

const Footer = () => {
  return (
    <>
      <div className="absolute w-full border-t border-solid border-gray-300 px-4 pt-10 text-center md:pt-8 lg:pt-14">
        <FooterTop />
        <FooterBottom />
      </div>
    </>
  );
};

export default Footer;
