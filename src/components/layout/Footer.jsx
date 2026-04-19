import React from 'react';
import { Link } from 'react-router-dom';

const pageLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Work", path: "/work" },
  { label: "About", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];


const socialLinks = [
  { name: "Instagram", url: "https://instagram.com" },
  { name: "X Twitter", url: "https://x.com" },
  { name: "Dribbble", url: "https://dribbble.com" },
  { name: "Behance", url: "https://behance.net" },
];

const legalLinks = [
  { name: "Privacy", path: "/privacy" },
  { name: "Terms of Use", path: "/terms-of-use" },
];

export default function Footer() {
  return (
    <footer className="bg-elio-dark text-white rounded-t-3xl overflow-hidden mt-0">
      {/* Top content */}
      <div className="px-10 w-[1400px] m-auto md:px-14 pt-14 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {/* Page nav links — large */}
          <div className="flex flex-col gap-1.5">
            {pageLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-xl md:text-2xl font-bold text-white/60 hover:text-white transition-colors leading-tight"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="flex flex-col gap-1.5 pt-1">
            {socialLinks.map((item) => (
    <a
      key={item.name}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-primary transition"
    >
      {item.name}
    </a>
  ))}
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-1.5 pt-1">
             {legalLinks.map((item) => (
    <Link
      key={item.name}
      to={item.path}
      className="hover:text-primary transition"
    >
      {item.name}
    </Link>
  ))}
          </div>

          {/* Email CTA */}
          <div className="col-span-2 md:col-span-1 flex items-start">
            <a
              href="mailto:hello@eliostudio.com"
              className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-[1.1] hover:text-white/80 transition-colors"
            >
              info@<br />borningagency.com
            </a>
          </div>

        </div>
      </div>

      {/* Giant watermark wordmark */}
     <div className="w-full m-auto text-center overflow-hidden leading-none">
  <p className="
    font-black text-white/10 whitespace-nowrap select-none
    text-[clamp(60px,16vw,160px)]
    max-[1500px]:text-[clamp(50px,12vw,120px)]
  ">
    BORNING AGENCY
  </p>
</div>

      {/* Bottom bar */}
      <div className="px-10 md:px-14 py-5 flex flex-col md:flex-row justify-between items-center gap-2 border-t border-white/5">
        <span className="text-[11px] text-white/25">2026 ©. All rights reserved.</span>
        <span className="text-[11px] text-white/25">Made in Agency · Created by borning agency</span>
      </div>
    </footer>
  );
}