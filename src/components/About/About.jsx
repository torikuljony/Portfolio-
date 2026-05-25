"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-28 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          className="text-center mb-14"
        >

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About Me
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>

        </motion.div>

        {/* Premium Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[35px] p-10 md:p-14 text-gray-300 leading-8 shadow-[0_8px_32px_rgba(0,0,0,0.37)] hover:border-cyan-400/30 hover:shadow-cyan-500/10 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
        >

          {/* Hover Gradient */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-400/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

          {/* Glow Ball */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-400/10 blur-[70px] rounded-full"></div>

          {/* Content */}
          <div className="relative z-10">

            <p className="mb-6 text-lg text-gray-300 leading-9">

              I am a passionate web developer dedicated to building
              high-performance digital solutions. My journey in technology
              is driven by curiosity for how things work and a desire to
              build tools that provide real value to users.

            </p>

            <p className="text-lg text-gray-400 leading-9">

              I specialize in the MERN stack, with a deep focus on
              Next.js for server-side rendering and optimized
              performance. My design philosophy centers on clean code,
              intuitive user interfaces, and technical precision.

            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;