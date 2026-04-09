// import React from 'react'
// import { motion, easeOut } from 'framer-motion'
// import { projects } from '../assets/assets'
// import ProjectCard from './ProjectCard'
// import { FaArrowRight } from 'react-icons/fa'

// const Projects = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1, ease: easeOut }}
//       viewport={{ once: false, amount: 0.2 }}
//       id='projects'
//       className=' py-20 bg-dark-300 '
//     >
//       <div className=' container mx-auto px-6 '>
//         <h2 className=' text-3xl font-bold text-center mb-4 '>My
//           <span className=' text-purple '> Projects</span>
//         </h2>
//         <p className=' text-gray-400 text-center max-w-2xl mx-auto mb-16 '>A selection of my recent work</p>
//         <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto '>

//           {/* Projects card */}
//           {
//             projects.map((project,index)=>(
//               <ProjectCard key={index} {...project}/>
//             ))
//           }
//         </div>
//         <div className=' text-center mt-12 '>
//           <a href="#" className=' inline-flex items-center px-6 py-2 border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-300 '>
//             <span>View More Projects</span>
//             <FaArrowRight className=' ml-2 '/>
//           </a>
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// export default Projects

import React from 'react'
import { motion, easeOut } from 'framer-motion'
import { projects } from '../assets/assets'
import ProjectCard from './ProjectCard'
import { FaArrowRight } from 'react-icons/fa'

const Projects = () => {
  return (
    <section
      id="projects"
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
            My <span className="text-indigo-400">Projects</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A selection of my recent work showcasing real-world applications and modern technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 text-gray-300 hover:border-indigo-400 hover:text-white transition duration-300"
          >
            View More Projects
            <FaArrowRight />
          </a>
        </div>

      </div>
    </section>
  )
}

export default Projects