import { motion } from "framer-motion";

export default function CircularAnimation() {
  return (
    <div className="relative w-64 h-64 mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 rounded-full border border-primary"
      ></motion.div>
      
      <svg className="absolute inset-0" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="80" stroke="#00FF84" strokeWidth="1" fill="none" strokeDasharray="5 5" />
        <circle cx="100" cy="100" r="40" fill="#00FF84" fillOpacity="0.1" stroke="#00FF84" strokeWidth="1" />
        
        <motion.circle 
          cx="100" cy="30" r="5" 
          fill="#00FF84" 
          className="project-dot"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.circle 
          cx="160" cy="100" r="5" 
          fill="#00FF84" 
          className="project-dot"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.3 }}
        />
        <motion.circle 
          cx="100" cy="170" r="5" 
          fill="#00FF84" 
          className="project-dot"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.6 }}
        />
        <motion.circle 
          cx="40" cy="100" r="5" 
          fill="#00FF84" 
          className="project-dot"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.9 }}
        />
      </svg>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.span 
          className="text-primary font-code text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          &lt;download Resume/&gt;
        </motion.span>
      </div>
    </div>
  );
}
