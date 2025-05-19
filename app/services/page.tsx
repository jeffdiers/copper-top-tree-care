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
            {/* Tree Trimming */}
            <div id="tree-trimming" className="scroll-mt-20">
              <div className="relative h-64 md:h-80 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Tree Trimming Services"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Scissors className="h-5 w-5 text-green-700" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  Tree Trimming & Pruning
                </h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Our professional tree trimming and pruning services help
                maintain the health, appearance, and safety of your trees.
                Regular pruning removes dead or diseased branches, improves
                structure, and promotes healthy growth.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <TreePine className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
                  <span>
                    Crown thinning to increase light penetration and air
                    circulation
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <TreePine className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
                  <span>
                    Crown raising to provide clearance for buildings, vehicles,
                    and pedestrians
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <TreePine className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
                  <span>Deadwood removal to eliminate hazardous branches</span>
                </li>
                <li className="flex items-start gap-2">
                  <TreePine className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
                  <span>
                    Vista pruning to enhance views while maintaining tree health
                  </span>
                </li>
              </ul>
              <Button asChild className="bg-green-700 hover:bg-green-800">
                <Link href="/contact">Request Service</Link>
              </Button>
            </div>

            {/* Tree Removal */}
            <div id="tree-removal" className="scroll-mt-20">
              <div className="relative h-64 md:h-80 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Tree Removal Services"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Axe className="h-5 w-5 text-green-700" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Tree Removal</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                When a tree is dead, diseased, damaged, or poses a safety
                hazard, our professional tree removal service provides a safe
                and efficient solution. We have the expertise and equipment to
                handle trees of all sizes in various locations.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <TreePine className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
                  <span>Complete removal of hazardous or unwanted trees</span>
                </li>
                <li className="flex items-start gap-2">
                  <TreePine className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
                  <span>
                    Specialized equipment for safe and efficient removal
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <TreePine className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
                  <span>
                    Careful planning to protect surrounding structures and
                    landscapes
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <TreePine className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
                  <span>Thorough cleanup and debris removal</span>
                </li>
              </ul>
              <Button asChild className="bg-green-700 hover:bg-green-800">
                <Link href="/contact">Request Service</Link>
              </Button>
            </div>

            {/* Stump Grinding */}
            <div id="stump-grinding" className="scroll-mt-20">
              <div className="relative h-64 md:h-80 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Stump Grinding Services"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Leaf className="h-5 w-5 text-green-700" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  Stump Grinding
                </h2>
              </div>
              <p className="text-muted-foreground mb-4">
                After tree removal, the stump can be an eyesore and take up
                valuable space in your yard. Our stump grinding service
                eliminates the stump below ground level, allowing you to reclaim
                your yard space and prevent regrowth.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <TreePine className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
                  <span>Complete stump removal below ground level</span>
                </li>
                <li className="flex items-start gap-2">
                  <TreePine className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
                  <span>
                    Elimination of trip hazards and lawn mower obstacles
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <TreePine className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
                  <span>
                    Prevention of new sprout growth from remaining roots
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <TreePine className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
                  <span>
                    Backfilling with soil and mulch for a clean finish
                  </span>
                </li>
              </ul>
              <Button asChild className="bg-green-700 hover:bg-green-800">
                <Link href="/contact">Request Service</Link>
              </Button>
            </div>

            {/* Emergency Services */}
            <div id="storm-recovery" className="scroll-mt-20">
              <div className="relative h-64 md:h-80 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Emergency Tree Services"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-green-700" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  Storm Recovery
                </h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Severe weather can leave behind fallen branches, debris, and
                unsafe tree conditions. We offer post-storm cleanup services to
                help restore safety and beauty to your property.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <TreePine className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
                  <span>Safe removal of storm-damaged trees and limbs</span>
                </li>
                <li className="flex items-start gap-2">
                  <TreePine className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
                  <span>Cleanup of fallen branches and debris</span>
                </li>
                <li className="flex items-start gap-2">
                  <TreePine className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
                  <span>Evaluation of trees for hidden damage</span>
                </li>
                <li className="flex items-start gap-2">
                  <TreePine className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
                  <span>Coordination with insurance adjusters if needed</span>
                </li>
              </ul>
              <Button asChild className="bg-green-700 hover:bg-green-800">
                <Link href="/contact">Request Storm Recovery</Link>
              </Button>
            </div>
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
