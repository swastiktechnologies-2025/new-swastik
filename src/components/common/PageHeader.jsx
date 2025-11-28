import React from "react";
import Container from "../layout/Container";

export default function PageHeader({ title, subtitle, image }) {
  const isVideo = image?.endsWith(".mp4") || image?.endsWith(".mov");

  return (
    <section className="relative text-white py-20 md:py-28 text-center overflow-hidden">
      {/* Background (video or image) */}
      {isVideo ? (
        <video
          src={image}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/70"></div>

      {/* Content */}
      <Container>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
          {subtitle && (
            <p className="text-slate-200 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>
      </Container>
    </section>
  );
}
