import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sơ đồ tổng quan | Mơ Hỏi Mở 2025 - CrowdFunding",
  keywords: ["Mơ Hỏi Mở", "CrowdFunding", "2025", "Hoạt động", "Sơ đồ tổng quan"],
  description: "Sơ đồ tổng quan của Mơ Hỏi Mở 2025 - CrowdFunding",
}

export default function ActivitiesPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-white text-black dark:bg-zinc-900 dark:text-white">
      <p className="text-[#F5AF28] text-7xl font-black mt-20">
        CÓ GÌ TẠI HỘI SÁCH?
      </p>
      <p className="text-4xl font-light mt-10">
        Chờ xíu nha, tụi mình bật mí liền nè ~
      </p>
    </div>
  );
}