import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import SchemaMarkup from "@/components/schema-markup"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Copper Top Tree Services | Professional Tree Care",
    template: "%s | Copper Top Tree Services",
  },
  description:
    "Professional tree services including trimming, removal, stump grinding, and emergency services in your local area.",
  keywords: ["tree service", "tree removal", "tree trimming", "stump grinding", "arborist", "emergency tree service"],
  authors: [{ name: "Copper Top Tree Services" }],
  creator: "Copper Top Tree Services",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://coppertoptree.com",
    title: "Copper Top Tree Services | Professional Tree Care",
    description:
      "Professional tree services including trimming, removal, stump grinding, and emergency services in your local area.",
    siteName: "Copper Top Tree Services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Copper Top Tree Services | Professional Tree Care",
    description:
      "Professional tree services including trimming, removal, stump grinding, and emergency services in your local area.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <SchemaMarkup />
      </body>
    </html>
  )
}
