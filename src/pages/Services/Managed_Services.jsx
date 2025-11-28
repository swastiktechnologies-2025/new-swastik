// import React from "react"
// import Container from "../../components/layout/Container"
// import PageHeader from "../../components/common/PageHeader"
// import useScrollToTop from "../../hooks/useScrollToTop"

// export default function Managed_Services() {
//   useScrollToTop();
//   return (
//     <>
//       <PageHeader
//         title="Managed Services"
//         subtitle="Empowering your business with proactive, secure, and intelligent IT management solutions."
//         image="/107.jpeg"
//       />

//       {/* Overview Section */}
//       <section className="py-20 md:py-28 bg-white">
//         <Container>
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
//               Seamless IT Management. Uninterrupted Business Growth.
//             </h2>
//             <p className="text-slate-600 text-lg leading-relaxed">
//               Technology is the backbone of modern business — but managing it
//               shouldn’t slow you down.{" "}
//               <span className="text-sky-600 font-semibold">Swastik Technology & Solutions ’s Managed IT Services</span>{" "}
//               offer end-to-end support, monitoring, and optimization to keep
//               your systems running efficiently, securely, and reliably — 24/7.
//             </p>
//           </div>
//         </Container>
//       </section>

// {/* Our Core Managed Service Offerings (Soft Hover Style) */}
// <section className="py-16 bg-slate-50">
//   <Container>
//     <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-12">
//       Our Core Managed Service Offerings
//     </h2>
//     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {[
//         {
//           icon: "🖥️",
//           title: "Infrastructure Management",
//           desc: "We oversee your servers, networks, and endpoints with proactive monitoring and rapid incident response to maximize uptime and minimize risk.",
//         },
//         {
//           icon: "☁️",
//           title: "Cloud & Hybrid Operations",
//           desc: "Our experts handle your cloud platforms — from resource allocation and cost optimization to data security and performance management.",
//         },
//         {
//           icon: "👨‍💻",
//           title: "Helpdesk & End-User Support",
//           desc: "24/7 IT support ensures your teams stay productive. We offer multi-channel assistance, remote troubleshooting, and on-site response.",
//         },
//         {
//           icon: "🔒",
//           title: "Security & Compliance Management",
//           desc: "Stay protected with managed firewalls, patch management, identity controls, and regulatory compliance monitoring.",
//         },
//         {
//           icon: "⚙️",
//           title: "Backup & Disaster Recovery",
//           desc: "Automated backups and fast recovery solutions safeguard business continuity during system failures or cyber incidents.",
//         },
//         {
//           icon: "📊",
//           title: "Performance & Analytics Reporting",
//           desc: "Gain full visibility into your IT health with performance dashboards, trend analysis, and actionable intelligence.",
//         },
//       ].map((item, i) => (
//               <div
//                 key={i}
//                 className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition border border-slate-100"
//               >
//                 <div className="text-4xl mb-4">{item.icon}</div>
//                 <h3 className="font-semibold text-xl text-slate-800 mb-2">
//                   {item.title}
//                 </h3>
//                 <p className="text-slate-600">{item.desc}</p>
//               </div>
//             ))}
//     </div>
//   </Container>
// </section>

// {/* Managed Services Tailored for Every Industry (Modern Gradient Hover) */}
// <section className="py-20 bg-white">
//   <Container>
//     <div className="max-w-5xl mx-auto text-center mb-12">
//       <h2 className="text-3xl font-bold text-slate-800 mb-6">
//         Managed Services Tailored for Every Industry
//       </h2>
//       <p className="text-slate-600 text-lg leading-relaxed">
//         Whether you’re a startup, an enterprise, or a government agency, our
//         managed services adapt to your business model — helping you achieve
//         stability, scalability, and innovation.
//       </p>
//     </div>

//     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {[
//         {
//           icon: "🏢",
//           title: "Enterprises & Corporates",
//           desc: "Simplify IT management across global offices with centralized monitoring, governance, and SLA-backed support.",
//         },
//         {
//           icon: "☁️",
//           title: "Cloud-First Businesses",
//           desc: "Streamline your hybrid and multi-cloud environments with expert resource optimization and cloud-native management.",
//         },
//         {
//           icon: "🏭",
//           title: "Manufacturing & Industrial",
//           desc: "Ensure uninterrupted production with network reliability, predictive maintenance, and operational technology (OT) support.",
//         },
//         {
//           icon: "🏥",
//           title: "Healthcare & Research",
//           desc: "Maintain compliance, protect patient data, and support medical systems with 24/7 monitoring and secure infrastructure.",
//         },
//         {
//           icon: "🧑‍💼",
//           title: "SMEs & Startups",
//           desc: "Get enterprise-level IT management at an affordable cost — helping you scale faster without worrying about infrastructure.",
//         },
//       ].map((item, i) => (
//         <div
//           key={i}
//           className="relative overflow-hidden bg-slate-50 rounded-2xl p-8 shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group"
//         >
//           {/* gradient overlay */}
//           <div className="absolute inset-0  transition-all duration-500 rounded-2xl"></div>

//           <div className="relative z-10 flex flex-col items-center text-center">
//             <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
//               {item.icon}
//             </div>
//             <h3 className="font-semibold text-xl text-slate-800 mb-3  transition-colors duration-300">
//               {item.title}
//             </h3>
//             <p className="text-slate-600 leading-relaxed">
//               {item.desc}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   </Container>
// </section>


//       {/* Technology Section */}
//       <section className="py-20 bg-slate-50">
//         <Container>
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <img
//                 src="https://images.unsplash.com/photo-1605902711622-cfb43c4437b7?auto=format&fit=crop&w=1200&q=80"
//                 alt="Managed IT Services Technology"
//                 className="rounded-2xl shadow-lg"
//               />
//             </div>
//             <div>
//               <h2 className="text-3xl font-bold text-slate-800 mb-5">
//                 Powered by Automation, Analytics, and Expertise
//               </h2>
//               <p className="text-slate-600 mb-5">
//                 Swastik Technology & Solutions  leverages AI-driven automation, cloud-based
//                 monitoring, and industry-leading platforms to deliver unmatched
//                 efficiency and reliability. Every service is built on
//                 transparency, scalability, and continuous innovation.
//               </p>
//               <ul className="list-disc list-inside space-y-2 text-slate-600">
//                 <li>AI-powered incident detection and remediation</li>
//                 <li>Cloud-native service orchestration tools</li>
//                 <li>Predictive analytics for proactive optimization</li>
//                 <li>Real-time reporting and SLA compliance dashboards</li>
//               </ul>
//             </div>
//           </div>
//         </Container>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-sky-600 to-indigo-600 text-white text-center">
//         <Container>
//           <h2 className="text-3xl md:text-4xl font-semibold mb-4">
//             Simplify IT. Amplify Success.
//           </h2>
//           <p className="mb-8 text-lg max-w-3xl mx-auto">
//             Partner with <span className="font-semibold">Swastik Technology & Solutions </span> for
//             comprehensive Managed Services that empower your business to focus
//             on growth, innovation, and excellence — while we ensure your IT
//             never misses a beat.
//           </p>
//           <a
//             href="/contact"
//             className="inline-block bg-white text-sky-700 font-semibold px-8 py-3 rounded-full hover:bg-slate-100 transition"
//           >
//             Get a Free Consultation
//           </a>
//         </Container>
//       </section>
//     </>
//   )
// }


import React from "react"
import Container from "../../components/layout/Container"
import PageHeader from "../../components/common/PageHeader"
import useScrollToTop from "../../hooks/useScrollToTop"
import useScrollAnimation from "../../hooks/useScrollAnimation"

export default function Managed_Services() {
  useScrollToTop();
  useScrollAnimation();

  return (
    <>
      <PageHeader
        title="Managed Services"
        subtitle="Empowering your business with proactive, secure, and intelligent IT management solutions."
        image="/107.jpeg"
      />

      {/* Overview Section */}
      <section className="py-20 md:py-28 bg-white reveal">
        <Container>
          <div className="max-w-4xl mx-auto text-center reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Seamless IT Management. Uninterrupted Business Growth.
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed">
              Technology is the core of modern businesses — but managing it shouldn’t slow you down.{" "}
              <strong className="text-sky-700">
                Swastik Technology & Solutions’ Managed Services
              </strong>{" "}
              provide{" "}
              <span className="font-semibold text-sky-600 underline decoration-sky-400">
                proactive monitoring, optimization, and 24/7 support
              </span>{" "}
              to keep your IT running smoothly.
            </p>
          </div>
        </Container>
      </section>

      {/* Core Service Offerings */}
      <section className="py-16 bg-slate-50 reveal">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-12 reveal">
            Our Core Managed Service Offerings
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🖥️",
                title: "Infrastructure Management",
                desc: "Proactive monitoring and rapid response to maintain uptime.",
              },
              {
                icon: "☁️",
                title: "Cloud & Hybrid Operations",
                desc: "Expert resource allocation, optimization, and cloud security.",
              },
              {
                icon: "👨‍💻",
                title: "Helpdesk & End-User Support",
                desc: "24/7 troubleshooting, remote assistance, and on-site support.",
              },
              {
                icon: "🔒",
                title: "Security & Compliance Management",
                desc: "Managed firewalls, identity controls, and compliance monitoring.",
              },
              {
                icon: "⚙️",
                title: "Backup & Disaster Recovery",
                desc: "Automated backups and fast recovery to protect continuity.",
              },
              {
                icon: "📊",
                title: "Performance & Analytics Reporting",
                desc: "Actionable insights with dashboards and performance tracking.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition border border-slate-100 reveal"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-xl text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-white reveal">
        <Container>
          <div className="max-w-5xl mx-auto text-center mb-12 reveal">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Managed Services Tailored for Every Industry
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed">
              Whether you’re a startup or a global enterprise, our services adapt to your{" "}
              <strong className="text-sky-600">business model, scale, and operational needs</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🏢",
                title: "Enterprises & Corporates",
                desc: "Centralized monitoring, governance, and SLA-backed support.",
              },
              {
                icon: "☁️",
                title: "Cloud-First Businesses",
                desc: "Optimize hybrid & multi-cloud environments with expert control.",
              },
              {
                icon: "🏭",
                title: "Manufacturing & Industrial",
                desc: "Reliable networks, predictive maintenance, and OT support.",
              },
              {
                icon: "🏥",
                title: "Healthcare & Research",
                desc: "Secure, compliant, and always-on medical IT infrastructure.",
              },
              {
                icon: "🧑‍💼",
                title: "SMEs & Startups",
                desc: "Enterprise-grade IT at affordable cost — designed for growth.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative overflow-hidden bg-slate-50 rounded-2xl p-8 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group reveal"
                style={{ transitionDelay: `${i * 140}ms` }}
              >
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-xl text-slate-800 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-slate-50 reveal">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <img
                src="/106.jpeg"
                alt="Managed IT Services Technology"
                className="rounded-2xl shadow-lg"
              />
            </div>

            <div className="reveal" style={{ transitionDelay: "170ms" }}>
              <h2 className="text-3xl font-bold text-slate-800 mb-5">
                Powered by{" "}
                <span className="text-sky-600">Automation, Analytics & Expertise</span>
              </h2>

              <p className="text-slate-600 mb-5">
                Our approach leverages{" "}
                <strong className="text-sky-700">
                  AI-driven automation, predictive analytics, and cloud-native orchestration
                </strong>{" "}
                to deliver reliable and scalable IT operations.
              </p>

              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>AI-powered incident detection & remediation</li>
                <li>Real-time SLA compliance dashboards</li>
                <li>Predictive optimization & analytics</li>
                <li>Cloud-native automation tools</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-indigo-600 text-white text-center reveal">
        <Container>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Simplify IT. <span className="underline decoration-white/60">Amplify Success.</span>
          </h2>

          <p className="mb-8 text-lg max-w-3xl mx-auto">
            Partner with{" "}
            <strong className="text-white">Swastik Technology & Solutions</strong> for fully managed,
            future-ready IT operations so you can focus on{" "}
            <span className="font-semibold underline decoration-white/50">growth and innovation</span>.
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-sky-700 font-semibold px-8 py-3 rounded-full hover:bg-slate-100 transition"
          >
            Get a Free Consultation
          </a>
        </Container>
      </section>
    </>
  )
}
