import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Customer Testimonials",
  description:
    "Read what our satisfied customers have to say about Copper Top Tree Services. Real reviews from real customers.",
}

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative h-[400px]">
          <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Copper Top Tree Services Testimonials"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="container text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Customer Testimonials</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Don't just take our word for it. See what our customers have to say about our services.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 md:py-24 bg-green-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Video Testimonials</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch what our customers have to say about their experience with Copper Top Tree Services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden shadow-sm border border-green-100">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <p className="text-muted-foreground">Video Testimonial {item}</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                    <div>
                      <h3 className="font-semibold">Video Customer {item}</h3>
                      <p className="text-sm text-muted-foreground">Residential Client</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "Copper Top Tree Services did an amazing job with our property. The team was professional,
                    efficient, and left our yard cleaner than when they arrived."
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Share Your Experience</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We value your feedback! If you've used our services, please consider leaving a review on one of these
              platforms.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-green-700 hover:bg-green-800">
                <Link href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                  Review on Google
                </Link>
              </Button>
              <Button asChild className="bg-green-700 hover:bg-green-800">
                <Link href="https://www.yelp.com" target="_blank" rel="noopener noreferrer">
                  Review on Yelp
                </Link>
              </Button>
              <Button asChild className="bg-green-700 hover:bg-green-800">
                <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  Review on Facebook
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-green-800 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Our Service?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Join our satisfied customers and see why they recommend Copper Top Tree Services.
          </p>
          <Button asChild size="lg" className="bg-white text-green-800 hover:bg-gray-100">
            <Link href="/contact">Get Your Free Quote</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

interface Testimonial {
  name: string
  location: string
  service: string
  rating: number
  date: string
  content: string
  image?: string
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-100 overflow-hidden">
              {testimonial.image ? (
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-green-700 font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
              )}
            </div>
            <div>
              <h3 className="font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-muted-foreground">{testimonial.location}</p>
            </div>
          </div>
          <div className="flex">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
        </div>
        <div>
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>{testimonial.service}</span>
            <span>{testimonial.date}</span>
          </div>
          <p className="text-muted-foreground">{testimonial.content}</p>
        </div>
      </CardContent>
    </Card>
  )
}

const testimonials: Testimonial[] = [
  {
    name: "John Davis",
    location: "Anytown, USA",
    service: "Tree Removal",
    rating: 5,
    date: "June 15, 2023",
    content:
      "Copper Top did an amazing job removing a large oak tree that was dangerously close to my house. The team was professional, efficient, and cleaned up everything perfectly. I highly recommend their services!",
  },
  {
    name: "Sarah Johnson",
    location: "Springfield, USA",
    service: "Tree Trimming",
    rating: 5,
    date: "May 3, 2023",
    content:
      "I've been using Copper Top for regular tree maintenance for years. They always do excellent work, arrive on time, and leave my property looking better than when they arrived. Their arborists are knowledgeable and provide great advice.",
  },
  {
    name: "Michael Rodriguez",
    location: "Riverside, USA",
    service: "Emergency Service",
    rating: 5,
    date: "April 18, 2023",
    content:
      "After a storm damaged several trees on my property, Copper Top responded quickly and handled the emergency removal professionally. They worked efficiently and safely, even in difficult conditions. I'm very grateful for their prompt service.",
  },
  {
    name: "Jennifer Williams",
    location: "Oakville, USA",
    service: "Stump Grinding",
    rating: 5,
    date: "March 22, 2023",
    content:
      "Copper Top removed several stumps from my yard that had been eyesores for years. The work was done quickly and thoroughly. They ground the stumps well below the surface and cleaned up all the debris. My yard looks great now!",
  },
  {
    name: "Robert Thompson",
    location: "Maplewood, USA",
    service: "Tree Removal & Trimming",
    rating: 4,
    date: "February 10, 2023",
    content:
      "Copper Top did a great job with both removing some dead trees and trimming others on my property. The crew was professional and knowledgeable. The only reason for 4 stars instead of 5 is that they arrived a bit later than scheduled, but they did call to let me know.",
  },
  {
    name: "Lisa Chen",
    location: "Cedar Heights, USA",
    service: "Tree Health Assessment",
    rating: 5,
    date: "January 5, 2023",
    content:
      "I was concerned about the health of several trees on my property. Copper Top's arborist provided a thorough assessment and detailed recommendations. Their expertise helped save trees that I thought might need to be removed. Very impressed with their knowledge!",
  },
  {
    name: "David Miller",
    location: "Pine Valley, USA",
    service: "Lot Clearing",
    rating: 5,
    date: "December 12, 2022",
    content:
      "Copper Top cleared a heavily wooded section of my property for a construction project. They worked efficiently and with great care to protect the trees we wanted to keep. The cleared area was left clean and ready for building. Excellent service!",
  },
  {
    name: "Amanda Garcia",
    location: "Anytown, USA",
    service: "Tree Trimming",
    rating: 5,
    date: "November 8, 2022",
    content:
      "The team at Copper Top did an excellent job trimming the large oak trees around my home. They were careful around power lines and my roof, and shaped the trees beautifully. They also provided helpful advice on maintaining tree health.",
  },
  {
    name: "Thomas Wilson",
    location: "Springfield, USA",
    service: "Emergency Service",
    rating: 5,
    date: "October 30, 2022",
    content:
      "When a tree fell on my garage during a storm, Copper Top responded within hours. Their emergency team worked safely and efficiently to remove the tree and minimize further damage. Their professionalism during a stressful situation was greatly appreciated.",
  },
]
