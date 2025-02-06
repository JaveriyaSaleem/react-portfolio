import React from "react";
import logo from "../assets/img/Logo.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <nav className=" py-20 px-4 bg-[#f5fcff] md:mb-10">
      <div className="mx-4 flex flex-col md:flex-row items-center justify-between border-b border-b-black pb-6 md:pb-20 gap-10">
        <div>
          <img src={logo} alt="img" className="w-[200px]" />
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row items-center  px-4 md:px-0 md:gap-6">
          <div className="flex md:flex-row gap-10">
          <a href="#" className="">
            Home
          </a>
          <a href="#" className="">
            Portfolio
          </a>
          <a href="#" className="">
            About Me
          </a>
          </div>
          <div className="flex md:flex-row gap-10">
          <a href="#" className="">
            Contact
          </a>
          <a href="#" className="">
            Testimonials
          </a>
          <a href="#" className="">
            Portfolio
          </a>
          </div>
        </div>
        <div className="flex justify-between w-[100px]">
          <a href="">
            {" "}
            <FaFacebookF />
          </a>
          <a href="">
            <FaInstagram />
          </a>
          <a href="">
            <FaTwitter />
          </a>
          <a href="">
            {" "}
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center md:flex-row justify-between pt-10 md:px-4">
        <h4>Made with 💖 by Airdokan & Javeriya</h4>
        <p className="md:flex gap-10 hidden">
          {" "}
          <span>Privacy Policy</span> <span>Terms of Service</span>{" "}
          <span>Cookies Settings</span>
        </p>
      </div>
    </nav>
  );
};

export default Footer;
