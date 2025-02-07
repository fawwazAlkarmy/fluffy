"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useTranslations } from "next-intl";

const navigation = [
  { name: "Home", href: "home" },
  { name: "Our Menu", href: "menu" },
  { name: "About Fluffy", href: "about" },
  { name: "Locations", href: "locations" },
  { name: "Gallery", href: "gallery" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Navbar");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleScroll = (sectionId: string) => {
    setIsOpen(false);

    let timeout = setTimeout(() => {
      scrollToSection(sectionId);
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  };

  return (
    <nav className="bg-black fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Image src="/logo.svg" alt="Fluffy Burger" width={70} height={70} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="ml-10 flex items-baseline">
              {navigation.map((item) => (
                <li
                  key={item.name}
                  className="text-white hover:text-[#EB9C1B] px-3 py-2 text-base font-medium transition-colors cursor-pointer ml-8"
                  onClick={() => handleScroll(item.href)}
                >
                  {t(item.name)}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-white hover:text-[#EB9C1B]"
                >
                  <Menu className="h-8 w-8" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-black">
                <SheetTitle></SheetTitle>
                <div className="mt-6 flow-root">
                  <ul className="space-y-4 py-6">
                    {navigation.map((item) => (
                      <li
                        key={item.name}
                        className="block px-3 py-2 text-lg font-medium text-white hover:text-[#EB9C1B] cursor-pointer"
                        onClick={() => handleScroll(item.href)}
                      >
                        {t(item.name)}
                      </li>
                    ))}
                  </ul>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
