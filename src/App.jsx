import React from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import BlogIndex from "./pages/blog/BlogIndex"
import BlogPost from "./pages/blog/BlogPost"
// ✅ Services
import ServicesIndex from "./pages/Services/ServicesIndex"
import AI_Network_Solutions from "./pages/Services/AI_Network_Solutions"
import Server_Storage from "./pages/Services/Server_Storage"
import Cloud_Computing from "./pages/Services/Cloud_Computing"
import Cyber_Security from "./pages/Services/Cyber_Security"
import AV_UC_Collaboration from "./pages/Services/AV_UC_Collaboration"
import AI_Surveillance_IoT from "./pages/Services/AI_Surveillance_IoT"
import Managed_Services from "./pages/Services/Managed_Services"
import Consulting_Advisory from "./pages/Services/Consulting_Advisory"
import Careers from "./pages/Careers"

// ✅ Main App
export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      {/* Global Header */}
      <Header />

      {/* Main Page Content */}
<main className="flex-grow pt-16 md:pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/careers" element={<Careers />} /> 
          {/* Services */}
          <Route path="/services" element={<ServicesIndex />} />
          <Route
            path="/services/ai-network-solutions"
            element={<AI_Network_Solutions />}
          />
          <Route
            path="/services/server-storage"
            element={<Server_Storage />}
          />
          <Route
            path="/services/cloud-computing"
            element={<Cloud_Computing />}
          />
          <Route
            path="/services/cyber-security"
            element={<Cyber_Security />}
          />
          <Route
            path="/services/av-uc-collaboration"
            element={<AV_UC_Collaboration />}
          />
          <Route
            path="/services/ai-surveillance-iot"
            element={<AI_Surveillance_IoT />}
          />
          <Route
            path="/services/managed-services"
            element={<Managed_Services />}
          />
          <Route
            path="/services/consulting-advisory"
            element={<Consulting_Advisory />}
          />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  )
}
