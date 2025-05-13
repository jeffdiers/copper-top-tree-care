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
              "@id": "https://coppertoptree.com/#organization",
              name: "Copper Top Tree Services",
              url: "https://coppertoptree.com",
              logo: "https://coppertoptree.com/logo.png",
              image: "https://coppertoptree.com/images/storefront.jpg",
              description:
                "Professional tree services including trimming, removal, stump grinding, and emergency services in your local area.",
              telephone: "(555) 123-4567",
              email: "info@coppertoptree.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Main Street",
                addressLocality: "Anytown",
                addressRegion: "CA",
                postalCode: "12345",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 37.7749,
                longitude: -122.4194,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
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
                "https://www.facebook.com/coppertoptree",
                "https://www.instagram.com/coppertoptree",
                "https://twitter.com/coppertoptree",
              ],
              priceRange: "$$",
            },
            {
              "@type": "Service",
              name: "Tree Removal",
              description:
                "Safe and efficient removal of trees of any size, including in tight spaces and hazardous conditions.",
              provider: {
                "@id": "https://coppertoptree.com/#organization",
              },
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 37.7749,
                  longitude: -122.4194,
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
                ],
              },
            },
            {
              "@type": "Service",
              name: "Tree Trimming",
              description:
                "Professional pruning to improve tree health, appearance, and safety while promoting proper growth.",
              provider: {
                "@id": "https://coppertoptree.com/#organization",
              },
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 37.7749,
                  longitude: -122.4194,
                },
                geoRadius: "50000",
              },
            },
            {
              "@type": "Service",
              name: "Stump Grinding",
              description: "Complete stump removal to reclaim your yard space and prevent regrowth.",
              provider: {
                "@id": "https://coppertoptree.com/#organization",
              },
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 37.7749,
                  longitude: -122.4194,
                },
                geoRadius: "50000",
              },
            },
          ],
        }),
      }}
    />
  )
}
