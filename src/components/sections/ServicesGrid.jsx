import React from "react"
import { SERVICES } from "../../data/services"
import Card from "../ui/Card"
import Button from "../ui/Button"
import { Link } from "react-router-dom"
import Container from "../layout/Container"

export default function ServicesGrid() {
  return (
    <section className="py-20 md:py-14 bg-slate-50" id="services">
      <Container>
      <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Our Core Services
          </h2>
          <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
            Explore our range of enterprise-grade solutions engineered for
            performance, security, and scalability.
          </p>
        </div>
        <div
          className="text-center mb-12 bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden"
          style={{ backgroundImage: "url('/103.jpeg')" }}
        >
          <div className="bg-slate-900/40 py-12 px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Our Core Services
            </h2>
          <p className="text-slate-100/90 mt-2 max-w-2xl mx-auto">
              Explore our range of enterprise-grade solutions engineered for
              performance, security, and scalability.
            </p>
          </div>
        </div>

        {/* <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 cursor-pointer">
          {SERVICES.map((srv) => (
            <Card
              key={srv.id}
              title={srv.title}
              footer={
                <Link to={srv.slug}>
                  <Button variant="ghost" className="text-accent font-semibold">
                    Learn More →
                  </Button>
                </Link>
              }
            >
              {srv.short}
            </Card>
          ))}
        </div> */}
     <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
  {SERVICES.map((srv) => (
    <Link
      to={srv.slug}
      key={srv.id}
      className="group block"
    >
      <div className="
        h-full bg-white rounded-2xl shadow-sm 
        p-8 text-center border border-slate-200
        transition-all duration-300
        hover:shadow-xl hover:-translate-y-1 hover:border-accent/50
      ">
        <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-accent">
          {srv.title}
        </h3>

        <p className="text-slate-600 leading-relaxed mb-6">
          {srv.short}
        </p>

        <span className="text-accent font-semibold inline-flex items-center gap-1">
          Learn More →
        </span>
      </div>
    </Link>
  ))}
</div>



      </Container>
    </section>
  )
}
