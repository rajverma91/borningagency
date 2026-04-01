import React from 'react';
import AnimatedSection from './AnimatedSection';

export default function SectionTitle({ children, className = "", dark = false }) {
  return (
    <AnimatedSection>
      <h2 className={`text-xs md:text-sm font-semibold tracking-widest uppercase mb-10 md:mb-14 ${
        dark ? 'text-white/60' : 'text-muted-foreground'
      } ${className}`}>
        {children}
      </h2>
    </AnimatedSection>
  );
}