import { Metadata } from "next";
import HomeContent from "./homecontent";

export const metadata: Metadata = {
  title: "Home | Mở Hỏi Mở 2025 - CrowdFunding",
  keywords: ["Mở Hỏi Mở", "CrowdFunding", "2025"],
  description: "Mở Hỏi Mở 2025 - CrowdFunding",
}

export default function Home() {
  return (<HomeContent />);
}