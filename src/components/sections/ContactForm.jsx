import React from "react"
import Container from "../layout/Container"
import Input from "../ui/Input"
import Button from "../ui/Button"

export default function ContactForm() {
  return (
    <section className="py-28 bg-slate-900 relative text-white">
  <div className="absolute inset-0 "></div>
  <Container className="relative z-10">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-3">Get in Touch</h2>
      <p className="text-slate-300 max-w-xl mx-auto">
        Let's discuss how Swastik Technology & Solutions  can transform your digital ecosystem.
      </p>
    </div>

    <form
      className="max-w-xl mx-auto bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-glow space-y-6"
      onSubmit={(e) => {
        e.preventDefault()
        alert("Message sent 🚀")
      }}
    >
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-slate-300 focus:ring-2 focus:ring-sky-400 outline-none"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-slate-300 focus:ring-2 focus:ring-sky-400 outline-none"
      />
      <textarea
        rows="5"
        placeholder="Message..."
        className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-slate-300 focus:ring-2 focus:ring-sky-400 outline-none"
      ></textarea>
      <button
        type="submit"
        className="w-full bg-sky-600 hover:bg-sky-700 font-semibold py-3 rounded-lg transition-all"
      >
        Send Message
      </button>
    </form>
  </Container>
</section>

  )
}
