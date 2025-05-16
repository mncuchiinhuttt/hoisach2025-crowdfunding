"use client";

import React from "react";
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
  const aboutItems = [
    {
      title: "Lịch sử",
      href: "/about/history",
      description: "Tìm hiểu về lịch sử hình thành và phát triển của chúng tôi",
    },
    {
      title: "Sứ mệnh",
      href: "/about/mission",
      description: "Sứ mệnh và tầm nhìn của chúng tôi trong tương lai",
    },
  ];

  const activityItems = [
    {
      title: "Hiện tại",
      href: "/activities/current",
      description: "Các hoạt động đang diễn ra",
    },
    {
      title: "Đã qua",
      href: "/activities/past",
      description: "Các hoạt động đã hoàn thành",
    },
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

            <NavigationMenuItem>
              <Link href="/support" passHref>
                <NavigationMenuLink className="text-white text-base lg:text-lg font-bold py-2 px-3 block hover:bg-white rounded-md">
                  Ủng hộ
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact" passHref>
                <NavigationMenuLink className="text-white text-base lg:text-lg font-bold py-2 px-3 block hover:bg-white rounded-md">
                  Liên hệ
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="md:hidden">
        <button className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}