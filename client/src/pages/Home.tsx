import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Press from "@/components/Press";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#121212]"
    >
      <Navbar />
      <Hero />
      <Portfolio />
      <Skills />
      <Press />
      <Contact />
      <Footer />
    </motion.div>
  );
}
