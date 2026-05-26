"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  const [active, setActive] = useState("#");

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Academic", href: "#academic" },
    { name: "Projects", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {

    const handleScroll = () => {

      const sections = navItems.map((item) => item.href);

      sections.forEach((id) => {

        if (id === "#") {

          if (window.scrollY < 200) {
            setActive("#");
          }

          return;
        }

        const section = document.querySelector(id);

        if (section) {

          const top = section.offsetTop - 150;
          const height = section.clientHeight;

          if (
            window.scrollY >= top &&
            window.scrollY < top + height
          ) {
            setActive(id);
          }

        }

      });

    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 pt-5">

      <div className="max-w-7xl mx-auto">

        {/* Navbar */}
        <nav className="relative overflow-hidden flex items-center justify-between rounded-full border border-white/10 bg-[#071120]/40 backdrop-blur-xl px-5 md:px-7 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.30)]">

          {/* Glass Reflection */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none"></div>

          {/* Logo */}
          <Link
            href="/"
            className="relative z-10 text-3xl font-extrabold tracking-tight leading-none"
          >
            <span className="bg-gradient-to-r from-[#22d3ee] via-[#38bdf8] to-[#a855f7] bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(56,189,248,0.35)]">
              Torikul
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-5 text-[15px] font-medium text-gray-300">

            {navItems.map((item, index) => {

              const isActive = active === item.href;

              return (
                <li key={index}>

                  <a
                    href={item.href}
                    className={`group relative overflow-hidden rounded-full px-5 py-2.5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 ${
                      isActive
                        ? "text-white shadow-[0_0_25px_rgba(56,189,248,0.25)]"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >

                    {/* Animated Border */}
                    <span
                      className={`absolute inset-0 rounded-full p-[1px] transition-all duration-500 ${
                        isActive
                          ? "opacity-100 bg-gradient-to-r from-[#22d3ee] to-[#a855f7]"
                          : "opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#22d3ee] to-[#a855f7]"
                      }`}
                    >
                      <span className="block h-full w-full rounded-full bg-[#071120]"></span>
                    </span>

                    {/* Glow */}
                    <span
                      className={`absolute inset-0 rounded-full blur-xl transition-all duration-500 ${
                        isActive
                          ? "opacity-100 bg-gradient-to-r from-cyan-400/10 to-purple-500/10"
                          : "opacity-0 group-hover:opacity-100 bg-gradient-to-r from-cyan-400/10 to-purple-500/10"
                      }`}
                    ></span>

                    {/* Text */}
                    <span className="relative z-10">
                      {item.name}
                    </span>

                  </a>

                </li>
              );
            })}

          </ul>

          {/* Right Button */}
          <button className="hidden md:flex relative z-10 items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-5 py-2 text-sm font-medium text-emerald-300 transition-all duration-300 hover:scale-105 hover:bg-emerald-500/20 hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]">

            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>

            Available for work

          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="relative z-10 md:hidden text-white text-3xl"
          >
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>

        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            open
              ? "max-h-[500px] opacity-100 mt-4"
              : "max-h-0 opacity-0"
          }`}
        >

          <div className="rounded-[30px] border border-white/10 bg-[#071120]/90 backdrop-blur-2xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">

            {/* Mobile Links */}
            <ul className="flex flex-col gap-5 text-gray-300 font-medium">

              {navItems.map((item, index) => {

                const isActive = active === item.href;

                return (
                  <li key={index}>

                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`group relative flex items-center justify-center overflow-hidden rounded-2xl px-5 py-3 backdrop-blur-xl transition-all duration-500 ${
                        isActive
                          ? "text-white shadow-[0_0_25px_rgba(56,189,248,0.20)]"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >

                      {/* Gradient Border */}
                      <span
                        className={`absolute inset-0 rounded-2xl p-[1px] transition-all duration-500 ${
                          isActive
                            ? "opacity-100 bg-gradient-to-r from-[#22d3ee] to-[#a855f7]"
                            : "opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#22d3ee] to-[#a855f7]"
                        }`}
                      >
                        <span className="block h-full w-full rounded-2xl bg-[#071120]"></span>
                      </span>

                      {/* Glow */}
                      <span
                        className={`absolute inset-0 blur-xl transition-all duration-500 ${
                          isActive
                            ? "opacity-100 bg-gradient-to-r from-cyan-400/10 to-purple-500/10"
                            : "opacity-0 group-hover:opacity-100 bg-gradient-to-r from-cyan-400/10 to-purple-500/10"
                        }`}
                      ></span>

                      {/* Text */}
                      <span className="relative z-10">
                        {item.name}
                      </span>

                    </a>

                  </li>
                );
              })}

            </ul>

            {/* Mobile Button */}
            <div className="flex justify-center mt-8">

              <button className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-5 py-2 text-sm font-medium text-emerald-300 transition-all duration-300 hover:scale-105 hover:bg-emerald-500/20 hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]">

                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>

                Available for work

              </button>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
};

export default Navbar;