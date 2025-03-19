import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  proficiency: number;
}

export default function SkillBar({ name, proficiency }: SkillBarProps) {
  return (
    <div>
      <div className="flex justify-between mb-1 text-xs sm:text-sm">
        <span>{name}</span>
        <span className="text-primary">{proficiency}%</span>
      </div>
      <div className="h-1.5 sm:h-2 bg-[#2A2A2A] rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-primary"
          style={{ width: `${proficiency}%` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </div>
    </div>
  );
}
