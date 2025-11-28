import React from "react"
import { motion } from "framer-motion"
import Container from "../layout/Container"

export default function CaseStudies() {
  const studies = [
    {
      id: 1,
      title: "AI-Powered Network Optimization",
      desc: "Helping a global telecom provider reduce latency by 40% using intelligent traffic analytics and automation.",
      img: "/104.jpeg",
    },
    {
      id: 2,
      title: "Cloud Migration for Financial Enterprise",
      desc: "Seamlessly migrated core banking systems to a secure multi-cloud environment with zero downtime.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      title: "Smart Surveillance & IoT Integration",
      desc: "Enabled real-time monitoring and predictive maintenance for industrial assets using AI + IoT sensors.",
      img: "/106.jpeg",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Case Studies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Explore how Swastik Technology & Solutions  has partnered with forward-thinking
            enterprises to deliver intelligent, secure, and high-impact digital
            transformation.
          </motion.p>
        </div>

        {/* Case Study Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {studies.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl shadow-lg group"
            >
              {/* Background Image */}
              <div className="relative h-72 w-full overflow-hidden">
                <img
                  src={study.img}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              </div>

              {/* Text Content */}
              <div className="absolute bottom-0 p-6 text-left">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-sky-400 transition-colors duration-300">
                  {study.title}
                </h3>
                <p className="text-sm text-slate-300">{study.desc}</p>
                <a
                  href="#"
                  className="inline-block mt-3 text-sky-400 font-semibold text-sm hover:underline"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
