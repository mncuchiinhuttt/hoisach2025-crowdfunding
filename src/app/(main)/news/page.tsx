import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Tin tức & Cập nhật | Mơ Hỏi Mở 2025 - CrowdFunding",
  keywords: ["Mơ Hỏi Mở", "CrowdFunding", "2025", "Tin tức", "Cập nhật"],
  description: "Tin tức và cập nhật mới nhất từ Mơ Hỏi Mở 2025 - CrowdFunding",
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
	  link: "https://vnexpress.net/hoi-sach-mo-hoi-mo-du-kien-hut-hang-nghin-ban-tre-4629314.html",
	},
	{
	  title: "4.000 đầu sách phục vụ bạn trẻ trong hội sách 'Mở Hỏi Mở'",
	  source: "Báo Phụ Nữ",
	  link: "https://www.phunuonline.com.vn/4-000-dau-sach-phuc-vu-ban-tre-trong-hoi-sach-mo-hoi-mo-a1496406.html",
	},
	{
	  title: "Hơn 4.000 đầu sách dành cho teen tại Bến Tre",
	  source: "Báo Mặt Trời",
	  link: "https://muctim.tuoitre.vn/hon-4000-dau-sach-danh-cho-teen-tai-hoi-sach-mo-hoi-mo-101230714151246103.htm",
	},
	{
		title: "Hội sách cho bạn trẻ Bến Tre",
		source: "Znews",
		link: "https://znews.vn/hoi-sach-cho-ban-tre-ben-tre-post1446305.html",
	},
	{
	  title: "Ngày hội sách Mở Hỏi Mở và cuộc thi 'Tôm sách' dành cho học sinh Bến Tre",
	  source: "Báo Thanh Niên",
	  link: "https://thanhnien.vn/ngay-hoi-sach-mo-hoi-mo-va-cuoc-thi-tom-sach-danh-cho-hoc-sinh-ben-tre-185230718154252475.htm",
	},
	{
	  title: "Phát động cuộc thi 'Tôm sách' cho thí sinh Bến Tre",
	  source: "Báo Tiền Phong",
	  link: "https://svvn.tienphong.vn/phat-dong-cuoc-thi-tom-sach-cho-thi-sinh-ben-tre-post1552408.tpo",
	},
	{
	  title: "Nhiều hoạt động thiết thực tại Hội sách Mở hỏi mở",
	  source: "Báo Đồng Khởi",
	  link: "https://baodongkhoi.vn/nhieu-hoat-dong-thiet-thuc-tai-hoi-sach-mo-hoi-mo-16072023-a117157.html",
	},
	{
	  title: "TỔ CHỨC HỘI SÁCH MỞ HỎI MỞ - SỰ KIỆN KHUYẾN ĐỌC CHO BẠN ĐỌC TRẺ",
	  source: "Truyền hình Bến Tre",
	  link: "https://www.youtube.com/watch?v=4m8k3gFNAMw",
	},
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFCE7] to-white font-montserrat">
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-7xl font-black text-[#F5AF28] mb-8">TIN TỨC & CẬP NHẬT</h1>
        
        <div className="grid gap-4">
          {newsItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-r bg-[#E4F7FF] p-4 rounded-md flex justify-between items-center"
            >
              <div className="flex-1">
                <h2 className="text-lg font-semibold mb-1">{item.title}</h2>
                <p className="text-sm text-gray-600">{item.source}</p>
              </div>
              
              <Button
                className="text-white bg-[#4D99D2] hover:bg-[#13609A] focus:ring-4 focus:ring-[#13609A] rounded-md px-4 py-2"
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