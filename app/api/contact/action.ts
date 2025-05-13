"use server";

import { z } from "zod";
import { supabase } from "@/lib/supabase";

// Define validation schema
const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  address: z.string().min(1, "Address is required"),
  serviceType: z.string().min(1, "Service type is required"),
  timeframe: z.string().min(1, "Timeframe is required"),
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
      timeframe: formData.get("timeframe") as string,
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
          timeframe: validatedData.timeframe,
          message: validatedData.message || "",
          status: "new",
        },
      ]);

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error("Failed to store submission in database");
    }

    // In a production environment, you would send email notifications here
    // using a service like Resend, SendGrid, or Mailgun

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
