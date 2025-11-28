import React from "react"
import { motion } from "framer-motion"
import Container from "../components/layout/Container"
import useScrollToTop from "../hooks/useScrollToTop"

export default function About() {
  useScrollToTop();
  return (
    <>
      {/* HERO SECTION */}
     <section className="relative min-h-[85vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden pt-20 md:pt-0">
  <motion.img
    initial={{ scale: 1.1, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1.8, ease: "easeOut" }}
    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80"
    alt="Swastik Technology & Solutions  Innovation"
    className="absolute inset-0 w-full h-full object-cover brightness-50"
  />
  <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-sky-900/60"></div>
  <Container className="relative z-10 text-center px-6 sm:px-10">
    <motion.h1
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 1 }}
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
    >
      Redefining <span className="text-sky-400">Innovation</span> with
      Intelligence
    </motion.h1>
    <motion.p
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 1 }}
      className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
    >
      At <span className="text-sky-400 font-semibold">Swastik Technology & Solutions </span>, we
      engineer intelligent ecosystems that blend technology, creativity, and
      purpose — empowering businesses to move smarter and faster.
    </motion.p>
  </Container>
</section>


      {/* WHO WE ARE */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-800 mb-6">
                Who We Are
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-5">
                Swastik Technology & Solutions  is a forward-thinking digital transformation company
                leading the way in AI, Cloud, Cybersecurity, and Infrastructure.
                Our mission is to design intelligent systems that make technology
                more human, scalable, and secure.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                We believe innovation isn’t just about automation — it’s about
                creating meaningful change. From enterprises to startups, we
                enable digital confidence and transformation that lasts.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/104.jpeg"
                alt="Swastik Technology & Solutions  Team"
                className="rounded-2xl shadow-2xl"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -right-6 bg-sky-600 text-white px-6 py-4 rounded-xl shadow-lg"
              >
                <p className="text-sm uppercase tracking-wider">10+ Years</p>
                <p className="font-semibold text-lg">of Digital Leadership</p>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* OUR ESSENCE */}
      <section className="relative py-32 bg-slate-900 text-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1581091215367-59ab6c35e086?auto=format&fit=crop&w=1600&q=80"
            alt="Tech DNA"
            className="w-full h-full object-cover opacity-20"
          />
        </motion.div>

        <Container>
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-bold mb-8"
            >
              The Essence of <span className="text-sky-400">Swastik Technology & Solutions </span>
            </motion.h2>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-lg text-slate-200 leading-relaxed max-w-3xl mx-auto mb-16"
            >
              Our philosophy is simple — build technology that drives purpose.
              Every product, every system, and every innovation is built on
              integrity, intelligence, and impact.
            </motion.p>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  icon: "💡",
                  title: "Innovative Thinking",
                  desc: "We fuse creativity with computation to build smarter digital ecosystems.",
                },
                {
                  icon: "⚙️",
                  title: "Precision Engineering",
                  desc: "From AI pipelines to cloud frameworks — excellence is our foundation.",
                },
                {
                  icon: "🤝",
                  title: "Meaningful Partnerships",
                  desc: "We grow with our clients, turning technology into long-term trust.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.3, duration: 1 }}
                  className="p-8 rounded-2xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-xl text-sky-300 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-200">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* TIMELINE */}
      <section className="py-28 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl font-bold text-slate-800 mb-4"
            >
              Our Journey of Innovation
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-slate-600 text-lg leading-relaxed"
            >
              A timeline of vision, growth, and transformation that defines who
              we are today.
            </motion.p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-sky-600/30 h-full"></div>

            {[
              {
                year: "2014",
                title: "Founded with Vision",
                desc: "Swastik Technology & Solutions  began its journey with a mission to reimagine enterprise technology.",
              },
              {
                year: "2018",
                title: "Scaling Intelligence",
                desc: "Introduced AI-driven enterprise platforms and network automation solutions.",
              },
              {
                year: "2022",
                title: "Global Expansion",
                desc: "Expanded operations globally with advanced cybersecurity and cloud divisions.",
              },
              {
                year: "2025",
                title: "Innovating the Future",
                desc: "Leading the evolution of AI-driven IoT, automation, and predictive intelligence.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className={`relative mb-12 ${
                  i % 2 === 0 ? "text-left pr-10" : "text-right pl-10"
                }`}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-sky-600 w-4 h-4 rounded-full"></div>
                <div className="bg-slate-50 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-sky-600 font-bold text-xl mb-2">
                    {item.year}
                  </h3>
                  <p className="font-semibold text-slate-800 mb-1">
                    {item.title}
                  </p>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-28 bg-gradient-to-r from-sky-600 to-indigo-600 text-white text-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center"
        ></motion.div>
        <Container className="relative z-10">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Partner with <span className="text-white">Swastik Technology & Solutions </span> to Shape
            Tomorrow
          </motion.h2>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-slate-100 max-w-3xl mx-auto mb-10"
          >
            Let’s co-create the next generation of digital innovation — powered
            by intelligence, trust, and technology that moves the world forward.
          </motion.p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/contact"
            className="inline-block bg-white text-sky-700 font-semibold px-10 py-4 rounded-full hover:bg-slate-100 transition-all duration-300"
          >
            Get in Touch
          </motion.a>
        </Container>
      </section>
    </>
  )
}
