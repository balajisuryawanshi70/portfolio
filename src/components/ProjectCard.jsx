import React from 'react'
import { FaArrowRight, FaGithub } from 'react-icons/fa'

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  tech,
  demo,
  code
}) => {
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
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition duration-300 shadow-md shadow-indigo-500/20"
          >
            Live Demo
            <FaArrowRight className="text-sm" />
          </a>

          <a
            href={code}
            target='_blank'
            rel='nooper noreferrer'
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