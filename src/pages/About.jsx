import React from 'react';
import { motion } from 'framer-motion';
import { teamMembers, awards } from '@/lib/siteData';
import AnimatedSection from '../components/shared/AnimatedSection';
import SectionTitle from '../components/shared/SectionTitle';
import ImageGallery from "../components/ImageGallery";

const stats = [
  { value: "50", suffix: "+", label: "Years of experience" },
  { value: "80", suffix: "+", label: "Industry awards" },
  { value: "970", suffix: "%", label: "Client satisfaction rate" },
  { value: "1000", suffix: "+", label: "Projects delivered" },
];

export default function About() {
  return (
    <div>
      {/* Hero - Dark */}
      <section className="bg-elio-dark text-white pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="px-6 md:px-10 max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4">
              WHO WE ARE
            </h1>
            <div className='overflow-hidden '>
              <ImageGallery />
            </div>
            <div className="h-px bg-white/30 w-full mb-12" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            <div />
            <p className="text-2xl md:text-3xl font-bold leading-snug tracking-tight">
             A focused growth partner for brands that need sharper systems and stronger outcomes.

            </p>
          </motion.div>
        </div>
      </section>
{/* About Content Section */}
<section className="py-20 md:py-28 px-6 md:px-10 max-w-[1400px] mx-auto">
  <AnimatedSection>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
      
      {/* Left Side - Heading */}
      <div>
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
          Who We Are
        </p>

        <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
          A focused growth partner for brands that need sharper systems and stronger outcomes.
        </h2>
      </div>

      {/* Right Side - Description */}
      <div className="space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg">
        <p>
          Borning Agency is built for founder-led brands, ambitious service businesses, and modern operators who need more than disconnected marketing efforts.
        </p>

        <p>
          We bring together AI systems, digital marketing, PR visibility, and conversion-led web execution under one clear growth framework. Our approach is designed to help businesses strengthen their positioning, improve lead flow, and create a digital presence that converts with intent.
        </p>

        <p>
          Unlike traditional agencies with bloated service menus, we focus only on what drives measurable business outcomes — clarity, credibility, and scalable growth.
        </p>

        <p>
          We work as a strategic partner, combining commercial thinking with clean execution to help brands move faster, look sharper, and scale with confidence.
        </p>
      </div>
    </div>
  </AnimatedSection>

  {/* Supporting Statement */}
  <AnimatedSection delay={0.2}>
    <div className="mt-16 border-t pt-10">
      <p className="text-center text-lg md:text-xl font-semibold tracking-tight">
        More operator than showroom. More outcomes than activity.
      </p>
    </div>
  </AnimatedSection>
</section>
      {/* Motto */}
      <section className="py-16 md:py-24 px-6 md:px-10 max-w-[1400px] mx-auto">
        <AnimatedSection>
          <p className="text-xl md:text-2xl font-medium text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
            Purpose over trends. Clarity over noise. Every detail designed with intent.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-16">
            {stats.map((stat, i) => (
              <div key={stat.label}>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl md:text-5xl font-black tracking-tight">{stat.value}</span>
                  <span className="text-xl font-bold text-primary">{stat.suffix}</span>
                </div>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

 

     
    </div>
  );
}