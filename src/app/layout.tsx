import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Toaster } from "sonner";
import { Suspense } from "react";
import Head from "next/head";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  display: 'swap',
  subsets: ["latin", "vietnamese"],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: "Mở Hỏi Mở 2025 - CrowdFunding",
  keywords: [
    "Mở Hỏi Mở",
    "CrowdFunding",
    "2025",
    "Mở Hỏi Mở 2025",
    "Mở Hỏi Mở 2025 - CrowdFunding",
  ],
  description: "Mở Hỏi Mở 2025 - CrowdFunding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <html lang="en">
      <body
        className={`${montserrat.className}`}
      >
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
    </>
  );
}
