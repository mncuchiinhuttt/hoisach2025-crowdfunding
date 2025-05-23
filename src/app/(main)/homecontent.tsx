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
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <section className="w-full overflow-hidden">
        <motion.div
          initial={{ y: -300, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : { y: -300, opacity: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 25,  
            damping: 25,    
            mass: 1.8,      
            duration: 3,    
            restDelta: 0.01 
          }}
          className="relative"
        >
          <motion.div 
            className="w-full relative"
            initial={{ boxShadow: "0 0 0 rgba(0,0,0,0)" }}
            animate={{ boxShadow: "0 20px 50px rgba(0,0,0,0.15)" }}
            transition={{ duration: 2.5, ease: "easeOut", delay: 0.5 }}
          >
            <motion.img 
              src="/home_page_poster.png"
              alt="Mơ Hỏi Mở Poster"
              className="w-full h-auto"
              initial={{ filter: "blur(8px)", opacity: 0.7 }}
              animate={{ filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
            />
          </motion.div>
        </motion.div>
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