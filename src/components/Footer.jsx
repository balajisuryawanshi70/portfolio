import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="bg-[#020617] border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">

          {/* Logo */}
          <h2 className="text-xl font-semibold text-white">
            Balaji <span className="text-indigo-400">Suryawanshi</span>
          </h2>

          {/* Nav Links */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-white transition"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[FaGithub, FaLinkedin, FaX, FaInstagram].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:border-indigo-400 hover:text-white transition"
              >
                <Icon />
              </a>
            ))}
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 text-center">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Balaji Suryawanshi. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  )
}

export default Footer