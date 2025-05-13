"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";
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
    <header className="sticky inset-x-0 top-0 z-50 w-full bg-background/70 backdrop-blur border-b">
      <div className="flex h-16 items-center justify-between px-3 mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-2.webp"
            alt="Copper Top Tree Care"
            width={50}
            height={50}
          />
          <span className="text-xl sm:text-2xl font-bold text-primary font-logo">
            Copper Top Tree Care
          </span>
        </Link>

        <nav className="hidden md:flex gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-green-700",
                pathname === route.href
                  ? "text-green-700 font-semibold"
                  : "text-muted-foreground"
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="bg-green-700 hover:bg-green-800">
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
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
              <Button asChild className="mt-4 bg-green-700 hover:bg-green-800">
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
