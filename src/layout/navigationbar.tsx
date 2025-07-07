"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ListItem } from "@/components/ui/list-item";

export function NavigationBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const aboutItems = [
    {
      title: "Giới thiệu",
      href: "/about/introduction",
      description: "Câu chuyện về “Mơ Hỏi Mở” - nơi những ý tưởng be bé được ươm mầm, để lớn lên thành những điều thật xinh",
    },
    {
      title: "Hành trình 10 năm",
      href: "/about/journey",
      description: "Cùng nhìn lại hành trình 10 năm đầy phép màu đã tạo nên “Mơ Hỏi Mở” như ngày hôm nay",
    },
  ];

  const activityItems = [
    {
      title: "Lịch trình sự kiện",
      href: "/activities",
      description: "Theo dấu lịch trình để không bỏ lỡ bất kỳ \“kho báu\" nào trong chuyến phiêu lưu cùng “Mơ Hỏi Mở” nhé",
    },
    {
      title: "Sơ đồ tổng quan",
      href: "/activities",
      description: "Bản đồ này sẽ đưa bạn ghé thăm từng góc nhỏ thân thương của Mơ Hỏi Mở",
    },
    {
      title: "Đêm nhạc",
      href: "/activities",
      description: "Khi ngày tắt nắng, hãy ghé lại sân khấu đặc biệt của \"Mơ Hỏi Mở\" - nơi âm nhạc lên tiếng và trái tim cùng nhau hát vang.",
    }
  ];

  return (
    <nav className="w-full h-18 bg-emerald-700 flex items-center justify-between px-8 md:px-16 lg:px-24">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/navbarlogo.png"
            alt="Logo"
            width={60}
            height={60}
            className="w-16 h-16"
          />
        </Link>
      </div>

      <div className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList className="gap-2 lg:gap-2">
            <NavigationMenuItem>
              <Link href="/support" passHref>
                <NavigationMenuLink className="text-white text-base lg:text-lg font-bold py-2 px-3 block hover:bg-white rounded-md">
                  Ủng hộ
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white text-base lg:text-lg font-bold bg-transparent hover:bg-white focus:bg-white">
                Về chúng tôi
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  {aboutItems.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white text-base lg:text-lg font-bold bg-transparent hover:bg-white focus:bg-white">
                Hoạt động
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  {activityItems.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/news" passHref>
                <NavigationMenuLink className="text-white text-base lg:text-lg font-bold py-2 px-3 block hover:bg-white rounded-md">
                  Tin tức
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="md:hidden">
        <button 
          className="text-white mt-2" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50" 
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          
          {/* Side menu */}
          <div className="fixed right-0 top-0 h-full w-3/4 max-w-sm bg-emerald-700 p-6 shadow-xl">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <Image
                  src="/navbarlogo.png"
                  alt="Logo"
                  width={50}
                  height={50}
                  className="w-12 h-12"
                />
              </Link>
              
              <button
                className="text-white"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-6">
              {/* Direct links */}
              <Link
                href="/support"
                className="block text-white font-bold text-lg py-2 border-b border-emerald-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Ủng hộ
              </Link>
              
              {/* About dropdown */}
              <div className="py-2 border-b border-emerald-600">
                <div className="flex items-center justify-between text-white font-bold text-lg mb-2">
                  <span>Về chúng tôi</span>
                </div>
                <div className="pl-4 space-y-3 mt-2">
                  {aboutItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block text-white py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Activities dropdown */}
              <div className="py-2 border-b border-emerald-600">
                <div className="flex items-center justify-between text-white font-bold text-lg mb-2">
                  <span>Hoạt động</span>
                </div>
                <div className="pl-4 space-y-3 mt-2">
                  {activityItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block text-white py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* News link */}
              <Link
                href="/news"
                className="block text-white font-bold text-lg py-2 border-b border-emerald-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tin tức
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}