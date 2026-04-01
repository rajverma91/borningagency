import React from 'react';
import { motion } from 'framer-motion';
import PricingSection from '../components/home/PricingSection';
import FAQSection from '../components/home/FAQSection';

export default function Pricing() {
  return (
    <div className="pt-28 md:pt-36 pb-4">
      <div className="px-6 md:px-10 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4">
            PRICING
          </h1>
          <div className="h-px bg-foreground w-full mb-8" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
        >
          Transparent pricing with flexible plans to match your needs. No hidden fees.
        </motion.p>
      </div>

      <PricingSection />
      <FAQSection />
    </div>
  );
}