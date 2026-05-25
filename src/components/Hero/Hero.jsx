"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const Hero = () => {

  // Typing Animation
  const text = "Next.js & Modern Web Developer";

  const [displayText, setDisplayText] = useState("");

  useEffect(() => {

    let index = 0;

    const interval = setInterval(() => {

      setDisplayText(text.slice(0, index));

      index++;

      if (index > text.length) {
        clearInterval(interval);
      }

    }, 100);

    return () => clearInterval(interval);

  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020617] pt-28">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full"></div>

      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/20 blur-[140px] rounded-full"></div>

      {/* Main Container */}
      <div className="max-w-[1400px] mx-auto px-6 min-h-screen flex items-center">

        <div className="grid lg:grid-cols-2 gap-10 items-center w-full">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 rounded-full mb-8">

              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>

              <p className="text-cyan-300 uppercase tracking-[3px] text-xs font-semibold">
                Available For Hire
              </p>

            </div>

            {/* Heading */}
            <h1 className="text-6xl md:text-7xl font-bold leading-tight text-white">

              Hi, I&apos;m{" "}

              <span className="gradient-text">
                Torikul
              </span>

            </h1>

            {/* Typing Animation */}
            <h2 className="mt-5 text-2xl md:text-3xl font-semibold text-gray-300 min-h-[40px]">

              {displayText}

              <span className="animate-pulse text-cyan-400">
                |
              </span>

            </h2>

            {/* Description */}
            <p className="mt-8 text-gray-400 text-lg leading-8 max-w-xl">

              Building modern, responsive, and visually attractive
              web experiences with a focus on performance and
              precision.

            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-6 mt-10">

              {/* View Projects */}
              <button className="bg-cyan-400 hover:bg-cyan-300 hover:scale-105 hover:shadow-cyan-400/50 transition-all duration-300 text-black font-semibold px-8 py-4 rounded-2xl shadow-lg shadow-cyan-500/20">

                View Projects

              </button>

              {/* Contact Me */}
              <button className="border border-white/20 hover:border-cyan-400 hover:bg-cyan-400/10 text-white hover:text-cyan-400 transition-all duration-300 font-medium px-8 py-4 rounded-2xl">

                Contact Me

              </button>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >

            {/* Circle Border */}
            <div className="absolute w-[500px] h-[500px] rounded-full border border-cyan-400/10"></div>

            {/* Glow */}
            <div className="absolute w-[350px] h-[350px] bg-cyan-500/20 blur-[100px] rounded-full"></div>

            {/* Floating Top Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute top-10 right-10 z-20"
            >

              <div className="bg-[#111827] border border-white/10 w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl">

                <span className="text-cyan-400 text-xl">
                  ⌘
                </span>

              </div>

            </motion.div>

            {/* Floating Bottom Card */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute bottom-10 left-10 z-20"
            >

              <div className="bg-[#111827] border border-white/10 w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl">

                <span className="text-purple-400 text-xl">
                  &lt;/&gt;
                </span>

              </div>

            </motion.div>

            {/* Profile Image */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="relative z-10"
            >

              <div className="w-[320px] h-[320px] md:w-[430px] md:h-[430px] rounded-full overflow-hidden border border-cyan-400/20 shadow-2xl shadow-cyan-500/20 hover:scale-105 hover:shadow-cyan-400/40 transition-all duration-500 cursor-pointer">

                <Image
                  src="/image.portfolio.png"
                  alt="profile"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />

              </div>

            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;