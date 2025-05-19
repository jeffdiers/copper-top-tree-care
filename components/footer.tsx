import {
  Facebook,
  HeartHandshake,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import logo from "@/public/logo.webp";

import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  return (
    <footer className="border-t bg-green-50">
      <div className="container py-6 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[auto_1fr_1fr_1fr]">
          <div className="space-y-4">
            <div className="flex items-center pr-4">
              <Image
                src={logo}
                alt={`${siteConfig.name} logo`}
                width={200}
                height={200}
              />
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#tree-trimming"
                  className="text-muted-foreground hover:text-green-700"
                >
                  Tree Trimming
                </Link>
              </li>
              <li>
                <Link
                  href="/services#tree-removal"
                  className="text-muted-foreground hover:text-green-700"
                >
                  Tree Removal
                </Link>
              </li>
              <li>
                <Link
                  href="/services#stump-grinding"
                  className="text-muted-foreground hover:text-green-700"
                >
                  Stump Grinding
                </Link>
              </li>
              <li>
                <Link
                  href="/services#emergency"
                  className="text-muted-foreground hover:text-green-700"
                >
                  Emergency Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-green-700"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-green-700"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-green-700"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-green-700"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex w-fit items-start gap-2">
                <Phone className="mt-0.5 h-5 w-5 text-secondary" />
                <span>{siteConfig.phoneFormatted}</span>
              </li>
              <li className="flex w-fit items-start gap-2 overflow-visible">
                <Mail className="mt-0.5 h-5 w-5 text-secondary" />
                <span>{siteConfig.email}</span>
              </li>
              <li className="flex w-fit items-start gap-2">
                <MapPin className="mt-0.5 h-5 w-5 text-secondary" />
                <span>
                  {siteConfig.address.city}, {siteConfig.address.state}
                </span>
              </li>
            </ul>

            <div className="mt-4 flex space-x-4 border-t border-border pt-4">
              <Link
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-green-700"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-green-700"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name} LLC. All rights
            reserved. |{" "}
            <span className="font-caprasimo text-xs">
              <HeartHandshake className="mr-1 inline-block h-4 w-4" />
              Site by{" "}
              <Link href={siteConfig.devSite} className="underline">
                jeffdiers.com
              </Link>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
