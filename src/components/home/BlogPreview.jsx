import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/lib/siteData';
import AnimatedSection from '../shared/AnimatedSection';

const blogImages = [
  "../../src/img/b12.png",
  "../../src/img/b13.png",
  "../../src/img/b14.png",
];

export default function BlogPreview() {
  const previewPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-16 md:py-24 px-6 md:px-10 max-w-[1400px] mx-auto">
      <AnimatedSection>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-10 md:mb-14">
          News &amp; Views
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {previewPosts.map((post, i) => (
          <AnimatedSection key={post.id} delay={i * 0.1}>
            <Link to="/blog" className="group block">
              <div className="overflow-hidden rounded-xl mb-4">
                <img
                  src={blogImages[i]}
                  alt={post.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h4 className="text-sm font-medium leading-snug mb-1.5">
                {post.title}
              </h4>
              <p className="text-xs text-muted-foreground">{post.date}</p>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}