import { Metadata } from "next";
import Introduction from "./introduction";

export const metadata: Metadata = {
  title: "Giới thiệu | Mở Hỏi Mở 2025 - CrowdFunding",
  keywords: ["Mở Hỏi Mở", "CrowdFunding", "2025", "Giới thiệu"],
  description: "Giới thiệu về Mở Hỏi Mở 2025 - CrowdFunding",
};

export default function Page() {
  return (
    <Introduction />
  )
}