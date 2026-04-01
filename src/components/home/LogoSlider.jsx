"use client";

export default function LogoSlider() {
  const logos = [
    "Synq",
    "Viora",
    "Leaf",
    "Abstract",
    "Vibe",
    "Nenn",
    "Bloom",
    "Kios",
  ];

  return (
    <section className="logo-slider">
      <div className="slider-track">
        {/* First Loop */}
        {logos.map((logo, index) => (
          <div className="logo-card" key={index}>
            <span>{logo}</span>
          </div>
        ))}

        {/* Duplicate for infinite effect */}
        {logos.map((logo, index) => (
          <div className="logo-card" key={`dup-${index}`}>
            <span>{logo}</span>
          </div>
        ))}
      </div>
    </section>
  );
}