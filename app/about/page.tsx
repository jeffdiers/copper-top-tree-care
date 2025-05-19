import type { Metadata } from "next";

import {
  Award,
  Calendar,
  CheckCircle,
  Leaf,
  TreePine,
  Users,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import desktopHero from "@/public/about/hero-desktop.webp";
import mobileHero from "@/public/about/hero-mobile.webp";
import ourTeam from "@/public/about/our-team.webp";
import alec from "@/public/about/team-member-alec.webp";
import rob from "@/public/about/team-member-rob.webp";

import { siteConfig } from "@/lib/siteConfig";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Copper Top Tree Services - our history, mission, values, and expert team. Providing professional tree care services for over 10 years. Serving the Denver, CO area.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-10 bg-black/45" />
        <div className="relative h-[400px] w-full">
          {/* Desktop image */}
          <Image
            src={desktopHero}
            alt={`${siteConfig.name} - About Us`}
            fill
            priority
            placeholder="blur"
            className="hidden object-cover object-top md:block"
            sizes="(min-width: 768px) 100vw"
          />

          {/* Mobile image */}
          <Image
            src={mobileHero}
            alt={`${siteConfig.name} - About Us`}
            fill
            priority
            placeholder="blur"
            className="block object-cover object-top md:hidden"
            sizes="(max-width: 767px) 100vw"
          />
        </div>
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="container text-center text-white">
            <h1 className="mb-4 text-4xl font-bold text-shadow-lg md:text-5xl">
              About Copper Top
            </h1>
            <p className="mx-auto max-w-2xl text-xl">
              Professional tree care with a commitment to quality and customer
              satisfaction
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <Badge variant="accent" size="lg" className="mb-3">
                <TreePine className="size-4" />
                <span>Our Story</span>
              </Badge>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Honesty and Integrity in Tree Care
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2024, Copper Top Tree Services began with a simple
                  mission: to provide exceptional tree care services with
                  integrity, expertise, and a commitment to customer
                  satisfaction and tree health.
                </p>
                <p>
                  Family owned and operated, Copper Top was started on the
                  principle of health first approach to tree care. Trees are
                  complex living systems, and our work is guided by a deep
                  respect for their biology, natural growth patterns, and role
                  in the local ecosystem
                </p>
                <p>
                  We use science-based practices to support tree health,
                  structural integrity, and longevity. Avoiding unnecessary
                  removals and prunings that do more harm than good. Whether
                  it&apos;s trimming, preservation, or health diagnostics, we
                  always consider what&apos;s best for the tree and the
                  environment around it.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-700">10+</div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-700">100%</div>
                  <div className="text-sm text-muted-foreground">
                    Satisfaction
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src={ourTeam}
                alt={`${siteConfig.name} - Our Team`}
                fill
                placeholder="blur"
                className="object-cover"
                sizes="(max-width: 720px) 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-green-50 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Our Mission & Values
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Guided by principles that prioritize quality, safety, and
              environmental responsibility
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="rounded-lg border border-green-100 bg-white p-8 shadow-sm">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <Award className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="mb-4 text-2xl font-bold">Our Mission</h3>
              <p className="mb-6 text-muted-foreground">
                To provide exceptional tree care services that enhance the
                beauty, health, and safety of our clients&apos; properties while
                maintaining the highest standards of professionalism, safety,
                and environmental stewardship.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-green-700" />
                  <span>
                    Deliver superior tree care with attention to detail
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-green-700" />
                  <span>
                    Build lasting relationships through exceptional service
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-green-700" />
                  <span>
                    Contribute to healthier, safer, and more beautiful
                    communities
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-green-100 bg-white p-8 shadow-sm">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <TreePine className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="mb-4 text-2xl font-bold">Our Values</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                    <Users className="h-4 w-4 text-green-700" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">Safety First</h4>
                    <p className="text-muted-foreground">
                      The safety of our team, clients, and property is our top
                      priority in every project we undertake.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                    <Award className="h-4 w-4 text-green-700" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">Quality & Expertise</h4>
                    <p className="text-muted-foreground">
                      We maintain the highest standards of quality through
                      continuous training and professional development.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                    <Leaf className="h-4 w-4 text-green-700" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">
                      Environmental Responsibility
                    </h4>
                    <p className="text-muted-foreground">
                      We are committed to sustainable practices that protect and
                      preserve our natural environment.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                    <Calendar className="h-4 w-4 text-green-700" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">
                      Reliability & Integrity
                    </h4>
                    <p className="text-muted-foreground">
                      We honor our commitments, communicate honestly, and treat
                      every property with respect and care.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Meet Our Team
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Our certified arborists and experienced professionals are
              dedicated to providing exceptional tree care
            </p>
          </div>

          <div className="flex flex-col items-start justify-center gap-8 md:flex-row">
            <div className="max-w-[300px] overflow-hidden rounded-lg border border-green-100 bg-white">
              <div className="relative h-80">
                <Image
                  alt="Rob Hansen - Owner & ISA Certified Arborist RM-8738A"
                  src={rob}
                  fill
                  placeholder="blur"
                  className="object-cover"
                  sizes="(max-width: 320px) 100vw"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold">Rob Hansen</h3>
                <p className="mb-4 font-medium text-green-700">
                  Owner & ISA Certified Arborist RM-8738A
                </p>
                <p className="mb-4 text-muted-foreground">
                  Rob started his career in fire mitigation and forest
                  management, gaining a deep understanding of tree health. He
                  founded Copper Top Tree Care with a clear vision: to provide
                  trees with the care they need and a focus on maintaining a
                  healthy urban forest.
                </p>
                <div className="flex items-center gap-2">
                  <Badge variant="accent">ISA Certified</Badge>
                  <Badge variant="accent">Qualified Supervisor</Badge>
                </div>
              </div>
            </div>

            <div className="max-w-[300px] overflow-hidden rounded-lg border border-green-100 bg-white">
              <div className="relative h-80">
                <Image
                  alt="Alec Hansen - Owner & Operations Manager"
                  src={alec}
                  fill
                  placeholder="blur"
                  className="object-cover"
                  sizes="(max-width: 320px) 100vw"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold">Alec Hansen</h3>
                <p className="mb-4 font-medium text-green-700">
                  Owner & Operations Manager
                </p>
                <p className="mb-4 text-muted-foreground">
                  Alec specializes in tree health assessment and preservation,
                  bringing extensive knowledge of tree species, diseases, and
                  treatment methods to our team.
                </p>
                <div className="flex items-center gap-2">
                  <Badge variant="accent">Plant Health Care Technician </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-800 py-16 text-white md:py-24">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Ready to Work With Us?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Contact us today to schedule a consultation with our expert team.
            We&apos;re ready to help with all your tree care needs.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-green-800 hover:bg-gray-100"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
