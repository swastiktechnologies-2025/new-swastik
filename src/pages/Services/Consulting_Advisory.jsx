// import React from "react"
// import Container from "../../components/layout/Container"
// import PageHeader from "../../components/common/PageHeader"
// import useScrollToTop from "../../hooks/useScrollToTop"

// export default function Consulting_Advisory() {
//   useScrollToTop();
//   return (
//     <>
//       <PageHeader
//         title="Consulting & Advisory"
//         subtitle="Transform your business strategy with expert technology guidance, digital transformation, and IT roadmap planning."
//         image="/108.jpeg"
//       />

//       {/* Overview Section */}
//       <section className="py-20 md:py-28 bg-white">
//         <Container>
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
//               Strategic Guidance for a Smarter Digital Future
//             </h2>
//             <p className="text-slate-600 text-lg leading-relaxed">
//               <span className="text-sky-600 font-semibold">Swastik Technology & Solutions ’s Consulting & Advisory Services</span>{" "}
//               empower organizations to align technology with business goals. We
//               bring together strategic insights, digital innovation, and
//               technical expertise to drive transformation, operational
//               excellence, and long-term growth.
//             </p>
//           </div>
//         </Container>
//       </section>

//       {/* 9 Key Capabilities Section */}
//       <section className="py-16 bg-slate-50">
//         <Container>
//           <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-12">
//             Strategic Capabilities that Drive Business Excellence
//           </h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: "🧭",
//                 title: "Digital Transformation Roadmaps",
//                 desc: "Create clear, phased transformation strategies to modernize your infrastructure and enhance digital maturity.",
//               },
//               {
//                 icon: "🏗️",
//                 title: "Enterprise Architecture Design",
//                 desc: "Develop scalable IT architectures that align with business processes, growth, and modernization goals.",
//               },
//               {
//                 icon: "💡",
//                 title: "IT Strategy & Planning",
//                 desc: "Bridge business objectives and technology initiatives through comprehensive IT strategy formulation.",
//               },
//               {
//                 icon: "📊",
//                 title: "Data & Analytics Advisory",
//                 desc: "Leverage actionable data insights to enhance decision-making and improve operational performance.",
//               },
//               {
//                 icon: "🔒",
//                 title: "Governance, Risk & Compliance (GRC)",
//                 desc: "Ensure compliance and reduce business risk through frameworks that promote accountability and security.",
//               },
//               {
//                 icon: "⚙️",
//                 title: "Process Optimization",
//                 desc: "Streamline workflows, automate tasks, and integrate digital tools to maximize operational efficiency.",
//               },
//               {
//                 icon: "👨‍💻",
//                 title: "Technology Assessment",
//                 desc: "Evaluate existing IT landscapes, identify inefficiencies, and recommend performance-driven solutions.",
//               },
//               {
//                 icon: "🤝",
//                 title: "Vendor & Cloud Strategy",
//                 desc: "Select the right technology partners and cloud solutions tailored to your business needs and budget.",
//               },
//               {
//                 icon: "🚀",
//                 title: "Innovation & Change Management",
//                 desc: "Enable a culture of innovation with agile methodologies and structured organizational change practices.",
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
//               Consulting & Advisory Solutions for Every Sector
//             </h2>
//             <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
//               Our consulting expertise spans industries — helping organizations
//               of all sizes define, design, and deploy strategies that create measurable value.
//             </p>
//           </div>

//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {[
//               {
//                 icon: "🏢",
//                 title: "Enterprise Digital Strategy",
//                 desc: "Define technology-driven roadmaps that improve agility, operational efficiency, and competitive advantage.",
//               },
//               {
//                 icon: "🏭",
//                 title: "Manufacturing & Automation Advisory",
//                 desc: "Leverage IoT, AI, and automation to optimize production efficiency and reduce costs across facilities.",
//               },
//               {
//                 icon: "💳",
//                 title: "Financial & Banking Transformation",
//                 desc: "Modernize financial operations, strengthen data governance, and ensure compliance with evolving regulations.",
//               },
//               {
//                 icon: "🏥",
//                 title: "Healthcare & Life Sciences Consulting",
//                 desc: "Enable secure digital healthcare platforms and data-driven insights for better patient and operational outcomes.",
//               },
//               {
//                 icon: "☁️",
//                 title: "Cloud & Infrastructure Consulting",
//                 desc: "Assess workloads, plan migrations, and optimize cloud environments to deliver agility and cost efficiency.",
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
//                 src="https://images.unsplash.com/photo-1605902711622-cfb43c4437b7?auto=format&fit=crop&w=1200&q=80"
//                 alt="Consulting & Advisory Technology"
//                 className="rounded-2xl shadow-lg"
//               />
//             </div>
//             <div>
//               <h2 className="text-3xl font-bold text-slate-800 mb-5">
//                 Data-Driven Decisions Powered by Experience
//               </h2>
//               <p className="text-slate-600 mb-5">
//                 Our consulting methodology is built on proven frameworks,
//                 analytical tools, and industry expertise. Swastik Technology & Solutions  helps
//                 clients turn insights into actions — enabling transformation that
//                 is measurable, sustainable, and impactful.
//               </p>
//               <ul className="list-disc list-inside space-y-2 text-slate-600">
//                 <li>Comprehensive business and IT assessments</li>
//                 <li>Tailored strategy design and execution support</li>
//                 <li>Cross-industry best practices and innovation models</li>
//                 <li>Outcome-focused digital transformation programs</li>
//               </ul>
//             </div>
//           </div>
//         </Container>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-sky-600 to-indigo-600 text-white text-center">
//         <Container>
//           <h2 className="text-3xl md:text-4xl font-semibold mb-4">
//             Empower Your Strategy with Swastik Technology & Solutions  Consulting
//           </h2>
//           <p className="mb-8 text-lg max-w-3xl mx-auto">
//             Partner with our team of consultants and technology strategists to
//             unlock business value, accelerate innovation, and shape the future of
//             your enterprise.
//           </p>
//           <a
//             href="/contact"
//             className="inline-block bg-white text-sky-700 font-semibold px-8 py-3 rounded-full hover:bg-slate-100 transition"
//           >
//             Book a Consultation
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

export default function Consulting_Advisory() {
  useScrollToTop();
  useScrollAnimation();

  return (
    <>
      <PageHeader
        title="Consulting & Advisory"
        subtitle="Transform your business strategy with expert technology guidance, digital transformation, and IT roadmap planning."
        image="/108.jpeg"
      />

      {/* Overview Section */}
      <section className="py-20 md:py-28 bg-white reveal">
        <Container>
          <div className="max-w-4xl mx-auto text-center reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Strategic Guidance for a Smarter Digital Future
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed">
              <span className="text-sky-600 font-semibold">Swastik Technology & Solutions</span> empowers
              organizations with{" "}
              <strong className="text-sky-700">data-driven insights, modernization strategies, and long-term IT frameworks</strong>{" "}
              that align technology with real business goals.  
            </p>
          </div>
        </Container>
      </section>

      {/* 9 Key Capabilities Section */}
      <section className="py-16 bg-slate-50 reveal">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-12 reveal">
            Strategic Capabilities that Drive Business Excellence
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🧭",
                title: "Digital Transformation Roadmaps",
                desc: "Phased strategies to modernize your IT and enhance digital maturity.",
              },
              {
                icon: "🏗️",
                title: "Enterprise Architecture Design",
                desc: "Scalable architectures aligned with growth and modernization goals.",
              },
              {
                icon: "💡",
                title: "IT Strategy & Planning",
                desc: "Bridge business objectives with intelligent technology adoption.",
              },
              {
                icon: "📊",
                title: "Data & Analytics Advisory",
                desc: "Leverage insights to inform decisions and improve performance.",
              },
              {
                icon: "🔒",
                title: "Governance, Risk & Compliance",
                desc: "Reduce risk with strong governance and regulatory alignment.",
              },
              {
                icon: "⚙️",
                title: "Process Optimization",
                desc: "Automate workflows and streamline operations for efficiency.",
              },
              {
                icon: "👨‍💻",
                title: "Technology Assessment",
                desc: "Identify inefficiencies and recommend performance-driven solutions.",
              },
              {
                icon: "🤝",
                title: "Vendor & Cloud Strategy",
                desc: "Choose the right technology partners with strategic planning.",
              },
              {
                icon: "🚀",
                title: "Innovation & Change Management",
                desc: "Enable a culture of innovation through agile transformation.",
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

      {/* 5 Core Solutions Section */}
      <section className="py-20 bg-white reveal">
        <Container>
          <div className="max-w-5xl mx-auto text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Consulting & Advisory Solutions for Every Sector
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
              Our consulting services help organizations of all sizes{" "}
              <strong className="text-sky-600">define, design, and deploy strategic solutions</strong>  
              that deliver measurable business impact.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🏢",
                title: "Enterprise Digital Strategy",
                desc: "Improve agility and competitiveness with tech-driven roadmaps.",
              },
              {
                icon: "🏭",
                title: "Manufacturing & Automation Advisory",
                desc: "Leverage automation, IoT, and AI to reduce costs and boost productivity.",
              },
              {
                icon: "💳",
                title: "Financial & Banking Transformation",
                desc: "Modernize financial ecosystems with data governance & compliance.",
              },
              {
                icon: "🏥",
                title: "Healthcare & Life Sciences",
                desc: "Enable secure digital healthcare platforms and real-time insights.",
              },
              {
                icon: "☁️",
                title: "Cloud & Infrastructure Consulting",
                desc: "Evaluate workloads, plan migrations, and optimize cloud operations.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-8 bg-slate-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center reveal"
                style={{ transitionDelay: `${i * 140}ms` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="font-semibold text-xl text-slate-800 mb-3">{item.title}</h3>
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
                src="/108.jpeg"
                alt="Consulting & Advisory Technology"
                className="rounded-2xl shadow-lg"
              />
            </div>

            <div className="reveal" style={{ transitionDelay: "160ms" }}>
              <h2 className="text-3xl font-bold text-slate-800 mb-5">
                Data-Driven Decisions Powered by{" "}
                <span className="text-sky-600">Experience & Insight</span>
              </h2>

              <p className="text-slate-600 mb-5">
                Our approach blends{" "}
                <strong className="text-sky-700">proven methodologies, analytical tools, and deep expertise</strong>{" "}
                to transform insights into impactful business actions.
              </p>

              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>Comprehensive business and IT assessments</li>
                <li>Strategic design & execution frameworks</li>
                <li>Cross-industry innovation & best practices</li>
                <li>Outcome-focused digital transformation programs</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-indigo-600 text-white text-center reveal">
        <Container>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Empower Your Strategy with{" "}
            <span className="underline decoration-white/60">Swastik Consulting & Advisory</span>
          </h2>

          <p className="mb-8 text-lg max-w-3xl mx-auto">
            Partner with us to unlock{" "}
            <strong className="text-white">business value, innovation, and long-term growth</strong>.
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-sky-700 font-semibold px-8 py-3 rounded-full hover:bg-slate-100 transition"
          >
            Book a Consultation
          </a>
        </Container>
      </section>
    </>
  )
}
