import { motion } from "framer-motion";
import { PRESS } from "@/lib/constants";

export default function Press() {
  return (
    <section id="press" className="py-20 bg-[#1A1A1A]">
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-space font-bold">
            <span className="text-white">Education</span>
            <span className="text-primary">_</span>
          </h2>
        </motion.div>
        
        <div className="space-y-6">
          {PRESS.map((item, index) => (
            <motion.div 
              key={item.id}
              className="neo-border rounded-lg overflow-hidden hover:shadow-lg transition duration-300 bg-[#121212]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a href={item.link} className="block p-6 flex justify-between items-center group">
                <div>
                  <h3 className="text-xl md:text-2xl font-space text-primary mb-1">{item.name}</h3>
                  <span className="text-sm text-gray-400">{item.date}</span>
                </div>
                <motion.div 
                  className="text-primary"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <i className="fas fa-arrow-right"></i>
                </motion.div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
