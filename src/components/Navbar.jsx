
import React, { useState } from 'react'
import { FaXmark } from 'react-icons/fa6'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className="fixed w-full z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-white/10 shadow-md">
      
      <div className="max-w-7xl mx-auto px-1 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
          Balaji
          <span className="text-indigo-400">Suryawanshi</span>
          
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-gray-300 hover:text-white transition duration-300 group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden text-white">
          {showMenu ? (
            <FaXmark onClick={() => setShowMenu(false)} className="text-2xl cursor-pointer" />
          ) : (
            <FaBars onClick={() => setShowMenu(true)} className="text-2xl cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden bg-[#020617]/95 backdrop-blur-lg px-6 py-8 space-y-6 text-center text-lg font-medium border-t border-white/10">
          {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setShowMenu(false)}
              className="block text-gray-300 hover:text-indigo-400 transition duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar