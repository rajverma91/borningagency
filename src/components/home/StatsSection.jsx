"use client";

export default function StatsSection() {
  return (
    <section className="stats max-w-[1400px] mx-auto">
      <div className="stats-container">
        {/* LEFT TEXT */}
        <div className="stats-left">
          <h2>
            We turn scattered marketing into one sharp, intelligent growth system.

          </h2>
          <p>We bring strategy, execution, and technology together to build systems that actually drive growth.
          </p>
          <p>From AI-powered workflows to performance marketing, PR visibility to conversion-led web experiences—everything works as one.</p>
        
        </div>

        {/* RIGHT CARDS */}
        <div className="stats-right">
          <div className="card orange">
            <h3>50+</h3>
            <p>Growth systems, campaigns, and digital assets successfully delivered across multiple industries</p>
          </div>

          <div className="card light border">
            <h3>20+</h3>
            <p>Founder-led brands and modern businesses supported with strategic growth execution</p>
          </div>

          <div className="card dark">
            <h3>95%</h3>
            <p>Client satisfaction through premium communication, performance, and trust-led delivery</p>
          </div>

          <div className="card light border">
            <h3>100%</h3>
            <p>Strategy-led execution with clear business alignment and measurable goals</p>
          </div>
        </div>
      </div>
    </section>
  );
}