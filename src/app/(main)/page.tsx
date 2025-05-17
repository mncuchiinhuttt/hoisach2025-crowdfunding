import { Metadata } from "next";
import HomeContent from "./homecontent";

export const metadata: Metadata = {
  title: "Home | Mơ Hỏi Mở 2025 - CrowdFunding",
  keywords: ["Mơ Hỏi Mở", "CrowdFunding", "2025"],
  description: "Mơ Hỏi Mở 2025 - CrowdFunding",
}

export default function Home() {
  return (<HomeContent />);
}