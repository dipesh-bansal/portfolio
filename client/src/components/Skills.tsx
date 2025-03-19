import { motion } from "framer-motion";
import { SKILLS } from "@/lib/constants";
import SkillBar from "./SkillBar";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-space font-bold">
            <span className="text-white">Skills & Expertise</span>
            <span className="text-primary">_</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((category, index) => (
            <motion.div 
              key={index}
              className="neo-border rounded-xl p-6 bg-[#1A1A1A] hover:transform hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary bg-opacity-20 flex items-center justify-center text-primary mr-3">
                  <i className={category.icon}></i>
                </div>
                <h3 className="text-xl font-space font-bold">{category.category}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    name={skill.name}
                    proficiency={skill.proficiency}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
