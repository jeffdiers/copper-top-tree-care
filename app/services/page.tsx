import type { Metadata } from "next";

import {
  Axe,
  Clock,
  Leaf,
  Scissors,
  Shield,
  Sprout,
  TreePine,
  Truck,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import desktopHero from "@/public/services/hero-desktop.webp";
import mobileHero from "@/public/services/hero-mobile.webp";
import stormRecovery from "@/public/services/storm-recovery.webp";
import stumpGrinding from "@/public/services/stump-grinding.webp";
import treeRemoval from "@/public/services/tree-removal.webp";
import treeTrim from "@/public/services/tree-trimming.webp";

import { siteConfig } from "@/lib/siteConfig";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SERVICES_DATA = [
  {
    id: "tree-trimming",
    title: "Tree Trimming & Pruning",
    icon: <Scissors className="h-5 w-5 text-green-700" />,
    description:
      "Our professional tree trimming and pruning services help maintain the health, appearance, and safety of your trees. Regular pruning removes dead or diseased branches, improves structure, and promotes healthy growth.",
    image: treeTrim,
    bullets: [
      "Crown thinning to increase light penetration and air circulation",
      "Crown raising to provide clearance for buildings, vehicles, and pedestrians",
      "Deadwood removal to eliminate hazardous branches",
      "Vista pruning to enhance views while maintaining tree health",
    ],
  },
  {
    id: "tree-removal",
    title: "Tree Removal",
    icon: <Axe className="h-5 w-5 text-green-700" />,
    description:
      "When a tree is dead, diseased, damaged, or poses a safety hazard, our professional tree removal service provides a safe and efficient solution. We have the expertise and equipment to handle trees of all sizes in various locations.",
    image: treeRemoval,
    bullets: [
      "Complete removal of hazardous or unwanted trees",
      "Specialized equipment for safe and efficient removal",
      "Careful planning to protect surrounding structures and landscapes",
      "Thorough cleanup and debris removal",
    ],
  },
  {
    id: "stump-grinding",
    title: "Stump Grinding",
    icon: <Leaf className="h-5 w-5 text-green-700" />,
    description:
      "After tree removal, the stump can be an eyesore and take up valuable space in your yard. Our stump grinding service eliminates the stump below ground level, allowing you to reclaim your yard space and prevent regrowth.",
    image: stumpGrinding,
    bullets: [
      "Complete stump removal below ground level",
      "Elimination of trip hazards and lawn mower obstacles",
      "Prevention of new sprout growth from remaining roots",
      "Backfilling with soil and mulch for a clean finish",
    ],
  },
  {
    id: "storm-recovery",
    title: "Storm Recovery",
    icon: <Clock className="h-5 w-5 text-green-700" />,
    description:
      "Severe weather can leave behind fallen branches, debris, and unsafe tree conditions. We offer post-storm cleanup services to help restore safety and beauty to your property.",
    image: stormRecovery,
    bullets: [
      "Safe removal of storm-damaged trees and limbs",
      "Cleanup of fallen branches and debris",
      "Evaluation of trees for hidden damage",
      "Coordination with insurance adjusters if needed",
    ],
  },
];

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive tree services including trimming, removal, stump grinding, storm damage recovery, and more. Professional and insured tree care solutions. Serving the Denver, CO area.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-10 bg-black/40" />
        <div className="relative h-[400px]">
          {/* Desktop image */}
          <Image
            src={desktopHero}
            alt={`${siteConfig.name} - Our Services`}
            fill
            priority
            placeholder="blur"
            className="hidden object-cover md:block"
            sizes="(min-width: 768px) 100vw"
          />

          {/* Mobile image */}
          <Image
            src={mobileHero}
            alt={`${siteConfig.name} - Our Services`}
            fill
            priority
            placeholder="blur"
            className="block object-cover md:hidden"
            sizes="(max-width: 767px) 100vw"
          />
        </div>
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="container text-center text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Our Services
            </h1>
            <p className="mx-auto max-w-2xl text-xl">
              Comprehensive tree care solutions for residential and commercial
              properties
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            {SERVICES_DATA.map(
              ({ id, title, description, image, bullets, icon }) => (
                <div id={id} key={id} className="scroll-mt-20">
                  <div className="relative mb-6 h-64 overflow-hidden rounded-lg md:h-80">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mb-4 flex flex-row items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                      {icon}
                    </div>
                    <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
                  </div>
                  <p className="mb-4 text-muted-foreground">{description}</p>
                  <ul className="mb-6 space-y-2">
                    {bullets.map((bullet, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <TreePine className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-700" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="bg-green-700 hover:bg-green-800">
                    <Link href="/contact">Request Service</Link>
                  </Button>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-green-50 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Additional Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Beyond our core services, we offer a range of specialized tree
              care solutions
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="border-green-100 transition-colors hover:border-green-300">
              <CardHeader className="pb-2">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Truck className="h-6 w-6 text-green-700" />
                </div>
                <CardTitle>Lot Clearing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Complete clearing of trees and vegetation for construction,
                  landscaping, or property development.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-green-100 transition-colors hover:border-green-300">
              <CardHeader className="pb-2">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Shield className="h-6 w-6 text-green-700" />
                </div>
                <CardTitle>Tree Health Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Professional evaluation of tree health, structural integrity,
                  and potential hazards.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-green-100 transition-colors hover:border-green-300">
              <CardHeader className="pb-2">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Sprout className="h-6 w-6 text-green-700" />
                </div>
                <CardTitle>Tree Planting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Selection and planting of appropriate tree species for your
                  property and climate.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-800 py-16 text-white md:py-24">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Need Professional Tree Services?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Contact us today for a free consultation and estimate. Our team is
            ready to help with all your tree care needs.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-green-800 hover:bg-gray-100"
          >
            <Link href="/contact">Get Your Free Quote</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
