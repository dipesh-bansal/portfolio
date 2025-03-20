import { motion } from "framer-motion";
import CircularAnimation from "./CircularAnimation";
import { RESUME_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-20 min-h-screen flex flex-col justify-center relative overflow-hidden bg-gradient-to-b from-[#121212] via-[#121212] to-[#121212]">
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-space font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-white">Hi, I'm </span>
              <span className="text-primary">Dipesh</span>
            </motion.h1>
            
            <motion.p 
              className="text-gray-400 text-lg md:text-xl mb-6 font-code"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              A passionate web developer focused on creating beautiful and user-friendly applications
            </motion.p>
            
            <motion.div 
              className="flex items-center space-x-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <a 
                href="#portfolio" 
                className="neo-border rounded-md px-6 py-3 text-primary text-sm font-code hover:bg-primary hover:text-[#121212] transition duration-300 flex items-center"
              >
                View Projects <i className="fas fa-arrow-right ml-2"></i>
              </a>
              <a 
                href={RESUME_URL} 
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full w-12 h-12 flex items-center justify-center neo-border text-primary hover:bg-primary hover:text-[#121212] transition duration-300"
                title="Download Resume"
              >
                <i className="fas fa-download"></i>
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <CircularAnimation />
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-12 left-0 right-0 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <a href="#portfolio" className="flex flex-col items-center text-primary opacity-80 hover:opacity-100 transition">
              <span className="font-code text-xs mb-2">Scroll Down</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
