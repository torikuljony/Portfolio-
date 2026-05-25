"use client";

import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contact",
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          TORIKUL
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
          {navLinks.map((item, index) => (
            <li
              key={index}
              className="hover:text-cyan-400 duration-300 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Button */}
        <button className="hidden md:block bg-cyan-500 hover:bg-cyan-400 duration-300 text-black font-semibold px-5 py-2 rounded-full shadow-lg shadow-cyan-500/30">
          Hire Me
        </button>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-white text-3xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#0f172a] overflow-hidden duration-300 ${
          open ? "max-h-96 py-6" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 text-gray-300 font-medium">
          {navLinks.map((item, index) => (
            <li
              key={index}
              className="hover:text-cyan-400 duration-300 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="flex justify-center mt-6">
          <button className="bg-cyan-500 hover:bg-cyan-400 duration-300 text-black font-semibold px-5 py-2 rounded-full">
            Hire Me
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;