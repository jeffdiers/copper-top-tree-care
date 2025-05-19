"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { submitContactForm } from "@/app/api/contact/action";
import { useFormStatus } from "react-dom";
import { Toaster } from "sonner";
import { siteConfig } from "@/lib/siteConfig";

export default function ContactPageClient() {
  const [formState, setFormState] = useState<{
    message: string;
    success: boolean;
  } | null>(null);

  async function clientAction(formData: FormData) {
    // Show loading toast
    const loadingToast = toast.loading("Submitting form...");
    const result = await submitContactForm(formData);
    toast.dismiss(loadingToast);
    setFormState(result);

    if (result.success) {
      toast.success("Form submitted successfully, we'll get back to you soon.");
      // Reset form on success
      const form = document.getElementById("contact-form") as HTMLFormElement;
      form?.reset();
    } else {
      toast.error("Form submission error, please try again.");
      console.error(result.message);
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative h-[400px]">
          <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Contact Copper Top Tree Services"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="container text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Get in touch for a free quote or to learn more about our services
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Get a Free Quote</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form
                    id="contact-form"
                    action={clientAction}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" name="first-name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" name="last-name" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" name="phone" type="tel" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" name="address" required />
                    </div>

                    <div className="space-y-2">
                      <Label>Service Type</Label>
                      <input
                        type="hidden"
                        name="serviceType"
                        id="serviceType"
                        value="tree-trimming"
                      />
                      <RadioGroup
                        defaultValue="tree-trimming"
                        className="grid grid-cols-2 gap-2"
                        onValueChange={(value) => {
                          document
                            .getElementById("serviceType")
                            ?.setAttribute("value", value);
                        }}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="tree-trimming"
                            id="tree-trimming"
                          />
                          <Label
                            htmlFor="tree-trimming"
                            className="cursor-pointer"
                          >
                            Tree Trimming
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="tree-removal"
                            id="tree-removal"
                          />
                          <Label
                            htmlFor="tree-removal"
                            className="cursor-pointer"
                          >
                            Tree Removal
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="stump-grinding"
                            id="stump-grinding"
                          />
                          <Label
                            htmlFor="stump-grinding"
                            className="cursor-pointer"
                          >
                            Stump Grinding
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="emergency" id="emergency" />
                          <Label htmlFor="emergency" className="cursor-pointer">
                            Emergency Service
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other" />
                          <Label htmlFor="other" className="cursor-pointer">
                            Other
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label>How would you like to meet?</Label>
                      <input
                        type="hidden"
                        name="meetingType"
                        id="meetingType"
                        value="stop-by"
                      />
                      <RadioGroup
                        defaultValue="stop-by"
                        className="grid grid-cols-2 gap-2"
                        onValueChange={(value) => {
                          document
                            .getElementById("meetingType")
                            ?.setAttribute("value", value);
                        }}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="stop-by" id="stop-by" />
                          <Label htmlFor="stop-by" className="cursor-pointer">
                            Stop by anytime
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="call" id="call" />
                          <Label htmlFor="call" className="cursor-pointer">
                            Call me
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="email" id="email" />
                          <Label htmlFor="email" className="cursor-pointer">
                            Email
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Please provide details about your tree service needs..."
                        className="min-h-[120px]"
                      />
                    </div>

                    <SubmitButton />
                  </form>

                  {formState && (
                    <div
                      className={`mt-4 p-4 rounded-md ${
                        formState.success
                          ? "bg-green-50 text-green-700"
                          : "bg-red-50 text-red-700"
                      }`}
                    >
                      {formState.message}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-green-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Phone</h3>
                      <p className="text-muted-foreground">
                        {siteConfig.phoneFormatted}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-green-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-muted-foreground">
                        {siteConfig.email}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        We typically respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-green-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Location</h3>
                      <p className="text-muted-foreground">
                        {siteConfig.address.city}, {siteConfig.address.state}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-green-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Business Hours</h3>
                      <div className="grid grid-cols-2 gap-x-4 text-muted-foreground">
                        <p>Monday - Friday:</p>
                        <p>7:00 AM - 6:00 PM</p>
                        <p>Saturday:</p>
                        <p>8:00 AM - 4:00 PM</p>
                        <p>Sunday:</p>
                        <p>Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-4">Service Area</h3>
                <p className="text-muted-foreground mb-4">
                  We proudly serve residential and commercial clients throughout
                  the following areas:
                </p>
                <ul className="grid grid-cols-2 gap-2 text-muted-foreground">
                  <li>Denver</li>
                  <li>{siteConfig.address.city}</li>
                  <li>Littleton</li>
                  <li>Arvada</li>
                  <li>Wheat Ridge</li>
                  <li>Westminster</li>
                  <li>Boulder</li>
                  <li>And surrounding areas</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Not sure if we service your area? Contact us to find out!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-green-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Visit our office or contact us for on-site consultations
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-green-100">
            <div className="aspect-[16/9] bg-gray-200 rounded-lg overflow-hidden">
              {/* This would be replaced with an actual map component in production */}
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-muted-foreground">
                  Interactive Map Would Be Displayed Here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>How much does tree removal cost?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tree removal costs vary based on size, location,
                  accessibility, and condition. We provide free on-site
                  estimates to give you an accurate price for your specific
                  situation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Are you licensed and insured?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, Copper Top Tree Services is fully licensed and insured.
                  We carry comprehensive liability insurance and workers'
                  compensation to protect both our clients and our team.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  How long does a typical tree removal take?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Most residential tree removals can be completed in a single
                  day, often in just a few hours. However, larger trees, complex
                  situations, or properties with access challenges may require
                  additional time. During your estimate, we can provide a more
                  specific timeframe for your particular project.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  Do you provide cleanup after tree services?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Absolutely. We provide complete cleanup as part of our
                  service, including removal of branches, logs, and debris. We
                  leave your property clean and tidy after every job.
                </p>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-green-800 hover:bg-gray-100"
            >
              <Link href={`tel:${siteConfig.phone}`}>
                Call {siteConfig.phoneFormatted}
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              <Link href={`mailto:${siteConfig.email}`}>Email Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Toaster richColors />
    </>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className="w-full bg-green-700 hover:bg-green-800"
      disabled={pending}
    >
      {pending ? "Submitting..." : "Submit Request"}
    </Button>
  );
}
