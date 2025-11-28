import React, { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import Button from "../ui/Button"
import Container from "../layout/Container"
import { Link } from "react-router-dom"

import { ChevronLeft, ChevronRight } from "lucide-react"

// ✅ Replace with your real images
import hero1 from "../../assets/images/hero/hero-banner.jpg"
import hero2 from "../../assets/images/hero/hero-banner2.jpg"
import hero3 from "../../assets/images/hero/hero-banner3.jpg"
import hero4 from "../../assets/images/hero/hero-banner4.jpg"
import hero5 from "../../assets/images/hero/hero-banner5.jpg"
import hero6 from "../../assets/images/hero/hero-banner.jpg"

const slides = [
  {
    id: 1,
    title: "AI-Based Network Solutions",
    desc: "Empower your enterprise with self-optimizing, intelligent network automation driven by AI and ML insights.",
    img: "/101.png",
    btn: "Explore Network AI",
  },
  {
    id: 2,
    title: "Cloud Computing & Infrastructure",
    desc: "Unlock agility and scalability through hybrid and multi-cloud architectures designed for future-ready enterprises.",
    img: "/102.jpeg",
    btn: "See Cloud Services",
  },
  {
    id: 3,
    title: "Cybersecurity & Data Protection",
    desc: "Protect critical business assets with end-to-end cyber defense, SIEM, and proactive threat monitoring.",
    img: "/103.jpeg",
    btn: "Explore Security",
  },
  {
    id: 4,
    title: "Audio-Video / UC & Collaboration",
    desc: "Enable seamless communication through intelligent AV integration and unified collaboration platforms.",
    img: "/104.jpeg",
    btn: "Learn More",
  },
  {
    id: 5,
    title: "AI-Based Surveillance & IoT",
    desc: "Experience next-gen surveillance powered by AI analytics and IoT sensors for real-time visibility.",
    img: "/105.jpeg",
    btn: "See IoT Solutions",
  }
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const touchStartX = useRef(null)
  const touchEndX = useRef(null)

  // ✅ Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(timer)
  }, [index])

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length)
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length)

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    const diff = touchStartX.current - touchEndX.current
    if (diff > 50) nextSlide()
    else if (diff < -50) prevSlide()
    touchStartX.current = null
    touchEndX.current = null
  }

  const slide = slides[index]

  return (
    <section
      className="relative bg-slate-900 text-white overflow-hidden min-h-[75vh] md:min-h-[80vh] flex items-center pt-20 md:pt-0"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={slide.img}
          alt={slide.title}
          className="w-full h-full object-cover object-center brightness-50"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

      {/* Main Content */}
      <Container className="relative flex flex-col md:flex-row items-center justify-between px-6 sm:px-8 md:px-12">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 space-y-5 text-center md:text-left mt-16 md:mt-0"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-snug drop-shadow-lg">
            {slide.title}
          </h1>
          <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0 drop-shadow-sm">
            {slide.desc}
          </p>

          {/* <div className="flex justify-center md:justify-start gap-3 pt-4">
            <Button>{slide.btn}</Button>
            <Link
              to="/contact"
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
            >
              <Button variant="outline">Contact Us</Button>
            </Link>
          </div> */}
          <div className="flex justify-center md:justify-start gap-3 pt-4">
  <Button className="button-fill text-white">
    <span>{slide.btn}</span>
  </Button>

  <Link
    to="/contact"
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  >
    <Button variant="outline" className="button-fill">
      <span>Contact Us</span>
    </Button>
  </Link>
</div>
        </motion.div>

        {/* Image Preview */}
        <motion.div
          className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="max-w-sm sm:max-w-md rounded-2xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm">
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>
        </motion.div>
      </Container>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 p-2 rounded-full"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 p-2 rounded-full"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 rounded-full transition-all duration-300 ${
              i === index
                ? "bg-sky-500 w-6"
                : "bg-white/50 hover:bg-white/80 w-3"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
