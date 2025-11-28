import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Container from "../layout/Container"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "TechNova Systems",
      quote:
        "Their AI-based network solutions completely transformed our uptime and monitoring efficiency!",
    },
    {
      name: "Sneha Patel",
      company: "CloudVerse Pvt. Ltd.",
      quote:
        "Professional team, fast deployment, and outstanding support for our cloud migration.",
    },
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const testimonial = testimonials[index]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 text-center">
      <Container>
        <h2 className="text-4xl font-bold text-slate-800 mb-12">
          What Our Clients Say
        </h2>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="bg-white/80 backdrop-blur-md p-10 rounded-2xl shadow-lg"
            >
              <p className="text-slate-700 italic mb-5 text-lg leading-relaxed">
                “{testimonial.quote}”
              </p>
              <div className="font-semibold text-slate-900">
                {testimonial.name}
              </div>
              <div className="text-slate-500 text-sm">{testimonial.company}</div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === index ? "bg-sky-600 w-5" : "bg-slate-300 hover:bg-sky-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
