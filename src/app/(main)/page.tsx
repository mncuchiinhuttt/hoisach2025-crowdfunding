import { Metadata } from "next";
import HomeContent from "./homecontent";

export const metadata: Metadata = {
  title: "Home | Mơ Hỏi Mở 2025 - CrowdFunding",
  keywords: ["Mơ Hỏi Mở", "CrowdFunding", "2025"],
  description: "Mơ Hỏi Mở 2025 - CrowdFunding",
  openGraph: {
    title: "Mơ Hỏi Mở 2025 - CrowdFunding",
    description: "Mơ Hỏi Mở 2025 - CrowdFunding",
    url: "https://www.unghomohoimo.com",
    siteName: "Mơ Hỏi Mở 2025 - CrowdFunding",
    images: [
      {
        url: "https://www.unghomohoimo.com/og.png",
        width: 1200,
        height: 630,
        alt: "Mơ Hỏi Mở 2025 - CrowdFunding",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
}

export default function Home() {
  return (<HomeContent />);
}