import React from "react"
import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import Container from "../../components/layout/Container"
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa"
import useScrollToTop from "../../hooks/useScrollToTop"

const blogData = [
  {
    slug: "ai-in-networking",
    title: "How AI is Revolutionizing Enterprise Networking",
    date: "Oct 25, 2025",
    author: {
      name: "Swastik Technology & Solutions  AI Team",
      role: "AI & Automation Division",
      avatar: "/assets/images/avatars/ai-team.jpg",
    },
    image: "/assets/images/blog/ai-network.jpg",
    category: "AI",
    content: `
### The Evolution of Networking
Artificial Intelligence has redefined nearly every aspect of digital infrastructure, and enterprise networking is no exception. From predictive maintenance to self-healing systems, AI-driven networks are helping organizations achieve unprecedented efficiency and reliability.

In traditional networks, IT teams spent hours identifying and resolving issues manually. With AI, network monitoring becomes continuous, automated, and proactive — capable of predicting failures before they occur.

### Predictive Network Intelligence
By leveraging machine learning models, network systems now analyze real-time data streams across routers, switches, and firewalls. AI can:
- Detect anomalies instantly
- Suggest optimal routing paths
- Anticipate traffic congestion
- Automatically reroute data to maintain performance

This predictive intelligence enables zero-downtime operations, ensuring seamless user experiences even under heavy traffic.

### The Rise of Self-Healing Infrastructure
AI’s most transformative impact lies in its ability to **self-diagnose and self-repair**. When an issue arises, AI identifies the root cause, applies the right fix, and prevents recurrence — all without human intervention.

Self-healing networks don’t just react — they learn. Each event adds to the model’s intelligence, improving future responses. This drastically reduces operational costs and mean-time-to-repair (MTTR).

### Data-Driven Security and Automation
AI also enhances cybersecurity within the network layer. Using behavior analysis, it can flag unusual activity or detect threats long before they escalate.

**Swastik Technology & Solutions ’s AI-based Network Solutions** integrate:
- Automated traffic optimization
- Real-time anomaly detection
- Intelligent packet routing
- Data-driven firewall configurations

This unified AI model not only secures networks but also makes them more adaptive and cost-effective.

### Looking Ahead: AI in Cloud-Edge Networking
As enterprises embrace hybrid environments, AI will continue bridging cloud and edge architectures — orchestrating dynamic workloads, enforcing zero-trust access, and optimizing data flow between on-prem and cloud systems.

AI-powered networking is the foundation of tomorrow’s digital enterprise. And at Swastik Technology & Solutions , we’re building that future today.
    `,
    related: [
      {
        slug: "cloud-cost-optimization",
        title: "7 Proven Strategies to Cut Cloud Costs in 2025",
        image: "/assets/images/blog/cloud.jpg",
      },
      {
        slug: "cybersecurity-trends",
        title: "Cybersecurity in 2025: The Rise of Autonomous Defense",
        image: "/assets/images/blog/cyber.jpg",
      },
    ],
  },
]

export default function BlogPost() {
  useScrollToTop();
  const { slug } = useParams()
  const post = blogData.find((p) => p.slug === slug)

  if (!post) {
    return (
      <Container className="py-20 text-center">
        <h2 className="text-3xl font-bold text-slate-800">Post not found 😔</h2>
      </Container>
    )
  }

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[70vh] overflow-hidden flex items-center justify-center">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-4"
        >
          <p className="text-sky-400 text-sm uppercase tracking-wide mb-2">
            {post.category}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <p className="text-slate-200 text-sm">
            {post.author.name} • {post.date}
          </p>
        </motion.div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Author Info */}
            <div className="flex items-center gap-4 mb-10">
              {post.author.avatar && (
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-14 h-14 rounded-full object-cover border border-sky-400/30"
                />
              )}
              <div>
                <h4 className="font-semibold text-slate-800 text-lg">
                  {post.author.name}
                </h4>
                <p className="text-slate-500 text-sm">{post.author.role}</p>
              </div>
            </div>

            {/* Main Article */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="prose prose-lg max-w-none prose-headings:text-slate-800 prose-p:text-slate-600 prose-a:text-sky-600 prose-strong:text-slate-800 prose-blockquote:border-sky-500 prose-blockquote:text-slate-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Social Share */}
            <div className="mt-12 flex justify-center gap-6 text-slate-500">
              <a
                href="#"
                className="hover:text-sky-600 transition-colors"
                aria-label="Share on LinkedIn"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="#"
                className="hover:text-sky-600 transition-colors"
                aria-label="Share on Twitter"
              >
                <FaTwitter size={22} />
              </a>
              <a
                href="#"
                className="hover:text-sky-600 transition-colors"
                aria-label="Share on Facebook"
              >
                <FaFacebook size={22} />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Posts */}
      {post.related && (
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <Container>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-10 text-center">
              Related Articles
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {post.related.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <Link to={`/blog/${r.slug}`}>
                    <img
                      src={r.image}
                      alt={r.title}
                      className="w-full h-56 object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="p-6">
                      <h4 className="font-semibold text-lg text-slate-800 mb-2">
                        {r.title}
                      </h4>
                      <p className="text-sky-600 text-sm font-medium hover:underline">
                        Read More →
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  )
}
