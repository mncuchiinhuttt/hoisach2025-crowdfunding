'use client'

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { 
  HandCoins, Heart, Book, Newspaper, ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HomeContent() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center">
      <section className="w-full overflow-hidden">
        <div className="relative w-full">
          <motion.div 
            className="w-full relative"
            initial={{ boxShadow: "0 0 0 rgba(0,0,0,0)" }}
            animate={{ boxShadow: "0 20px 50px rgba(0,0,0,0.15)" }}
            transition={{ duration: 2.5, ease: "easeOut", delay: 3 }}
          >
            {/* Base layer */}
            <motion.img 
              src="/poster/1.png"
              alt="Mơ Hỏi Mở Poster - Layer 1"
              className="w-full h-auto"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />

            {/* Layer 2 */}
            <motion.img 
              src="/poster/2.png"
              alt="Mơ Hỏi Mở Poster - Layer 2"
              className="w-full h-auto absolute top-0 left-0"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: "easeOut", delay: 0.6 }}
            />

            {/* Layer 3 */}
            <motion.img 
              src="/poster/3.png"
              alt="Mơ Hỏi Mở Poster - Layer 3"
              className="w-full h-auto absolute top-0 left-0"
              initial={{ opacity: 0, y: -70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6, ease: "easeOut", delay: 1.2 }}
            />

            {/* Layer 4 */}
            <motion.img 
              src="/poster/4.png"
              alt="Mơ Hỏi Mở Poster - Layer 4"
              className="w-full h-auto absolute top-0 left-0"
              initial={{ opacity: 0, y: -90 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, ease: "easeOut", delay: 1.8 }}
            />

            {/* Layer 5 */}
            <motion.img 
              src="/poster/5.png"
              alt="Mơ Hỏi Mở Poster - Layer 5"
              className="w-full h-auto absolute top-0 left-0"
              initial={{ opacity: 0, y: -110 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.0, ease: "easeOut", delay: 2.4 }}
            />
          </motion.div>
        </div>
      </section>
      
      <section className="w-full max-w-7xl px-4 pt-16 text-center relative z-10">
        <div className="p-12">
          <h1 className="text-4xl/snug mb-12 font-semibold">
            Để hành trình "Mơ Hỏi Mở" tiếp tục lan tỏa, tụi mình rất cần sự góp tay của bạn. Một chút yêu thương, một chút đồng hành, cũng đủ để câu chuyện này được viết tiếp.
          </h1>
          <Button
            variant="default"
            className="bg-[#00724D] text-white rounded-full px-10 py-6 text-2xl font-bold gap-3 scale-110 hover:bg-[#00724D] hover:scale-115"
            size="lg"
            onClick={() => router.push("/support")}
          >
            <HandCoins size={36} strokeWidth={2} className="ml-2 flex-shrink-0 scale-140" />
            <span className="mr-2">ỦNG HỘ NGAY</span>
          </Button>
        </div>
      </section>
      
      <div className="w-full">

      </div>
      
      <div className="w-full relative -mt-64 2xl:-mt-32 lg:-mt-24 md:-mt-12 sm:-mt-8">
        <Image
          src="/home_1.png"
          alt="Mở Hỏi Mở Illustration"
          width={1200}
          height={600}
          className="w-full h-auto"
          priority
          quality={100}
        />
      </div>
      
      <section className="w-full bg-[#FEF9DB]">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-start relative transition-transform hover:scale-105">
              <div className="bg-[#F8E3E3] rounded-full p-4 mb-4 self-center">
                <Heart size={48} />
              </div>
              <h3 className="text-3xl font-black mb-4 self-center">Về chúng tôi</h3>
              <p className="text-gray-600 text-justify text-xl">Vùng đất "Mơ Hỏi Mở" đầy bí ẩn đang chờ bạn khám phá. Hãy cùng theo chân hai bạn nhỏ Mơ và Mở tìm hiểu xem vùng đất này sẽ mang đến những điều tuyệt vời nào nhé!</p>
              <Button
                className="mt-4 text-[#6D6D6D] font-bold bg-[#F2F4F7] hover:bg-[#E0E2E5] flex items-center self-center"
                variant="ghost"
                onClick={() => router.push("/about/introduction")}
              >
                Xem tại đây nè
                <ChevronRight size={16} />
              </Button>
            </div>
            
            <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-start transition-transform hover:scale-105">
              <div className="bg-[#E3ECF8] rounded-full p-4 mb-4">
                <Book size={48} />
              </div>
              <h3 className="text-3xl font-black mb-4">Hoạt động</h3>
              <p className="text-gray-600 text-justify text-xl">Mỗi góc nhỏ ngân vang những câu chuyện chưa kể. Mỗi hoạt động khẽ hé những điều thần kỳ. Biết bao nhiêu  điều đang chờ bạn thử đó, ghé chơi liền nha!</p>
              <Button
                className="mt-11 text-[#6D6D6D] font-bold bg-[#F2F4F7] hover:bg-[#E0E2E5] flex items-center self-center"
                variant="ghost"
                onClick={() => router.push("/activities/overview")}
              >
                Xem tại đây nè
                <ChevronRight size={16} />
              </Button>
            </div>
            
            <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-start transition-transform hover:scale-105">
              <div className="bg-[#E3F8ED] rounded-full p-4 mb-4">
                <Newspaper size={48} />
              </div>
              <h3 className="text-3xl font-black mb-4">Tin tức</h3>
              <p className="text-gray-600 text-justify text-xl">Những bài viết, bản tin về hành trình lan tỏa tri thức của “Mơ Hỏi Mở” - nơi bạn có thể theo dõi những cột mốc đáng nhớ và những câu chuyện truyền cảm hứng từ tụi mình.</p>
              <Button
                className="mt-4 text-[#6D6D6D] font-bold bg-[#F2F4F7] hover:bg-[#E0E2E5] flex items-center self-center"
                variant="ghost"
                onClick={() => router.push("/news")}
              >
                Xem tại đây nè
                <ChevronRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}