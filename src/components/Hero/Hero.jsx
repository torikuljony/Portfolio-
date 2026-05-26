"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const Hero = () => {

  // Typing Texts
  const texts = [
    "MERN Stack Developer",
    "Next.js Specialist",
    "Full Stack Web Developer",
  ];

  const [displayText, setDisplayText] = useState("");

  useEffect(() => {

    let textIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const typeEffect = () => {

      const currentText = texts[textIndex];

      if (!deleting) {

        // Typing
        setDisplayText(
          currentText.substring(0, charIndex + 1)
        );

        charIndex++;

        // Full text হলে wait করবে
        if (charIndex === currentText.length) {

          deleting = true;

          setTimeout(typeEffect, 1500);

          return;

        }

      } else {

        // Deleting
        setDisplayText(
          currentText.substring(0, charIndex - 1)
        );

        charIndex--;

        // সব delete হলে next text
        if (charIndex === 0) {

          deleting = false;

          textIndex =
            (textIndex + 1) % texts.length;

        }

      }

      setTimeout(typeEffect, deleting ? 50 : 100);

    };

    typeEffect();

  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020617] pt-28">

      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[140px]"></div>

      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-purple-600/20 blur-[140px]"></div>

      {/* Main Container */}
      <div className="mx-auto flex min-h-screen max-w-[1400px] items-center px-6">

        <div className="grid w-full items-center gap-10 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >

            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2">

              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-500"></span>

              <p className="text-xs font-semibold uppercase tracking-[3px] text-cyan-300">
                Available For Hire
              </p>

            </div>

            {/* Heading */}
            <h1 className="text-6xl font-bold leading-tight text-white md:text-7xl">

              Hi, I&apos;m{" "}

              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 bg-clip-text text-transparent">
                Torikul
              </span>

            </h1>

            {/* Typing Animation */}
            <h2 className="mt-5 min-h-[40px] text-2xl font-semibold text-gray-300 md:text-3xl">

              <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">

                {displayText}

              </span>

              <span className="animate-pulse text-cyan-400">
                |
              </span>

            </h2>

            {/* Description */}
            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">

              Building modern, responsive, and visually attractive
              web experiences with a focus on performance and
              precision.

            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-6">

              {/* View Projects */}
              <a
                href="#portfolio"
                className="rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 px-8 py-4 font-semibold text-black shadow-lg shadow-cyan-500/20 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_35px_rgba(34,211,238,0.45)]"
              >

                View Projects

              </a>

              {/* Contact Me */}
              <a
                href="#contact"
                className="rounded-2xl border border-cyan-400/20 bg-white/5 px-8 py-4 font-medium text-white backdrop-blur-xl transition-all duration-500 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]"
              >

                Contact Me

              </a>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="relative flex justify-center"
          >

            {/* Circle Border */}
            <div className="absolute h-[500px] w-[500px] rounded-full border border-cyan-400/10"></div>

            {/* Glow */}
            <div className="absolute h-[350px] w-[350px] rounded-full bg-cyan-500/20 blur-[100px]"></div>

            {/* Floating Top Card */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute right-10 top-10 z-20"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[#111827] shadow-xl">

                <span className="text-xl text-cyan-400">
                  ⌘
                </span>

              </div>

            </motion.div>

            {/* Floating Bottom Card */}
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute bottom-10 left-10 z-20"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[#111827] shadow-xl">

                <span className="text-xl text-purple-400">
                  &lt;/&gt;
                </span>

              </div>

            </motion.div>

            {/* Profile Image */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="relative z-10"
            >

              <div className="group relative h-[320px] w-[320px] cursor-pointer overflow-hidden rounded-full border border-cyan-400/20 shadow-2xl shadow-cyan-500/20 transition-all duration-700 hover:scale-105 hover:shadow-[0_0_60px_rgba(34,211,238,0.45)] md:h-[430px] md:w-[430px]">

                {/* Animated Glow */}
                <div className="absolute inset-0 z-10 rounded-full bg-gradient-to-tr from-cyan-400/20 via-transparent to-purple-500/20 opacity-0 transition-all duration-700 group-hover:opacity-100"></div>

                <Image
                  src="/image.portfolio.png"
                  alt="profile"
                  width={500}
                  height={500}
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
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