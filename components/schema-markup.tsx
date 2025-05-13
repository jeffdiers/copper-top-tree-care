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
              "@id": "https://coppertoptreecare.com/#organization",
              name: "Copper Top Tree Care",
              url: "https://coppertoptreecare.com",
              logo: "https://coppertoptreecare.com/logo.webp",
              image: "https://coppertoptreecare.com/images/storefront.jpg",
              description:
                "Professional tree services including trimming, removal, stump grinding, and emergency services in your local area.",
              telephone: "(224) 406-1182",
              email: "coppertoptreecarellc@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "2337 Teller St",
                addressLocality: "Lakewood",
                addressRegion: "CO",
                postalCode: "80214",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 39.75047,
                longitude: -105.07619,
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
              sameAs: [
                "https://www.facebook.com/people/CopperTop/61574766502635/",
                "https://www.instagram.com/coppertoptrees?igsh=NTJmZ2M1eTJxZWp3",
              ],
              priceRange: "$$",
            },
            {
              "@type": "Service",
              name: "Tree Removal",
              description:
                "Safe and efficient removal of trees of any size, including in tight spaces and hazardous conditions.",
              provider: {
                "@id": "https://coppertoptreecare.com/#organization",
              },
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 39.75047,
                  longitude: -105.07619,
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
                      name: "Emergency Tree Removal",
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
                "Professional pruning to improve tree health, appearance, and safety while promoting proper growth.",
              provider: {
                "@id": "https://coppertoptreecare.com/#organization",
              },
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 39.75047,
                  longitude: -105.07619,
                },
                geoRadius: "50000",
              },
            },
            {
              "@type": "Service",
              name: "Stump Grinding",
              description:
                "Complete stump removal to reclaim your yard space and prevent regrowth.",
              provider: {
                "@id": "https://coppertoptreecare.com/#organization",
              },
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 39.75047,
                  longitude: -105.07619,
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
