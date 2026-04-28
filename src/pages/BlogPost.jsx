import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '@/lib/siteData';
import { ArrowLeft } from 'lucide-react';

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) { 
    return (
      <div className="pt-40 pb-24 px-6 md:px-10 max-w-[800px] mx-auto text-center">
        <h1 className="text-4xl font-black mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-primary hover:underline text-sm">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="pt-28 md:pt-36 pb-24 px-6 md:px-10 max-w-[860px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Back */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Blog
        </Link>

        {/* Meta */}
        <p className="text-xs text-muted-foreground mb-3">{post.date}</p>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-8">
          {post.title}
        </h1>

        {/* Tags */}
        {post.tags && (
          <div className="flex flex-wrap gap-2 mb-10">
            {post.tags.map((tag) => (
              <span key={tag} className="text-[11px] px-3 py-1 rounded-full border border-border text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Cover image */}
        <div className="overflow-hidden rounded-2xl mb-12">
          <img
            src={post.image}
            alt={post.title}
            className="w-full aspect-[16/9] object-cover"
          />
        </div>

        {/* Content */}
        <p className="text-base text-muted-foreground leading-relaxed">
  {post.description}
</p>

        {/* Back CTA */}
        <div className="mt-16 pt-10 border-t border-border">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All articles
          </Link>
        </div>
      </motion.div>
    </div>
  );
}