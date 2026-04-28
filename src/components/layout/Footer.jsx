import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaXTwitter,
  FaDribbble,
  FaBehance,
} from "react-icons/fa6";

const pageLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Work", path: "/work" },
  { label: "About", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const socialLinks = [
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: <FaInstagram size={14} />,
  },
  {
    name: "X (Twitter)",
    url: "https://x.com",
    icon: <FaXTwitter size={14} />,
  },
  {
    name: "Dribbble",
    url: "https://dribbble.com",
    icon: <FaDribbble size={14} />,
  },
  {
    name: "Behance",
    url: "https://behance.net",
    icon: <FaBehance size={14} />,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0b0f1a] text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-10 border-b border-white/10 pb-12">

          {/* Brand */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Borning Agency</h2>
            <p className="text-sm text-white/50 mb-4">
              Building systems for scalable growth.
            </p>
            <p className="text-xs text-white/40">
              AI-powered marketing • PR • Web
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm text-white/60 mb-4">Navigation</h3>
            <div className="flex flex-col gap-2">
              {pageLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-white/70 hover:text-white transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm text-white/60 mb-4">Social</h3>
            <div className="flex flex-col gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition"
                >
                  <span className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20">
                    {item.icon}
                  </span>
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm text-white/60 mb-4">Contact</h3>

            <a
              href="mailto:info@borningagency.com"
              className="flex items-center gap-3 text-white hover:text-white/80 transition"
            >
              <span className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20">
                ✉
              </span>
              info@borningagency.com
            </a>

            <p className="text-sm text-white/50 mt-4 flex items-center gap-2">
              → Let’s build something meaningful.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-6 text-xs text-white/40">
          <p>© 2026 Borning Agency. All rights reserved.</p>
          <p>
            Designed & built by{" "}
            <span className="text-white">Borning Agency</span>
          </p>
        </div>
      </div>
    </footer>
  );
}