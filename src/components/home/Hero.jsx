"use client";

export default function Hero() {
  return (
    <section className="hero">
      {/* Fullscreen Video Background */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source
          src="https://res.cloudinary.com/deydhfxgg/video/upload/q_auto/f_auto/v1777494316/PinDown.io__boostgasmileage_1777494307_jhfnt7.mp4"
          type="video/mp4"
        />
      </video>

      {/* Black Overlay */}
      <div className="hero-overlay"></div>

      {/* Same Old Layout Content */}
      <div className="hero-content">
        {/* Left Side */}
        <div className="hero-left">
          <h1>
            BUILT FOR <br />
            GROWTH
          </h1>

          <p>
            Turn visibility into revenue with AI-powered growth systems.
          </p>

          <div className="hero-btn-group">
            <button className="hero-btn">
              Book a Discovery Call <span>→</span>
            </button>

            <button className="hero-btn">
              View Our Work <span>→</span>
            </button>
          </div>

          <p className="hero-small">
            <i>Helping modern brands scale with measurable impact</i>
          </p>
        </div>

        {/* Right Side */}
        <div className="hero-right">
          <ul className="hero-points">
            <li>Trusted by 50+ brands</li>
            <li>120+ projects delivered</li>
            <li>Results-driven growth systems</li>
          </ul>
        </div>
      </div>
    </section>
  );
}