import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata: Metadata = {
  title: "Home | Mở Hỏi Mở 2025 - CrowdFunding",
  keywords: ["Mở Hỏi Mở", "CrowdFunding", "2025"],
  description: "Mở Hỏi Mở 2025 - CrowdFunding",
}

export default function Home() {
  return (
<Suspense fallback={<Skeleton className="h-96 w-full" />}>
<div className="flex flex-col items-center justify-center min-h-screen bg-white text-black dark:bg-zinc-900 dark:text-white">
  <div className="flex items-center justify-center">
    <p className="text-4xl font-bold">
      This page is in development. Please check back later.
    </p>
  </div>
</div>
</Suspense>
  );
}