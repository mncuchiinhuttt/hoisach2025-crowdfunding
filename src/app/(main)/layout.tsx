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
      <NavigationBar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}