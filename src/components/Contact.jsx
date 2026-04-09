// import React from 'react'
// import { motion, easeOut } from 'framer-motion'
// import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
// import { FaX } from 'react-icons/fa6'
// const Contact = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1, ease: easeOut }}
//       viewport={{ once: false, amount: 0.2 }}
//       id='contact'
//       className=' py-20 bg-dark-200 '
//     >
//       <div className=' container mx-auto px-6 '>
//         <h2 className=' text-3xl font-bold text-center mb-4 '>Get In
//           <span className=' text-purple '> Touch</span>
//         </h2>
//         <p className=' text-gray-400 text-center max-w-2xl mx-auto mb-16 '>Have a project in mind or want to collaborate? Let's talk!</p>
//         <div className=' grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto '>
//           <div>
//             <form className=' space-y-6 '>
//               <div>
//                 <label htmlFor="name" className='block text-gray-300 mb-2 '>Your Name</label>
//                 <input type="text" 
//                   className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className='block text-gray-300 mb-2 '>Email Address</label>
//                 <input type="email" 
//                   className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
//                 />
//               </div>
//               <div>
//                 <label htmlFor="message" className='block text-gray-300 mb-2 '>Your Message</label>
//                 <textarea type="text" 
//                   className='w-full h-30 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
//                 />
//               </div>
//               <button type='submit' className=' w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer '>
//                 Send
//               </button>
//             </form>
//           </div>

//           {/* Contact Information */}
//           <div className=' space-y-8 '>
//             <div className='flex items-start'> 
//               <div className=' text-purple text-2xl mr-4'>
//                 <FaMapMarkerAlt/>
//               </div>
//               <div>
//                  <h3 className=' text-lg font-semibold mb-2 '>Location</h3>
//                  <p className=' text-gray-400 '>Pune, Maharashtra</p> 
//               </div>
//             </div>

//              <div className='flex items-start'> 
//               <div className=' text-purple text-2xl mr-4'>
//                 <FaEnvelope/>
//               </div>
//               <div>
//                  <h3 className=' text-lg font-semibold mb-2 '>Email</h3>
//                  <p className=' text-gray-400 '>surywanshib7@gmail.com</p> 
//               </div>
//             </div>

//              <div className='flex items-start'> 
//               <div className=' text-purple text-2xl mr-4'>
//                 <FaPhone/>
//               </div>
//               <div>
//                  <h3 className=' text-lg font-semibold mb-2 '>Phone</h3>
//                  <p className=' text-gray-400 '>+91 9922865349</p> 
//               </div>
//             </div>

//             <div className=' pt-4 '>
//               <h3 className=' text-lg font-semibold mb-4 '>Follow Me</h3>
//               <div className=' flex space-x-4 '>
//                 <a href="https://github.com/balajisuryawanshi70" className=' w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300'>
//                   <FaGithub/>
//                 </a>

//                 <a href="https://www.linkedin.com/in/balaji-suryawanshi-48b943237/" className=' w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue hover:bg-blue hover:text-white transition duration-300'>
//                   <FaLinkedin/>
//                 </a>

//                 <a href="https://x.com/suryawanshib_70" className=' w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-black hover:bg-black hover:text-white transition duration-300'>
//                   <FaX/>
//                 </a>

//                 <a href="https://www.instagram.com/balajisuryawanshi_70?igsh=cWVkZDF6a3RnZ3Zq" className=' w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-pink hover:bg-pink hover:text-white transition duration-300'>
//                   <FaInstagram/>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// export default Contact

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