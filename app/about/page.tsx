import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Award, CheckCircle, TreePine, Users, Calendar, Leaf } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Copper Top Tree Services - our history, mission, values, and expert team. Providing professional tree care services for over 15 years.",
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative h-[400px]">
          <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="About Copper Top Tree Services"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="container text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Copper Top</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Professional tree care with a commitment to quality and customer satisfaction
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 px-3 py-1 rounded-full text-green-800 font-medium text-sm mb-6">
                <TreePine className="h-4 w-4" />
                <span>Our Story</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">A Legacy of Excellence in Tree Care</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2008, Copper Top Tree Services began with a simple mission: to provide exceptional tree
                  care services with integrity, expertise, and a commitment to customer satisfaction.
                </p>
                <p>
                  What started as a small family operation has grown into a trusted name in the industry, serving
                  residential and commercial clients throughout the region. Our growth is a testament to our dedication
                  to quality work and building lasting relationships with our customers.
                </p>
                <p>
                  Today, we continue to uphold the values that have guided us from the beginning: safety, quality,
                  environmental responsibility, and exceptional service. Our team of certified arborists and trained
                  professionals brings decades of combined experience to every project.
                </p>
              </div>
              <div className="flex items-center gap-8 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-700">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-700">1000+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-700">100%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Copper Top Tree Services Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24 bg-green-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Guided by principles that prioritize quality, safety, and environmental responsibility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-green-100">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground mb-6">
                To provide exceptional tree care services that enhance the beauty, health, and safety of our clients'
                properties while maintaining the highest standards of professionalism, safety, and environmental
                stewardship.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-700 mt-0.5" />
                  <span>Deliver superior tree care with attention to detail</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-700 mt-0.5" />
                  <span>Build lasting relationships through exceptional service</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-700 mt-0.5" />
                  <span>Contribute to healthier, safer, and more beautiful communities</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-green-100">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-6">
                <TreePine className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Users className="h-4 w-4 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Safety First</h4>
                    <p className="text-muted-foreground">
                      The safety of our team, clients, and property is our top priority in every project we undertake.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Award className="h-4 w-4 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Quality & Expertise</h4>
                    <p className="text-muted-foreground">
                      We maintain the highest standards of quality through continuous training and professional
                      development.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Leaf className="h-4 w-4 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Environmental Responsibility</h4>
                    <p className="text-muted-foreground">
                      We are committed to sustainable practices that protect and preserve our natural environment.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-4 w-4 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Reliability & Integrity</h4>
                    <p className="text-muted-foreground">
                      We honor our commitments, communicate honestly, and treat every property with respect and care.
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our certified arborists and experienced professionals are dedicated to providing exceptional tree care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden border border-green-100">
              <div className="relative h-80">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="John Smith - Owner & Lead Arborist"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">John Smith</h3>
                <p className="text-green-700 font-medium mb-4">Owner & Lead Arborist</p>
                <p className="text-muted-foreground mb-4">
                  With over 20 years of experience in the tree care industry, John founded Copper Top Tree Services with
                  a vision to provide exceptional service and expertise.
                </p>
                <div className="flex items-center gap-2">
                  <div className="bg-green-100 px-2 py-1 rounded text-xs text-green-800">ISA Certified</div>
                  <div className="bg-green-100 px-2 py-1 rounded text-xs text-green-800">TCIA Member</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden border border-green-100">
              <div className="relative h-80">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Sarah Johnson - Operations Manager"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
                <p className="text-green-700 font-medium mb-4">Operations Manager</p>
                <p className="text-muted-foreground mb-4">
                  Sarah ensures that every project runs smoothly from initial consultation to completion, coordinating
                  our crews and maintaining our high standards of service.
                </p>
                <div className="flex items-center gap-2">
                  <div className="bg-green-100 px-2 py-1 rounded text-xs text-green-800">10+ Years Experience</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden border border-green-100">
              <div className="relative h-80">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Mike Rodriguez - Senior Arborist"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Mike Rodriguez</h3>
                <p className="text-green-700 font-medium mb-4">Senior Arborist</p>
                <p className="text-muted-foreground mb-4">
                  Mike specializes in tree health assessment and preservation, bringing extensive knowledge of tree
                  species, diseases, and treatment methods to our team.
                </p>
                <div className="flex items-center gap-2">
                  <div className="bg-green-100 px-2 py-1 rounded text-xs text-green-800">ISA Certified</div>
                  <div className="bg-green-100 px-2 py-1 rounded text-xs text-green-800">Plant Health Care</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-green-800 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Contact us today to schedule a consultation with our expert team. We're ready to help with all your tree
            care needs.
          </p>
          <Button asChild size="lg" className="bg-white text-green-800 hover:bg-gray-100">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
