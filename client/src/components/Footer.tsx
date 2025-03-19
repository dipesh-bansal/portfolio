import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-10 bg-[#1A1A1A] border-t border-primary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-6 md:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-space font-bold text-2xl">AK</span>
          </motion.div>
          
          <motion.div 
            className="mb-6 md:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-gray-400 text-sm font-code">&copy; {new Date().getFullYear()} Andy Ta Hong. All rights reserved.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a 
              href="#home" 
              className="neo-border rounded-md px-4 py-2 text-primary text-xs font-code hover:bg-primary hover:text-[#121212] transition duration-300 flex items-center"
            >
              Back to Top <i className="fas fa-arrow-up ml-2"></i>
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
