import React from "react";

export default function Terms() {
  return (
    <section className="terms-page py-16 px-6 md:px-12 lg:px-24 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Terms of Use</h1>
          <h2 className="text-2xl font-semibold text-gray-700">
            Borning Agency Terms of Use
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Welcome to <strong>Borning Agency</strong> — your AI-powered growth
            marketing and web systems partner for founder-led brands.
          </p>
          <p className="mt-2 text-gray-600">
            These Terms of Use govern your access to and use of{" "}
            <a
              href="https://borningagency.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              https://borningagency.com
            </a>{" "}
            and all related services.
          </p>
        </header>

        <div className="space-y-10">

          <article>
            <h3 className="text-2xl font-semibold mb-3">1. Our Services</h3>
            <p>
              Borning Agency offers AI-powered growth marketing strategies, web
              systems, automation, SEO, and digital infrastructure designed to
              help founder-led brands scale efficiently.
            </p>
          </article>

          <article>
            <h3 className="text-2xl font-semibold mb-3">
              2. User Responsibilities
            </h3>
            <p>
              You agree to use the website only for lawful purposes. You must
              not misuse our AI systems, attempt to interfere with them, upload
              harmful content, or engage in any unauthorized scraping or data
              mining.
            </p>
            <p className="mt-2">
              You are responsible for keeping your account information secure.
            </p>
          </article>

          <article>
            <h3 className="text-2xl font-semibold mb-3">
              3. Intellectual Property
            </h3>
            <p>
              All content, AI models, strategies, designs, and materials on
              Borning Agency are our exclusive intellectual property.
            </p>
            <p className="mt-2">
              You may not copy, modify, reproduce, or distribute them without
              our prior written consent.
            </p>
          </article>

          <article>
            <h3 className="text-2xl font-semibold mb-3">4. User Content</h3>
            <p>
              You retain ownership of any content you submit. By submitting it,
              you grant us a worldwide, non-exclusive, royalty-free license to
              use and process it solely to provide and improve our services.
            </p>
          </article>

          <article>
            <h3 className="text-2xl font-semibold mb-3">
              5. Prohibited Activities
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the Site for any illegal purpose</li>
              <li>Reverse engineer or interfere with our AI tools</li>
              <li>Upload viruses or malicious code</li>
              <li>Impersonate others or harass users</li>
            </ul>
          </article>

          <article>
            <h3 className="text-2xl font-semibold mb-3">6. Disclaimers</h3>
            <p>
              The website and services are provided “as is” without any
              warranties. We do not guarantee uninterrupted access or error-free
              performance of our AI-powered growth marketing systems.
            </p>
          </article>

          <article>
            <h3 className="text-2xl font-semibold mb-3">
              7. Limitation of Liability
            </h3>
            <p>
              Borning Agency shall not be liable for any indirect, incidental,
              or consequential damages arising from your use of the Site.
            </p>
            <p className="mt-2">
              Our total liability shall not exceed the amount you paid us (if
              any) in the last twelve months.
            </p>
          </article>

          <article>
            <h3 className="text-2xl font-semibold mb-3">8. Termination</h3>
            <p>
              We reserve the right to suspend or terminate your access at any
              time for breach of these Terms.
            </p>
          </article>

          <article>
            <h3 className="text-2xl font-semibold mb-3">9. Governing Law</h3>
            <p>
              These Terms are governed by the laws of India. Disputes shall be
              subject to the exclusive jurisdiction of courts in Ludhiana,
              Punjab.
            </p>
          </article>

          <article>
            <h3 className="text-2xl font-semibold mb-3">
              10. Changes to Terms
            </h3>
            <p>
              We may update these Terms occasionally. Continued use of the
              website after changes constitutes your acceptance of the revised
              Terms.
            </p>
          </article>

          <article>
            <h3 className="text-2xl font-semibold mb-3">Contact Us</h3>
            <p>
              If you have any questions about these Terms of Use, please contact
              us at{" "}
              <a
                href="mailto:hello@borningagency.com"
                className="text-blue-600 underline"
              >
                hello@borningagency.com
              </a>
            </p>
          </article>

        </div>

        <footer className="mt-16 pt-8 border-t text-center text-gray-600">
          <p>
            By using Borning Agency’s AI-powered growth marketing and web
            systems, you acknowledge that you have read and agree to these Terms
            of Use.
          </p>
        </footer>

      </div>
    </section>
  );
}