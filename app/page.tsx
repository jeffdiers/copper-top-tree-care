import type { Metadata } from "next";

import {
  Award,
  Axe,
  CheckCircle,
  Clock,
  Leaf,
  ShieldCheck,
  TreePine,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import desktopHero from "@/public/hero-desktop.webp";
import mobileHero from "@/public/hero-mobile.webp";

import { siteConfig } from "@/lib/siteConfig";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Professional Tree Services`,
  description:
    "Copper Top Tree Services offers professional tree trimming, removal, stump grinding, and emergency services. Licensed and insured with 10+ years of experience.",
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-10 bg-black/45" />
        <div className="relative h-[600px] w-full">
          {/* Desktop image */}
          <Image
            src={desktopHero}
            alt={`${siteConfig.name} landing page hero image man trimming tree`}
            fill
            priority
            placeholder="blur"
            className="hidden object-cover object-top md:block"
            sizes="(min-width: 768px) 100vw"
          />

          {/* Mobile image */}
          <Image
            src={mobileHero}
            alt={`${siteConfig.name} landing page hero image man trimming tree`}
            fill
            priority
            placeholder="blur"
            className="block object-cover object-top md:hidden"
            sizes="(max-width: 767px) 100vw"
          />
        </div>
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="container text-center text-white">
            <h1 className="mb-4 text-4xl font-bold text-shadow-lg md:text-5xl lg:text-6xl">
              Professional Tree Services
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl md:text-2xl">
              Expert tree care solutions for residential and commercial
              properties
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="accent">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Our Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We provide comprehensive tree care services to keep your property
              safe and beautiful
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <TreePine className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Tree Trimming</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Professional pruning to improve tree health, appearance, and
                  safety.
                </CardDescription>
                <Link
                  href="/services#tree-trimming"
                  className="mt-4 inline-block font-medium text-secondary hover:underline"
                >
                  Learn more about tree trimming
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Axe className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Tree Removal</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Safe and efficient removal of dead, diseased, or unwanted
                  trees.
                </CardDescription>
                <Link
                  href="/services#tree-removal"
                  className="mt-4 inline-block font-medium text-secondary hover:underline"
                >
                  Learn more about tree removal
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Leaf className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Stump Grinding</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Complete stump removal to reclaim your yard space and prevent
                  regrowth.
                </CardDescription>
                <Link
                  href="/services#stump-grinding"
                  className="mt-4 inline-block font-medium text-secondary hover:underline"
                >
                  Learn more about stump grinding
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Storm Recovery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Post storm cleanup and recovery services to help restore
                  safety and beauty to your property.
                </CardDescription>
                <Link
                  href="/services#storm-recovery"
                  className="mt-4 inline-block font-medium text-secondary hover:underline"
                >
                  Learn more about storm recovery
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="secondary">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-green-50 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Why Choose Copper Top
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We&apos;re committed to providing the highest quality tree care
              services with safety and customer satisfaction as our top
              priorities
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Experienced Team</h3>
                <p className="text-muted-foreground">
                  Our certified arborists have over 10 years of experience in
                  the tree care industry.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <ShieldCheck className="h-8 w-8 text-secondary" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">
                  Licensed & Insured
                </h3>
                <p className="text-muted-foreground">
                  Fully licensed and insured for your protection and peace of
                  mind.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="h-8 w-8 text-secondary" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Quality Service</h3>
                <p className="text-muted-foreground">
                  We take pride in our work and ensure every job is completed to
                  the highest standards.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Clock className="h-8 w-8 text-secondary" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Prompt Response</h3>
                <p className="text-muted-foreground">
                  Quick response times for both regular service and emergency
                  situations.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Leaf className="h-8 w-8 text-secondary" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Eco-Friendly</h3>
                <p className="text-muted-foreground">
                  Environmentally responsible practices and proper disposal of
                  all tree waste.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <TreePine className="h-8 w-8 text-secondary" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">
                  Comprehensive Care
                </h3>
                <p className="text-muted-foreground">
                  From consultation to cleanup, we handle every aspect of your
                  tree care needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-800 py-16 text-white md:py-24">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Ready to Transform Your Property?
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
