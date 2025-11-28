// import React from "react"
// import Container from "../../components/layout/Container"
// import PageHeader from "../../components/common/PageHeader"
// import useScrollToTop from "../../hooks/useScrollToTop"

// export default function Cloud_Computing() {
//   useScrollToTop();
//   return (
//     <>
//       <PageHeader
//         title="Cloud Computing Solutions"
//         subtitle="Empower your business with agile, secure, and intelligent cloud infrastructure — built for performance and growth."
//         image="/103.jpeg"
//       />

//       {/* Overview Section */}
//       <section className="py-20 md:py-28 bg-white">
//         <Container>
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
//               Accelerate Innovation with the Power of the Cloud
//             </h2>
//             <p className="text-slate-600 text-lg leading-relaxed">
//               The future of business is cloud-first. At{" "}
//               <span className="font-semibold text-sky-600">Swastik Technology & Solutions </span>, we
//               deliver cloud computing solutions that enhance agility, scalability,
//               and operational efficiency — allowing your teams to focus on innovation
//               while we manage the infrastructure.
//             </p>
//           </div>
//         </Container>
//       </section>

//       {/* Key Services Section */}
//       <section className="py-16 bg-slate-50">
//         <Container>
//           <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-12">
//             Our Cloud Service Capabilities
//           </h2>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: "☁️",
//                 title: "Hybrid & Multi-Cloud Architecture",
//                 desc: "Seamlessly integrate on-premise and public cloud environments with unified management and optimized performance.",
//               },
//               {
//                 icon: "🚀",
//                 title: "Cloud Migration & Modernization",
//                 desc: "Move workloads, applications, and data to the cloud with minimal downtime using a secure, strategic migration plan.",
//               },
//               {
//                 icon: "🧠",
//                 title: "AI-Powered Optimization",
//                 desc: "Leverage AI and automation to reduce cloud costs, monitor usage, and optimize workloads in real-time.",
//               },
//               {
//                 icon: "🔒",
//                 title: "Secure Cloud Infrastructure",
//                 desc: "Protect critical assets with end-to-end encryption, identity management, and continuous compliance monitoring.",
//               },
//               {
//                 icon: "💾",
//                 title: "Cloud Backup & Disaster Recovery",
//                 desc: "Ensure business continuity with automated backup systems and failover recovery built for resilience.",
//               },
//               {
//                 icon: "⚙️",
//                 title: "Managed Cloud Services",
//                 desc: "Focus on your core business while our certified experts handle cloud provisioning, scaling, and maintenance.",
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
//     <section className="py-20 bg-white">
//   <Container>
//     <div className="max-w-5xl mx-auto text-center mb-16">
//       <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
//         Cloud Solutions Built for Every Business
//       </h2>
//       <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
//         Whether you're a growing startup or a global enterprise, our cloud
//         strategies are customized to align with your digital goals and
//         business outcomes.
//       </p>
//     </div>

//     <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//       {[
//         {
//           icon: "🧩",
//           title: "Enterprise Cloud Infrastructure",
//           desc: "Build secure, scalable, and efficient multi-cloud ecosystems that support complex enterprise workloads with reliability and agility.",
//         },
//         {
//           icon: "📱",
//           title: "SaaS & Application Hosting",
//           desc: "Deploy applications with maximum uptime, faster performance, and complete control using optimized hosting environments.",
//         },
//         {
//           icon: "🌐",
//           title: "Cloud-Native Development",
//           desc: "Leverage containers, microservices, and DevOps workflows to build cloud-native applications that scale effortlessly.",
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

//       {/* Technology Section */}
//       <section className="py-20 bg-slate-50">
//         <Container>
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <img
//                 src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
//                 alt="Cloud Technology Infrastructure"
//                 className="rounded-2xl shadow-lg"
//               />
//             </div>
//             <div>
//               <h2 className="text-3xl font-bold text-slate-800 mb-5">
//                 Built on the World’s Most Trusted Cloud Platforms
//               </h2>
//               <p className="text-slate-600 mb-5">
//                 We partner with global leaders like AWS, Microsoft Azure, and
//                 Google Cloud to deliver a flexible and secure infrastructure
//                 that grows with your business. Our certified experts ensure your
//                 environment is always optimized for cost, performance, and
//                 security.
//               </p>
//               <ul className="list-disc list-inside space-y-2 text-slate-600">
//                 <li>Multi-cloud orchestration and management</li>
//                 <li>AI-driven cost and resource optimization</li>
//                 <li>Integrated DevOps pipelines</li>
//                 <li>Continuous security compliance and auditing</li>
//               </ul>
//             </div>
//           </div>
//         </Container>
//       </section>

//       {/* Call to Action Section */}
//       <section className="py-20 bg-gradient-to-r from-sky-600 to-indigo-600 text-white text-center">
//         <Container>
//           <h2 className="text-3xl md:text-4xl font-semibold mb-4">
//             Take Your Business to the Cloud — with Confidence
//           </h2>
//           <p className="mb-8 text-lg max-w-3xl mx-auto">
//             Accelerate digital transformation, reduce infrastructure costs, and
//             unlock new levels of innovation with Swastik Technology & Solutions ’s Cloud Computing
//             Solutions.
//           </p>
//           <a
//             href="/contact"
//             className="inline-block bg-white text-sky-700 font-semibold px-8 py-3 rounded-full hover:bg-slate-100 transition"
//           >
//             Schedule a Free Consultation
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

export default function Cloud_Computing() {
  useScrollToTop();
  useScrollAnimation();

  return (
    <>
      <PageHeader
        title="Cloud Computing Solutions"
        subtitle="Empower your business with agile, secure, and intelligent cloud infrastructure — built for performance and growth."
        image="/103.jpeg"
      />

      {/* Overview Section */}
      <section className="py-20 md:py-28 bg-white reveal">
        <Container>
          <div className="max-w-4xl mx-auto text-center reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Accelerate Innovation with the Power of the Cloud
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed">
              The future of business is{" "}
              <span className="font-semibold text-sky-600 underline decoration-sky-400">
                cloud-first
              </span>.
              At{" "}
              <span className="font-semibold text-sky-700">
                Swastik Technology & Solutions
              </span>
              , we deliver cloud environments that provide{" "}
              <strong className="text-sky-700">agility, scalability, and enterprise-grade security</strong>{" "}
              — so your teams can focus on innovation while we manage the infrastructure.
            </p>
          </div>
        </Container>
      </section>

      {/* Key Services Section */}
      <section className="py-16 bg-slate-50 reveal">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-12 reveal">
            Our Cloud Service Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "☁️",
                title: "Hybrid & Multi-Cloud Architecture",
                desc: "Seamlessly integrate on-prem and public cloud for unified operations.",
              },
              {
                icon: "🚀",
                title: "Cloud Migration & Modernization",
                desc: "Secure, low-downtime migrations designed around your business goals.",
              },
              {
                icon: "🧠",
                title: "AI-Powered Optimization",
                desc: "Use AI to reduce cloud costs, detect inefficiencies, and optimize workloads.",
              },
              {
                icon: "🔒",
                title: "Secure Cloud Infrastructure",
                desc: "Enterprise security with identity management & encrypted cloud pipelines.",
              },
              {
                icon: "💾",
                title: "Cloud Backup & Disaster Recovery",
                desc: "Automated backups & failover strategies built for resilience.",
              },
              {
                icon: "⚙️",
                title: "Managed Cloud Services",
                desc: "Let our certified experts manage your cloud environment end-to-end.",
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

      {/* Use Cases Section */}
      <section className="py-20 bg-white reveal">
        <Container>
          <div className="max-w-5xl mx-auto text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Cloud Solutions Built for Every Business
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
              Whether you're a startup or a global enterprise, our cloud strategies are{" "}
              <span className="font-semibold text-sky-600">tailored to your digital goals</span> —
              enabling speed, scalability, and smarter decision-making.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🧩",
                title: "Enterprise Cloud Infrastructure",
                desc: "Build stable, scalable multi-cloud ecosystems for mission-critical workloads.",
              },
              {
                icon: "📱",
                title: "SaaS & Application Hosting",
                desc: "High uptime, faster performance, and full control over app deployment.",
              },
              {
                icon: "🌐",
                title: "Cloud-Native Development",
                desc: "Develop using microservices, containers, and DevOps tooling.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-8 bg-slate-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center reveal"
                style={{ transitionDelay: `${i * 140}ms` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
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
                src="/104.jpeg"
                alt="Cloud Technology Infrastructure"
                className="rounded-2xl shadow-lg"
              />
            </div>

            <div className="reveal" style={{ transitionDelay: "160ms" }}>
              <h2 className="text-3xl font-bold text-slate-800 mb-5">
                Built on the World’s Most{" "}
                <span className="text-sky-600">Trusted Cloud Platforms</span>
              </h2>

              <p className="text-slate-600 mb-5">
                We partner with{" "}
                <strong className="text-sky-700">AWS, Microsoft Azure, and Google Cloud</strong>{" "}
                to deliver secure, high-performance environments that grow with your business.
              </p>

              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>Multi-cloud orchestration & optimization</li>
                <li>AI-driven resource + cost optimization</li>
                <li>DevOps pipelines for faster deployment</li>
                <li>Continuous security & compliance auditing</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-indigo-600 text-white text-center reveal">
        <Container>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Take Your Business to the Cloud —{" "}
            <span className="underline decoration-white/70">with Confidence</span>
          </h2>

          <p className="mb-8 text-lg max-w-3xl mx-auto">
            Unlock new levels of innovation, reduce infrastructure costs, and improve scalability
            with{" "}
            <strong className="text-white">Swastik Technology & Solutions Cloud Services</strong>.
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-sky-700 font-semibold px-8 py-3 rounded-full hover:bg-slate-100 transition"
          >
            Schedule a Free Consultation
          </a>
        </Container>
      </section>
    </>
  )
}
