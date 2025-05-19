import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  TreePine,
  Leaf,
  Axe,
  Clock,
  Scissors,
  Truck,
  Shield,
  Sprout,
} from "lucide-react";

const SERVICES_DATA = [
  {
    id: "tree-trimming",
    title: "Tree Trimming & Pruning",
    icon: <Scissors className="h-5 w-5 text-green-700" />,
    description:
      "Our professional tree trimming and pruning services help maintain the health, appearance, and safety of your trees. Regular pruning removes dead or diseased branches, improves structure, and promotes healthy growth.",
    image: "/service-tree-trimming.webp",
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
    image: "/service-tree-removal.webp",
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
    image: "/service-stump-grinding.webp",
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
    image: "/service-storm-recovery.webp",
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
    "Comprehensive tree services including trimming, removal, stump grinding, emergency response, and more. Professional and insured tree care solutions.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative h-[400px]">
          <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Copper Top Tree Services"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="container text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Comprehensive tree care solutions for residential and commercial
              properties
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {SERVICES_DATA.map(
              ({ id, title, description, image, bullets, icon }) => (
                <div id={id} key={id} className="scroll-mt-20">
                  <div className="relative h-64 md:h-80 mb-6 rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-start flex-row gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      {icon}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold ">{title}</h2>
                  </div>
                  <p className="text-muted-foreground mb-4">{description}</p>
                  <ul className="space-y-2 mb-6">
                    {bullets.map((bullet, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <TreePine className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="bg-green-700 hover:bg-green-800">
                    <Link href="/contact">Request Service</Link>
                  </Button>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24 bg-green-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Beyond our core services, we offer a range of specialized tree
              care solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-green-100 hover:border-green-300 transition-colors">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
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

            <Card className="border-green-100 hover:border-green-300 transition-colors">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
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

            <Card className="border-green-100 hover:border-green-300 transition-colors">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
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
      <section className="py-16 md:py-24 bg-green-800 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Professional Tree Services?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
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
