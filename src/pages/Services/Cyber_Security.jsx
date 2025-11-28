// import React from "react";
// import Container from "../../components/layout/Container";
// import PageHeader from "../../components/common/PageHeader";
// import useScrollToTop from "../../hooks/useScrollToTop";

// export default function Cyber_Security() {
//   useScrollToTop();
//   return (
//     <>
//       <PageHeader
//         title="Cyber Security Solutions"
//         subtitle="Safeguard your digital enterprise with intelligent, proactive, and resilient cyber defense systems."
//         image="/104.jpeg"
//       />

//       {/* Overview Section */}
//       <section className="py-20 md:py-28 bg-white">
//         <Container>
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
//               Protecting What Matters Most — Your Digital Assets
//             </h2>
//             <p className="text-slate-600 text-lg leading-relaxed">
//               As cyber threats evolve in scale and sophistication, organizations
//               must move beyond reactive defense.{" "}
//               <span className="font-semibold text-sky-600">
//                 Swastik Technology & Solutions ’s Cyber Security Solutions
//               </span>{" "}
//               provide multi-layered protection, real-time threat intelligence,
//               and compliance-driven frameworks to ensure your business operates
//               securely in the digital age.
//             </p>
//           </div>
//         </Container>
//       </section>

//       {/* Key Services Section */}
//       <section className="py-16 bg-slate-50">
//         <Container>
//           <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-12">
//             Our Core Cyber Security Capabilities
//           </h2>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: "🛡️",
//                 title: "24/7 Threat Monitoring & Response",
//                 desc: "Continuous network surveillance, anomaly detection, and automated incident response powered by AI analytics.",
//               },
//               {
//                 icon: "🔐",
//                 title: "Zero Trust Security Architecture",
//                 desc: "Authenticate, verify, and monitor every connection to prevent unauthorized access and insider threats.",
//               },
//               {
//                 icon: "🧠",
//                 title: "AI-Driven Threat Intelligence",
//                 desc: "Leverage advanced analytics and global intelligence feeds to detect, predict, and neutralize cyber attacks.",
//               },
//               {
//                 icon: "🧩",
//                 title:
//                   "VAPT (Vulnerability Assessment & Penetration Testing) Analysis",
//                 desc: "Identify, analyze, and mitigate security vulnerabilities through systematic assessment and simulated attacks to fortify system resilience.",
//               },
//               {
//                 icon: "🧱",
//                 title: "Network & Endpoint Protection",
//                 desc: "Deploy next-gen firewalls, IDS/IPS, and endpoint security solutions for unified digital protection.",
//               },
//               {
//                 icon: "💾",
//                 title: "Data Encryption & Identity Management",
//                 desc: "Secure sensitive data with enterprise-grade encryption, IAM controls, and multi-factor authentication.",
//               },
//               {
//                 icon: "📜",
//                 title: "Compliance & Risk Management",
//                 desc: "Ensure adherence to ISO 27001, GDPR, HIPAA, and other global standards through proactive auditing and reporting.",
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
//       <section className="py-20 bg-white">
//         <Container>
//           <div className="max-w-5xl mx-auto text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
//               Defense Strategies Built for Every Industry
//             </h2>
//             <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
//               From financial institutions to healthcare and manufacturing, our
//               cybersecurity solutions are tailored to safeguard your industry’s
//               most critical assets, data, and operations.
//             </p>
//           </div>

//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {[
//               {
//                 icon: "💳",
//                 title: "Financial & Banking",
//                 desc: "Prevent fraud, secure transactions, and maintain compliance with AI-driven analytics, identity protection, and encrypted systems.",
//               },
//               {
//                 icon: "🏥",
//                 title: "Healthcare",
//                 desc: "Protect patient records, connected medical devices, and clinical systems with HIPAA-compliant frameworks and 24/7 monitoring.",
//               },
//               {
//                 icon: "🏭",
//                 title: "Manufacturing & Industrial",
//                 desc: "Secure IoT-enabled production networks, operational technologies, and supply chains from ransomware and advanced cyber threats.",
//               },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="group p-8 bg-slate-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center"
//               >
//                 <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
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
//                 alt="Cyber Security Technology"
//                 className="rounded-2xl shadow-lg"
//               />
//             </div>
//             <div>
//               <h2 className="text-3xl font-bold text-slate-800 mb-5">
//                 Intelligent Defense Backed by Advanced Technology
//               </h2>
//               <p className="text-slate-600 mb-5">
//                 Swastik Technology & Solutions integrates next-generation
//                 cybersecurity technologies — including AI-driven analytics,
//                 zero-trust architectures, and behavior-based intrusion detection
//                 — to deliver proactive, adaptive, and automated protection.
//               </p>
//               <ul className="list-disc list-inside space-y-2 text-slate-600">
//                 <li>AI/ML-powered intrusion detection and response</li>
//                 <li>Cloud security posture management</li>
//                 <li>Endpoint detection and response (EDR)</li>
//                 <li>Integrated Security Operations Center (SOC)</li>
//               </ul>
//             </div>
//           </div>
//         </Container>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-sky-600 to-indigo-600 text-white text-center">
//         <Container>
//           <h2 className="text-3xl md:text-4xl font-semibold mb-4">
//             Stay Ahead of Evolving Cyber Threats
//           </h2>
//           <p className="mb-8 text-lg max-w-3xl mx-auto">
//             Partner with Swastik Technology & Solutions to strengthen your
//             cybersecurity posture. Detect threats faster, respond smarter, and
//             protect your enterprise with confidence.
//           </p>
//           <a
//             href="/contact"
//             className="inline-block bg-white text-sky-700 font-semibold px-8 py-3 rounded-full hover:bg-slate-100 transition"
//           >
//             Speak with a Security Expert
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

export default function Cyber_Security() {
  useScrollToTop();
  useScrollAnimation();

  return (
    <>
      <PageHeader
        title="Cyber Security Solutions"
        subtitle="Safeguard your digital enterprise with intelligent, proactive, and resilient cyber defense systems."
        image="/104.jpeg"
      />

      {/* Overview Section */}
      <section className="py-20 md:py-28 bg-white reveal">
        <Container>
          <div className="max-w-4xl mx-auto text-center reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Protecting What Matters Most — Your Digital Assets
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed">
              Modern cyber threats are evolving fast.{" "}
              <span className="font-semibold text-sky-600 underline decoration-sky-400">
                Reactive defense is no longer enough.
              </span>{" "}
              At{" "}
              <span className="font-semibold text-sky-700">
                Swastik Technology & Solutions
              </span>
              , we deliver{" "}
              <strong className="text-sky-700">
                proactive, intelligent, and multi-layered cybersecurity
              </strong>{" "}
              frameworks that protect your enterprise from every angle.
            </p>
          </div>
        </Container>
      </section>

      {/* Key Services Section */}
      <section className="py-16 bg-slate-50 reveal">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-12 reveal">
            Our Core Cyber Security Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🛡️",
                title: "24/7 Threat Monitoring & Response",
                desc: "AI-powered detection with round-the-clock incident response.",
              },
              {
                icon: "🔐",
                title: "Zero Trust Security Architecture",
                desc: "Every user, device, and connection is verified — always.",
              },
              {
                icon: "🧠",
                title: "AI-Driven Threat Intelligence",
                desc: "Advanced analytics identify and neutralize attacks proactively.",
              },
              {
                icon: "🧩",
                title: "VAPT (Vulnerability Assessment & Penetration Testing)",
                desc: "Identify system vulnerabilities and strengthen your security posture.",
              },
              {
                icon: "🧱",
                title: "Network & Endpoint Protection",
                desc: "Firewalls, IDS/IPS, and endpoint security for unified protection.",
              },
              {
                icon: "💾",
                title: "Data Encryption & Identity Management",
                desc: "Enterprise-grade IAM controls and robust data encryption.",
              },
              {
                icon: "📜",
                title: "Compliance & Risk Management",
                desc: "Ensure compliance with ISO 27001, GDPR, HIPAA, and more.",
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
              Defense Strategies Built for Every Industry
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
              From finance to manufacturing, our cybersecurity solutions deliver{" "}
              <span className="font-semibold text-sky-600">
                tailored protection for your most critical operations
              </span>
              .
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "💳",
                title: "Financial & Banking",
                desc: "Fraud prevention, identity protection, and secure encrypted systems.",
              },
              {
                icon: "🏥",
                title: "Healthcare",
                desc: "HIPAA-compliant protection for patient data and connected medical devices.",
              },
              {
                icon: "🏭",
                title: "Manufacturing & Industrial",
                desc: "Safeguard OT networks, IoT devices, and production systems from threats.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-8 bg-slate-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center reveal"
                style={{ transitionDelay: `${i * 130}ms` }}
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
                src="/106.jpeg"
                alt="Cyber Security Technology"
                className="rounded-2xl shadow-lg"
              />
            </div>

            <div className="reveal" style={{ transitionDelay: "160ms" }}>
              <h2 className="text-3xl font-bold text-slate-800 mb-5">
                Intelligent Defense Powered by{" "}
                <span className="text-sky-600">Advanced Cyber Technologies</span>
              </h2>

              <p className="text-slate-600 mb-5">
                Swastik integrates{" "}
                <strong className="text-sky-700">
                  AI-driven analytics, zero-trust architecture, and behavioral intrusion detection
                </strong>{" "}
                to stay ahead of evolving cyber threats.
              </p>

              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>AI/ML-powered threat detection & response</li>
                <li>Cloud security posture management</li>
                <li>Endpoint detection & response (EDR)</li>
                <li>Integrated Security Operations Center (SOC)</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-indigo-600 text-white text-center reveal">
        <Container>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Stay Ahead of{" "}
            <span className="underline decoration-white/60">Evolving Cyber Threats</span>
          </h2>

          <p className="mb-8 text-lg max-w-3xl mx-auto">
            Strengthen your security posture with{" "}
            <strong className="text-white">
              AI-driven monitoring, adaptive defense, and proactive intelligence
            </strong>
            .
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-sky-700 font-semibold px-8 py-3 rounded-full hover:bg-slate-100 transition"
          >
            Speak with a Security Expert
          </a>
        </Container>
      </section>
    </>
  );
}

