"use client";

import Image from "next/image";
import projects from "@/data/projects";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden py-28"
    >

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

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
          className="mb-16 text-center"
        >

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Featured Projects
          </h2>

          <div className="mx-auto mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"></div>

        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (

            <motion.div
              key={project.id}

              initial={{ opacity: 0, y: 100 }}

              whileInView={{ opacity: 1, y: 0 }}

              transition={{
                duration: 1,
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}

              viewport={{
                once: false,
                amount: 0.2,
              }}

              whileHover={{
                y: -12,
              }}

              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.37)] backdrop-blur-2xl transition-all duration-500 hover:border-cyan-400/40 hover:shadow-cyan-500/20"
            >

              {/* Hover Gradient */}
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-purple-500/5 opacity-0 transition-all duration-500 group-hover:opacity-100"></div>

              {/* Glow Ball */}
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/10 blur-[70px]"></div>

              {/* Image */}
              <div className="relative z-10 overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="h-56 w-full object-cover transition-all duration-700 group-hover:scale-110"
                />

              </div>

              {/* Content */}
              <div className="relative z-10 p-7">

                {/* Category */}
                <span className="rounded-full border border-cyan-400/10 bg-cyan-500/20 px-4 py-2 text-xs text-cyan-300">

                  {project.category}

                </span>

                {/* Title */}
                <h3 className="mt-5 text-2xl font-bold text-white transition-all duration-300 group-hover:text-cyan-300">

                  {project.title}

                </h3>

                {/* Description */}
                <p className="mt-4 leading-8 text-gray-400">

                  {project.description}

                </p>

                {/* Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/button relative mt-7 inline-flex overflow-hidden rounded-2xl p-[1.5px]"
                >

                  {/* Animated Border */}
                  <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#22d3ee_0%,#a855f7_50%,#22d3ee_100%)]"></span>

                  {/* Glass Button */}
                  <span className="relative inline-flex items-center justify-center rounded-2xl bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-xl transition-all duration-300 group-hover/button:bg-white/15 group-hover/button:text-cyan-200">

                    Live Demo

                  </span>

                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;