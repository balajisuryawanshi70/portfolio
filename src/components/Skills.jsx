// import React from 'react'
// import {motion, easeOut} from 'framer-motion'
// import { skills } from '../assets/assets'
// import { div, span } from 'framer-motion/client'

// const Skills = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1, ease: easeOut }}
//       viewport={{ once: false, amount: 0.2 }}
//       id='skills'
//       className='py-20 bg-dark-200'
//     >
//       <div className='container mx-auto px-6'>
//         <h2 className='text-3xl font-bold text-center mb-4'>My
//           <span className='text-purple'>Skills</span>
//         </h2>
//         <p className=' text-gray-400 text-center max-w-2xl mx-auto mb-16 '>Technologies I work with to bring ideas to life</p>

//         <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto '>
//           {
//             skills.map((skill,index)=>(
//               <div key={index} className=' bg-dark-300 rounded-2xl p-6 hover:translate-y-2 transition duration-300 cursor-pointer '>
//                 <div className=' flex items-center mb-4 '>
//                     <skill.icon className=' w-12 h-12 text-purple mr-6 '/>

//                     <h3 className=' text-xl font-semibold '>{skill.title}</h3>
//                   </div>
//                     <p className=' text-gray-400 mb-4 '>{skill.description}</p>

//                     <div className=' flex flex-wrap gap-2 '>
//                       {skill.tags.map((tech)=>(
//                         <span key={tech} className=' px-3 py-1 bg-dark-400 rounded-full text-sm '>{tech}</span>
//                       ))}
//                     </div>
                  
//                 </div>

//             ))
//           }
//         </div>
//       </div>
      
//     </motion.div>
//   )
// }

// export default Skills

import React from 'react'
import { motion, easeOut } from 'framer-motion'
import { skills } from '../assets/assets'

const Skills = () => {
  return (
    <section
      id="skills"
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
            My <span className="text-indigo-400">Skills</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Technologies I use to build modern, scalable, and high-performance applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-indigo-400 hover:-translate-y-2 transition duration-300"
            >
              
              {/* Top */}
              <div className="flex items-center mb-4">
                <skill.icon className="w-10 h-10 text-indigo-400 mr-4 group-hover:scale-110 transition" />

                <h3 className="text-lg font-semibold text-white">
                  {skill.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-5">
                {skill.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300 border border-white/10 hover:border-indigo-400 hover:text-white transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Skills