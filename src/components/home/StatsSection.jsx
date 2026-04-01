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
          <p>At Borning Agency, we work with founder-led brands, ambitious service businesses, and modern operators who need more than disconnected marketing efforts. Most brands today struggle with fragmented vendors, inconsistent messaging, weak digital presence, and systems that do not convert.
          </p>
          <p>We solve that by bringing together strategy, execution, and technology under one focused growth framework.</p>
          <p>From AI-powered workflows and performance-led digital campaigns to founder visibility through PR and conversion-focused web development, we create systems that are designed to strengthen your market presence and accelerate business momentum.</p>
          <p>We are not a bloated service agency. We are a selective growth partner built for clarity, speed, and outcomes.</p>
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