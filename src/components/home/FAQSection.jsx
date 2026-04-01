import React, { useState } from 'react';
import { faqItems } from '@/lib/siteData';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../shared/AnimatedSection';
import { Plus } from 'lucide-react';

function FAQItem({ item, index, isOpen, onToggle }) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground font-normal w-6 shrink-0">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-sm font-medium text-foreground">{item.question}</span>
        </span>
        <Plus
          className={`w-4 h-4 text-primary shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-sm text-muted-foreground leading-relaxed pl-10 pb-5">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 md:py-24 px-6 md:px-10 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
        {/* Left */}
        <AnimatedSection>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
            Got questions?
          </h3>
        </AnimatedSection>

        {/* Right */}
        <AnimatedSection delay={0.1}>
          <div className="w-full">
            {faqItems.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}