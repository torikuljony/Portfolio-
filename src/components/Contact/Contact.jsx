"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import {
  HiOutlineMail,
} from "react-icons/hi";

const Contact = () => {

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const response = await fetch(
        "https://formspree.io/f/mqejgdpq",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: new FormData(e.target),
        }
      );

      if (response.ok) {

        alert("Message Sent Successfully ✅");

        setFormData({
          name: "",
          email: "",
          message: "",
        });

      } else {

        alert("Something went wrong ❌");

      }

    } catch (error) {

      alert("Failed to send message ❌");

    }

    setLoading(false);

  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-28"
    >

      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#7113be] via-[#620ea3] to-transparent blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
          >

            {/* Title */}
            <h2 className="mb-8 text-5xl font-bold text-white">
              Let&apos;s Connect
            </h2>

            {/* Description */}
            <p className="max-w-md leading-8 text-gray-400">
              Have a project in mind or just want to say hi?
              Feel free to reach out. I&apos;m always open
              to discussing new opportunities.
            </p>

            {/* EMAIL */}
            <div className="group mt-10 flex cursor-pointer items-start gap-4">

              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-500/10 text-2xl text-cyan-400 transition-all duration-500 group-hover:scale-110 group-hover:border-cyan-400 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]">

                <HiOutlineMail />

              </div>

              {/* Text */}
              <div>

                <p className="text-sm uppercase text-gray-500 transition-all duration-300 group-hover:text-cyan-300">
                  Email
                </p>

                <h3 className="mt-1 text-gray-200 transition-all duration-300 group-hover:text-white">
                  torikuljony36@gmail.com
                </h3>

              </div>

            </div>

            {/* SOCIAL */}
            <div className="group mt-8 flex items-start gap-4">

              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-500/10 text-2xl text-cyan-400 transition-all duration-500 group-hover:scale-110 group-hover:border-cyan-400 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]">

                <FaGithub />

              </div>

              {/* Social Links */}
              <div>

                <p className="text-sm uppercase text-gray-500 transition-all duration-300 group-hover:text-cyan-300">
                  Socials
                </p>

                <div className="mt-3 flex flex-wrap gap-5 text-gray-300">

                  {/* GitHub */}
                  <a
                    href="https://github.com/torikuljony"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:text-cyan-400"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="#"
                    className="flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:text-cyan-400"
                  >
                    <FaLinkedin />
                    LinkedIn
                  </a>

                  {/* Twitter */}
                  <a
                    href="#"
                    className="flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:text-cyan-400"
                  >
                    <FaTwitter />
                    Twitter
                  </a>

                </div>

              </div>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            className="relative"
          >

            {/* Glow */}
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]"></div>

            {/* Glass Card */}
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.37)] backdrop-blur-2xl transition-all duration-500 hover:border-cyan-400/40 hover:shadow-cyan-500/20">

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-500/5 opacity-0 transition-all duration-500 hover:opacity-100"></div>

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="relative z-10 space-y-6"
              >

                {/* Hidden Subject */}
                <input
                  type="hidden"
                  name="_subject"
                  value="New Portfolio Message 🚀"
                />

                {/* Name */}
                <div>

                  <label className="text-sm uppercase text-gray-400">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="mt-3 w-full rounded-2xl border border-white/10 bg-[#0f172a]/80 px-5 py-4 text-white outline-none transition-all duration-300 focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.25)]"
                  />

                </div>

                {/* Email */}
                <div>

                  <label className="text-sm uppercase text-gray-400">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="mt-3 w-full rounded-2xl border border-white/10 bg-[#0f172a]/80 px-5 py-4 text-white outline-none transition-all duration-300 focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.25)]"
                  />

                </div>

                {/* Message */}
                <div>

                  <label className="text-sm uppercase text-gray-400">
                    Message
                  </label>

                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    required
                    className="mt-3 w-full resize-none rounded-2xl border border-white/10 bg-[#0f172a]/80 px-5 py-4 text-white outline-none transition-all duration-300 focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.25)]"
                  ></textarea>

                </div>

                {/* Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-2xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 py-4 font-semibold text-white shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(168,85,247,0.45)]"
                >

                  {loading ? "Sending..." : "Send Message"}

                </button>

              </form>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;