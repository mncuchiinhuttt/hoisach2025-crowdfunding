'use client'

import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#E6FFE2] py-8 relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="flex flex-col md:flex-row gap-10 md:gap-4">
          <div className="w-full md:w-4/5 flex flex-col">
            <h2 className="text-[#00724D] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-wide mb-6 md:mb-4 w-full text-center md:text-left leading-tight">
              HỘI SÁCH MƠ HỎI MỞ 2025
            </h2>
            
            <div className="flex flex-col space-y-6 w-full">
              <div className="flex items-center gap-3">
                <Image
                  src="/mail-01.svg"
                  alt="Email"
                  width={24}
                  height={24}
                />
                <Link 
                  href="mailto:mohoimo.hoisach@gmail.com" 
                  className="hover:underline hover:text-[#00724D] transition-colors text-lg md:text-xl text-gray-700"
                >
                  mohoimo.hoisach@gmail.com
                </Link>
              </div>
              
              <div className="flex items-center gap-3">
                <Image
                  src="/Facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
                <Link 
                  href="https://facebook.com/hoisachmohoimopage" 
                  target="_blank" 
                  className="hover:underline hover:text-[#00724D] transition-colors text-lg md:text-xl text-gray-700"
                >
                  Hội Sách Mơ Hỏi Mở
                </Link>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/5 flex items-center justify-center md:justify-end">
            <img
              src="/footer.png"
              alt="Mơ Hỏi Mở Characters"
              className="object-contain h-full w-auto scale-200"
            />
          </div>
        </div>
        
        <div className="w-full md:mt-4 border-t border-[#00724D]/10 pt-4">
          <p className="text-gray-600 text-sm md:text-base text-right">
            © 2025 Mơ Hỏi Mở. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}