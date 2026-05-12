import React from 'react'
import { motion, easeOut } from 'framer-motion'
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone
} from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#020617]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Get In <span className="text-indigo-400">Touch</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let’s connect.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* FORM */}
          <motion.form
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 space-y-6"
          >

            <div>
              <label className="text-gray-400 text-sm mb-2 block">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/10 text-white focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 outline-none transition"
              />
            </div>

            <div>
              <label className="text-gray-400 text-sm mb-2 block">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/10 text-white focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 outline-none transition"
              />
            </div>

            <div>
              <label className="text-gray-400 text-sm mb-2 block">Your Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/10 text-white focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 outline-none transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition duration-300 shadow-md shadow-indigo-500/20"
            >
              Send Message
            </button>

          </motion.form>

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >

            {/* Info */}
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-indigo-400 text-xl mt-1" />
              <div>
                <h3 className="text-white font-semibold">Location</h3>
                <p className="text-gray-400 text-sm">Pune, Maharashtra</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-indigo-400 text-xl mt-1" />
              <div>
                <h3 className="text-white font-semibold">Email</h3>
                <p className="text-gray-400 text-sm">surywanshib7@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhone className="text-indigo-400 text-xl mt-1" />
              <div>
                <h3 className="text-white font-semibold">Phone</h3>
                <p className="text-gray-400 text-sm">+91 9922865349</p>
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-white font-semibold mb-4">Follow Me</h3>

              <div className="flex gap-4">
                <a
                  href="https://github.com/balajisuryawanshi70"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:border-indigo-400 hover:text-white transition"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/balaji-suryawanshi-48b943237/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:border-indigo-400 hover:text-white transition"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://x.com/suryawanshib_70"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:border-indigo-400 hover:text-white transition"
                >
                  <FaX />
                </a>

                <a
                  href="https://www.instagram.com/balajisuryawanshi_70"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:border-indigo-400 hover:text-white transition"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Contact