// import React from "react"
// import Container from "../../components/layout/Container"
// import PageHeader from "../../components/common/PageHeader"
// import useScrollToTop from "../../hooks/useScrollToTop"

// export default function Server_Storage() {
//   useScrollToTop();
//   return (
//     <>
//       <PageHeader
//         title="Server & Storage Solutions"
//         subtitle="Delivering enterprise-grade, scalable, and high-availability infrastructure that powers the modern digital enterprise."
//         image="/102.jpeg"
//       />

//       {/* Overview Section */}
//       <section className="py-20 md:py-28 bg-white">
//         <Container>
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
//               Reliable Infrastructure for a Data-Driven World
//             </h2>
//             <p className="text-slate-600 text-lg leading-relaxed">
//               In today’s fast-moving digital environment, businesses rely on
//               dependable and scalable infrastructure. Our{" "}
//               <span className="text-sky-600 font-semibold">
//                 Server & Storage Solutions
//               </span>{" "}
//               are built to ensure high performance, operational continuity, and
//               future-ready scalability — from data centers to edge environments.
//             </p>
//           </div>
//         </Container>
//       </section>

//       {/* Key Features Section */}
//       <section className="py-16 bg-slate-50">
//         <Container>
//           <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-12">
//             Core Capabilities
//           </h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: "🖥️",
//                 title: "Enterprise-Grade Servers",
//                 desc: "High-performance computing infrastructure optimized for mission-critical workloads and virtualization.",
//               },
//               {
//                 icon: "💾",
//                 title: "Scalable Storage Systems",
//                 desc: "Flexible SAN, NAS, and object storage solutions that grow with your data demands.",
//               },
//               {
//                 icon: "☁️",
//                 title: "Hybrid Cloud Integration",
//                 desc: "Seamless data movement between on-premise and cloud environments for agility and control.",
//               },
//               {
//                 icon: "🔒",
//                 title: "Data Protection & Backup",
//                 desc: "Secure, automated backup and disaster recovery strategies to protect critical information.",
//               },
//               {
//                 icon: "⚙️",
//                 title: "Virtualization & Containerization",
//                 desc: "Enhance resource utilization and scalability with advanced hypervisor and container technologies.",
//               },
//               {
//                 icon: "📈",
//                 title: "Performance Monitoring",
//                 desc: "Continuous performance analytics with predictive alerts and capacity forecasting.",
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

//       {/* Use Cases Section */}
//      <section className="py-20 bg-white">
//   <Container>
//     <div className="max-w-5xl mx-auto text-center mb-16">
//       <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
//         Designed for Every Enterprise Environment
//       </h2>
//       <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
//         From small enterprises to large-scale data centers, our Server & Storage
//         solutions empower you to store, process, and access data with unmatched
//         speed, scalability, and security.
//       </p>
//     </div>

//     <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//       {[
//         {
//           icon: "🏢",
//           title: "Data Centers",
//           desc: "Build or modernize data centers with high-density compute nodes and energy-efficient cooling systems for maximum performance.",
//         },
//         {
//           icon: "🧠",
//           title: "AI & Analytics Workloads",
//           desc: "Deliver the compute and storage power needed for AI, ML, and big data processing — ensuring zero latency and optimized throughput.",
//         },
//         {
//           icon: "🌐",
//           title: "Edge Computing",
//           desc: "Deploy compact, high-performance infrastructure at the edge to bring data processing closer to your operations and users.",
//         },
//       ].map((item, i) => (
//         <div
//           key={i}
//           className="group p-8 bg-slate-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center"
//         >
//           <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
//             {item.icon}
//           </div>
//           <h3 className="font-semibold text-xl text-slate-800 mb-3">
//             {item.title}
//           </h3>
//           <p className="text-slate-600 leading-relaxed">{item.desc}</p>
//         </div>
//       ))}
//     </div>
//   </Container>
// </section>


//       {/* Technology Stack Section */}
//       <section className="py-20 bg-slate-50">
//         <Container>
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <img
//                 src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1200&q=80"
//                 alt="Server and Storage Infrastructure"
//                 className="rounded-2xl shadow-lg"
//               />
//             </div>
//             <div>
//               <h2 className="text-3xl font-bold text-slate-800 mb-5">
//                 Technology That Powers Performance
//               </h2>
//               <p className="text-slate-600 mb-5">
//                 Our server and storage platforms are built on the latest
//                 technologies from global leaders like Dell, HPE, Lenovo, and
//                 NetApp. Combined with AI-driven monitoring and automation tools,
//                 we deliver end-to-end infrastructure intelligence.
//               </p>
//               <ul className="list-disc list-inside space-y-2 text-slate-600">
//                 <li>AI-based workload optimization</li>
//                 <li>NVMe and SSD-accelerated performance</li>
//                 <li>Software-defined storage (SDS)</li>
//                 <li>Multi-tier disaster recovery architecture</li>
//               </ul>
//             </div>
//           </div>
//         </Container>
//       </section>

//       {/* Call to Action Section */}
//       <section className="py-20 bg-gradient-to-r from-sky-600 to-indigo-600 text-white text-center">
//         <Container>
//           <h2 className="text-3xl md:text-4xl font-semibold mb-4">
//             Build the Foundation for a Smarter Future
//           </h2>
//           <p className="mb-8 text-lg max-w-3xl mx-auto">
//             Empower your business with a resilient, future-ready infrastructure
//             designed for growth, speed, and security.
//           </p>
//           <a
//             href="/contact"
//             className="inline-block bg-white text-sky-700 font-semibold px-8 py-3 rounded-full hover:bg-slate-100 transition"
//           >
//             Schedule a Consultation
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

export default function Server_Storage() {
  useScrollToTop();
  useScrollAnimation();

  return (
    <>
      <PageHeader
        title="Server & Storage Solutions"
        subtitle="Delivering enterprise-grade, scalable, and high-availability infrastructure that powers the modern digital enterprise."
        image="/102.jpeg"
      />

      {/* Overview Section */}
      <section className="py-20 md:py-28 bg-white reveal">
        <Container>
          <div className="max-w-4xl mx-auto text-center reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Reliable Infrastructure for a Data-Driven World
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed">
              Modern businesses require infrastructure that is{" "}
              <span className="font-semibold text-sky-600 underline decoration-sky-400">
                fast, scalable, and highly available
              </span>
              . Our{" "}
              <strong className="text-sky-700">Server & Storage Solutions</strong> ensure
              mission-critical workloads run with{" "}
              <strong className="text-sky-700">maximum performance and reliability</strong> across
              data centers, cloud, and edge environments.
            </p>
          </div>
        </Container>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-slate-50 reveal">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-12 reveal">
            Core Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🖥️",
                title: "Enterprise-Grade Servers",
                desc: "Optimized for high-performance computing, virtualization, and mission-critical workloads.",
              },
              {
                icon: "💾",
                title: "Scalable Storage Systems",
                desc: "Flexible SAN, NAS, and object storage for growing data needs.",
              },
              {
                icon: "☁️",
                title: "Hybrid Cloud Integration",
                desc: "Seamless data flow between on-premise and cloud environments.",
              },
              {
                icon: "🔒",
                title: "Data Protection & Backup",
                desc: "Secure automated backups and enterprise disaster recovery.",
              },
              {
                icon: "⚙️",
                title: "Virtualization & Containerization",
                desc: "Run scalable applications with hypervisors and container technologies.",
              },
              {
                icon: "📈",
                title: "Performance Monitoring",
                desc: "Predictive analytics with continuous monitoring & capacity forecasting.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition border border-slate-100 reveal"
                style={{ transitionDelay: `${i * 110}ms` }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-xl text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white reveal">
        <Container>
          <div className="max-w-5xl mx-auto text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Designed for Every Enterprise Environment
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
              Our infrastructure solutions help enterprises{" "}
              <strong className="text-sky-600">store, process, and access data</strong>{" "}
              with unmatched speed and scalability.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🏢",
                title: "Data Centers",
                desc: "High-density compute nodes and energy-efficient cooling systems.",
              },
              {
                icon: "🧠",
                title: "AI & Analytics Workloads",
                desc: "Compute and storage for AI, ML, and big data with zero latency.",
              },
              {
                icon: "🌐",
                title: "Edge Computing",
                desc: "Compact, high-performance nodes for real-time processing at the edge.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-8 bg-slate-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center reveal"
                style={{ transitionDelay: `${i * 130}ms` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-xl text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-slate-50 reveal">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="reveal">
              <img
                src="/103.jpeg"
                alt="Server and Storage Infrastructure"
                className="rounded-2xl shadow-lg"
              />
            </div>

            {/* Text */}
            <div className="reveal" style={{ transitionDelay: "160ms" }}>
              <h2 className="text-3xl font-bold text-slate-800 mb-5">
                Technology That Powers{" "}
                <span className="text-sky-600">Performance & Reliability</span>
              </h2>

              <p className="text-slate-600 mb-5">
                Our server & storage platforms use technologies from{" "}
                <strong className="text-sky-700">Dell, HPE, Lenovo, and NetApp</strong>, combined with{" "}
                <strong className="text-sky-700">AI-driven automation and software-defined architectures</strong>.
              </p>

              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>AI-based workload optimization</li>
                <li>NVMe & SSD-accelerated performance</li>
                <li>Software-defined storage (SDS)</li>
                <li>Multi-tier disaster recovery architecture</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-indigo-600 text-white text-center reveal">
        <Container>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Build the Foundation for a{" "}
            <span className="underline decoration-white/60">Smarter Future</span>
          </h2>

          <p className="mb-8 text-lg max-w-3xl mx-auto">
            Supercharge your infrastructure with{" "}
            <strong className="text-white">scalable, high-performance server and storage solutions</strong>.
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-sky-700 font-semibold px-8 py-3 rounded-full hover:bg-slate-100 transition"
          >
            Schedule a Consultation
          </a>
        </Container>
      </section>
    </>
  )
}

