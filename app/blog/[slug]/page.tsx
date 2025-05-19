import type { Metadata } from "next";

import {
  Calendar,
  Clock,
  Facebook,
  Linkedin,
  Twitter,
  User,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  authorImage?: string;
  authorBio?: string;
  category: string;
  readTime: number;
}

// This would typically come from a CMS or database
const blogPosts: BlogPost[] = [
  {
    title: "When is the Best Time to Prune Different Types of Trees?",
    slug: "best-time-to-prune-trees",
    excerpt:
      "Proper pruning timing is crucial for tree health and growth. Learn the optimal seasons for pruning different tree species and why timing matters.",
    content: `
      <p>Pruning is one of the most important aspects of tree maintenance, but timing is everything. Pruning at the wrong time can stress trees, invite disease, or reduce flowering. This guide will help you understand the best times to prune different types of trees.</p>
      
      <h2>Why Timing Matters</h2>
      <p>Trees have natural cycles of growth, dormancy, and energy storage. Pruning during certain phases of these cycles can either benefit or harm the tree. The right timing minimizes stress and promotes healthy growth.</p>
      
      <h2>Deciduous Trees (Trees that Lose Their Leaves)</h2>
      <p>For most deciduous trees, the best time to prune is during late winter or early spring before new growth begins. During this dormant period:</p>
      <ul>
        <li>Trees are less susceptible to stress</li>
        <li>Disease-causing organisms are typically inactive</li>
        <li>The tree&apos;s structure is clearly visible without leaves</li>
        <li>Wounds heal quickly once spring growth begins</li>
      </ul>

      <p>Examples of deciduous trees include oak, maple, birch, and elm.</p>
      
      <h2>Flowering Trees</h2>
      <p>The timing for flowering trees depends on when they bloom:</p>
      <ul>
        <li><strong>Spring-flowering trees</strong> (like dogwood, cherry, and magnolia) should be pruned immediately after they finish blooming. Pruning in winter would remove flower buds that formed the previous year.</li>
        <li><strong>Summer-flowering trees</strong> (like crape myrtle and sourwood) can be pruned in late winter or early spring, as they produce flowers on new growth.</li>
      </ul>
      
      <h2>Evergreen Trees</h2>
      <p>Most evergreens require minimal pruning. When necessary:</p>
      <ul>
        <li><strong>Pine, spruce, and fir</strong> should be pruned in late winter while still dormant, or when new growth is emerging in spring.</li>
        <li><strong>Broadleaf evergreens</strong> like holly and evergreen magnolias are best pruned in early spring.</li>
        <li><strong>Yews and arborvitae</strong> can be pruned in early spring or mid-summer.</li>
      </ul>
      
      <h2>Trees to Never Prune in Spring</h2>
      <p>Some trees "bleed" sap excessively when pruned in late winter or early spring:</p>
      <ul>
        <li>Maple</li>
        <li>Birch</li>
        <li>Dogwood</li>
        <li>Walnut</li>
        <li>Elm</li>
      </ul>
      <p>While this bleeding isn&apos;t harmful to the tree, it can be unsightly. For these species, it&apos;s better to prune in early summer after leaves have fully developed.</p>
      
      <h2>Emergency Pruning</h2>
      <p>Damaged, diseased, or hazardous branches should be removed as soon as they&apos;re noticed, regardless of season. The risk posed by these branches outweighs any concerns about pruning timing.</p>
      
      <h2>Professional Assistance</h2>
          <p>For large trees or significant pruning needs, it&apos;s always best to consult with a certified arborist. They can assess the specific needs of your trees and provide expert pruning services that promote long-term health and structural integrity.</p>

      <p>
        Remember, proper pruning techniques are just as important as timing.
        Always make clean cuts at the proper locations to promote healing and
        minimize stress to the tree.
      </p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    date: "May 15, 2023",
    author: "John Smith",
    authorImage: "/placeholder.svg?height=200&width=200",
    authorBio:
      "John Smith is a certified arborist with over 20 years of experience in tree care. He specializes in tree health management and sustainable urban forestry practices.",
    category: "Tree Maintenance",
    readTime: 8,
  },
];

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return (
      <div className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-3xl font-bold">Blog Post Not Found</h1>
          <p className="mb-8 text-muted-foreground">
            The blog post you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <Button asChild className="bg-green-700 hover:bg-green-800">
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-10 bg-black/40" />
        <div className="relative h-[400px]">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="container text-center text-white">
            <div className="mx-auto max-w-3xl">
              <div className="mb-4">
                <span className="rounded bg-green-700 px-2.5 py-0.5 text-sm font-medium text-white">
                  {post.category}
                </span>
              </div>
              <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime} min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <article className="prose prose-green max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>

              {/* Share Links */}
              <div className="mt-12 border-t pt-6">
                <div className="flex items-center gap-4">
                  <span className="font-semibold">Share this article:</span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" asChild>
                      <Link href="#" aria-label="Share on Facebook">
                        <Facebook className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link href="#" aria-label="Share on Twitter">
                        <Twitter className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link href="#" aria-label="Share on LinkedIn">
                        <Linkedin className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Author Bio */}
              {post.authorBio && (
                <div className="mt-12 rounded-lg bg-green-50 p-6">
                  <div className="flex items-start gap-4">
                    {post.authorImage && (
                      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-full">
                        <Image
                          src={post.authorImage || "/placeholder.svg"}
                          alt={post.author}
                          width={64}
                          height={64}
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="mb-2 text-lg font-semibold">
                        About {post.author}
                      </h3>
                      <p className="text-muted-foreground">{post.authorBio}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-4">
              {/* Sidebar */}
              <div className="space-y-8">
                {/* Categories */}
                <Card>
                  <CardHeader>
                    <CardTitle>Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {[
                        "Tree Health",
                        "Maintenance Tips",
                        "Safety",
                        "Landscaping",
                        "Seasonal Care",
                        "Services",
                      ].map((category, index) => (
                        <li key={index}>
                          <Link
                            href={`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                            className="text-muted-foreground hover:text-green-700"
                          >
                            {category}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Recent Posts */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Posts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {blogPosts.slice(0, 3).map((recentPost, index) => (
                        <li key={index} className="flex gap-3">
                          <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded">
                            <Image
                              src={recentPost.image || "/placeholder.svg"}
                              alt={recentPost.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <Link
                              href={`/blog/${recentPost.slug}`}
                              className="line-clamp-2 font-medium hover:text-green-700"
                            >
                              {recentPost.title}
                            </Link>
                            <p className="mt-1 text-xs text-muted-foreground">
                              {recentPost.date}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/blog">View All Posts</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Newsletter */}
                <Card>
                  <CardHeader>
                    <CardTitle>Newsletter</CardTitle>
                    <CardDescription>
                      Stay updated with our latest articles and tree care tips.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full rounded-md border px-3 py-2"
                        required
                      />
                      <Button className="w-full bg-green-700 hover:bg-green-800">
                        Subscribe
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="bg-green-50 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Related Articles</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Continue exploring tree care topics with these related articles
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {blogPosts.slice(0, 3).map((relatedPost, index) => (
              <Card key={index} className="flex h-full flex-col">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-lg">
                  <Image
                    src={relatedPost.image || "/placeholder.svg"}
                    alt={relatedPost.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader className="flex-grow">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      {relatedPost.category}
                    </span>
                  </div>
                  <CardTitle className="mb-2">{relatedPost.title}</CardTitle>
                  <CardDescription>{relatedPost.excerpt}</CardDescription>
                </CardHeader>
                <CardFooter className="border-t pt-4">
                  <Button
                    asChild
                    className="w-full bg-green-700 hover:bg-green-800"
                  >
                    <Link href={`/blog/${relatedPost.slug}`}>Read Article</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-800 py-16 text-white md:py-24">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Need Professional Tree Care?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Contact our team of certified arborists for expert tree services and
            personalized advice.
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
