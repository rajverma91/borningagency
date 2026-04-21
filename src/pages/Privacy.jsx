import React from "react";

export default function Privacy() {
  return (
    <section className="privacy-page py-16 px-6 md:px-12 lg:px-24 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">

        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <h2 className="text-2xl font-semibold text-gray-700">
            Borning Agency Privacy Policy
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            At <strong>Borning Agency</strong>, we are committed to protecting
            your privacy while delivering powerful AI-powered growth marketing
            and web systems for founder-led brands.
          </p>
          <p className="mt-2 text-gray-600">
            This Privacy Policy explains how we collect, use, store, and protect
            your information when you visit{" "}
            <a
              href="https://borningagency.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              https://borningagency.com
            </a>{" "}
            or use our services.
          </p>
        </header>

        <div className="space-y-10">

          <article>
            <h3 className="text-2xl font-semibold mb-3">
              1. Information We Collect
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Personal information such as name, email address, phone number,
                and company details you provide when contacting us or signing up
                for services.
              </li>
              <li>
                Automatically collected data including IP address, browser type,
                device information, and website usage analytics.
              </li>
              <li>
                Cookies and similar tracking technologies to improve your
                experience with our AI tools and marketing systems.
              </li>
            </ul>
          </article>

          <article>
            <h3 className="text-2xl font-semibold mb-3">
              2. How We Use Your Information
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Provide and personalize our AI-powered growth marketing
                strategies and web systems.
              </li>
              <li>
                Communicate with you regarding services, updates, and support.
              </li>
              <li>
                Analyze website usage to enhance performance and user
                experience.
              </li>
              <li>
                Improve our AI models and digital infrastructure for founder-led
                brands.
              </li>
              <li>Comply with legal obligations.</li>
            </ul>
          </article>

          <article>
            <h3 className="text-2xl font-semibold mb-3">
              3. Sharing of Information
            </h3>
            <p>
              We do not sell your personal data. We may share information only
              with trusted third-party service providers (such as hosting and
              analytics partners) who are bound by confidentiality obligations,
              or when required by law.
            </p>
          </article>

          <article>
            <h3 className="text-2xl font-semibold mb-3">
              4. Cookies and Tracking Technologies
            </h3>
            <p>
              We use essential cookies to operate the website and analytics
              cookies to understand how users interact with Borning Agency’s
              AI-powered tools.
            </p>
            <p className="mt-2">
              You can manage cookie preferences through your browser settings.
            </p>
          </article>

          <article>
            <h3 className="text-2xl font-semibold mb-3">5. Data Security</h3>
            <p>
              We implement reasonable security measures to protect your
              information. However, no online system is completely secure, and
              we cannot guarantee absolute security of data transmitted to
              Borning Agency.
            </p>
          </article>

          <article>
            <h3 className="text-2xl font-semibold mb-3">6. Your Data Rights</h3>
            <p>
              You have the right to access, correct, update, or delete your
              personal information.
            </p>
            <p className="mt-2">
              To exercise these rights, please contact us at{" "}
              <a
                href="mailto:privacy@borningagency.com"
                className="text-blue-600 underline"
              >
                privacy@borningagency.com
              </a>
              .
            </p>
            <p className="mt-2">
              We respond to all legitimate requests in accordance with
              applicable laws, including the Digital Personal Data Protection
              Act.
            </p>
          </article>

          <article>
            <h3 className="text-2xl font-semibold mb-3">7. Data Retention</h3>
            <p>
              We retain your information only as long as necessary to provide
              our services or fulfill legal requirements.
            </p>
          </article>

          <article>
            <h3 className="text-2xl font-semibold mb-3">
              8. Children’s Privacy
            </h3>
            <p>
              Borning Agency services are not intended for individuals under 18
              years of age. We do not knowingly collect personal data from
              children.
            </p>
          </article>

          <article>
            <h3 className="text-2xl font-semibold mb-3">
              9. International Data Transfers
            </h3>
            <p>
              Your data may be processed in India or other countries where our
              service providers are located. We ensure appropriate safeguards
              are in place for such transfers.
            </p>
          </article>

          <article>
            <h3 className="text-2xl font-semibold mb-3">
              10. Changes to Privacy Policy
            </h3>
            <p>
              We may update this Privacy Policy from time to time. The revised
              policy will be posted on this page with the updated “Last Updated”
              date.
            </p>
          </article>

        </div>

        <footer className="mt-16 pt-8 border-t text-center text-gray-600">
          <p>Last Updated: April 21, 2026</p>
        </footer>

      </div>
    </section>
  );
}