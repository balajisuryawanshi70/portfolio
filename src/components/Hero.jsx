import React from 'react'
import { easeOut, motion } from 'framer-motion'
import { assets } from '../assets/assets'
import { FaDownload } from "react-icons/fa"

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: easeOut }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center pt-24 pb-16 bg-[#020617]"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">

        {/* LEFT CONTENT */}
        <div className="md:w-1/2 text-center md:text-left">

          <p className="text-indigo-400 font-medium mb-3 tracking-wide text-2xl">
            👋 Welcome to my portfolio
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
            Hi, I'm{" "}
            <span className="bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Balaji Suryawanshi
            </span>
          </h1>

          <h2 className="text-xl md:text-3xl font-semibold text-gray-300 mb-6">
            Full Stack Developer
          </h2>

          <p className="text-gray-400 text-lg mb-8 max-w-lg">
            I build scalable and high-performance web applications using modern
            technologies like React, Node.js, Express.js and MongoDB.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition duration-300 shadow-lg shadow-indigo-500/20"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-gray-600 text-gray-300 hover:border-indigo-400 hover:text-white transition duration-300"
            >
              Contact Me
            </a>
            <a
              href="/Resume.pdf"
              download
              className="px-6 py-3 flex items-center gap-2 rounded-lg border border-white/10 text-gray-300 hover:border-indigo-400 hover:text-white transition duration-300"
            >
              <FaDownload />
              Resume
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-1/2 flex justify-center">

          <div className="relative w-64 h-64 md:w-80 md:h-80">

            {/* Glow Background */}
            <div className="absolute inset-0 rounded-full bg-linear-to-r from-indigo-500 to-cyan-500 blur-2xl opacity-30"></div>

            {/* Image */}
            <motion.img
              src={assets.profileImg7}
              alt="profile"
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white/10 shadow-xl"
            />
          </div>

        </div>

      </div>
    </motion.section>
  )
}

export default Hero