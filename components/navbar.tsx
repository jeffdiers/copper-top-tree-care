"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";
import { Separator } from "@/components/ui/separator";

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
    <header className="sticky inset-x-0 top-0 z-50 w-full bg-background border-b">
      <div className="flex items-center h-16 px-3 ">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.webp"
            alt="Copper Top Tree Care"
            width={60}
            height={60}
          />
          <span className="text-xl font-bold text-primary font-logo">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden md:flex gap-6 absolute left-1/2 -translate-x-1/2">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-green-700",
                pathname === route.href
                  ? "text-green-700 font-semibold underline underline-offset-4"
                  : "text-muted-foreground"
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block absolute right-0 pr-4">
          <Button asChild animate="pulse" size="sm" className="rounded-full">
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden absolute right-0 mr-4">
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
                      ? "text-green-700 font-semibold"
                      : "text-muted-foreground"
                  )}
                >
                  {route.label}
                </Link>
              ))}
              <Button asChild className="mt-4 ">
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
