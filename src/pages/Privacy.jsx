import React from "react";

export default function Privacy() {
  const sections = [
    {
      title: "1. Information We Collect",
      list: [
        "Personal details such as name, email, phone number, and company information.",
        "Technical data including IP address, browser type, device details, and analytics data.",
        "Cookies and similar technologies used to improve performance and user experience.",
      ],
    },
    {
      title: "2. How We Use Your Information",
      list: [
        "Deliver and personalize our services.",
        "Respond to inquiries and provide support.",
        "Improve website speed, performance, and security.",
        "Enhance AI systems and internal workflows.",
        "Meet legal and compliance obligations.",
      ],
    },
    {
      title: "3. Sharing of Information",
      text: "We do not sell your personal information. Data may only be shared with trusted service providers such as hosting, analytics, payment, or technical partners under confidentiality obligations, or when legally required.",
    },
    {
      title: "4. Cookies & Tracking",
      text: "We use essential cookies for functionality and analytics cookies to understand how visitors use our website. You may disable cookies through your browser settings.",
    },
    {
      title: "5. Data Security",
      text: "We apply reasonable technical and organizational safeguards to protect your data. However, no online platform can guarantee complete security.",
    },
    {
      title: "6. Your Rights",
      text: "You may request access, correction, deletion, or updates to your personal data, subject to applicable laws.",
    },
    {
      title: "7. Data Retention",
      text: "We retain information only for as long as necessary to provide services, maintain records, or comply with legal obligations.",
    },
    {
      title: "8. Children's Privacy",
      text: "Our services are not intended for users under 18 years of age, and we do not knowingly collect children's personal data.",
    },
    {
      title: "9. International Transfers",
      text: "Your data may be processed in India or other countries where our service providers operate, with appropriate safeguards where required.",
    },
    {
      title: "10. Policy Updates",
      text: "We may revise this Privacy Policy from time to time. Updates will be published on this page with the latest revision date.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 border border-gray-100 mb-10">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1 rounded-full mb-5">
            Privacy & Protection
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-left">
            Privacy Policy
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed text-left">
            At <strong>Borning Agency</strong>, we value your privacy and are
            committed to protecting your personal information while delivering
            AI-powered growth marketing and web systems.
          </p>

          <p className="mt-4 text-gray-500 text-left">
            This policy explains how we collect, use, and safeguard your data
            when you use our website or services.
          </p>
        </div>

        {/* Sections */}
        <div className="grid gap-6">
          {sections.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-7 border border-gray-100 hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-left">
                {item.title}
              </h3>

              {item.text && (
                <p className="text-gray-600 leading-8 text-left">{item.text}</p>
              )}

              {item.list && (
                <ul className="space-y-3 text-left">
                  {item.list.map((li, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <span className="w-2 h-2 mt-3 bg-green-600 rounded-full"></span>
                      <span>{li}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Contact Box */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl shadow-xl p-10 mt-10 text-white">
          <h3 className="text-3xl font-bold mb-4 text-left">
            Privacy Contact
          </h3>

          <p className="text-green-100 text-lg mb-5 text-left">
            For privacy requests or data-related questions, contact us anytime.
          </p>

          <a
            href="mailto:privacy@borningagency.com"
            className="inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            privacy@borningagency.com
          </a>
        </div>

        {/* Footer */}
        <div className="mt-10 text-left text-sm text-gray-500">
          Last Updated: April 21, 2026
        </div>

      </div>
    </section>
  );
}