import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.siteUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
      images: [
        `${siteConfig.siteUrl}/logo.webp`,
        `${siteConfig.siteUrl}/hero-desktop.webp`,
        `${siteConfig.siteUrl}/hero-mobile.webp`,
      ],
    },
    {
      url: `${siteConfig.siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
      images: [
        `${siteConfig.siteUrl}/about/hero-desktop.webp`,
        `${siteConfig.siteUrl}/about/hero-mobile.webp`,
        `${siteConfig.siteUrl}/about/our-team.webp`,
        `${siteConfig.siteUrl}/about/team-member-rob.webp`,
        `${siteConfig.siteUrl}/about/team-member-alec.webp`,
      ],
    },
    {
      url: `${siteConfig.siteUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
      images: [
        `${siteConfig.siteUrl}/services/hero-desktop.webp`,
        `${siteConfig.siteUrl}/services/hero-mobile.webp`,
        `${siteConfig.siteUrl}/services/tree-trimming.webp`,
        `${siteConfig.siteUrl}/services/tree-removal.webp`,
        `${siteConfig.siteUrl}/services/stump-grinding.webp`,
      ],
    },
    {
      url: `${siteConfig.siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
      images: [
        `${siteConfig.siteUrl}/contact/hero-desktop.webp`,
        `${siteConfig.siteUrl}/contact/hero-mobile.webp`,
      ],
    },
    {
      url: `${siteConfig.siteUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.siteUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.siteUrl}/testimonials`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
