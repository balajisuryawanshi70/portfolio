import React from 'react'
import { motion, easeOut } from "framer-motion"
import { aboutInfo, assets } from '../assets/assets'

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-[#020617]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            About <span className="text-indigo-400">Me</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Get to know more about my background, skills, and passion for development.
          </p>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: easeOut }}
            viewport={{ once: true }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">

              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-indigo-500 to-cyan-500 blur-2xl opacity-20"></div>

              <img
                src={assets.profileImg7}
                alt="profile"
                className="relative z-10 w-full h-full object-cover rounded-2xl border border-white/10 shadow-xl"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: easeOut }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              My Journey
            </h3>

            <p className="text-gray-400 mb-4 leading-relaxed">
              I am a passionate Full Stack Developer focused on building modern,
              scalable, and user-friendly web applications. I enjoy turning ideas
              into real-world products using clean and efficient code.
            </p>

            <p className="text-gray-400 mb-10 leading-relaxed">
              My journey started with curiosity about how websites work, and now I
              specialize in technologies like React, Node.js, and MongoDB to create
              high-performance applications.
            </p>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {aboutInfo.map((data, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-indigo-400 transition duration-300 group"
                >
                  <div className="text-indigo-400 text-3xl mb-4 group-hover:scale-110 transition">
                    <data.icon />
                  </div>

                  <h4 className="text-lg font-semibold text-white mb-2">
                    {data.title}
                  </h4>

                  <p className="text-gray-400 text-sm">
                    {data.description}
                  </p>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About