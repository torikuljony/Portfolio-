"use client";

import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          viewport={{ once: false, amount: 0.2 }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[4px] text-cyan-400">
            Introduction
          </p>

          <h2 className="text-4xl font-bold text-white md:text-6xl">
            About Me
          </h2>

          <div className="mx-auto mt-5 h-[3px] w-28 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"></div>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{
            opacity: 0,
            y: 120,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          whileHover={{
            y: -10,
          }}
          className="group relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-500 hover:border-cyan-400/30 hover:shadow-cyan-500/10 md:p-14"
        >

          {/* Hover Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-purple-500/10 opacity-0 transition-all duration-500 group-hover:opacity-100"></div>

          {/* Glow */}
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-400/10 blur-[100px]"></div>

          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-purple-500/10 blur-[100px]"></div>

          {/* Content */}
          <div className="relative z-10 grid items-center gap-16 lg:grid-cols-2">

            {/* LEFT SIDE */}
            <div>

              {/* Image */}
              <div className="relative mb-10 flex justify-center lg:justify-start">

                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-[100px]"></div>

                <div className="relative group/image">

                  <img
                    src="/profile.png"
                    alt="Profile"
                    className="w-[260px] rounded-[35px] border border-white/10 object-cover shadow-[0_10px_50px_rgba(0,0,0,0.45)] transition-all duration-500 group-hover/image:scale-[1.02] sm:w-[320px] md:w-[360px] lg:w-[400px]"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 rounded-[35px] bg-gradient-to-t from-[#020617]/60 to-transparent"></div>

                </div>
              </div>

            </div>

            {/* RIGHT SIDE */}
            <div>

              <h3 className="mb-6 text-3xl font-bold leading-tight text-white md:text-5xl">
                Building modern digital experiences with clean & scalable code.
              </h3>

              <p className="mb-6 text-lg leading-9 text-gray-300">
                I am a passionate MERN Stack Developer focused on creating
                premium web applications with modern UI/UX and high
                performance. I enjoy turning ideas into powerful and elegant
                digital experiences.
              </p>

              <p className="text-lg leading-9 text-gray-400">
                My expertise includes React.js, Next.js, MongoDB,
                Express.js, and Tailwind CSS. I always focus on writing
                clean code, responsive design, and smooth user experiences.
              </p>

              {/* Buttons */}
              <div className="mt-10 flex flex-wrap gap-5">

                {/* Download CV */}
                <a
                  href="/cv.pdf"
                  download
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(34,211,238,0.45)]"
                >
                  <FiDownload className="text-lg" />
                  Download CV
                </a>

                {/* Contact */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-7 py-3 font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
                >
                  Contact Me
                </a>

              </div>

              {/* Stats */}
              <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">

                {/* Card 1 */}
                <div className="group relative overflow-hidden rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-cyan-500/10 to-transparent p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">

                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl"></div>

                  <h4 className="mb-3 text-5xl font-extrabold text-cyan-400">
                    2+
                  </h4>

                  <p className="text-lg font-medium text-gray-300">
                    Years Experience
                  </p>

                </div>

                {/* Card 2 */}
                <div className="group relative overflow-hidden rounded-3xl border border-purple-400/10 bg-gradient-to-br from-purple-500/10 to-transparent p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-400/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">

                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-purple-400/10 blur-3xl"></div>

                  <h4 className="mb-3 text-5xl font-extrabold text-purple-400">
                    20+
                  </h4>

                  <p className="text-lg font-medium text-gray-300">
                    Projects Completed
                  </p>

                </div>

                {/* Card 3 */}
                <div className="group relative overflow-hidden rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-cyan-500/10 to-transparent p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">

                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl"></div>

                  <h4 className="mb-3 text-5xl font-extrabold text-cyan-400">
                    100%
                  </h4>

                  <p className="text-lg font-medium text-gray-300">
                    Responsive Design
                  </p>

                </div>

                {/* Card 4 */}
                <div className="group relative overflow-hidden rounded-3xl border border-purple-400/10 bg-gradient-to-br from-purple-500/10 to-transparent p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-400/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">

                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-purple-400/10 blur-3xl"></div>

                  <h4 className="mb-3 text-5xl font-extrabold text-purple-400">
                    MERN
                  </h4>

                  <p className="text-lg font-medium text-gray-300">
                    Stack Specialist
                  </p>

                </div>

              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;