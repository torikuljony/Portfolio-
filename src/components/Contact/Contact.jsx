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
        "https://formspree.io/f/xwpqepqj",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
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
    <section className="py-28 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

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
            <h2 className="text-5xl font-bold mb-8 text-white">
              Let&apos;s Connect
            </h2>

            {/* Description */}
            <p className="text-gray-400 leading-8 max-w-md">
              Have a project in mind or just want to say hi?
              Feel free to reach out. I&apos;m always open
              to discussing new opportunities.
            </p>

            {/* EMAIL */}
            <div className="mt-10 flex items-start gap-4 group cursor-pointer">

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 text-2xl transition-all duration-500 group-hover:border-cyan-400 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] group-hover:scale-110">

                <HiOutlineMail />

              </div>

              {/* Text */}
              <div>

                <p className="text-sm text-gray-500 uppercase transition-all duration-300 group-hover:text-cyan-300">
                  Email
                </p>

                <h3 className="text-gray-200 mt-1 transition-all duration-300 group-hover:text-white">
                  torikuljony36@gmail.com
                </h3>

              </div>

            </div>

            {/* SOCIAL */}
            <div className="mt-8 flex items-start gap-4 group">

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 text-2xl transition-all duration-500 group-hover:border-cyan-400 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] group-hover:scale-110">

                <FaGithub />

              </div>

              {/* Social Links */}
              <div>

                <p className="text-sm text-gray-500 uppercase transition-all duration-300 group-hover:text-cyan-300">
                  Socials
                </p>

                <div className="flex gap-5 mt-3 text-gray-300">

                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300"
                  >
                    <FaLinkedin />
                    LinkedIn
                  </a>

                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300"
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
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/10 blur-[100px] rounded-full"></div>

            {/* Glass Card */}
            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.37)] hover:border-cyan-400/40 hover:shadow-cyan-500/20 transition-all duration-500">

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-all duration-500"></div>

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="relative z-10 space-y-6"
              >

                {/* Name */}
                <div>

                  <label className="text-sm text-gray-400 uppercase">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full mt-3 bg-[#0f172a]/80 border border-white/10 rounded-2xl px-5 py-4 outline-none text-white focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.25)] transition-all duration-300"
                  />

                </div>

                {/* Email */}
                <div>

                  <label className="text-sm text-gray-400 uppercase">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full mt-3 bg-[#0f172a]/80 border border-white/10 rounded-2xl px-5 py-4 outline-none text-white focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.25)] transition-all duration-300"
                  />

                </div>

                {/* Message */}
                <div>

                  <label className="text-sm text-gray-400 uppercase">
                    Message
                  </label>

                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    required
                    className="w-full mt-3 bg-[#0f172a]/80 border border-white/10 rounded-2xl px-5 py-4 outline-none text-white resize-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.25)] transition-all duration-300"
                  ></textarea>

                </div>

                {/* Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-cyan-400 hover:bg-cyan-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(34,211,238,0.5)] transition-all duration-500 text-black font-semibold py-4 rounded-2xl shadow-lg shadow-cyan-500/20"
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