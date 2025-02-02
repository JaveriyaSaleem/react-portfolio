import React from "react";
import logo from "../assets/img/Logo.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <nav className=" py-20 px-4 bg-[#f5fcff] mb-10">
      <div className="mx-4 flex items-center justify-between h-16 border-b border-b-black pb-30">
        <div>
          <img src={logo} alt="img" className="w-[200px]" />
        </div>
        {/* Hamburger menu for mobile */}
        <div className="md:hidden"></div>
        {/* Links */}
        <div className="md:flex md:items-center space-y-2 md:space-y-0 md:space-x-4 absolute md:relative top-16 md:top-0 left-0  px-4 md:px-0 gap-6">
          <a href="#" className="">
            Home
          </a>
          <a href="#" className="">
            Portfolio
          </a>
          <a href="#" className="">
            About Me
          </a>
          <a href="#" className="">
            Contact
          </a>
          <a href="#" className="">
            Testimonials
          </a>
          <a
                href="#"
                className=""
            >
                Portfolio
            </a>
        </div>
        <div className="flex justify-between w-[100px]">
          <a href=""> <FaFacebookF /></a>
       <a href=""><FaInstagram /></a>
       <a href=""><FaTwitter /></a>
       <a href=""> <FaLinkedin /></a>
        </div>
      </div>
      <div className="flex justify-between pt-10 px-4">
      <h4>Made with 💖 by Airdokan & Javeriya</h4>
      <p className="flex gap-10"> <span>Privacy Policy</span> <span>Terms of Service</span> <span>Cookies Settings</span>
</p>
      </div>
    </nav>
  );
};

export default Footer;
