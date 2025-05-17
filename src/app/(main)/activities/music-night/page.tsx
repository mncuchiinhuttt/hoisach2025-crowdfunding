import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoạt động | Mở Hỏi Mở 2025 - CrowdFunding",
  keywords: ["Mở Hỏi Mở", "CrowdFunding", "2025", "Hoạt động"],
  description: "Hoạt động của Mở Hỏi Mở 2025 - CrowdFunding",
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