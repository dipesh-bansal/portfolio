import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface VideoBackgroundProps {
  videoSrc: string;
  overlayOpacity?: number;
}

export default function VideoBackground({ 
  videoSrc, 
  overlayOpacity = 0.7 
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7; // Slow down the video slightly
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative w-full h-full"
      >
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 object-cover w-full h-full grayscale-[0.2] brightness-[0.6]"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div 
          className={`absolute inset-0 bg-[#121212] opacity-[${overlayOpacity}]`}
        />
      </motion.div>
    </div>
  );
}