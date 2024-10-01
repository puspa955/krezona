"use client";
import { useState, useRef } from 'react';

export default function TestimonialSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null); // Specify the type for the video element

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause(); // Pause if playing
        setIsPlaying(false);
      } else {
        videoRef.current.play(); // Play if paused
        setIsPlaying(true);
      }
    }
  };

  return (
    <section className="bg-[#D9D9D9B2] mt-40 py-14">
      <div className="container mx-auto px-4  flex flex-col md:flex-row items-center gap-8">
        {/* Left Side: Text Content */}
        <div className="md:w-1/2">
        <h2 className="text-[20px] font-bold text-[#2E4D70] flex items-center gap-1">
          <img
                src="/service.svg"
                alt="Person in wheelchair"
                className=" object-cover rounded-tl-full"
              />TESTIMONIAL</h2>
          <h2 className="text-4xl font-bold text-[#3D3D4E] mb-4">Our Success Stories</h2>
          <p className="text-gray-600 mb-6">
            Discover the experience and success stories shared by those who care.
          </p>
          <button
            className="bg-[#3D3D4E] text-white px-6 py-2 rounded-md flex items-center gap-2"
            onClick={handlePlayPause}
          >
            {isPlaying ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 4a1 1 0 011 1v10a1 1 0 01-2 0V5a1 1 0 011-1zM14 4a1 1 0 011 1v10a1 1 0 01-2 0V5a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                Pause
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2-9.857v3.714c0 .367.39.611.714.445l3.429-1.857a.5.5 0 000-.89l-3.429-1.857a.5.5 0 00-.714.445z" clipRule="evenodd" />
                </svg>
                Watch
              </>
            )}
          </button>
        </div>

        {/* Right Side: Video or Thumbnail */}
        <div className="md:w-1/2 relative">
          {!isPlaying ? (
            <div className="relative">
              <img
                src="/test.svg" // Replace with your thumbnail image path
                alt="Testimonial Thumbnail"
                className="rounded-lg shadow-md w-full object-cover"
              />
              <button
                onClick={handlePlayPause}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2-9.857v3.714c0 .367.39.611.714.445l3.429-1.857a.5.5 0 000-.89l-3.429-1.857a.5.5 0 00-.714.445z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          ) : (
            <video
              ref={videoRef}
              className="rounded-lg shadow-md w-full object-cover"
              onEnded={() => setIsPlaying(false)} // Automatically stops when video ends
              controls
              autoPlay
            >
              <source src="/path-to-video.mp4" type="video/mp4" /> {/* Replace with your video path */}
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>
    </section>
  );
}
