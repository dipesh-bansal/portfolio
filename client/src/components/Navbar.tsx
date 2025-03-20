import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RESUME_URL } from "@/lib/constants";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 bg-[#121212] bg-opacity-80 backdrop-filter backdrop-blur-sm border-b border-primary ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-primary font-space font-bold text-2xl">DB</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-white hover:text-primary transition font-code text-sm">
            //01. <span className="text-primary">Home</span>
          </a>
          <a href="#portfolio" className="text-white hover:text-primary transition font-code text-sm">
            //02. <span className="text-white hover:text-primary">Portfolio</span>
          </a>
          <a href="#skills" className="text-white hover:text-primary transition font-code text-sm">
            //03. <span className="text-white hover:text-primary">Skills</span>
          </a>
          <a href="#press" className="text-white hover:text-primary transition font-code text-sm">
            //04. <span className="text-white hover:text-primary">Press</span>
          </a>
          <a href="#contact" className="text-white hover:text-primary transition font-code text-sm">
            //05. <span className="text-white hover:text-primary">Contact</span>
          </a>
          <a 
            href={RESUME_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="neo-border rounded-md px-4 py-2 text-primary text-sm font-code hover:bg-primary hover:text-[#121212] transition duration-300 flex items-center"
          >
            Resume <i className="fas fa-download ml-2"></i>
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-[#121212] border-t border-primary`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-6 py-3 flex flex-col space-y-4">
          <a 
            href="#home" 
            className="text-white hover:text-primary transition font-code text-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            //01. <span className="text-primary">Home</span>
          </a>
          <a 
            href="#portfolio" 
            className="text-white hover:text-primary transition font-code text-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            //02. <span className="text-white hover:text-primary">Portfolio</span>
          </a>
          <a 
            href="#skills" 
            className="text-white hover:text-primary transition font-code text-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            //03. <span className="text-white hover:text-primary">Skills</span>
          </a>
          <a 
            href="#press" 
            className="text-white hover:text-primary transition font-code text-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            //04. <span className="text-white hover:text-primary">Press</span>
          </a>
          <a 
            href="#contact" 
            className="text-white hover:text-primary transition font-code text-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            //05. <span className="text-white hover:text-primary">Contact</span>
          </a>
          <a 
            href={RESUME_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="neo-border rounded-md px-4 py-2 text-primary text-sm font-code hover:bg-primary hover:text-[#121212] transition duration-300 flex items-center justify-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Resume <i className="fas fa-download ml-2"></i>
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
}
