import { Metadata } from "next";
import { prisma } from "@/lib/db";
import Support from "./support";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata: Metadata = {
  title: "Ủng Hộ | Mở Hỏi Mở 2025 - CrowdFunding",
  keywords: ["Mở Hỏi Mở", "CrowdFunding", "2025", "Ủng Hộ"],
  description: "Ủng Hộ Mở Hỏi Mở 2025 - CrowdFunding",
};

async function getSupportData() {
  try {
    const fundings = await prisma.funding.findMany();
    const totalAmount = fundings.reduce((sum, funding) => sum + funding.amount, 0);
    return { totalAmount };
  } catch (error) {
    console.error("Error fetching funding data:", error);
    return { totalAmount: 0 };
  }
}

export default async function SupportPage() {
  const supportData = await getSupportData();
  return (
    <Support totalAmount={supportData.totalAmount} />
  );
}