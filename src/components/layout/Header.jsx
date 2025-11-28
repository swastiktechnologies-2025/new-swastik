import React, { useState, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu, X, ChevronDown, Linkedin, Twitter, Youtube, Instagram, Facebook } from "lucide-react"
import Container from "./Container"

export default function Header() {
  const [open, setOpen] = useState(false)
  const [serviceHover, setServiceHover] = useState(false)
  const [blogHover, setBlogHover] = useState(false)

  useEffect(() => {
  const header = document.querySelector("header")

  const onScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add(
        "shadow-[0_4px_20px_rgba(0,0,0,0.1)]",
        "bg-white/95",
        "backdrop-blur-md"
      )
    } else {
      header.classList.remove(
        "shadow-[0_4px_20px_rgba(0,0,0,0.1)]",
        "bg-white/95",
        "backdrop-blur-md"
      )
    }
  }

  window.addEventListener("scroll", onScroll)
  return () => window.removeEventListener("scroll", onScroll)
}, [])


  const services = [
    { name: "AI-Based Network Solutions", to: "/services/ai-network-solutions" },
    { name: "Server & Storage", to: "/services/server-storage" },
    { name: "Cloud Computing", to: "/services/cloud-computing" },
    { name: "Cyber Security", to: "/services/cyber-security" },
    { name: "Audio-Video / UC & Collaboration", to: "/services/av-uc-collaboration" },
    { name: "AI-Based Surveillance & IoT", to: "/services/ai-surveillance-iot" },
    { name: "Managed Services", to: "/services/managed-services" },
    { name: "Consulting & Advisory", to: "/services/consulting-advisory" },
  ]

  const blogItems = [
    { name: "All Blogs", to: "/blog" },
    // { name: "Single Blog Post", to: "/blog/sample-post" },
  ]

  return (
<header className="fixed top-0 left-0 w-full z-50 bg-white transition-all duration-300">
       {/* ---------- TOP BAR ---------- */}
   
      {/* ---------- MAIN NAVBAR ---------- */}
      <div className="bg-white/90 backdrop-blur-md border-b border-slate-200">
        <Container className="flex items-center justify-between h-16">
        {/* LOGO */}
<Link to="/" className="flex items-center group">
  <img
    src="/onelogo.png"
    alt="Swastik Technology & Solutions  Logo"
    className="w-32 h-28 object-contain transition-all duration-300 "
  />
</Link>



          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <NavLink to="/" className={({ isActive }) => `hover:text-sky-600 ${isActive ? "text-sky-600" : "text-slate-800"}`}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => `hover:text-sky-600 ${isActive ? "text-sky-600" : "text-slate-800"}`}>About</NavLink>
             

       {/* SERVICES DROPDOWN */}
<div
  className="relative"
  onMouseEnter={() => setServiceHover(true)}
  onMouseLeave={() => setServiceHover(false)}
>
  <button className="flex items-center gap-1 hover:text-sky-600 transition font-medium">
    Services <ChevronDown size={14} />
  </button>

  <div
    className={`absolute top-full left-1/2 -translate-x-[60%] mt-3 w-[680px] max-w-[92vw] bg-white rounded-2xl border border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.08)] transform transition-all duration-300 ease-in-out ${
      serviceHover
        ? "opacity-100 translate-y-0 visible"
        : "opacity-0 -translate-y-3 invisible"
    }`}
  >
    <div className="grid sm:grid-cols-2 divide-x divide-slate-100">
      {/* Column 1 */}
      <ul className="p-5 space-y-2">
        {services.slice(0, 4).map((s) => (
          <li key={s.to}>
            <Link
              to={s.to}
              className="block px-3 py-2 rounded-md text-slate-700 hover:text-white hover:bg-sky-900 transition"
            >
              {s.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Column 2 */}
      <ul className="p-5 space-y-2">
        {services.slice(4).map((s) => (
          <li key={s.to}>
            <Link
              to={s.to}
              className="block px-3 py-2 rounded-md text-slate-700 hover:text-white hover:bg-sky-900 transition"
            >
              {s.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>

{/* BLOG DROPDOWN */}
<div
  className="relative"
  onMouseEnter={() => setBlogHover(true)}
  onMouseLeave={() => setBlogHover(false)}
>
  <button className="flex items-center gap-1 hover:text-sky-600 transition font-medium">
    Blog <ChevronDown size={14} />
  </button>

  <div
    className={`absolute top-full left-1/2 -translate-x-[45%] mt-3 w-[280px] max-w-[90vw] bg-white rounded-2xl border border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.08)] transform transition-all duration-300 ease-in-out ${
      blogHover
        ? "opacity-100 translate-y-0 visible"
        : "opacity-0 -translate-y-3 invisible"
    }`}
  >
    <ul className="p-4 space-y-2">
      {blogItems.map((b) => (
        <li key={b.to}>
          <Link
            to={b.to}
            className="block px-3 py-2 rounded-md text-slate-700 hover:text-sky-600 hover:bg-sky-50 transition"
          >
            {b.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
</div>
<Link to="/careers" className="hover:text-sky-400 transition">Careers</Link>

            <NavLink to="/contact" className={({ isActive }) => `hover:text-sky-600 ${isActive ? "text-sky-600" : "text-slate-800"}`}>Contact</NavLink>
          </nav>

          {/* MOBILE TOGGLE */}
          <button className="lg:hidden text-slate-700" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </Container>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-white border-t border-slate-200 shadow-xl">
          <Container>
            <nav className="flex flex-col py-4 space-y-3 text-slate-800">
              {/* <NavLink to="/" onClick={() => setOpen(false)} className="py-2 hover:text-sky-600">Home</NavLink> */}
              {/* <NavLink to="/about" onClick={() => setOpen(false)} className="py-2 hover:text-sky-600">About</NavLink> */}

              {/* Mobile Services */}
              <details className="border-t border-slate-100 pt-2">
                <summary className="flex items-center justify-between cursor-pointer py-2 hover:text-sky-600">
                  Services <ChevronDown size={16} />
                </summary>
                <ul className="pl-4 mt-1 border-l border-slate-200 space-y-1 text-sm">
                  {services.map((s) => (
                    <li key={s.to}>
                      <Link
                        to={s.to}
                        onClick={() => setOpen(false)}
                        className="block py-1 text-slate-700 hover:text-sky-600"
                      >
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>

              {/* Mobile Blog */}
              <details className="border-t border-slate-100 pt-2">
                <summary className="flex items-center justify-between cursor-pointer py-2 hover:text-sky-600">
                  Blog <ChevronDown size={16} />
                </summary>
                <ul className="pl-4 mt-1 border-l border-slate-200 space-y-1 text-sm">
                  {blogItems.map((b) => (
                    <li key={b.to}>
                      <Link
                        to={b.to}
                        onClick={() => setOpen(false)}
                        className="block py-1 text-slate-700 hover:text-sky-600"
                      >
                        {b.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>

              <NavLink to="/contact" onClick={() => setOpen(false)} className="py-2 hover:text-sky-600">
                Contact
              </NavLink>
            </nav>
          </Container>
        </div>
      )}
    </header>
  )
}
