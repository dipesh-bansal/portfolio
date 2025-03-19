import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-primary focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      <motion.div
        initial={false}
        animate={isMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden bg-[#1A1A1A] overflow-hidden`}
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
        </div>
      </motion.div>
    </motion.nav>
  );
}
