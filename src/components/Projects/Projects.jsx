"use client";

import Image from "next/image";
import projects from "@/data/projects";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="py-28 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

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
            Featured Projects
          </h2>

          <div className="w-28 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>

        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

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

              className="group relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.37)] hover:-translate-y-4 hover:border-cyan-400/40 hover:shadow-cyan-500/20 transition-all duration-500"
            >

              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500 z-0"></div>

              {/* Glow Ball */}
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-cyan-400/10 blur-[70px] rounded-full"></div>

              {/* Image */}
              <div className="overflow-hidden relative z-10">

                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-all duration-700"
                />

              </div>

              {/* Content */}
              <div className="p-7 relative z-10">

                {/* Category */}
                <span className="text-xs bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full border border-cyan-400/10">

                  {project.category}

                </span>

                {/* Title */}
                <h3 className="text-2xl font-bold mt-5 text-white group-hover:text-cyan-300 transition-all duration-300">

                  {project.title}

                </h3>

                {/* Description */}
                <p className="text-gray-400 mt-4 leading-8">

                  {project.description}

                </p>

                {/* Button */}
                <button className="mt-7 bg-cyan-400 hover:bg-cyan-300 hover:scale-105 hover:shadow-cyan-400/40 transition-all duration-500 text-black font-semibold px-6 py-3 rounded-2xl shadow-lg shadow-cyan-500/20">

                  Live Demo

                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;