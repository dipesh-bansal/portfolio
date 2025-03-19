import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import ProjectSlider from "./ProjectSlider";

export type Project = {
  id: number;
  title: string;
  description: string;
  role: string;
  imageUrl: string;
  link: string;
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-[#1A1A1A]">
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-space font-bold">
            <span className="text-white">My Portfolio</span>
            <span className="text-primary">_</span>
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ProjectSlider projects={PROJECTS} />
        </motion.div>
      </div>
    </section>
  );
}
