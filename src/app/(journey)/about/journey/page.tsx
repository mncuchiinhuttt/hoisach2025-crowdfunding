import { Metadata } from "next";
import Journey from "./journey";

export const metadata: Metadata = {
  title: "Hành trình 10 năm | Mơ Hỏi Mở 2025 - CrowdFunding",
  keywords: ["Mơ Hỏi Mở", "CrowdFunding", "2025", "Hành trình 10 năm"],
  description: "Hành trình 10 năm của Mơ Hỏi Mở 2025 - CrowdFunding",
}

export default function ActivitiesPage() {
  return (
    <Journey />
  );
}