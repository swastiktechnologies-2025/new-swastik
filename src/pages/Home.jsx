import React from "react"
import { motion } from "framer-motion"
import Hero from "../components/sections/Hero"
import ServicesGrid from "../components/sections/ServicesGrid"
import CaseStudies from "../components/sections/CaseStudies"
import Testimonials from "../components/sections/Testimonials"
import ContactForm from "../components/sections/ContactForm"
import Partners from "../components/sections/Partners"   // ✅ Add this
import useScrollToTop from "../hooks/useScrollToTop"

export default function Home() {
  useScrollToTop()
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <ServicesGrid />
      </motion.div>

      {/* ✅ Partner Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Partners />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <CaseStudies />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Testimonials />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <ContactForm />
      </motion.div>
    </div>
  )
}
