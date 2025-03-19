import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { type Project } from "@/components/Portfolio";

interface ProjectSliderProps {
  projects: Project[];
}

export default function ProjectSlider({ projects }: ProjectSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(2);
  const [isMobile, setIsMobile] = useState(false);
  
  const maxSlideIndex = Math.max(0, projects.length - slidesToShow);
  const progressPercentage = maxSlideIndex === 0 ? 100 : (currentSlide / maxSlideIndex) * 100;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(2);
        setIsMobile(false);
      } else {
        setSlidesToShow(1);
        setIsMobile(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextSlide = () => {
    if (currentSlide < maxSlideIndex) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentSlide}
            className="flex"
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.8 }}
            transition={{ duration: 0.3 }}
            style={{
              transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
              width: `${(projects.length / slidesToShow) * 100}%`,
              display: "flex",
              transition: "transform 500ms ease"
            }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className={`px-4 mb-8 ${isMobile ? "min-w-full" : "min-w-[calc(100%/2)]"}`}
              >
                <div className="neo-border rounded-2xl overflow-hidden bg-[#121212]">
                  <div className="relative aspect-video overflow-hidden rounded-t-2xl">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-space font-bold text-primary">{project.title}</h3>
                    <p className="text-gray-300 my-3 text-sm">
                      {project.description}
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                      <div>
                        <span className="text-xs font-bold text-primary">{project.role}</span>
                      </div>
                      <a href={project.link} className="text-primary hover:underline text-sm flex items-center">
                        View Details <i className="fas fa-arrow-right ml-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`w-12 h-12 rounded-full flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-[#121212] transition duration-300 ${
            currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <div className="w-64 h-2 bg-[#242424] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        </div>
        <button
          onClick={nextSlide}
          disabled={currentSlide === maxSlideIndex}
          className={`w-12 h-12 rounded-full flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-[#121212] transition duration-300 ${
            currentSlide === maxSlideIndex ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}
