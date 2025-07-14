import { Metadata } from "next";
import ActivitiesContent from "./ActivitiesContent";

export const metadata: Metadata = {
  title: "Lịch trình sự kiện | Mơ Hỏi Mở 2025 - CrowdFunding",
  keywords: ["Mơ Hỏi Mở", "CrowdFunding", "2025", "Hoạt động", "Lịch trình sự kiện"],
  description: "Lịch trình sự kiện của Mơ Hỏi Mở 2025 - CrowdFunding",
}

export default function ActivitiesPage() {
  return <ActivitiesContent />;
}