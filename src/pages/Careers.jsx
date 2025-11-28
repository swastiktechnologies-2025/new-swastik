import React from "react";
import Container from "../components/layout/Container";
import PageHeader from "../components/common/PageHeader";
import useScrollAnimation from "../hooks/useScrollAnimation";
import useScrollToTop from "../hooks/useScrollToTop";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

export default function Careers() {
  useScrollToTop();
  useScrollAnimation();

  const JOBS = [
    {
      title: "Frontend Developer (React)",
      type: "Full Time",
      location: "Mumbai, India",
      desc: "Build high-quality UI components and modern web experiences using React and TailwindCSS.",
    },
    {
      title: "Backend Developer (Node.js)",
      type: "Full Time",
      location: "Pune, India",
      desc: "Develop scalable REST APIs, integrate databases, and optimize server-side logic.",
    },
    {
      title: "UI/UX Designer",
      type: "Hybrid",
      location: "Bangalore, India",
      desc: "Create user-centric designs, prototypes, and wireframes for web & mobile applications.",
    },
  ];

  return (
    <>
      <PageHeader
        title="Careers at Swastik Technology & Solutions"
        subtitle="Be part of a team that builds intelligent, secure, and future-ready digital solutions."
        image="/106.jpeg"
      />

      {/* Introduction */}
      <section className="py-20 bg-white reveal">
        <Container>
          <div className="max-w-4xl mx-auto text-center reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Build Your Future With Us
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              At{" "}
              <span className="font-semibold text-sky-600">
                Swastik Technology & Solutions
              </span>
              , we believe in innovation, creativity, and the power of teamwork.
              Join a company where{" "}
              <strong className="text-sky-700">
                your ideas shape technology and your work makes an impact.
              </strong>
            </p>
          </div>
        </Container>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-slate-50 reveal">
        <Container>
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12 reveal">
            Why Work With Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚀",
                title: "Growth & Opportunities",
                desc: "We provide clear career paths, training, and continuous learning.",
              },
              {
                icon: "💡",
                title: "Innovative Environment",
                desc: "Work on cutting-edge AI, cloud, cybersecurity, and IoT solutions.",
              },
              {
                icon: "🤝",
                title: "Collaborative Culture",
                desc: "Join a diverse team that values creativity, ownership, and teamwork.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition reveal"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white reveal">
        <Container>
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12 reveal">
            Open Positions
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {JOBS.map((job, i) => (
              <div
                key={i}
                className="p-8 bg-slate-50 rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-1 reveal"
                style={{ transitionDelay: `${i * 130}ms` }}
              >
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {job.title}
                </h3>
                <p className="text-slate-600 mb-3">{job.desc}</p>

                <p className="text-sm text-slate-500 mb-1">
                  <strong className="text-sky-600">Type:</strong> {job.type}
                </p>
                <p className="text-sm text-slate-500 mb-4">
                  <strong className="text-sky-600">Location:</strong> {job.location}
                </p>

                <div className="flex justify-center md:justify-start gap-3 pt-4">
                 
                
                  <Link
                    to="/contact"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  >
                    <Button variant="outline" className="button-fill">
                      <span>Contact Us</span>
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-indigo-600 text-white text-center reveal">
        <Container>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Ready to Take the Next Step in Your Career?
          </h2>

          <p className="max-w-3xl mx-auto mb-8 text-lg">
            Join a team where{" "}
            <strong className="text-white underline decoration-white/60">
              innovation meets opportunity
            </strong>{" "}
            and every member contributes to building smarter digital solutions.
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-sky-700 font-semibold px-8 py-3 rounded-full hover:bg-slate-100 transition"
          >
            Contact HR Team
          </a>
        </Container>
      </section>
    </>
  );
}

