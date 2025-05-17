'use client'

import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle } from "lucide-react";
import { useState, useEffect } from "react";

export default function Support({
  totalAmount,
}: {
  totalAmount: number;
}) {
  const targetAmount = 30000000; 
  const [progress, setProgress] = useState(0);
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
      <div>
        <h1 className="text-7xl font-black text-center text-[#F5AF28] mb-12">
          CÁCH THỨC ĐÓNG GÓP
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-[#E4F7FF]">
          <div className="p-14">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">1. Chuyển khoản đến</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ngân hàng: <span className="font-semibold">Vietcombank</span></li>
                <li>Chủ tài khoản: <span className="font-semibold">Võ Minh Long</span></li>
                <li>Số tài khoản: <span className="font-semibold">hongconhonua</span></li>
                <li>Nội dung chuyển khoản: <span className="font-semibold">For sure phai chuyen cho Long roi</span></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold flex items-center">
                2. Quét mã QR <span className="text-blue-600 underline ml-2 cursor-pointer">tại đây</span>
              </h3>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 flex items-start">
                <AlertTriangle className="text-amber-500 mr-2 flex-shrink-0" />
                <p className="text-sm">Lưu ý: Nếu hệ thống không hỗ trợ nội dung tự động, vui lòng ghi theo đúng nội dung hướng dẫn ở trên để việc đối soát được chính xác.</p>
              </div>
            </div>

            <div className="space-y-3 mt-6">
              <div className="flex items-center">
                <span className="text-lg font-bold mr-2">DANH SÁCH ỦNG HỘ</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  Cập nhật mới
                </span>
              </div>
              <p>(được cập nhật vào 18h00 hàng ngày)</p>
              <p className="font-bold">KHÔNG cần gửi ảnh chuyển khoản.</p>
            </div>

            <div className="mt-6">
              <p className="font-semibold">Nếu có bất kỳ trục trặc nào, hãy liên hệ qua:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Email: <span className="font-semibold">doingoai.hoisach@gmail.com</span></li>
                <li>SĐT (Zalo/Tin nhắn): <span className="font-semibold">0902 759 828 - Bảo Ngọc</span></li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-1 lg:col-span-2 flex items-center justify-center">
            <Image 
              src="/support_1.png" 
              alt="Ủng Hộ Mở Hỏi Mở" 
              width={700} 
              height={500} 
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

    </div>
  );
}