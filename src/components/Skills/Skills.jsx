"use client";

import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
} from "react-icons/si";

import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

const skills = [
  {
    title: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    title: "React",
    icon: <SiReact />,
  },
  {
    title: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    title: "Firebase",
    icon: <SiFirebase />,
  },
  {
    title: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    title: "Node.js",
    icon: <FaNodeJs />,
  },
];

const Skills = () => {
  return (
    <section className="py-28 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

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
          className="text-center mb-16"
        >

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Technical Arsenal
          </h2>

          <div className="w-28 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>

        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {skills.map((skill, index) => (

            <motion.div
              key={index}

              initial={{ opacity: 0, y: 100 }}

              whileInView={{ opacity: 1, y: 0 }}

              transition={{
                duration: 1,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}

              viewport={{
                once: false,
                amount: 0.2,
              }}

              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl py-10 flex flex-col items-center justify-center gap-5 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.37)] hover:border-cyan-400/40 hover:-translate-y-3 hover:shadow-cyan-500/20 transition-all duration-500 cursor-pointer"
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Glow Ball */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-cyan-400/10 blur-[60px] rounded-full"></div>

              {/* Icon */}
              <div className="relative z-10 text-4xl text-cyan-400 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500">

                {skill.icon}

              </div>

              {/* Title */}
              <h3 className="relative z-10 text-gray-300 font-medium text-center group-hover:text-white transition-all duration-300">

                {skill.title}

              </h3>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;