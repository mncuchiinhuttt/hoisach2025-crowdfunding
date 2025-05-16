import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Tin tức & Cập nhật | Mở Hỏi Mở 2025 - CrowdFunding",
  keywords: ["Mở Hỏi Mở", "CrowdFunding", "2025", "Tin tức", "Cập nhật"],
  description: "Tin tức và cập nhật mới nhất từ Mở Hỏi Mở 2025 - CrowdFunding",
};

interface NewsItem {
  title: string;
  source: string;
  link: string;
}

export default function NewsPage() {
  const newsItems: NewsItem[] = [
	{
	  title: "Hội sách 'Mở Hỏi Mở' dự kiến hút hàng nghìn bạn trẻ",
	  source: "Báo VNExpress",
	  link: "#",
	},
	{
	  title: "4.000 đầu sách phục vụ bạn trẻ trong hội sách 'Mở Hỏi Mở'",
	  source: "Báo Phụ Nữ",
	  link: "#",
	},
	{
	  title: "Hơn 4.000 đầu sách dành cho teen tại Bến Tre",
	  source: "Báo Mặt Trời",
	  link: "#",
	},
	{
	  title: "Ngày hội sách Mở Hỏi Mở và cuộc thi 'Tôm sách' dành cho học sinh Bến Tre",
	  source: "Báo Thanh Niên",
	  link: "#",
	},
	{
	  title: "Phát động cuộc thi 'Tôm sách' cho thí sinh Bến Tre",
	  source: "Báo Tiền Phong",
	  link: "#",
	},
	{
	  title: "Nhiều hoạt động thiết thực tại Hội sách Mở hỏi mở",
	  source: "Báo Đồng Khởi",
	  link: "#",
	},
	{
	  title: "TỔ CHỨC HỘI SÁCH MỞ HỎI MỞ - SỰ KIỆN KHUYẾN ĐỌC CHO BẠN ĐỌC TRẺ",
	  source: "Truyền hình Bến Tre",
	  link: "#",
	},
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFCE7] to-white font-montserrat">
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold text-orange-400 mb-8">TIN TỨC & CẬP NHẬT</h1>
        
        <div className="grid gap-4">
          {newsItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-r bg-blue-50 p-4 rounded-md flex justify-between items-center"
            >
              <div className="flex-1">
                <h2 className="text-lg font-semibold mb-1">{item.title}</h2>
                <p className="text-sm text-gray-600">{item.source}</p>
              </div>
              
              <Button
                className="text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 rounded-md px-4 py-2"
                asChild
              >
                <Link href={item.link}>
                  Xem thêm
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}