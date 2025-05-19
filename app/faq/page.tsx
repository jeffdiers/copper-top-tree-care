import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about tree services, pricing, scheduling, and more from Copper Top Tree Services.",
};

export default function FAQPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative h-[400px]">
          <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Copper Top Tree Services FAQs"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="container text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Find answers to common questions about our tree services
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Tabs defaultValue="general" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full max-w-2xl">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="services">Services</TabsTrigger>
                <TabsTrigger value="pricing">Pricing</TabsTrigger>
                <TabsTrigger value="scheduling">Scheduling</TabsTrigger>
                <TabsTrigger value="aftercare">Aftercare</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="general" className="mt-0">
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                  {generalFAQs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pt-2 pb-4 text-muted-foreground">
                          {faq.answer}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>

            <TabsContent value="services" className="mt-0">
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                  {servicesFAQs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pt-2 pb-4 text-muted-foreground">
                          {faq.answer}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>

            <TabsContent value="pricing" className="mt-0">
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                  {pricingFAQs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pt-2 pb-4 text-muted-foreground">
                          {faq.answer}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>

            <TabsContent value="scheduling" className="mt-0">
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                  {schedulingFAQs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pt-2 pb-4 text-muted-foreground">
                          {faq.answer}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>

            <TabsContent value="aftercare" className="mt-0">
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                  {aftercareFAQs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pt-2 pb-4 text-muted-foreground">
                          {faq.answer}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Quick Help */}
      <section className="py-16 md:py-24 bg-green-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need More Help?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              If you couldn't find the answer you're looking for, we're here to
              help
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>
                  Reach out directly with your specific questions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our customer service team is available to answer any questions
                  you may have about our services.
                </p>
                <Button
                  asChild
                  className="w-full bg-green-700 hover:bg-green-800"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Request a Consultation</CardTitle>
                <CardDescription>
                  Schedule an on-site assessment with our arborists
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our certified arborists can provide personalized advice and
                  recommendations for your specific tree care needs.
                </p>
                <Button
                  asChild
                  className="w-full bg-green-700 hover:bg-green-800"
                >
                  <Link href="/contact">Schedule Consultation</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Read Our Blog</CardTitle>
                <CardDescription>
                  Explore our articles for in-depth tree care information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our blog features helpful articles on tree care, maintenance
                  tips, and industry insights that may answer your questions.
                </p>
                <Button
                  asChild
                  className="w-full bg-green-700 hover:bg-green-800"
                >
                  <Link href="/blog">Visit Our Blog</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-green-800 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Professional Tree Care?
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

interface FAQ {
  question: string;
  answer: string;
}

const generalFAQs: FAQ[] = [
  {
    question: "Is Copper Top licensed and insured?",
    answer:
      "Yes, Copper Top Tree Services is fully licensed and insured. We carry comprehensive liability insurance and workers' compensation to protect both our clients and our team members. We're happy to provide proof of insurance upon request.",
  },
  {
    question: "What areas do you service?",
    answer:
      "We proudly serve residential and commercial clients throughout Anytown, Springfield, Riverside, Oakville, Maplewood, Cedar Heights, Pine Valley, and surrounding areas. If you're unsure if we service your location, please contact us to confirm.",
  },
  {
    question: "How experienced is your team?",
    answer:
      "Our team consists of certified arborists and trained professionals with decades of combined experience in the tree care industry. Our company has been providing professional tree services for over 15 years, and our staff undergoes regular training to stay current with industry best practices.",
  },
  {
    question: "Do you offer storm recovery & cleanup services?",
    answer:
      "Yes, we offer post-storm cleanup services to help restore safety and beauty to your property. We can remove fallen branches, debris, and trees from your property.",
  },
  {
    question: "Are you environmentally responsible?",
    answer:
      "Absolutely. We're committed to environmentally responsible practices in all aspects of our work. We properly dispose of or recycle all tree waste, use eco-friendly equipment when possible, and follow sustainable tree care practices that promote long-term environmental health.",
  },
];

const servicesFAQs: FAQ[] = [
  {
    question: "What tree services do you offer?",
    answer:
      "We offer a comprehensive range of tree services including tree removal, tree trimming and pruning, stump grinding, emergency services, tree health assessments, lot clearing, and tree planting. Our certified arborists can handle projects of all sizes for both residential and commercial properties.",
  },
  {
    question: "How do I know if my tree needs to be removed?",
    answer:
      "Signs that a tree may need removal include significant structural damage, extensive decay, severe leaning, major dead sections, fungal growth at the base, and proximity to structures that can't be mitigated through pruning. Our arborists can assess your tree and provide professional recommendations based on safety, health, and risk factors.",
  },
  {
    question: "What is the difference between tree trimming and pruning?",
    answer:
      "While the terms are often used interchangeably, trimming typically refers to cutting back overgrown branches to improve appearance, while pruning is more selective cutting to improve tree health, structure, and safety. Pruning removes specific branches that are dead, diseased, or poorly positioned to promote the tree's long-term health and structural integrity.",
  },
  {
    question: "Do you remove the stump when you remove a tree?",
    answer:
      "Tree removal and stump removal are typically separate services. Our standard tree removal includes cutting the tree down to a stump close to ground level. Stump grinding or removal is an additional service that can be added to completely remove the remaining stump and major surface roots.",
  },
  {
    question: "Can you save a diseased tree?",
    answer:
      "In many cases, yes. The success of treatment depends on the type of disease, how early it's caught, and the overall health of the tree. Our arborists can diagnose tree diseases and recommend appropriate treatments such as pruning infected areas, applying treatments, or improving soil conditions to help the tree recover.",
  },
];

const pricingFAQs: FAQ[] = [
  {
    question: "How much does tree removal cost?",
    answer:
      "Tree removal costs vary based on several factors including the tree's size, location, condition, accessibility, and the complexity of the job. For example, a small tree in an open area will cost less than a large tree near power lines or structures. We provide free on-site estimates to give you an accurate price for your specific situation.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes, we provide free estimates for all our services. One of our arborists will visit your property, assess the work needed, and provide a detailed written estimate with no obligation.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, checks, and all major credit cards. For larger projects, we can also discuss payment plans. Payment is typically due upon completion of the work, though larger projects may require a deposit.",
  },
  {
    question: "Do you offer any discounts?",
    answer:
      "We occasionally offer seasonal promotions and discounts for multiple services. We also offer discounts for seniors, military personnel, and first responders. Please ask about any current promotions when you request your estimate.",
  },
  {
    question: "Is tree work covered by insurance?",
    answer:
      "In some cases, yes. Tree damage caused by covered perils like storms may be included in your homeowner's insurance policy. Emergency tree removal is often covered if a tree has fallen on a structure or is blocking access. We can provide the documentation you need for insurance claims and in some cases work directly with your insurance company.",
  },
];

const schedulingFAQs: FAQ[] = [
  {
    question: "How far in advance should I schedule tree services?",
    answer:
      "For non-emergency services, we recommend scheduling 1-2 weeks in advance, though this can vary depending on the season. During peak seasons (spring and fall) or after storms, our schedule fills up quickly, so earlier booking is advisable. For emergency situations, we offer same-day response.",
  },
  {
    question: "How long does a typical tree removal take?",
    answer:
      "Most residential tree removals can be completed in a single day, often in just a few hours. However, larger trees, complex situations, or properties with access challenges may require additional time. During your estimate, we can provide a more specific timeframe for your particular project.",
  },
  {
    question: "Do I need to be home during the service?",
    answer:
      "While it's not absolutely necessary for you to be present during the work, we do recommend being available at the beginning to review the work plan and at the end to inspect the completed job. If you can't be present, we can make arrangements to proceed with clear instructions.",
  },
  {
    question: "What happens if there's bad weather on my scheduled day?",
    answer:
      "Safety is our priority, so we may need to reschedule in cases of severe weather such as thunderstorms, high winds, or heavy rain. We'll contact you as soon as possible to reschedule for the next available day. Light rain or mild weather conditions typically don't affect our schedule.",
  },
];

const aftercareFAQs: FAQ[] = [
  {
    question: "Do you clean up after completing the work?",
    answer:
      "Absolutely. We provide complete cleanup as part of our service. This includes removing all branches, logs, and debris generated during the work. We'll rake the area and blow off driveways and walkways to leave your property clean and tidy. If you'd like to keep some of the wood for firewood or other purposes, just let us know.",
  },
  {
    question: "What happens to the wood and debris after tree removal?",
    answer:
      "Unless you request to keep some of the wood, we remove all debris from your property. We recycle the material whenever possible - logs are often milled into lumber or split for firewood, and smaller debris is processed into mulch or compost. This approach is both environmentally responsible and cost-effective.",
  },
  {
    question: "How do I care for my lawn after stump grinding?",
    answer:
      "After stump grinding, you'll have a depression filled with wood chips. You can either leave this to decompose naturally (which takes 1-2 years) or accelerate the process by removing some of the chips and filling the area with topsoil. Once filled, you can plant grass seed or sod, or create a new planting bed in the area.",
  },
  {
    question: "Can I plant a new tree where one was removed?",
    answer:
      "In most cases, yes, but it depends on why the original tree was removed. If it was removed due to disease, it might be best to choose a different species or wait a period of time before replanting. If the stump was ground out, you'll need to remove the remaining wood chips and add fresh soil before planting. Our arborists can provide specific recommendations for your situation.",
  },
  {
    question: "How often should trees be trimmed or pruned?",
    answer:
      "The frequency depends on the tree species, age, health, and your goals for the tree. As a general guideline, most mature trees benefit from pruning every 3-5 years, while younger trees may need attention every 2-3 years to establish proper structure. Fruit trees typically need annual pruning, and some fast-growing species may need more frequent trimming.",
  },
];
