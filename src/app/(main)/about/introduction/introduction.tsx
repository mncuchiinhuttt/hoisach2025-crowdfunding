"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";

export default function Introduction() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement || videoLoaded) return;

    setVideoLoaded(true);

    videoElement.addEventListener('play', handleVideoPlay);
    videoElement.addEventListener('pause', handleVideoPause);

    videoElement.play().catch(error => {
      console.error("Autoplay was prevented:", error);
      setIsPlaying(false);
    });

    return () => {
      videoElement.removeEventListener('play', handleVideoPlay);
      videoElement.removeEventListener('pause', handleVideoPause);
    };
  }, [videoLoaded]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-white text-black dark:bg-zinc-900 dark:text-white">
      <div className="w-full mx-auto mb-4 p-8 lg:p-6 md:p-4">
        <div className="relative overflow-hidden shadow-xl rounded-md">
          <video 
            ref={videoRef}
            src="/intro.mp4" 
            className="w-full h-auto"
            playsInline
            muted={false}
            controls={false}
            preload="auto"
          />
          
          <button 
            className="absolute bottom-4 right-4 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white transition-colors"
            onClick={togglePlayPause}
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          
          <div className="absolute bottom-0 left-[30%] right-[30%] flex-col items-center pb-36 lg:pb-24 md:pb-16 animate-bounce md:flex hidden">
            <p className="text-white text-sm bg-black/40 px-3 py-1 rounded-full font-medium">
              Cuộn xuống để xem thêm
            </p>
            <svg 
              className="w-6 h-6 text-white mt-2 animate-bounce"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="container max-w-8xl mx-auto px-4 md:px-8 lg:px-10 py-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-6 items-center">
          <div className="prose prose-lg dark:prose-invert">
            <p className="xl:text-2xl lg:text-xl md:text-lg leading-relaxed text-justify">
              Dự án Hội sách Mơ Hỏi Mở là một dự án phi lợi nhuận được ươm mầm từ tình yêu sách và mong muốn lan toả niềm vui đọc. Tụi mình đã tạo ra một không gian ấm áp, nơi mọi người có thể gặp gỡ và sẻ chia qua những trang sách đầy yêu thương. Vì tụi mình tin rằng, việc đọc có thể bắt đầu thật tự nhiên, nhẹ nhàng và trở thành thói quen bền vững - nhất là với các bạn trẻ.
            </p>
          </div>
          <div className="relative h-full w-full flex items-center mt-6 lg:mt-2 md:mt-0">
            <img 
              src="/about_introduction_1.png" 
              alt="Hội sách Mở Hỏi Mở"
              className="w-[90%] md:max-w-[85%] lg:max-w-full"
            />
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="bg-gradient-to-b from-white to-[#FFFCE7] py-16"></div>
        <div className="bg-[#FFFCE7]">
          <div className="container mx-auto px-4 bg-[#FFFCE7]">
            <div className="grid grid-cols-2 md:grid-cols-4 xl:gap-8 lg:gap-6 gap-4 mb-16 text-[#5D4037]">
              <div className="flex flex-col items-center">
                <h3 className="xl:text-7xl lg:text-6xl text-5xl font-black">4+</h3>
                <p className="xl:text-2xl lg:text-xl text-sm mt-2">mùa hội sách</p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="xl:text-7xl lg:text-6xl text-5xl font-black">3000+</h3>
                <p className="xl:text-2xl lg:text-xl text-sm mt-2">người tham dự</p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="xl:text-7xl lg:text-6xl text-5xl font-black">12500+</h3>
                <p className="xl:text-2xl lg:text-xl text-sm mt-2">cuốn sách được bán ra</p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="xl:text-7xl lg:text-6xl text-5xl font-black">6+</h3>
                <p className="xl:text-2xl lg:text-xl text-sm mt-2">NXB tham gia</p>
              </div>
            </div>

            <div className="text-center">
              <h2 className="lg:text-7xl md:text-5xl sm:text-4xl text-3xl font-black text-[#F5AF28] mb-4 md:mb-12 lg:mt-24 mt-12">ĐỐI TÁC ĐỒNG HÀNH</h2>
            </div>

          </div>
            <div className="relative overflow-hidden py-4 md:py-6 lg:py-10">
            <div className="flex items-center space-x-4 md:space-x-8 lg:space-x-12 animate-marquee hover:pause-animation will-change-transform">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <div key={`logo1_${num}`} className="flex-shrink-0">
                <img 
                src={`/logo1_${num}.png`} 
                alt={`Partner ${num}`} 
                className={`h-12 sm:h-16 md:h-20 lg:h-24 object-contain ${[3, 4, 5].includes(num) ? 'scale-[1.3] sm:scale-[1.5] md:scale-[1.7]' : ''}`} 
                />
              </div>
              ))}
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <div key={`logo1_${num}_dup`} className="flex-shrink-0">
                <img 
                src={`/logo1_${num}.png`} 
                alt={`Partner ${num}`} 
                className={`h-12 sm:h-16 md:h-20 lg:h-24 object-contain ${[3, 4, 5].includes(num) ? 'scale-[1.3] sm:scale-[1.5] md:scale-[1.7]' : ''}`} 
                />
              </div>
              ))}
            </div>

            <div className="flex items-center space-x-4 md:space-x-8 lg:space-x-12 animate-marquee-reverse hover:pause-animation will-change-transform mt-6 md:mt-8 lg:mt-12">
              {[...Array(10)].map((_, i) => {
              const num = 10 - i;
              return (
                <div key={`logo2_${num}`} className="flex-shrink-0">
                <img 
                  src={`/logo2_${num}.png`} 
                  alt={`Partner ${num}`} 
                  className={`h-12 sm:h-16 md:h-20 lg:h-24 object-contain ${
                  num === 6 ? 'scale-[1.2] sm:scale-[1.3] md:scale-[1.5]' : 
                  num === 3 ? 'scale-[2] sm:scale-[2.5] md:scale-[3.5]' : 
                  [4, 5].includes(num) ? 'scale-[1.1] sm:scale-[1.2] md:scale-[1.3]' : ''
                  }`} 
                />
                </div>
              );
              })}
              {[...Array(10)].map((_, i) => {
              const num = 10 - i;
              return (
                <div key={`logo2_${num}_dup`} className="flex-shrink-0">
                <img 
                  src={`/logo2_${num}.png`} 
                  alt={`Partner ${num}`} 
                  className={`h-12 sm:h-16 md:h-20 lg:h-24 object-contain ${
                  num === 6 ? 'scale-[1.2] sm:scale-[1.3] md:scale-[1.5]' : 
                  num === 3 ? 'scale-[2] sm:scale-[2.5] md:scale-[3.5]' : 
                  [4, 5].includes(num) ? 'scale-[1.1] sm:scale-[1.2] md:scale-[1.3]' : ''
                  }`} 
                />
                </div>
              );
              })}
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}