import { siteConfig } from "@/lib/siteConfig";

export const robots = {
  rules: {
    userAgent: "*",
    disallow: "/",
  },
  sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
};
