import React from "react";

export default function Privacy() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

      <p className="text-muted-foreground mb-6">
        We value your privacy and protect your personal information.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Information We Collect</h2>
      <p>Email, contact details, analytics data, and website usage.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">How We Use It</h2>
      <p>To improve services, contact users, and enhance experience.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Security</h2>
      <p>We use secure systems to protect your information.</p>
    </section>
  );
}