import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectspage } from '@/lib/siteData';
import AnimatedSection from '../components/shared/AnimatedSection';

export default function Work() {
  return (
    <div className="pt-28 md:pt-36 pb-16 md:pb-24 px-6 md:px-10 max-w-[1400px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Heading Green */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 text-[#00cc65]">
          FEATURED WORK
        </h1>

        {/* Line Green */}
        <div className="h-px bg-[#00cc65] w-full mb-16" />
      </motion.div>

      <AnimatedSection delay={0.2}>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-16 leading-relaxed">
          A curated showcase of how Borning Agency builds sharper systems,
          stronger visibility, and measurable growth outcomes for modern brands.
        </p>
      </AnimatedSection>

      <div className="space-y-16 md:space-y-24">
        {projectspage.map((project, i) => (
          <AnimatedSection key={project.id} delay={i * 0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start group cursor-pointer">
              
              <div className="order-2 md:order-1">
                {/* Title Green on Hover */}
                <h2 className="text-2xl md:text-3xl font-bold mb-4 transition-colors group-hover:text-[#00cc65]">
                  {project.title}
                </h2>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-md">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 border border-[#00cc65] rounded-full text-[#00cc65]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="order-1 md:order-2 overflow-hidden rounded-lg border border-[#00cc65]/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {i < projectspage.length - 1 && (
              <div className="h-px bg-[#00cc65]/20 mt-16 md:mt-24" />
            )}
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}