import React from "react"
import PageHeader from "../components/common/PageHeader"
import ContactForm from "../components/sections/ContactForm"
import useScrollToTop from "../hooks/useScrollToTop"

export default function Contact() {
  useScrollToTop();
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Have a question or project in mind? Let’s connect."
        image="/105.jpeg"
      />
      <ContactForm />
    </>
  )
}
