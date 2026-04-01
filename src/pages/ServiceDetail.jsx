import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services } from '@/lib/siteData';
import { ArrowLeft } from 'lucide-react';

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find((s) => s.number === id || s.title.toLowerCase() === id?.toLowerCase());

  if (!service) {
    return (
      <div className="pt-40 pb-24 px-6 md:px-10 max-w-[800px] mx-auto text-center">
        <h1 className="text-4xl font-black mb-4">Service Not Found</h1>
        <Link to="/services" className="text-primary hover:underline text-sm">← Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="pt-28 md:pt-36 pb-24 px-6 md:px-10 max-w-[1100px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Back */}
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Services
        </Link>

        {/* Number */}
        <p className="text-6xl font-black text-primary/15 leading-none mb-4">{service.number}</p>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6">
          {service.title.toUpperCase()}
        </h1>
        <div className="h-px bg-border w-full mb-12" />

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-16">
          {service.description}
        </p>

        {/* What's included */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
          {service.items.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="flex items-center gap-4 p-5 rounded-xl border border-border"
            >
              <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
              <span className="text-sm font-medium">{item}</span>
            </motion.div>
          ))}
        </div>

        {/* Content blocks */}
        {service.content && (
          <div className="space-y-6 mb-20">
            {service.content.map((block, i) => {
              if (block.type === 'paragraph') {
                return <p key={i} className="text-base text-muted-foreground leading-relaxed">{block.text}</p>;
              }
              if (block.type === 'heading') {
                return <h2 key={i} className="text-2xl font-black tracking-tight mt-10 mb-2">{block.text}</h2>;
              }
              return null;
            })}
          </div>
        )}

        {/* CTA */}
        <div className="pt-12 border-t border-border flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <Link
            to="/contact"
            className="inline-block bg-primary text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Start a Project
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All Services
          </Link>
        </div>
      </motion.div>
    </div>
  );
}