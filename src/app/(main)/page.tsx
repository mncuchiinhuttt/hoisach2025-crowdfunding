import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Mở Hỏi Mở 2025 - CrowdFunding",
  keywords: ["Mở Hỏi Mở", "CrowdFunding", "2025"],
  description: "Mở Hỏi Mở 2025 - CrowdFunding",
}

export default function Home() {
  return (
<div className="flex flex-col items-center justify-center min-h-screen bg-white text-black dark:bg-zinc-900 dark:text-white">
  <div className="flex items-center justify-center">
    <p className="text-4xl font-bold">
      Content gì đó
    </p>
  </div>
</div>
  );
}