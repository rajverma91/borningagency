import React from "react";

export default function Terms() {
  const sections = [
    {
      title: "1. Our Services",
      text: "Borning Agency provides AI-powered growth marketing, web systems, automation, SEO, branding, and digital infrastructure designed to help founder-led brands scale efficiently.",
    },
    {
      title: "2. User Responsibilities",
      text: "You agree to use this website only for lawful purposes. You must not misuse our systems, upload harmful content, interfere with our services, or perform unauthorized scraping or data mining.",
    },
    {
      title: "3. Intellectual Property",
      text: "All content, frameworks, designs, systems, and materials on Borning Agency are protected intellectual property and may not be copied, modified, or redistributed without written permission.",
    },
    {
      title: "4. User Content",
      text: "You retain ownership of submitted content. By sharing it with us, you grant us a limited license to use it only for delivering and improving our services.",
    },
    {
      title: "5. Prohibited Activities",
      list: [
        "Illegal use of the website",
        "Reverse engineering tools or systems",
        "Uploading malicious software",
        "Impersonation or abusive behavior",
      ],
    },
    {
      title: "6. Disclaimers",
      text: "All services are provided on an 'as is' basis without warranties. We do not guarantee uninterrupted access or error-free performance.",
    },
    {
      title: "7. Limitation of Liability",
      text: "Borning Agency shall not be liable for indirect or consequential damages. Total liability is limited to fees paid in the last 12 months.",
    },
    {
      title: "8. Termination",
      text: "We may suspend or terminate access if these Terms are violated.",
    },
    {
      title: "9. Governing Law",
      text: "These Terms are governed by the laws of India. Any disputes shall fall under the jurisdiction of Ludhiana, Punjab courts.",
    },
    {
      title: "10. Changes to Terms",
      text: "We may update these Terms periodically. Continued use of the website means acceptance of revised terms.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 border border-gray-100 mb-10">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1 rounded-full mb-5">
            Legal Document
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-left">
            Terms of Use
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed text-left">
            Welcome to <strong>Borning Agency</strong>. These Terms govern your
            use of our website, services, AI-powered systems, and digital growth
            solutions.
          </p>
        </div>

        {/* Content */}
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
                <ul className="space-y-3 text-gray-600 text-left">
                  {item.list.map((li, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-2 h-2 mt-3 bg-blue-600 rounded-full"></span>
                      <span>{li}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl shadow-xl p-10 mt-10 text-white">
          <h3 className="text-3xl font-bold mb-4 text-left">Contact Us</h3>
          <p className="text-lg text-left text-blue-100 mb-4">
            Questions about these Terms? Reach out anytime.
          </p>

          <a
            href="mailto:hello@borningagency.com"
            className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            hello@borningagency.com
          </a>
        </div>

        {/* Footer */}
        <div className="text-left mt-10 text-gray-500 text-sm">
          By using Borning Agency services, you acknowledge and accept these
          Terms of Use.
        </div>
      </div>
    </section>
  );
}