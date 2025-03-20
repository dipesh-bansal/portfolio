import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface VideoBackgroundProps {
  videoSrc?: string;
  overlayOpacity?: number;
}

export default function VideoBackground({ videoSrc, overlayOpacity = 0.75 }: VideoBackgroundProps) {
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {!videoError && videoSrc && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          onError={() => setVideoError(true)}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#121212] to-[#121212]"
        style={{ 
          opacity: videoError ? 1 : overlayOpacity,
          backgroundImage: videoError ? 'radial-gradient(circle at center, #4F46E5 0%, #121212 100%)' : undefined
        }}
      />
    </div>
  );
}