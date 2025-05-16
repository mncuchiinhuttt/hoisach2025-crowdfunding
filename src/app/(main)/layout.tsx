"use client";

import React from "react";
import { NavigationBar } from "@/layout/navigationbar";
import { Footer } from "@/layout/footer"

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="sticky top-0 z-50">
        <NavigationBar />
      </div>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}