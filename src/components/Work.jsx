// import React from 'react'
// import { motion, easeOut } from 'framer-motion'
// import { workData } from '../assets/assets'
// const Work = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1, ease: easeOut }}
//       viewport={{ once: false, amount: 0.2 }}
//       id='experience'
//       className=' py-20 bg-dark-100 '
//     >
//       <div className=' container mx-auto px-6 '>
//         <h2 className=' text-3xl font-bold text-center mb-4 '>Work
//           <span className=' text-purple '> Experience</span>
//         </h2>
//         <p className=' text-gray-400 text-center max-w-2xl mx-auto mb-16'>My professional jorney so far</p>
//         <div className=' max-w-3xl mx-auto '>
//           <div className=' space-y-12 '>
//               {
//                 workData.map((data,index)=>(
//                   <div key={index} className=" relative pl-12 before:content-[''] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-purple cursor-pointer hover:translate-y-2 transition-all duration-300 ">

//                     {/* timeline */}
//                     <div className=' absolute left-[-0.5rem] top-0 w-6 h-6 rounded-full bg-purple '></div>

//                     {/* box */}
//                     <div className=' bg-dark-300 rounded-2xl p-6 '>
//                       <div className=' flex justify-between items-start mb-2 '>
//                         <h3 className=' text-xl font-semibold '>{data.role}</h3>
//                         <span className=' px-3 py-1 bg-purple/20 text-purple rounded-full text-xs md:text-sm '>{data.duration}</span>
//                       </div>
//                       <div>
//                         <p className=' text-gray-400 mb-2 '>{data.company}</p>
//                         <p className=' text-gray-300 '>{data.description}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))
//               }
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// export default Work

import React from 'react'
import { motion, easeOut } from 'framer-motion'
import { workData } from '../assets/assets'

const Work = () => {
  return (
    <section
      id="experience"
      className="py-24 bg-[#020617]"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Work <span className="text-indigo-400">Experience</span>
          </h2>

          <p className="text-gray-400 mt-4">
            My professional journey and hands-on experience so far.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-white/10">

          {workData.map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 ml-6"
            >

              {/* Timeline Dot */}
              <span className="absolute -left-2.5 w-5 h-5 bg-indigo-400 rounded-full border-4 border-[#020617]"></span>

              {/* Card */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-indigo-400 hover:-translate-y-1 transition duration-300">

                {/* Top */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3 gap-2">
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {data.role}
                  </h3>

                  <span className="text-xs md:text-sm px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-400/20 w-fit">
                    {data.duration}
                  </span>
                </div>

                {/* Company */}
                <p className="text-gray-400 mb-2">
                  {data.company}
                </p>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {data.description}
                </p>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Work