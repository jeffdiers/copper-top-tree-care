"use server";

import { z } from "zod";
import { Resend } from "resend";
import { supabase } from "@/lib/supabase";
import { CustomerConfirmationEmail } from "@/components/emails/customer-confirmation";
import { AdminNotificationEmail } from "@/components/emails/admin-notification";
import { siteConfig } from "@/lib/siteConfig";

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Define validation schema
const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  address: z.string().min(1, "Address is required"),
  serviceType: z.string().min(1, "Service type is required"),
  meetingType: z.string().min(1, "Meeting type is required"),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export async function submitContactForm(formData: FormData) {
  try {
    // Extract form data
    const data = {
      firstName: formData.get("first-name") as string,
      lastName: formData.get("last-name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      address: formData.get("address") as string,
      serviceType: formData.get("serviceType") as string,
      meetingType: formData.get("meetingType") as string,
      message: formData.get("message") as string,
    };

    // Validate form data
    const validatedData = contactFormSchema.parse(data);

    // Store in Supabase database
    const { error: dbError } = await supabase
      .from("contact_submissions")
      .insert([
        {
          first_name: validatedData.firstName,
          last_name: validatedData.lastName,
          email: validatedData.email,
          phone: validatedData.phone,
          address: validatedData.address,
          service_type: validatedData.serviceType,
          meeting_type: validatedData.meetingType,
          message: validatedData.message || "",
          status: "new",
        },
      ]);

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error("Failed to store submission in database");
    }

    // Send notification email to admin
    try {
      await resend.emails.send({
        from: `${siteConfig.name} <${siteConfig.siteEmail}>`, // verified domain
        to: [siteConfig.devEmail, siteConfig.email], // business email
        subject: `New Quote Request: ${validatedData.serviceType}`,
        react: AdminNotificationEmail({
          firstName: validatedData.firstName,
          lastName: validatedData.lastName,
          email: validatedData.email,
          phone: validatedData.phone,
          address: validatedData.address,
          serviceType: validatedData.serviceType,
          meetingType: validatedData.meetingType,
          message: validatedData.message || "No message provided",
        }),
      });
    } catch (emailError) {
      console.error("Admin email error:", emailError);
      // Continue even if admin email fails - we've stored the submission
    }

    // Send confirmation email to customer
    try {
      await resend.emails.send({
        from: `${siteConfig.name} <${siteConfig.siteEmail}>`, // verified domain
        to: validatedData.email,
        replyTo: siteConfig.email,
        subject: "Thank you for contacting Copper Top Tree Care",
        react: CustomerConfirmationEmail({
          firstName: validatedData.firstName,
          serviceType: validatedData.serviceType,
        }),
      });
    } catch (emailError) {
      console.error("Customer email error:", emailError);
      // Continue even if customer email fails - we've stored the submission
    }

    // Return success response
    return {
      success: true,
      message: "Thank you for your submission! We'll contact you shortly.",
    };
  } catch (error) {
    console.error("Form submission error:", error);

    // Return error response
    return {
      success: false,
      message: "There was an error submitting your form. Please try again.",
    };
  }
}
