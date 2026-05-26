"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Code2,
  Sparkles,
} from "lucide-react";

const academicData = [
  {
    id: 1,
    year: "2025",
    title: "SSC - Science",
    subtitle: "Sherpur Govt High School",
    description:
      "Focused on science, mathematics, and analytical problem solving.",
    icon: GraduationCap,
    side: "left",
    color: "from-cyan-400 to-sky-500",
  },

  {
    id: 2,
    year: "Present",
    title: "Self-Taught Developer",
    subtitle: "Modern Web Development",
    description:
      "Learning advanced frontend and backend technologies through real-world projects.",
    icon: Code2,
    side: "right",
    color: "from-purple-400 to-pink-500",
  },

  {
    id: 3,
    year: "Future Goal",
    title: "Computer Science",
    subtitle: "Software Engineering",
    description:
      "Building scalable digital products and becoming a full-stack engineer.",
    icon: BookOpen,
    side: "left",
    color: "from-cyan-400 to-blue-500",
  },
];

const Academic = () => {
  return (
    <section
      id="academic"
      className="relative overflow-hidden py-24 md:py-32"
    >

      {/* Background Glow */}
      <div className="absolute left-0 top-1 h-[350px] w-[350px] md:h-[500px] md:w-[500px] rounded-full bg-cyan-500/10 blur-[120px]"></div>

      <div className="absolute bottom-0 right-1 h-[350px] w-[350px] md:h-[500px] md:w-[500px] rounded-full bg-purple-500/10 blur-[120px]"></div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="mb-16 md:mb-24 text-center"
        >

          <p className="mb-3 text-[11px] md:text-sm uppercase tracking-[4px] text-cyan-400">
            Education Journey
          </p>

          <h2 className="text-3xl font-bold text-white md:text-6xl">
            Academic Experience
          </h2>

          <div className="mx-auto mt-4 h-[3px] w-24 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"></div>

        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Desktop Center Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-cyan-400/60 via-blue-500/40 to-purple-500/60 md:block"></div>

          {/* Mobile Line */}
          <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-400/60 via-blue-500/40 to-purple-500/60 md:hidden"></div>

          <div className="space-y-14 md:space-y-24">

            {academicData.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.id}
                  initial={{
                    opacity: 0,
                    y: 80,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: index * 0.2,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.2,
                  }}
                  className={`relative flex ${
                    item.side === "left"
                      ? "md:justify-start"
                      : "md:justify-end"
                  }`}
                >

                  {/* Timeline Node */}
                  <div className="absolute left-4 top-10 z-20 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-[#071120] bg-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.9)] md:left-1/2 md:top-1/2 md:-translate-y-1/2">

                    <div className="absolute inset-0 animate-ping rounded-full bg-cyan-400/50"></div>

                  </div>

                  {/* Card */}
                  <div className="group relative ml-12 w-full md:ml-0 md:w-[46%]">

                    {/* Glow */}
                    <div className={`absolute inset-0 rounded-[30px] bg-gradient-to-r ${item.color} opacity-0 blur-2xl transition-all duration-700 group-hover:opacity-20`}></div>

                    {/* Glass Card */}
                    <div className="relative overflow-hidden rounded-[28px] md:rounded-[35px] border border-white/10 bg-white/[0.04] p-5 md:p-8 backdrop-blur-3xl transition-all duration-500 hover:-translate-y-2 md:hover:-translate-y-3 hover:border-cyan-400/30">

                      {/* Reflection */}
                      <div className="absolute left-0 top-0 h-1/2 w-full bg-gradient-to-b from-white/10 to-transparent opacity-40"></div>

                      {/* Blur Ball */}
                      <div className={`absolute -right-10 -top-10 h-24 w-24 md:h-32 md:w-32 rounded-full bg-gradient-to-r ${item.color} opacity-20 blur-[80px]`}></div>

                      {/* Icon */}
                      <div className={`mb-5 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color} shadow-[0_0_25px_rgba(34,211,238,0.35)]`}>

                        <Icon className="h-7 w-7 text-white" />

                      </div>

                      {/* Year */}
                      <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs md:text-sm font-medium text-cyan-300 backdrop-blur-xl">
                        {item.year}
                      </div>

                      {/* Title */}
                      <h3 className="mb-2 text-2xl md:text-3xl font-bold text-white">
                        {item.title}
                      </h3>

                      {/* Subtitle */}
                      <p className="mb-5 text-sm md:text-lg text-gray-400">
                        {item.subtitle}
                      </p>

                      {/* Divider */}
                      <div className="mb-5 h-[1px] w-full bg-gradient-to-r from-cyan-400/30 to-transparent"></div>

                      {/* Description */}
                      <p className="text-sm md:text-base leading-7 md:leading-8 text-gray-300">
                        {item.description}
                      </p>

                      {/* Bottom Tag */}
                      <div className="mt-6 flex items-center gap-2 text-cyan-300">

                        <Sparkles className="h-4 w-4 md:h-5 md:w-5" />

                        <span className="text-xs md:text-sm tracking-wide">
                          Continuous Growth
                        </span>

                      </div>

                    </div>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Academic;