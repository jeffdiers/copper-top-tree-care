import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Project Gallery",
  description:
    "View our portfolio of completed tree service projects including tree removal, trimming, stump grinding, and emergency services. Serving the Denver, CO area.",
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative h-[400px]">
          <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Copper Top Tree Services Project Gallery"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="container text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Project Gallery
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Browse our portfolio of completed tree service projects
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Tabs */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full max-w-2xl">
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="removal">Tree Removal</TabsTrigger>
                <TabsTrigger value="trimming">Tree Trimming</TabsTrigger>
                <TabsTrigger value="stump">Stump Grinding</TabsTrigger>
                <TabsTrigger value="emergency">Emergency</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <GalleryItem key={index} project={project} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="removal" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((project) => project.category === "removal")
                  .map((project, index) => (
                    <GalleryItem key={index} project={project} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="trimming" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((project) => project.category === "trimming")
                  .map((project, index) => (
                    <GalleryItem key={index} project={project} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="stump" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((project) => project.category === "stump")
                  .map((project, index) => (
                    <GalleryItem key={index} project={project} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="emergency" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((project) => project.category === "emergency")
                  .map((project, index) => (
                    <GalleryItem key={index} project={project} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-16 md:py-24 bg-green-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Before & After
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See the dramatic transformations our services can provide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {beforeAfterProjects.map((project, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="relative aspect-square rounded-lg overflow-hidden">
                      <Image
                        src={project.before || "/placeholder.svg"}
                        alt={`Before: ${project.title}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 left-0 bg-black/70 text-white px-3 py-1 text-sm">
                        Before
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="relative aspect-square rounded-lg overflow-hidden">
                      <Image
                        src={project.after || "/placeholder.svg"}
                        alt={`After: ${project.title}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 left-0 bg-green-700 text-white px-3 py-1 text-sm">
                        After
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-green-800 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Property?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Contact us today to discuss your tree care needs and join our
            portfolio of successful projects.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-green-800 hover:bg-gray-100"
          >
            <Link href="/contact">Get Your Free Quote</Link>
          </Button>
        </div>
      </section>
    </>
  );
}

interface Project {
  title: string;
  description: string;
  image: string;
  category: "removal" | "trimming" | "stump" | "emergency";
  location: string;
}

function GalleryItem({ project }: { project: Project }) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background">
      <div className="aspect-square w-full overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={400}
          height={400}
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-2">{project.location}</p>
        <p className="text-muted-foreground">{project.description}</p>
      </div>
    </div>
  );
}

const projects: Project[] = [
  {
    title: "Large Oak Removal",
    description:
      "Removal of a 100-year-old oak tree that was diseased and posed a risk to the home.",
    image: "/placeholder.svg?height=400&width=400",
    category: "removal",
    location: "Anytown, USA",
  },
  {
    title: "Maple Tree Trimming",
    description:
      "Crown reduction and deadwood removal to improve tree health and appearance.",
    image: "/placeholder.svg?height=400&width=400",
    category: "trimming",
    location: "Springfield, USA",
  },
  {
    title: "Multiple Stump Grinding",
    description:
      "Removal of five tree stumps to reclaim yard space for landscaping.",
    image: "/placeholder.svg?height=400&width=400",
    category: "stump",
    location: "Riverside, USA",
  },
  {
    title: "Storm Damage Cleanup",
    description:
      "Emergency removal of a fallen pine tree after a severe storm.",
    image: "/placeholder.svg?height=400&width=400",
    category: "emergency",
    location: "Oakville, USA",
  },
  {
    title: "Residential Tree Removal",
    description:
      "Safe removal of three trees too close to the foundation of the home.",
    image: "/placeholder.svg?height=400&width=400",
    category: "removal",
    location: "Maplewood, USA",
  },
  {
    title: "Ornamental Tree Pruning",
    description:
      "Careful pruning of Japanese maple trees to enhance their natural shape.",
    image: "/placeholder.svg?height=400&width=400",
    category: "trimming",
    location: "Cedar Heights, USA",
  },
  {
    title: "Commercial Stump Removal",
    description:
      "Removal of large stumps from a commercial property being prepared for landscaping.",
    image: "/placeholder.svg?height=400&width=400",
    category: "stump",
    location: "Pine Valley, USA",
  },
  {
    title: "Lightning Strike Response",
    description:
      "Emergency removal of a tree damaged by lightning that threatened power lines.",
    image: "/placeholder.svg?height=400&width=400",
    category: "emergency",
    location: "Anytown, USA",
  },
  {
    title: "Pine Tree Removal",
    description:
      "Removal of tall pine trees too close to a residential structure.",
    image: "/placeholder.svg?height=400&width=400",
    category: "removal",
    location: "Springfield, USA",
  },
];

interface BeforeAfterProject {
  title: string;
  description: string;
  before: string;
  after: string;
}

const beforeAfterProjects: BeforeAfterProject[] = [
  {
    title: "Overgrown Property Cleanup",
    description:
      "This property had several overgrown trees that were blocking sunlight and creating safety hazards. We removed select trees and trimmed others to create a safer, more attractive landscape.",
    before: "/placeholder.svg?height=400&width=400",
    after: "/placeholder.svg?height=400&width=400",
  },
  {
    title: "Storm Damage Restoration",
    description:
      "After a severe storm damaged multiple trees on this property, we removed the hazardous trees and debris, then pruned the remaining trees to prevent future damage.",
    before: "/placeholder.svg?height=400&width=400",
    after: "/placeholder.svg?height=400&width=400",
  },
  {
    title: "Stump Removal & Lawn Restoration",
    description:
      "We removed multiple stumps from this yard and prepared the area for new lawn installation, transforming an unusable space into a beautiful lawn.",
    before: "/placeholder.svg?height=400&width=400",
    after: "/placeholder.svg?height=400&width=400",
  },
  {
    title: "Tree Health Restoration",
    description:
      "This mature oak was showing signs of decline. Through proper pruning, soil treatment, and pest management, we were able to restore the tree's health and vigor.",
    before: "/placeholder.svg?height=400&width=400",
    after: "/placeholder.svg?height=400&width=400",
  },
];
