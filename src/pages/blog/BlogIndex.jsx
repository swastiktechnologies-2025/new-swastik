import React, { useState } from "react"
import PageHeader from "../../components/common/PageHeader"
import PostList from "../../components/blog/PostList"
import Container from "../../components/layout/Container"
import Button from "../../components/ui/Button"
import { Link } from "react-router-dom"
import useScrollToTop from "../../hooks/useScrollToTop"

const allPosts = [
  {
    slug: "ai-in-networking",
    title: "How AI is Revolutionizing Enterprise Networking",
    category: "AI",
    excerpt:
      "AI-powered automation is reshaping how enterprises manage complex networks — enabling predictive maintenance, real-time insights, and self-healing infrastructure.",
    date: "Oct 25, 2025",
    author: "Swastik Technology & Solutions  AI Team",
    image: "/101.png",
  },
  {
    slug: "cloud-cost-optimization",
    title: "7 Proven Strategies to Cut Cloud Costs in 2025",
    category: "Cloud",
    excerpt:
      "Cloud budgets are expanding fast — learn how to track spend, optimize instances, and adopt automation to achieve smarter cost efficiency.",
    date: "Oct 22, 2025",
    author: "CloudOps Division",
    image: "/102.jpeg",
  },
  {
    slug: "cybersecurity-trends",
    title: "Cybersecurity in 2025: The Rise of Autonomous Defense",
    category: "Cybersecurity",
    excerpt:
      "Discover how AI-based detection, zero-trust security, and identity intelligence are defining the future of enterprise defense.",
    date: "Oct 18, 2025",
    author: "Security Research Team",
    image: "/103.jpeg",
  },
  {
    slug: "iot-smart-cities",
    title: "IoT-Powered Smart Cities: A Connected Future",
    category: "IoT",
    excerpt:
      "From connected traffic systems to intelligent waste management — see how IoT and AI are making cities more livable and sustainable.",
    date: "Oct 15, 2025",
    author: "Swastik Technology & Solutions  IoT Team",
    image: "/104.jpeg",
  },
  {
    slug: "edge-computing-impact",
    title: "Edge Computing: Redefining the Cloud Frontier",
    category: "Cloud",
    excerpt:
      "Edge computing moves data processing closer to users — reducing latency and enabling real-time analytics for next-gen applications.",
    date: "Oct 12, 2025",
    author: "Infra Engineering Team",
    image: "/105.jpeg",
  },
  {
    slug: "ai-surveillance-systems",
    title: "AI in Surveillance: Safer, Smarter, Faster",
    category: "AI",
    excerpt:
      "Explore how AI-driven cameras and sensors empower organizations with intelligent threat detection, automation, and analytics.",
    date: "Oct 8, 2025",
    author: "AI Research Unit",
    image: "/106.jpeg",
  },
  {
    slug: "data-governance-frameworks",
    title: "Building a Future-Ready Data Governance Framework",
    category: "Data",
    excerpt:
      "Effective data governance ensures compliance, transparency, and trust — learn the key components of a modern data strategy.",
    date: "Oct 5, 2025",
    author: "Data Strategy Team",
    image: "/107.jpeg",
  },
  {
    slug: "devsecops-best-practices",
    title: "DevSecOps in 2025: Integrating Security at Every Stage",
    category: "Cybersecurity",
    excerpt:
      "Security isn’t an afterthought — explore how DevSecOps brings protection directly into your CI/CD pipelines.",
    date: "Sep 29, 2025",
    author: "Cloud Security Group",
    image: "/108.jpeg",
  },
  {
    slug: "green-it-innovation",
    title: "Green IT: How Sustainable Tech is Changing Enterprises",
    category: "Sustainability",
    excerpt:
      "Sustainability meets technology — from energy-efficient data centers to carbon-aware AI models, here’s how green IT is shaping tomorrow.",
    date: "Sep 22, 2025",
    author: "Sustainability Team",
    image: "/107.jpeg",
  },
]

export default function BlogIndex() {
  useScrollToTop();
  const [activeCategory, setActiveCategory] = useState("All")
  const [page, setPage] = useState(1)
  const perPage = 6

  const categories = [
    "All",
    "AI",
    "Cloud",
    "Cybersecurity",
    "IoT",
    "Data",
    "Sustainability",
  ]

  const filtered =
    activeCategory === "All"
      ? allPosts
      : allPosts.filter((p) => p.category === activeCategory)

  const totalPages = Math.ceil(filtered.length / perPage)
  const displayed = filtered.slice((page - 1) * perPage, page * perPage)

  const featuredPost = allPosts[0]

  return (
    <>
      <PageHeader
        title="Blog & Insights"
        subtitle="Stay informed with expert perspectives, success stories, and the latest trends in AI, Cloud, and Cybersecurity."
        image="/assets/images/blog/blog-hero.jpg"
      />

      {/* Featured Post */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
            <div>
              <p className="text-sky-600 text-sm font-semibold mb-2 uppercase tracking-wide">
                Featured • {featuredPost.category}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                {featuredPost.title}
              </h2>
              <p className="text-slate-600 mb-5">{featuredPost.excerpt}</p>
              <Link
                to={`/blog/${featuredPost.slug}`}
                className="inline-block bg-sky-600 text-white px-6 py-3 rounded-full hover:bg-sky-700 transition-all duration-300 font-semibold text-sm"
              >
                Read Full Article →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Category Filters */}
      <section className="py-10 bg-white border-t border-b border-slate-200">
        <Container className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "primary" : "outline"}
              className="text-sm"
              onClick={() => {
                setActiveCategory(cat)
                setPage(1)
              }}
            >
              {cat}
            </Button>
          ))}
        </Container>
      </section>

      {/* Posts */}
      <PostList posts={displayed} />

      {/* Pagination */}
      <section className="pb-20 bg-white">
        <Container className="flex justify-center gap-3 mt-4">
          <Button
            variant="outline"
            className="text-sm"
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
          >
            ← Prev
          </Button>

          <span className="px-3 py-2 text-slate-600 text-sm font-medium">
            Page {page} of {totalPages}
          </span>

          <Button
            variant="outline"
            className="text-sm"
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
          >
            Next →
          </Button>
        </Container>
      </section>
    </>
  )
}
