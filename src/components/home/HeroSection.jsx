import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const stats = [
  { value: "50", suffix: "+", label: "Years of experience" },
  { value: "80", suffix: "+", label: "Industry awards" },
  { value: "970", suffix: "%", label: "Client satisfaction rate" },
  { value: "1000", suffix: "+", label: "Projects delivered" },
];

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row">
      {/* Left — dark */}
      <div className="bg-elio-dark text-white flex flex-col justify-between px-8 md:px-12 pt-28 md:pt-0 md:justify-center pb-12 md:pb-0 w-full md:w-1/2 min-h-[60vh] md:min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.0] mb-8 md:mb-12">
            DESIGNED<br />FOR GROWTH
          </h1>
          <p className="text-sm text-white/60 max-w-xs leading-relaxed mb-10">
            We approach every project with strategic clarity, thoughtful design, and an uncompromising focus on results.
          </p>
          <div className="flex gap-3">
            <Link
              to="/work"
              className="bg-primary text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-primary/90 transition-colors"
            >
              View Work
            </Link>
            <Link
              to="/contact"
              className="border border-white/20 text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>

        {/* Stats bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 gap-6 mt-12 md:mt-0 md:absolute md:bottom-10 md:left-10"
        >
          {stats.map((stat, i) => (
            <div key={stat.label}>
              <div className="flex items-baseline gap-0.5 mb-0.5">
                <span className="text-2xl md:text-3xl font-black">{stat.value}</span>
                <span className="text-base font-bold text-primary">{stat.suffix}</span>
              </div>
              <p className="text-[10px] text-white/40 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right — terracotta green with image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="bg-primary w-full md:w-1/2 min-h-[40vh] md:min-h-screen relative overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=900&q=80"
          alt="Creative work"
          className="w-full h-full object-cover mix-blend-multiply opacity-60 absolute inset-0"
        />
        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-white/40" />
          <span className="text-[10px] text-white/60 tracking-widest rotate-90 origin-center translate-y-4">SCROLL</span>
        </div>
      </motion.div>
    </section>
  );
}