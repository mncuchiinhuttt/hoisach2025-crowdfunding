import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đêm nhạc | Mơ Hỏi Mở 2025 - CrowdFunding",
  keywords: ["Mơ Hỏi Mở", "CrowdFunding", "2025", "Hoạt động", "Đêm nhạc"],
  description: "Đêm nhạc của Mơ Hỏi Mở 2025 - CrowdFunding",
}

export default function ActivitiesPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-white text-black dark:bg-zinc-900 dark:text-white">
      <p className="text-[#F5AF28] text-4xl md:text-6xl lg:text-7xl font-black mt-20">
        CÓ GÌ TẠI HỘI SÁCH?
      </p>
      <p className="text-xl md:text-3xl lg:text-4xl font-light py-10">
        Chờ xíu nha, tụi mình bật mí liền nè ~
      </p>
    </div>
  );
}