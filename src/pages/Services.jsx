import React from 'react';
import { motion } from 'framer-motion';
import { servicespage } from '@/lib/siteData';
import AnimatedSection from '../components/shared/AnimatedSection';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="pt-28 md:pt-36 pb-16 md:pb-24 px-6 md:px-10 max-w-[1400px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Heading Green */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 text-[#00cc65]">
          OUR SERVICES
        </h1>

        {/* Line Green */}
        <div className="h-px bg-[#00cc65] w-full mb-8" />
      </motion.div>

      <AnimatedSection delay={0.2}>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-16 leading-relaxed">
          At Borning Agency, we combine strategy, technology, and execution to
          build growth systems that help brands scale with clarity, credibility,
          and commercial impact.
        </p>
      </AnimatedSection>

      <div className="space-y-0">
        {servicespage.map((service, i) => (
          <AnimatedSection key={service.number} delay={i * 0.1}>
            <Link className="block py-12 md:py-16 border-t border-[#00cc65]/20 group cursor-pointer hover:opacity-90 transition-opacity">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
                
                {/* Number */}
                <div className="md:col-span-1">
                  <span className="text-4xl md:text-5xl font-black text-[#00cc65]/30">
                    {service.number}
                  </span>
                </div>

                {/* Title + Description */}
                <div className="md:col-span-4">
                  <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-4 group-hover:text-[#00cc65] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Items */}
                <div className="md:col-span-4 md:col-start-8">
                  <ul className="space-y-3">
                    {service.items.map((item) => (
                      <li key={item} className="text-sm flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00cc65] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </Link>
          </AnimatedSection>
        ))}
      </div>

      {/* CTA Section */}
      <AnimatedSection delay={0.3}>
        <div className="mt-16 pt-16 border-t border-[#00cc65]/20 text-center bg-[#00cc65] text-white py-12 rounded-2xl">
          <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-4">
            Ready to start?
          </h3>

          <p className="mb-8">
            Let's discuss how we can help your business grow.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-white text-[#00cc65] px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
}