import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/lib/siteData';
import AnimatedSection from '../components/shared/AnimatedSection';

export default function Blog() {
  return (
    <div className="pt-28 md:pt-36 pb-16 md:pb-24 px-6 md:px-10 max-w-[1400px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Heading Green */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 text-[#00cc65]">
          Ideas, strategies, and systems shaping modern brand growth.
        </h1>

        {/* Line Green */}
        <div className="h-px bg-[#00cc65] w-full mb-16" />
      </motion.div>

      <AnimatedSection delay={0.2}>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-16 leading-relaxed">
          Explore expert insights on AI marketing systems, digital growth, PR
          visibility, website conversion, and scalable business strategies. Our
          content is built to help founders and modern businesses stay ahead
          with actionable ideas and smarter execution.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        {blogPosts.map((post, i) => (
          <AnimatedSection key={post.id} delay={i * 0.08}>
            <Link to={`/blog/${post.id}`} className="group block">

              {/* Image Box */}
              <div className="overflow-hidden rounded-xl mb-4 border border-[#00cc65]/20">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Title Hover Green */}
              <h3 className="font-bold text-base md:text-lg mb-2 leading-snug transition-colors group-hover:text-[#00cc65]">
                {post.title}
              </h3>

              {/* Date */}
              <p className="text-xs text-[#00cc65] font-medium">
                {post.date}
              </p>

            </Link>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}