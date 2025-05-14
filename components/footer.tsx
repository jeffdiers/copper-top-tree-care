import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-green-50 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 items-center">
          <div className="space-y-4">
            <div className="flex items-center ml-6">
              <Image
                src="/logo.webp"
                alt="Copper Top Tree Care"
                width={120}
                height={120}
              />
            </div>
            <p className="text-muted-foreground">
              Professional tree services with over 15 years of experience.
              Licensed and insured.
            </p>
            <div className="flex space-x-4">
              <Link
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-green-700"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-green-700"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
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
            <h3 className="font-semibold text-lg mb-4">Company</h3>
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
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 w-fit">
                <Phone className="h-5 w-5 text-green-700 mt-0.5" />
                <span>{siteConfig.phoneFormatted}</span>
              </li>
              <li className="flex items-start gap-2 overflow-visible w-fit">
                <Mail className="h-5 w-5 text-green-700 mt-0.5" />
                <span>{siteConfig.email}</span>
              </li>
              <li className="flex items-start gap-2 w-fit">
                <MapPin className="h-5 w-5 text-green-700 mt-0.5" />
                <span>
                  {siteConfig.address.city}, {siteConfig.address.state}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name} LLC. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
