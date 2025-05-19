"use client";

import { Menu } from "lucide-react";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import logo from "@/public/logo.webp";

import { siteConfig } from "@/lib/siteConfig";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const routes = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky inset-x-0 top-0 z-50 w-full border-b bg-background">
      <div className="flex h-16 items-center px-3">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            alt={`${siteConfig.name} logo`}
            width={60}
            height={60}
          />
          <span className="font-logo text-xl font-bold text-primary">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 gap-6 md:flex">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-green-700",
                pathname === route.href
                  ? "font-semibold text-green-700 underline underline-offset-4"
                  : "text-muted-foreground",
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>

        <div className="absolute right-0 hidden pr-4 md:block">
          <Button
            asChild
            animate="pulse"
            size="sm"
            className="rounded-full shadow-lg"
          >
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="absolute right-0 mr-4 md:hidden">
            <Button variant="outline" size="icon" aria-label="Menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-6 pt-6">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-base font-medium transition-colors hover:text-green-700",
                    pathname === route.href
                      ? "font-semibold text-green-700"
                      : "text-muted-foreground",
                  )}
                >
                  {route.label}
                </Link>
              ))}
              <Button asChild className="mt-4">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Get a Free Quote
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
