import React from "react"
import { Link } from "react-router-dom"
import Container from "./Container"
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa"

export default function Footer() {
    // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-black text-slate-300 pb-6">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-sky-500 via-indigo-500 to-sky-500 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-sky-800/10 via-transparent to-transparent"></div>

      <Container className="relative z-10">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block group" onClick={scrollToTop}>
            <img
              src="/onelogo.png"
              alt="Swastik Technology & Solutions  Logo"
              className="w-30 mx-auto object-contain transition-transform duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(56,189,248,0.6)]"
            />
          </Link>
          <p className="max-w-2xl mx-auto text-slate-400 leading-relaxed text-base">
            Empowering enterprises through innovation — blending AI, Cloud, and
            Cybersecurity to create intelligent, resilient, and connected
            digital ecosystems.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center sm:text-left mb-6">
          <div>
            <h4 className="text-white font-semibold text-lg mb-4 border-l-4 border-sky-500 pl-3">
              Quick Links
            </h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>
                <Link to="/" onClick={scrollToTop} className="hover:text-sky-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop} className="hover:text-sky-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={scrollToTop} className="hover:text-sky-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop} className="hover:text-sky-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
  <h4 className="text-white font-semibold text-lg mb-4 border-l-4 border-indigo-500 pl-3">
    Our Services
  </h4>

  <ul className="space-y-3 text-slate-400 text-sm">

    <li className="hover:text-sky-400 transition-colors">
      <Link to="/services/ai-network-solutions">
        AI Network Solutions
      </Link>
    </li>

    <li className="hover:text-sky-400 transition-colors">
      <Link to="/services/cloud-computing">
        Cloud Computing
      </Link>
    </li>

    <li className="hover:text-sky-400 transition-colors">
      <Link to="/services/cyber-security">
        Cyber Security
      </Link>
    </li>

    <li className="hover:text-sky-400 transition-colors">
      <Link to="/services/iot-surveillance">
        IoT & Surveillance
      </Link>
    </li>

    <li className="hover:text-sky-400 transition-colors">
      <Link to="/services/managed-services">
        Managed Services
      </Link>
    </li>

  </ul>
</div>


          {/* Insights */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4 border-l-4 border-sky-500 pl-3">
              Insights
            </h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="hover:text-sky-400 transition-colors">
                Case Studies
              </li>
              <li className="hover:text-sky-400 transition-colors">
                News & Updates
              </li>
              <li className="hover:text-sky-400 transition-colors">
                Careers
              </li>
              <li className="hover:text-sky-400 transition-colors">
                Blog
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4 border-l-4 border-indigo-500 pl-3">
              Contact Us
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Email:{" "}
              <a
                href="mailto:Info@Swastik Technology & Solutions nologies.co.in"
                className="text-sky-400 hover:underline"
              >
                Info@swastiktechnologies.co.in
              </a>
              <br />
              Phone: +91 7205133802
              <br />
              Bhubaneswar, Odisha
            </p>
            <div className="flex gap-4 mt-4 justify-center sm:justify-start text-slate-400">
              <a
                href="#"
                className="hover:text-sky-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href="#"
                className="hover:text-sky-400 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="#"
                className="hover:text-sky-400 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                className="hover:text-sky-400 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-slate-700/60 mb-6"></div>

        {/* Footer Bottom */}
        <div className="text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="text-sky-400 font-semibold">Swastik Technology & Solutions </span>. All
            rights reserved.
          </p>
          <p className="text-xs text-slate-600 mt-1">
            Designed & Developed with ❤️ by Trackepayfintech Pvt. Ltd. <a
                href="https://www.trackepay.in/"
                className="text-sky-400 hover:underline"
              >
                trackepay.in
              </a>
          </p>
        </div>
      </Container>
    </footer>
  )
}
