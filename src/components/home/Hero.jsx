"use client";

export default function Hero() {
  return (
    <section className="hero">
      {/* Background Image */}
      <div className="hero-bg"></div>

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        {/* LEFT TEXT */}
        <div className="hero-left">
          <h1>
            BUILT FOR<br />
 
 GROWTH
          </h1>
          <p style={{ width: '40%' }}>
            AI-powered digital marketing, PR visibility, and conversion-led web systems built for ambitious brands that want sharper positioning, stronger visibility, and scalable growth. We help founder-led businesses and modern service brands move faster with smarter systems, clearer messaging, and stronger commercial outcomes.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-right">
          <p>
            From acquisition strategy and media visibility to AI workflows and premium web experiences, every solution is designed to support long-term growth and measurable impact.
          </p>

          <button className="hero-btn">
            <span className="arrow">→</span>
            Book a Discovery Call
          </button>
        </div>
      </div>
    </section>
  );
}