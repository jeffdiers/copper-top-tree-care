import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

// Note: Metadata can't be exported from a Client Component
// This would normally be in a separate page.tsx file
export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Copper Top Tree Services for a free quote or to learn more about our professional tree care services.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
