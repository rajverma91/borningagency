"use client";

export default function StatsSection() {
  return (
    <section className="stats max-w-[1400px] mx-auto">
      <div className="stats-container">
        {/* LEFT TEXT */}
        <div className="stats-left">
          <h2>We saw it everywhere—marketing that looked busy, but wasn’t really working.</h2>
          <p className="mt-3">Scattered efforts, disconnected channels, and messaging that kept changing from one campaign to another. Campaigns were running, but they weren’t converting—and that’s where the real problem existed.</p>
          <p className="mt-3">Not in the lack of tools, or talent, or even effort, but in the absence of a system that brings everything together.
</p>
      
         <p className="mt-3"><b>So we changed the way it works.</b></p>
         <p className="mt-3">We turn scattered marketing into one intelligent growth system—where every part is connected, aligned, and built to perform with clarity and purpose.</p>
         <p className="mt-3">No more disconnected efforts, no more inconsistent messaging, and no more campaigns that fail to convert.
</p>
         <p className="mt-3">Instead, strategy, execution, and technology work together—creating a unified system designed for real, measurable growth.
</p>
         <p className="mt-3">From <b>AI-powered</b> workflows that streamline operations, to performance marketing that drives consistent results, to PR visibility that builds authority, and conversion-focused web experiences that turn attention into action—everything works as one.
</p>
         <p className="mt-3">Because growth doesn’t come from doing more, it comes from building a system where everything moves in sync.
</p>
        </div>

        {/* RIGHT CARDS */}
        <div className="stats-right">
          <div className="card green">
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