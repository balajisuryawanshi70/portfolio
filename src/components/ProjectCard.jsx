// import React from 'react'


// const ProjectCard = ({title, description, image, tech}) => {
//   return (
//     <div className=' bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer'>
//       <img src={image} alt={title}  className=' w-full h-60 object-cover '/>
//       <div className=' p-6 '>
//         <h3 className=' text-xl font-semibold mb-2 '>{title}</h3>
//         <p className=' text-gray-400 mb-4 '>{description}</p>
//         <div className=' flex flex-wrap gap-2 mb-4 '>
//           {tech.map((item, index)=>(
//             <span key={index} className=' px-3 py-1 bg-dark-400 rounded-full text-sm '>
//               {item}
//             </span>
//           ))}
//         </div>
//         <div className=' flex gap-2 '>
//           <a href="#" className=' flex-1 text-center px-4 py-2 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300'>View Demo</a>
//           <a href="#" className=' flex-1 text-center px-4 py-2 border border-purple font-medium rounded-lg hover:bg-purple/20 transition duration-300 '>Code</a>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProjectCard

import React from 'react'
import { FaArrowRight, FaGithub } from 'react-icons/fa'

const ProjectCard = ({ title, description, image, tech }) => {
  return (
    <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:border-indigo-400 hover:-translate-y-2 transition-all duration-300">

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-[#020617] via-transparent to-transparent opacity-80"></div>
      </div>

      {/* Content */}
      <div className="p-6">

        {/* Title */}
        <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-indigo-400 transition">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-5">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-gray-300 border border-white/10 hover:border-indigo-400 hover:text-white transition"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <a
            href="#"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition duration-300 shadow-md shadow-indigo-500/20"
          >
            Live Demo
            <FaArrowRight className="text-sm" />
          </a>

          <a
            href="#"
            className="flex items-center justify-center px-4 py-3 rounded-lg border border-white/10 text-gray-300 hover:border-indigo-400 hover:text-white transition duration-300"
          >
            <FaGithub className="text-lg" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard