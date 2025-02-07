"use client";

import { Play } from "lucide-react";
import { useRef, useState } from "react";

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <div className="w-full  mx-auto">
      <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-black">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          onPause={handlePause}
          controls={isPlaying}
          playsInline
        >
          <source src="/flv.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play Button Overlay */}
        {!isPlaying && (
          <button
            onClick={handlePlayClick}
            className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group"
          >
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
              <Play className="w-8 h-8 text-gray-900 group-hover:scale-110 transition-transform" />
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
