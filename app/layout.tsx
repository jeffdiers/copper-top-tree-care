import type React from "react";
import type { Metadata } from "next";
import { Cardo, Montserrat, Castoro, Caprasimo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import SchemaMarkup from "@/components/schema-markup";
import { siteConfig } from "@/lib/siteConfig";

const cardo = Cardo({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cardo",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const castoro = Castoro({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-castoro",
});
const caprasimo = Caprasimo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-caprasimo",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Professional Tree Care`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Professional tree services including trimming, removal, stump grinding, and emergency services in the Denver, CO area.",
  keywords: [
    "tree service",
    "tree removal",
    "tree trimming",
    "stump grinding",
    "arborist",
    "emergency tree service",
    "denver, co",
    "denver tree service",
    "denver tree removal",
    "denver tree trimming",
    "denver stump grinding",
    "denver emergency tree service",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} | Professional Tree Care`,
    description:
      "Professional tree services including trimming, removal, stump grinding, and emergency services in the Denver, CO area.",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Professional Tree Care`,
    description:
      "Professional tree services including trimming, removal, stump grinding, and emergency services in the Denver, CO area.",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.dev",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${cardo.variable} ${castoro.variable} ${caprasimo.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <SchemaMarkup />
      </body>
    </html>
  );
}
