import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '@/lib/siteData';
import AnimatedSection from '../components/shared/AnimatedSection';

export default function Work() {
  return (
    <div className="pt-28 md:pt-36 pb-16 md:pb-24 px-6 md:px-10 max-w-[1400px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4">
          FEATURED WORK
        </h1>
        <div className="h-px bg-foreground w-full mb-16" />
      </motion.div>

      <div className="space-y-16 md:space-y-24">
        {projects.map((project, i) => (
          <AnimatedSection key={project.id} delay={i * 0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start group cursor-pointer">
              <div className="order-2 md:order-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-md">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1.5 border border-border rounded-full text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="order-1 md:order-2 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            {i < projects.length - 1 && (
              <div className="h-px bg-border mt-16 md:mt-24" />
            )}
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}