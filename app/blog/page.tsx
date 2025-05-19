import type { Metadata } from "next";

import { Calendar, Clock, User } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Tree Care Blog",
  description:
    "Expert tree care tips, industry insights, and helpful advice from the professionals at Copper Top Tree Services. Serving the Denver, CO area.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-10 bg-black/40" />
        <div className="relative h-[400px]">
          <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Copper Top Tree Services Blog"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="container text-center text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Tree Care Blog
            </h1>
            <p className="mx-auto max-w-2xl text-xl">
              Expert tips, industry insights, and helpful advice for tree care
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt={blogPosts[0].title}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="mb-4 flex items-center gap-4">
                <span className="rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                  Featured
                </span>
                <span className="text-sm text-muted-foreground">
                  {blogPosts[0].category}
                </span>
              </div>
              <h2 className="mb-4 text-3xl font-bold">{blogPosts[0].title}</h2>
              <p className="mb-6 text-muted-foreground">
                {blogPosts[0].excerpt}
              </p>
              <div className="mb-6 flex items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{blogPosts[0].date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="h-4 w-4" />
                  <span>{blogPosts[0].author}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{blogPosts[0].readTime} min read</span>
                </div>
              </div>
              <Button asChild className="bg-green-700 hover:bg-green-800">
                <Link href={`/blog/${blogPosts[0].slug}`}>Read Article</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="bg-green-50 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Recent Articles
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Stay up-to-date with the latest tree care tips and industry
              insights
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(1, 7).map((post, index) => (
              <Card key={index} className="flex h-full flex-col">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-lg">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader className="flex-grow">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="mb-2">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardFooter className="flex items-center justify-between border-t pt-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-medium text-green-700 hover:underline"
                  >
                    Read More
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              variant="outline"
              className="border-green-700 text-green-700 hover:bg-green-50"
            >
              <Link href="/blog/archive">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Browse by Category
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Find articles on specific tree care topics
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/blog/category/${category.slug}`}
                className="group relative h-40 overflow-hidden rounded-lg"
              >
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 transition-colors group-hover:bg-black/60"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-green-800 py-16 text-white md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Subscribe to Our Newsletter
            </h2>
            <p className="mb-8 text-lg">
              Get the latest tree care tips, industry news, and special offers
              delivered to your inbox.
            </p>
            <form className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow rounded-lg px-4 py-3 text-black"
                required
              />
              <Button className="bg-white text-green-800 hover:bg-gray-100">
                Subscribe
              </Button>
            </form>
            <p className="mt-4 text-sm text-green-100">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  image: string;
  date: string;
  author: string;
  category: string;
  readTime: number;
}

const blogPosts: BlogPost[] = [
  {
    title: "When is the Best Time to Prune Different Types of Trees?",
    slug: "best-time-to-prune-trees",
    excerpt:
      "Proper pruning timing is crucial for tree health and growth. Learn the optimal seasons for pruning different tree species and why timing matters.",
    image: "/placeholder.svg?height=600&width=800",
    date: "May 15, 2023",
    author: "John Smith",
    category: "Tree Maintenance",
    readTime: 8,
  },
  {
    title: "5 Signs Your Tree May Be Diseased or Dying",
    slug: "signs-of-tree-disease",
    excerpt:
      "Learn to recognize the early warning signs of tree disease and decline before it's too late for treatment.",
    image: "/placeholder.svg?height=400&width=600",
    date: "April 28, 2023",
    author: "Sarah Johnson",
    category: "Tree Health",
    readTime: 6,
  },
  {
    title: "How to Prepare Your Trees for Storm Season",
    slug: "prepare-trees-for-storms",
    excerpt:
      "Protect your property by preparing your trees before storm season arrives with these essential tips.",
    image: "/placeholder.svg?height=400&width=600",
    date: "April 10, 2023",
    author: "Mike Rodriguez",
    category: "Safety",
    readTime: 7,
  },
  {
    title: "The Benefits of Professional Stump Grinding",
    slug: "benefits-of-stump-grinding",
    excerpt:
      "Discover why removing tree stumps from your property is important and the advantages of professional grinding.",
    image: "/placeholder.svg?height=400&width=600",
    date: "March 22, 2023",
    author: "John Smith",
    category: "Services",
    readTime: 5,
  },
  {
    title: "Native Trees That Thrive in Our Local Climate",
    slug: "native-trees-local-climate",
    excerpt:
      "Explore the best native tree species for your landscape that require less maintenance and support local wildlife.",
    image: "/placeholder.svg?height=400&width=600",
    date: "March 5, 2023",
    author: "Lisa Chen",
    category: "Landscaping",
    readTime: 9,
  },
  {
    title: "The Environmental Impact of Proper Tree Care",
    slug: "environmental-impact-tree-care",
    excerpt:
      "Learn how proper tree maintenance contributes to environmental health and sustainability in urban areas.",
    image: "/placeholder.svg?height=400&width=600",
    date: "February 18, 2023",
    author: "David Miller",
    category: "Environment",
    readTime: 7,
  },
  {
    title: "DIY vs. Professional Tree Trimming: What You Need to Know",
    slug: "diy-vs-professional-trimming",
    excerpt:
      "Understand the risks and limitations of DIY tree work and when it's essential to call in the professionals.",
    image: "/placeholder.svg?height=400&width=600",
    date: "February 3, 2023",
    author: "Sarah Johnson",
    category: "Safety",
    readTime: 8,
  },
];

interface Category {
  name: string;
  slug: string;
  image: string;
}

const categories: Category[] = [
  {
    name: "Tree Health",
    slug: "tree-health",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Maintenance Tips",
    slug: "maintenance-tips",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Safety",
    slug: "safety",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Landscaping",
    slug: "landscaping",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Seasonal Care",
    slug: "seasonal-care",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Services",
    slug: "services",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Environment",
    slug: "environment",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "DIY Tips",
    slug: "diy-tips",
    image: "/placeholder.svg?height=300&width=400",
  },
];
