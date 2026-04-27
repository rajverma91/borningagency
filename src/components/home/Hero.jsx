"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const bgRef = useRef(null);

  useEffect(() => {
    let x = 0;
    let y = 0;

    const moveBg = () => {
      x += 0.03; // horizontal slow move
      y += 0.02; // vertical slow move

      if (bgRef.current) {
        bgRef.current.style.transform = `scale(1.08) translate(${Math.sin(x) * 20}px, ${Math.cos(y) * 15}px)`;
      }

      requestAnimationFrame(moveBg);
    };

    moveBg();
  }, []);

  return (
    <section className="hero">
      {/* Background Image */}
      <div ref={bgRef} className="hero-bg"></div>

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        {/* LEFT TEXT */}
        <div className="hero-left">
          <h1>
            BUILT FOR <br />
            GROWTH
          </h1>

          <p>
           Turn visibility into revenue with AI-powered growth systems.
          </p>
          {/* CTA Buttons */}
<div className="hero-btn-group">
 <button className="hero-btn">
            <span>→</span> Book a Discovery Call
          </button>
 <button className="hero-btn">
            <span>→</span> View Our Work
          </button>
</div>
 <p className="mt-5"><i>Helping modern brands scale with measurable impact
</i></p>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <ul className="hero-points">
  <li className="point-1">Trusted by 50+ brands</li>
  <li className="point-2">120+ projects delivered</li>
  <li className="point-3">Results-driven growth systems</li>
</ul>

      
        </div>
      </div>
    </section>
  );
}