import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  proficiency: number;
}

export default function SkillBar({ name, proficiency }: SkillBarProps) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-code text-gray-300">{name}</span>
        <span className="text-sm font-code text-primary">{proficiency}%</span>
      </div>
      <div className="h-2 bg-[#242424] rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-primary"
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        ></motion.div>
      </div>
    </div>
  );
}
