import { Metadata } from "next";
import Introduction from "./introduction";

export const metadata: Metadata = {
  title: "Giới thiệu | Mơ Hỏi Mở 2025 - CrowdFunding",
  keywords: ["Mơ Hỏi Mở", "CrowdFunding", "2025", "Giới thiệu"],
  description: "Giới thiệu về Mơ Hỏi Mở 2025 - CrowdFunding",
};

export default function Page() {
  return (
    <Introduction />
  )
}