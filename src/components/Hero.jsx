// import React from 'react'
// import {easeOut, motion} from 'framer-motion'
// import {assets} from '../assets/assets'

// const Hero = () => {
//   return (
//     <motion.div
//       initial={{opacity: 0, y: 50}}
//       whileInView={{opacity:1, y:0}}
//       transition={{duration:0.6, ease:easeOut}}
//       viewport={{once:true}}
//       id='home'
//       className=' min-h-screen flex items-center pt-20 pb-16 bg-linear-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]' >
//       <div className=' container mx-auto px-6 flex flex-col md:flex-row items-center justify-between '>

//         {/* left side content */}
//         <div className='md:w-1/2 mb-10md:mb-0'>
//           <h1 className=' text-4xl md:text-6xl font-bold
//            mb-4 '>
//             Hi, I'm <span className=' text-purple  '>Balaji Suryawanshi</span>
//           </h1>
//           <h2 className=' text-2xl md:text-4xl font-semibold mb-6 typewriter '>Full Stack Developer</h2>
//           <p className=' text-lg text-gray-300 mb-8 '>I create stunning web experiences with modern technologies and innovative design.</p>
//           <div className=' flex space-x-4 '>
//             <a href="#projects" className=' px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 '>View Work</a>
//             <a href="#contact" className=' px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition decoration-purple-300 '>Contact Me</a>
//           </div>
//         </div>

//         {/* right side image */}
//         <div className='md:w-1/2 flex justify-center'>
//           <div className=' relative w-64 h-64 md:w-80 md:h-80 '>
//             <div className=' absolute inset-0 rounded-full bg-linear-to-r from-purple to-pink opacity-70 '>
//               <motion.img animate={{y:[0,-20,0]}} transition ={{duration:4, repeat: Infinity, repeatType:"loop", ease:"easeInOut"}} className='relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10 ' src={assets.profileImg7} alt="profile" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// export default Hero

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
  href="/resume.pdf"
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