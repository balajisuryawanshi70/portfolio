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