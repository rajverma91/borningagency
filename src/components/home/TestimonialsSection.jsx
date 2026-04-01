import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { testimonials } from '@/lib/siteData';

export default function TestimonialsSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative bg-elio-dark"
      style={{ minHeight: `${100 + testimonials.length * 60}vh` }}
    >
      {/* Sticky heading */}
      <div className="sticky top-0 h-screen flex items-center justify-center pointer-events-none overflow-hidden">
        <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white text-center leading-[0.95] tracking-tight px-6">
          WHAT OUR<br />CLIENTS SAY
        </h2>
      </div>

      {/* Cards */}
      <div className="absolute w-[1400px] m-auto inset-0 top-[60vh] flex flex-col gap-16 px-6 md:px-10 pb-32">
        {testimonials.map((t, i) => {
          const isLeft = i % 2 === 0;

          return (
            <motion.div
              key={t.name}
              initial={{
                opacity: 0,
                x: isLeft ? -80 : 80,
                y: 60,
              }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`relative z-10 w-full md:w-[48%] max-w-md 
              ${isLeft ? 'self-start' : 'self-end'}
              bg-white/10 backdrop-blur-sm border border-white/10 
              rounded-2xl p-7`}
            >
              {/* Quote */}
              <div className="text-3xl font-black text-white/30 mb-3">"</div>

              <p className="text-base md:text-lg font-semibold text-white leading-relaxed mb-6">
                {t.quote}
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover grayscale"
                />
                <div>
                  <p className="text-sm font-bold text-white">{t.name}</p>
                  <p className="text-xs text-white/40">{t.role}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}