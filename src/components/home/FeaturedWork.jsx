import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '@/lib/siteData';
import ProjectsGrid from './ProjectsGrid';



// Reference layout: first project tall-left, second wide-right, third tall-left, fourth wide-right
// Using real Framer image URLs
const projectImages = [
  "https://res.cloudinary.com/deydhfxgg/image/upload/v1775227386/12_jtkemb.avif",
  "https://res.cloudinary.com/deydhfxgg/image/upload/v1775227386/13_zh5jzf.jpg",
  "https://res.cloudinary.com/deydhfxgg/image/upload/v1775227385/14_eo8ojk.jpg",
  "https://res.cloudinary.com/deydhfxgg/image/upload/v1775227385/15_u6uzrk.jpg",
  "https://res.cloudinary.com/deydhfxgg/image/upload/v1775227386/16_esl3ip.jpg",

];

export default function FeaturedWork() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10 max-w-[1400px] mx-auto">
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

     <ProjectsGrid 
  projects={projects} 
  projectImages={projectImages} 
/>
    
    </section>
  );
}