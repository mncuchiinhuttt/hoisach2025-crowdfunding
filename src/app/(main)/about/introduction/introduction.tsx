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
      <div className="w-full mx-auto mb-6">
        <div className="relative overflow-hidden shadow-xl">
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
          
          <div className="absolute bottom-0 left-[30%] right-[30%] flex flex-col items-center pb-36 animate-bounce">
            <p className="text-white text-sm bg-black/40 px-3 py-1 rounded-full font-medium">
              Cuộn xuống để xem thêm
            </p>
            <svg 
              className="w-6 h-6 text-white mt-2"
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
      
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-2xl leading-relaxed scale-110 text-justify">
              Dự án Hội sách Mơ Hỏi Mở là một dự án phi lợi nhuận được ươm mầm từ tình yêu sách và mong muốn lan toả niềm vui đọc. Tụi mình đã tạo ra một không gian ấm áp, nơi mọi người có thể gặp gỡ và sẻ chia qua những trang sách đầy yêu thương. Vì tụi mình tin rằng, việc đọc có thể bắt đầu thật tự nhiên, nhẹ nhàng và trở thành thói quen bền vững - nhất là với các bạn trẻ.
            </p>
          </div>
          <div className="relative h-full w-full ml-[10%] items-center">
            <img 
              src="/about_introduction_1.png" 
              alt="Hội sách Mở Hỏi Mở" 
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-[#FFFCE7] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-[#5D4037]">
            <div className="flex flex-col items-center">
              <h3 className="text-7xl font-black">4+</h3>
              <p className="text-2xl mt-2">mùa hội sách</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-7xl font-black">3000+</h3>
              <p className="text-2xl mt-2">người tham dự</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-7xl font-black">12500+</h3>
              <p className="text-2xl mt-2">cuốn sách được bán ra</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-7xl font-black">6+</h3>
              <p className="text-2xl mt-2">NXB tham gia</p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-7xl font-black text-[#F5AF28] mb-12">ĐỐI TÁC ĐỒNG HÀNH</h2>
          </div>

        </div>
        <div className="relative overflow-hidden py-10">
          <div className="flex items-center space-x-12 animate-marquee hover:pause-animation will-change-transform">
            <div className="flex-shrink-0">
              <img src="/logo1_1.png" alt="Alpha Books" className="h-24 object-contain" />
            </div>
            <div className="flex-shrink-0">
              <img src="/logo1_2.png" alt="Ami" className="h-24 object-contain" />
            </div>
            <div className="flex-shrink-0">
              <img src="/logo1_3.png" alt="AnBooks" className="scale-170 h-24 object-contain" />
            </div>
            <div className="flex-shrink-0">
              <img src="/logo1_4.png" alt="BizEduco" className="scale-170 h-24 object-contain" />
            </div>
            <div className="flex-shrink-0">
              <img src="/logo1_5.png" alt="Cham Cafe" className="h-24 object-contain" />
            </div>
            <div className="flex-shrink-0">
              <img src="/logo1_6.png" alt="VP Milk" className="h-24 object-contain" />
            </div>
            <div className="flex-shrink-0">
              <img src="/logo1_7.png" alt="THBT" className="h-24 object-contain" />
            </div>
            <div className="flex-shrink-0">
              <img src="/logo1_8.png" alt="Tergus" className="h-24 object-contain" />
            </div>
            <div className="flex-shrink-0">
              <img src="/logo1_9.png" alt="Sense City" className="scale-170 h-24 object-contain" />
            </div>
            <div className="flex-shrink-0">
              <img src="/logo1_10.png" alt="Saigon Tam Duc" className="h-24 object-contain" />
            </div>
            <div className="flex-shrink-0">
              <img src="/logo1_1.png" alt="Alpha Books" className="h-24 object-contain" />
            </div>
            <div className="flex-shrink-0">
              <img src="/logo1_2.png" alt="Ami" className="h-24 object-contain" />
            </div>
            <div className="flex-shrink-0">
              <img src="/logo1_3.png" alt="AnBooks" className="scale-170 h-24 object-contain" />
            </div>
            <div className="flex-shrink-0">
              <img src="/logo1_4.png" alt="BizEduco" className="scale-170 h-24 object-contain" />
            </div>
            <div className="flex-shrink-0">
              <img src="/logo1_5.png" alt="Cham Cafe" className="h-24 object-contain" />
            </div>
            <div className="flex-shrink-0">
              <img src="/logo1_6.png" alt="VP Milk" className="h-24 object-contain" />
            </div>
            <div className="flex-shrink-0">
              <img src="/logo1_7.png" alt="THBT" className="h-24 object-contain" />
            </div>
            <div className="flex-shrink-0">
              <img src="/logo1_8.png" alt="Tergus" className="h-24 object-contain" />
            </div>
            <div className="flex-shrink-0">
              <img src="/logo1_9.png" alt="Sense City" className="scale-170 h-24 object-contain" />
            </div>
            <div className="flex-shrink-0">
              <img src="/logo1_10.png" alt="Saigon Tam Duc" className="h-24 object-contain" />
            </div>
          </div>

          <div className="flex items-center space-x-12 animate-marquee-reverse hover:pause-animation will-change-transform mt-12">
            <div className="flex-shrink-0">
              <img src="/logo2_1.png" alt="Partner 1" className="h-24 object-contain" />
            </div>
            <div className="flex-shrink-0">
              <img src="/logo2_2.png" alt="Partner 2" className="h-24 object-contain" />
            </div>
            <div className="flex-shrink-0">
              <img src="/logo2_3.png" alt="Partner 3" className="scale-350 h-24 object-contain" />
            </div>
            <div className="flex-shrink-0">
              <img src="/logo2_4.png" alt="Partner 4" className="scale-130 h-24 object-contain" />
            </div>
            <div className="flex-shrink-0">
              <img src="/logo2_5.png" alt="Partner 5" className="scale-130 h-24 object-contain" />
            </div>
            <div className="flex-shrink-0">
              <img src="/logo2_6.png" alt="Partner 6" className="scale-150 h-24 object-contain" />
            </div>
            <div className="flex-shrink-0">
              <img src="/logo2_7.png" alt="Partner 7" className="h-24 object-contain" />
            </div>
            <div className="flex-shrink-0">
              <img src="/logo2_8.png" alt="Partner 8" className="h-24 object-contain" />
            </div>
            <div className="flex-shrink-0">
              <img src="/logo2_9.png" alt="Partner 9" className="h-24 object-contain" />
            </div>
            <div className="flex-shrink-0">
              <img src="/logo2_10.png" alt="Partner 10" className="h-24 object-contain" />
            </div>            
            <div className="flex-shrink-0">
              <img src="/logo2_1.png" alt="Partner 1" className="h-24 object-contain" />
            </div>
            <div className="flex-shrink-0">
              <img src="/logo2_2.png" alt="Partner 2" className="h-24 object-contain" />
            </div>
            <div className="flex-shrink-0">
              <img src="/logo2_3.png" alt="Partner 3" className="scale-350 h-24 object-contain" />
            </div>
            <div className="flex-shrink-0">
              <img src="/logo2_4.png" alt="Partner 4" className="scale-130 h-24 object-contain" />
            </div>
            <div className="flex-shrink-0">
              <img src="/logo2_5.png" alt="Partner 5" className="scale-130 h-24 object-contain" />
            </div>
            <div className="flex-shrink-0">
              <img src="/logo2_6.png" alt="Partner 6" className="scale-150 h-24 object-contain" />
            </div>
            <div className="flex-shrink-0">
              <img src="/logo2_7.png" alt="Partner 7" className="h-24 object-contain" />
            </div>
            <div className="flex-shrink-0">
              <img src="/logo2_8.png" alt="Partner 8" className="h-24 object-contain" />
            </div>
            <div className="flex-shrink-0">
              <img src="/logo2_9.png" alt="Partner 9" className="h-24 object-contain" />
            </div>
            <div className="flex-shrink-0">
              <img src="/logo2_10.png" alt="Partner 10" className="h-24 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}