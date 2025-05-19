import { siteConfig } from "@/lib/siteConfig";

export default function SchemaMarkup() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "LocalBusiness",
              "@id": `${siteConfig.url}/#organization`,
              name: siteConfig.name,
              url: siteConfig.url,
              icon: `${siteConfig.url}/icon.webp`,
              logo: `${siteConfig.url}/logo.webp`,
              image: `${siteConfig.url}/our-team.webp`,
              description:
                "Professional tree services including trimming, removal, stump grinding, and emergency services in the Denver, CO area.",
              telephone: siteConfig.phoneFormatted,
              email: siteConfig.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: siteConfig.address.street,
                addressLocality: siteConfig.address.city,
                addressRegion: siteConfig.address.state,
                postalCode: siteConfig.address.zip,
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: siteConfig.geo.latitude,
                longitude: siteConfig.geo.longitude,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "07:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "08:00",
                  closes: "16:00",
                },
              ],
              sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
              priceRange: "$$",
            },
            {
              "@type": "Service",
              name: "Tree Removal",
              description:
                "Safe and efficient removal of trees of any size, including in tight spaces and hazardous conditions.",
              provider: {
                "@id": `${siteConfig.url}/#organization`,
              },
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: siteConfig.geo.latitude,
                  longitude: siteConfig.geo.longitude,
                },
                geoRadius: "50000",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Tree Removal Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Complete Tree Removal",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Storm Damage and Cleanup",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Tree Trimming",
                    },
                  },
                ],
              },
            },
            {
              "@type": "Service",
              name: "Tree Trimming",
              description:
                "Professional pruning to improve tree health, appearance, and safety while promoting proper growth. Serving the Denver, CO area.",
              provider: {
                "@id": `${siteConfig.url}/#organization`,
              },
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: siteConfig.geo.latitude,
                  longitude: siteConfig.geo.longitude,
                },
                geoRadius: "50000",
              },
            },
            {
              "@type": "Service",
              name: "Stump Grinding",
              description:
                "Complete stump removal to reclaim your yard space and prevent regrowth. Serving the Denver, CO area.",
              provider: {
                "@id": `${siteConfig.url}/#organization`,
              },
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: siteConfig.geo.latitude,
                  longitude: siteConfig.geo.longitude,
                },
                geoRadius: "50000",
              },
            },
          ],
        }),
      }}
    />
  );
}
