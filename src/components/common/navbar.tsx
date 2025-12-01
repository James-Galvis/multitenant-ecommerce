"use client";

import Link from "next/link";
import React, { useState } from "react";
import { MenuIcon } from "lucide-react";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui";

import { NavbarSidebar } from "@/components/common";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

const navbarItems = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/features", children: "Features" },
  { href: "/pricing", children: "Pricing" },
  { href: "/contact", children: "Contact" },
];

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavbarItem = ({ children, href, isActive }: NavbarItemProps) => {
  return (
    <Button
      asChild
      variant="outline"
      className={cn(
        "bg-transparent hover:bg-transparent rounded-full border-transparent hover:border-primary px-3.5 text-lg",
        isActive && "bg-black text-white hover:bg-black hover:text-white"
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

export function Navbar() {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <nav className="h-20 flex justify-between font-medium bg-white border-b-3">
      <Link href="/" className="flex items-center">
        <span className={cn("text-5xl font-semibold pl-6", poppins.className)}>
          funroad
        </span>
      </Link>

      <NavbarSidebar
        items={navbarItems}
        open={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
      />

      <div className="hidden lg:flex items-center gap-4">
        {navbarItems.map((item) => (
          <NavbarItem
            key={item.href}
            {...item}
            isActive={pathname === item.href}
          />
        ))}
      </div>

      <div className="hidden lg:flex">
        <Button
          asChild
          variant="secondary"
          className="border-l-3 border-y-0 border-r-0 bg-white h-full px-12 rounded-none hover:bg-emerald-300 transition-colors text-lg"
        >
          <Link href="/sign-in">Log in</Link>
        </Button>
        <Button
          asChild
          className="border-l-3 border-y-0 border-r-0 bg-black h-full px-12 rounded-none hover:bg-emerald-300 hover:text-black transition-colors text-lg"
        >
          <Link href="/sign-up">Start selling</Link>
        </Button>
      </div>

      {/* Mobile menu button */}
      <div className="flex lg:hidden items-center justify-center pr-6">
        <Button
          variant="pressed"
          className="size-12 bg-white"
          onClick={() => setIsSidebarOpen(true)}
        >
          <MenuIcon className="size-6" />
        </Button>
      </div>
    </nav>
  );
}
