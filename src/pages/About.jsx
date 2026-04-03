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
              Elio is a design studio shaping clear, scalable digital experiences for growing brands.
            </p>
          </motion.div>
        </div>
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

      {/* Awards */}
      <section className="py-16 md:py-24 px-6 md:px-10 max-w-[1400px] mx-auto">
        <SectionTitle>AWARDS</SectionTitle>
        <div className="space-y-0">
          {awards.map((award, i) => (
            <AnimatedSection key={award.title} delay={i * 0.1}>
              <div className="py-8 border-t border-border grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                <div className="md:col-span-5">
                  <h3 className="text-lg font-bold">{award.title}</h3>
                </div>
                <div className="md:col-span-5">
                  <p className="text-sm text-muted-foreground">{award.description}</p>
                </div>
                <div className="md:col-span-2 text-right">
                  <span className="text-2xl font-black text-muted-foreground/30">{award.year}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 px-6 md:px-10 max-w-[1400px] mx-auto">
        <SectionTitle>MEET THE TEAM</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, i) => (
            <AnimatedSection key={member.name} delay={i * 0.08}>
              <div className="group">
                <div className="overflow-hidden rounded-xl mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h4 className="text-sm font-bold">{member.name}</h4>
                <p className="text-xs text-muted-foreground">{member.role}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}