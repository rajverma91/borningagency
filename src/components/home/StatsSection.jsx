"use client";

export default function StatsSection() {
  return (
    <section className="stats max-w-[1400px] mx-auto">
      <div className="stats-container">
        {/* LEFT TEXT */}
        <div className="stats-left">
          <h2>We turn scattered marketing into one intelligent growth system.</h2>
          <p className="mt-3"><b>No more disconnected efforts.</b></p>
          <p><b>No more inconsistent messaging.</b></p>
          <p><b>No more campaigns that don’t convert.</b></p>
         <p className="mt-3">We bring strategy, execution, and technology together to build systems that actually drive growth.</p>
         <p className="mt-3">From AI-powered workflows to performance marketing, PR visibility to conversion-led web experiences—everything works as one.</p>
        </div>

        {/* RIGHT CARDS */}
        <div className="stats-right">
          <div className="card orange">
            <h3>50+</h3>
            <p>Growth systems, campaigns, and digital assets delivered across industries</p>
          </div>

          <div className="card light border">
            <h3>20+</h3>
            <p>Founder-led brands and modern businesses supported</p>
          </div>

          <div className="card dark">
            <h3>95%</h3>
            <p>Client satisfaction through premium growth execution</p>
          </div>
        </div>
      </div>
    </section>
  );
}