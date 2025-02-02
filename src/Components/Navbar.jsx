import React, { useState } from "react";
import logo from "../assets/img/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-6 relative">
      <div className="px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" className="w-[200px]" />
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hidden text-[#5e3bee] font-bold">Home</a>
          <a href="#" className="hidden hover:text-[#5e3bee] hover:font-bold">Portfolio</a>
          <a href="#" className="hidden hover:text-[#5e3bee] hover:font-bold">About Me</a>
          <a href="#" className="hidden hover:text-[#5e3bee] hover:font-bold">Testimonials</a>
          <button className="border border-[#5e3bee] text-[#5e3bee] hover:text-white hover:bg-[#5e3bee] py-2 px-3 rounded-sm">
            Contact Me
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-6 md:hidden">
          <a href="#" className="text-[#5e3bee] font-bold">Home</a>
          <a href="#" className="hover:text-[#5e3bee] hover:font-bold">Portfolio</a>
          <a href="#" className="hover:text-[#5e3bee] hover:font-bold">About Me</a>
          <a href="#" className="hover:text-[#5e3bee] hover:font-bold">Testimonials</a>
          <button className="border border-[#5e3bee] text-[#5e3bee] hover:text-white hover:bg-[#5e3bee] py-2 px-3 rounded-sm">
            Contact Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
