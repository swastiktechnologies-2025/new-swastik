// import React from "react";
// import Container from "../../components/layout/Container";
// import PageHeader from "../../components/common/PageHeader";
// import useScrollToTop from "../../hooks/useScrollToTop";

// export default function AI_Surveillance_IoT() {
//   useScrollToTop();
//   return (
//     <>
//       <PageHeader
//         title="AI-Based Surveillance & IoT"
//         subtitle="Enhancing security, intelligence, and efficiency through next-generation surveillance and IoT automation."
//         image="/106.jpeg"
//       />

//       {/* Overview Section */}
//       <section className="py-20 md:py-28 bg-white">
//         <Container>
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
//               Smart Vision Meets Intelligent Connectivity
//             </h2>
//             <p className="text-slate-600 text-lg leading-relaxed">
//               <span className="text-sky-600 font-semibold">
//                 Swastik Technology & Solutions{" "}
//               </span>{" "}
//               brings together the power of Artificial Intelligence and Internet
//               of Things (IoT) to deliver intelligent surveillance and connected
//               automation solutions. From real-time monitoring to predictive
//               insights, our systems create safer, smarter, and more efficient
//               environments.
//             </p>
//           </div>
//         </Container>
//       </section>

//       {/* 9 Key Advantages Section */}
//       <section className="py-16 bg-slate-50">
//         <Container>
//           <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-12">
//             Intelligent Capabilities that Redefine Surveillance
//           </h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: "🎯",
//                 title: "Real-Time Threat Detection",
//                 desc: "AI-driven video analytics identify suspicious behavior, motion, and objects instantly.",
//               },
//               {
//                 icon: "📡",
//                 title: "IoT-Enabled Smart Sensors",
//                 desc: "Monitor temperature, air quality, occupancy, and assets through connected devices.",
//               },
//               {
//                 icon: "🔍",
//                 title: "Facial & Object Recognition",
//                 desc: "Advanced algorithms ensure accurate identification and tracking for security and analytics.",
//               },
//               {
//                 icon: "☁️",
//                 title: "Cloud-Based Monitoring",
//                 desc: "Centralized dashboards allow seamless monitoring and management from any location.",
//               },
//               {
//                 icon: "⚙️",
//                 title: "Edge Computing",
//                 desc: "Process and analyze data locally for faster response times and reduced bandwidth usage.",
//               },
//               {
//                 icon: "🔒",
//                 title: "Data Security & Privacy",
//                 desc: "End-to-end encryption and compliance ensure safe data storage and transmission.",
//               },
//               {
//                 icon: "📊",
//                 title: "Predictive Analytics",
//                 desc: "Leverage AI insights to forecast events, prevent risks, and improve decision-making.",
//               },
//               {
//                 icon: "🤖",
//                 title: "Automation & Alerts",
//                 desc: "Automated triggers and notifications improve safety, operations, and maintenance workflows.",
//               },
//               {
//                 icon: "🌐",
//                 title: "Seamless Integration",
//                 desc: "Integrates easily with existing IT, CCTV, and IoT ecosystems for unified control.",
//               },
//             ].map((item, i) => (
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
//           </div>
//         </Container>
//       </section>

//       {/* 5 Core Solutions Section */}
//       <section className="py-20 bg-white">
//         <Container>
//           <div className="max-w-5xl mx-auto text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
//               Intelligent Solutions for Every Environment
//             </h2>
//             <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
//               From cities to industries, our AI and IoT platforms transform how
//               data, security, and operations are managed — enabling connected
//               intelligence everywhere.
//             </p>
//           </div>

//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {[
//               {
//                 icon: "🏙️",
//                 title: "Smart Cities",
//                 desc: "Intelligent surveillance and traffic systems enhance urban safety, crowd management, and public monitoring.",
//               },
//               {
//                 icon: "🏭",
//                 title: "Industrial Automation",
//                 desc: "IoT sensors and AI analytics detect faults, monitor machinery, and improve production efficiency.",
//               },
//               {
//                 icon: "🏢",
//                 title: "Enterprise Security",
//                 desc: "Secure offices and campuses with AI-based access control, intrusion detection, and real-time alerts.",
//               },
//               {
//                 icon: "🚉",
//                 title: "Transportation & Logistics",
//                 desc: "Monitor vehicle movement, cargo, and routes with IoT GPS tracking and predictive maintenance systems.",
//               },
//               {
//                 icon: "🏥",
//                 title: "Healthcare & Smart Facilities",
//                 desc: "Enable patient safety, energy optimization, and automated alerts through AI-integrated IoT monitoring platforms.",
//               },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="group p-8 bg-slate-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center"
//               >
//                 <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
//                   {item.icon}
//                 </div>
//                 <h3 className="font-semibold text-xl text-slate-800 mb-3">
//                   {item.title}
//                 </h3>
//                 <p className="text-slate-600 leading-relaxed">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </Container>
//       </section>

//       {/* Technology Section */}
//       <section className="py-20 bg-slate-50">
//         <Container>
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <img
//                 src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=1200&q=80"
//                 alt="AI Surveillance and IoT Technology"
//                 className="rounded-2xl shadow-lg"
//               />
//             </div>
//             <div>
//               <h2 className="text-3xl font-bold text-slate-800 mb-5">
//                 Advanced Technology That Powers Smart Intelligence
//               </h2>
//               <p className="text-slate-600 mb-5">
//                 Our AI-based surveillance and IoT infrastructure is built on
//                 edge analytics, cloud computing, and data-driven intelligence —
//                 ensuring fast, secure, and scalable performance across every
//                 environment.
//               </p>
//               <ul className="list-disc list-inside space-y-2 text-slate-600">
//                 <li>AI-based video analytics and pattern recognition</li>
//                 <li>Edge computing for low-latency intelligence</li>
//                 <li>IoT data orchestration via cloud platforms</li>
//                 <li>Encrypted data pipelines and compliance-ready design</li>
//               </ul>
//             </div>
//           </div>
//         </Container>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-sky-600 to-indigo-600 text-white text-center">
//         <Container>
//           <h2 className="text-3xl md:text-4xl font-semibold mb-4">
//             Empower the Future with AI & IoT Intelligence
//           </h2>
//           <p className="mb-8 text-lg max-w-3xl mx-auto">
//             Create connected, secure, and intelligent spaces with Swastik
//             Technology & Solutions ’s AI-Based Surveillance and IoT Solutions —
//             where data turns into real-time action.
//           </p>
//           <a
//             href="/contact"
//             className="inline-block bg-white text-sky-700 font-semibold px-8 py-3 rounded-full hover:bg-slate-100 transition"
//           >
//             Get Started Today
//           </a>
//         </Container>
//       </section>
//     </>
//   );
// }

import React from "react";
import Container from "../../components/layout/Container";
import PageHeader from "../../components/common/PageHeader";
import useScrollToTop from "../../hooks/useScrollToTop";
import useScrollAnimation from "../../hooks/useScrollAnimation";

export default function AI_Surveillance_IoT() {
  useScrollToTop();
  useScrollAnimation();

  return (
    <>
      <PageHeader
        title="AI-Based Surveillance & IoT"
        subtitle="Enhancing security, intelligence, and efficiency through next-generation surveillance and IoT automation."
        image="/106.jpeg"
      />

      {/* Overview Section */}
      <section className="py-20 md:py-28 bg-white reveal">
        <Container>
          <div className="max-w-4xl mx-auto text-center reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Smart Vision Meets Intelligent Connectivity
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed">
              <span className="text-sky-600 font-semibold">Swastik Technology & Solutions</span>{" "}
              integrates the power of{" "}
              <span className="font-semibold text-sky-700 underline decoration-sky-400">
                Artificial Intelligence
              </span>{" "}
              and{" "}
              <span className="font-semibold text-sky-700 underline decoration-sky-400">
                Internet of Things (IoT)
              </span>{" "}
              to create surveillance systems that are{" "}
              <strong className="text-sky-600">smarter, safer, and always connected</strong>.
            </p>
          </div>
        </Container>
      </section>

      {/* 9 Key Advantages Section */}
      <section className="py-16 bg-slate-50 reveal">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-12 reveal">
            Intelligent Capabilities that Redefine Surveillance
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Real-Time Threat Detection",
                desc: "AI-driven analytics identity risks instantly with unmatched accuracy.",
              },
              {
                icon: "📡",
                title: "IoT-Enabled Smart Sensors",
                desc: "Environment and asset monitoring powered by smart, connected devices.",
              },
              {
                icon: "🔍",
                title: "Facial & Object Recognition",
                desc: "Advanced recognition ensures high precision for modern security.",
              },
              {
                icon: "☁️",
                title: "Cloud-Based Monitoring",
                desc: "Access surveillance intelligence from anywhere, anytime.",
              },
              {
                icon: "⚙️",
                title: "Edge Computing",
                desc: "Process data on-site for immediate response and reduced latency.",
              },
              {
                icon: "🔒",
                title: "Data Security & Privacy",
                desc: "Industry-grade encryption and compliance at every layer.",
              },
              {
                icon: "📊",
                title: "Predictive Analytics",
                desc: "Anticipate events using AI-powered behavioral predictions.",
              },
              {
                icon: "🤖",
                title: "Automation & Alerts",
                desc: "Get intelligent alerts and automated workflows for fast action.",
              },
              {
                icon: "🌐",
                title: "Seamless Integration",
                desc: "Works flawlessly with your existing IT, CCTV, and IoT infrastructure.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition border border-slate-100 reveal"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-xl text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5 Core Solutions Section */}
      <section className="py-20 bg-white reveal">
        <Container>
          <div className="max-w-5xl mx-auto text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Intelligent Solutions for Every Environment
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
              Our AI and IoT platforms deliver{" "}
              <span className="font-semibold text-sky-600">
                adaptable, real-time intelligence
              </span>{" "}
              that boosts safety, performance, and operational efficiency.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🏙️",
                title: "Smart Cities",
                desc: "Urban surveillance and traffic intelligence that transforms public safety.",
              },
              {
                icon: "🏭",
                title: "Industrial Automation",
                desc: "Monitor machinery, detect faults, and optimize production effortlessly.",
              },
              {
                icon: "🏢",
                title: "Enterprise Security",
                desc: "AI-powered access and intrusion control for modern workplaces.",
              },
              {
                icon: "🚉",
                title: "Transportation & Logistics",
                desc: "Track movement, cargo, and safety with IoT-enabled systems.",
              },
              {
                icon: "🏥",
                title: "Healthcare & Smart Facilities",
                desc: "Protect patients, staff, and assets with automated monitoring.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-8 bg-slate-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center reveal"
                style={{ transitionDelay: `${i * 140}ms` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-xl text-slate-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
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
                src="/103.jpeg"
                alt="AI Surveillance and IoT Technology"
                className="rounded-2xl shadow-lg"
              />
            </div>

            <div className="reveal" style={{ transitionDelay: "160ms" }}>
              <h2 className="text-3xl font-bold text-slate-800 mb-5">
                Advanced Technology that Drives{" "}
                <span className="text-sky-600">Smart Intelligence</span>
              </h2>

              <p className="text-slate-600 mb-5">
                Our infrastructure is built on{" "}
                <strong className="text-sky-700">
                  edge analytics, cloud computing, and deep AI insights
                </strong>
                — delivering fast, secure, and scalable performance.
              </p>

              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>AI-powered video analytics</li>
                <li>Low-latency, on-site edge processing</li>
                <li>Cloud-based IoT data orchestration</li>
                <li>Fully encrypted & compliance-ready systems</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-indigo-600 text-white text-center reveal">
        <Container>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Empower the Future with{" "}
            <span className="underline decoration-white/50">AI & IoT Intelligence</span>
          </h2>

          <p className="mb-8 text-lg max-w-3xl mx-auto">
            Build environments that are{" "}
            <strong className="text-white">connected, intelligent, and future-ready</strong>.
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-sky-700 font-semibold px-8 py-3 rounded-full hover:bg-slate-100 transition"
          >
            Get Started Today
          </a>
        </Container>
      </section>
    </>
  );
}

