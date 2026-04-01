import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { services } from '@/lib/siteData';

const serviceImages = [
  "https://framerusercontent.com/images/gT85FOFg4tegqYlpO1nQPV4jHaQ.png",
  "https://framerusercontent.com/images/P1hRHBt6kWFY0ow11TlWtsEStU.png",
  "https://framerusercontent.com/images/AoFHVQkJO0NeFu9DIiLHQTVlQ.png",
  "https://framerusercontent.com/images/9z7qfSWBrueySENldAQr2dGle8.png",
];

function ServiceCard({ service, image, index, total }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1]);
  const top = 80 + index * 24; // stacking offset

  return (
    <div
      ref={ref}
      style={{ top: `${top}px` }}
      className="sticky z-10"
    >
      <motion.div
        style={{ scale }}
        className="bg-elio-dark text-white rounded-2xl overflow-hidden mx-auto max-w-[1200px] shadow-2xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-[380px] md:min-h-[420px]">
          {/* Left content */}
          <div className="p-10 md:p-14 flex flex-col justify-between">
            <span className="text-5xl md:text-6xl font-black text-white/20 leading-none mb-6">
              {service.number}
            </span>
            <div>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                {service.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed mb-6 max-w-xs">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.items.map((item) => (
                  <span
                    key={item}
                    className="text-[11px] px-3 py-1.5 rounded-full border border-white/20 text-white/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative overflow-hidden">
            <img
              src={image}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto mb-12">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight border-b border-border pb-6">
         How We Work
        </h2>
        <p>Our process is designed to remove confusion and create a clear path from strategy to scale.
</p>
      </div>

      {/* Cards container — tall enough to enable sticky scroll */}
      <div className="relative" style={{ paddingBottom: '20vh' }}>
        {services.map((service, i) => (
          <ServiceCard
            key={service.number}
            service={service}
            image={serviceImages[i]}
            index={i}
            total={services.length}
          />
        ))}
      </div>
    </section>
  );
}