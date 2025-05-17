'use client'

import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DialogClose } from "@radix-ui/react-dialog";

export default function Support({
  totalAmount,
}: {
  totalAmount: number;
}) {
  const targetAmount = 30000000; 
  const [progress, setProgress] = useState(0);
  const [isLetterExpanded, setIsLetterExpanded] = useState(false);
  const progressPercentage = Math.min(Math.round((totalAmount / targetAmount) * 100), 100);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < progressPercentage ? prev + 1 : prev));
    }, 40);

    return () => clearInterval(interval);
  }, [progressPercentage]);

  return (
    <div className="w-full bg-white text-black dark:bg-zinc-900 dark:text-white">
      <div className="w-full px-4 py-12">
        <div className="w-full bg-white overflow-hidden">
          <div className="p-8">
            <h1 className="text-7xl font-black text-center text-[#F5AF28] mb-12">
              DÀNH CHO NGƯỜI ỦNG HỘ
            </h1>
            <div className="w-full max-w-6xl mx-auto">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className="font-medium text-green-700 text-lg">Đã ủng hộ</span>
                  <p className="text-3xl font-bold">
                    {totalAmount.toLocaleString()} đ
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-medium text-green-700 text-lg">Mục tiêu</span>
                  <p className="text-3xl font-bold">
                    {targetAmount.toLocaleString()} đ
                  </p>
                </div>
              </div>
                <div className="flex items-center w-full">
                <div className="flex-grow relative">
                  <Progress 
                  value={progress} 
                  className="h-4 bg-gray-200 [&>div]:bg-[#00724D] rounded-full" 
                  />
                </div>
                  <span className="ml-3 text-lg font-semibold">
                    {progress}%
                  </span>
                </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full bg-gradient-to-b from-[#FFFCE7] to-white">
        <div className="w-full mx-auto p-18">
          <h1 className="text-4xl font-black text-left mb-8">
            📩  Thư ngỏ từ Nhóm Dự án Hội sách Mơ Hỏi Mở 2025
          </h1>
          
          <div className="relative overflow-hidden transition-all duration-500 ease-in-out" 
               style={{ maxHeight: isLetterExpanded ? '2000px' : '200px' }}>
            <div className="prose prose-lg max-w-none text-xl">
              <p>
                Kính gửi quý cô chú, anh chị,
              </p>
              <p className="mt-6">
                <a className="font-semibold">Dự án Hội sách Bến Tre,</a> được khởi xướng từ năm 2015, là một sáng kiến phi lợi nhuận, được thành lập và điều hành bởi cộng đồng cựu học sinh, sinh viên tại tỉnh Bến Tre. Với tâm huyết lan tỏa văn hóa đọc đến thế hệ trẻ của tỉnh nhà, đặc biệt trong bối cảnh văn hóa đọc ngày càng cần được trân trọng và gìn giữ, dự án đã không ngừng nỗ lực để hiện thực hóa mục tiêu cao đẹp này.
              </p>
              <p className="mt-6">
                Năm 2025, <a className="font-semibold">Hội sách Bến Tre</a> hân hạnh quay trở lại với chủ đề "Hành Trình Mở Mang Tri Thức - Khám Phá Kỳ Quan Qua Trang Sách". Dự án năm nay hứa hẹn mang đến nhiều ý tưởng mới mẻ và tiềm năng, hướng tới mục tiêu trở thành một trong những sự kiện nổi bật nhất trong việc tôn vinh văn hóa đọc dành cho giới trẻ tại quê hương xứ dừa. Nhóm dự án mong muốn qua đó khơi gợi niềm cảm hứng đọc sách, tạo tiền đề cho thói quen đọc lâu dài thông qua việc kích thích sự tò mò về kiến thức. Đồng thời còn mang đến những trải nghiệm, tạo không gian lắng đọng với những khoảnh khắc chia sẻ, suy ngẫm sâu sắc cùng các khách mời đặc biệt,  và nhiều hoạt động độc đáo khác đang chờ đón.
              </p>
              <p className="mt-6">
                Để có thể tổ chức thành công một sự kiện ý nghĩa như vậy, đồng thời duy trì các hoạt động khuyến đọc và phát triển dự án bền vững trong tương lai, nhóm dự án trân trọng kêu gọi sự chung tay hỗ trợ từ quý cô chú, anh chị thông qua chiến dịch <a className="font-semibold">Gây quỹ cộng đồng</a>. Mọi đóng góp, dù lớn hay nhỏ, đều vô cùng quý giá và sẽ góp phần quan trọng vào sự thành công chung của Hội sách.
              </p>
              <p className="mt-6">
                Quý cô chú, anh chị có thể tìm hiểu thông tin chi tiết về Hội sách và chiến dịch Gây quỹ tại website này. Nếu có bất kỳ thắc mắc, yêu cầu cung cấp thông tin hoặc mong muốn hỗ trợ, xin vui lòng liên hệ với nhóm dự án qua email: <a href="mailto:mohoimo.hoisach@gmail.com" className="underline">mohoimo.hoisach@gmail.com</a> hoặc trang fanpage Hội Sách Mơ Hỏi Mở. 
              </p>
              <p className="mt-6">
                Nhóm dự án <a className="font-semibold">Hội sách Mơ hỏi Mở 2025</a> xin chân thành cảm ơn sự quan tâm và ủng hộ quý báu của quý cô chú, anh chị!
              </p>
              <p className="mt-6 italic">
                Trân trọng,
              </p>
              <p className="mt-6 font-semibold">
                Hội sách Mơ hỏi Mở 2025./.
              </p>
            </div>
            
            {!isLetterExpanded && (
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fffffb] to-transparent"></div>
            )}
          </div>
          
          <div className="flex justify-center mt-8">
            <button 
              onClick={() => setIsLetterExpanded(!isLetterExpanded)}
              className="flex items-center gap-2 bg-[#F5AF28] hover:bg-[#e9a420] text-white py-2 px-6 rounded-full transition-colors shadow-md"
            >
              {isLetterExpanded ? "Thu gọn" : "Xem thêm"}
              <ChevronDown className={`w-4 h-4 transition-transform ${isLetterExpanded ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="w-full py-16 bg-gradient-to-b from-white to-[#E4F7FF] via-[#f7fcff]">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-center text-[#F5AF28] mb-14">
            CÁCH THỨC ĐÓNG GÓP
          </h1>
          
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-3/5 space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-[#00724D] mb-4">1. Chuyển khoản đến</h3>
                <ul className="list-disc pl-6 space-y-3 text-2xl">
                  <li>Ngân hàng: <span className="font-semibold">...</span></li>
                  <li>Chủ tài khoản: <span className="font-semibold">...</span></li>
                  <li>Số tài khoản: <span className="font-semibold">...</span></li>
                  <li>Nội dung chuyển khoản: <span className="font-semibold">...</span></li>
                </ul>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#00724D] mb-4 flex items-center">
                  2. Quét mã QR 
                  <Dialog>
                    <DialogTrigger>
                      <span className="underline ml-2 cursor-pointer">tại đây</span>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle className="text-center text-xl font-bold mb-2">Mã QR Chuyển khoản</DialogTitle>
                        <DialogDescription className="text-center">
                          Quét mã QR bằng app ngân hàng / ví điện tử
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex items-center justify-center p-6">
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex items-center justify-center">
                          <div className="text-lg font-medium text-gray-600">QR HERE</div>
                        </div>
                      </div>
                      <DialogFooter className="flex sm:items-center sm:justify-center">
                        <DialogClose asChild>
                          <Button
                            type="button"
                            variant="default"
                            className="bg-[#00724D] hover:bg-[#005f3d] text-white px-4 py-2 rounded-lg"
                          >
                            Đóng
                          </Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </h3>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 flex items-start">
                  <AlertTriangle className="text-amber-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-lg text-justify"><a className="font-semibold">Lưu ý:</a> Nếu hệ thống không hỗ trợ nội dung tự động, vui lòng ghi theo đúng nội dung hướng dẫn ở trên để việc đối soát được chính xác.</p>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-3">
                  <span className="text-3xl font-bold mr-2 text-[#00724D]">DANH SÁCH ỦNG HỘ</span>
                  <Button
                    className="bg-[#00724D] text-white hover:bg-[#005f3d] rounded-full px-4 py-2 font-semibold"
                    onClick={() => {
                      window.open("https://docs.google.com/spreadsheets/d/12CWJ6RBqzPvYFrBQW0cDdj6mFAX3qP67Ogn2LH1pDIQ/edit?gid=0#gid=0", "_blank");
                    }}
                  >
                    Xem tại đây
                  </Button>
                </div>
                <p className="text-gray-700 text-2xl">(được cập nhật vào 19h00 thứ 2, 4, 6 hàng tuần)</p>
                <p className="text-2xl mt-2"><a className="font-semibold">KHÔNG</a> cần gửi ảnh chuyển khoản.</p>
              </div>

              <div>
                <p className="font-bold text-[#00724D] text-3xl">Nếu có bất kỳ trục trặc nào, hãy liên hệ qua</p>
                <ul className="list-disc pl-6 mt-3 text-2xl">
                  <li>Email: <span className="font-semibold">doingoai.hoisach@gmail.com</span></li>
                  <li>SĐT (Zalo/Tin nhắn): <span className="font-semibold">0902 759 828 - Bảo Ngọc</span></li>
                </ul>
              </div>
            </div>

            <div className="lg:w-2/5 flex items-end justify-center mt-auto">
              <Image 
                src="/support_1.png" 
                alt="Ủng Hộ Mở Hỏi Mở" 
                width={500} 
                height={400}
                className="object-contain relative rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}