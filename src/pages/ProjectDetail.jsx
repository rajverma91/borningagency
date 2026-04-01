import React from "react";
import { useParams } from "react-router-dom";

export default function ProjectDetail({ projects }) {
  const { slug } = useParams();

  // find project by slug
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div className="text-center py-20">Project not found</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">

      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-6">{project.title}</h1>

      {/* IMAGE */}
      <div className="rounded-2xl overflow-hidden mb-8">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[400px] object-cover"
        />
      </div>

      {/* TAGS */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {project.tags.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-muted rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>

      {/* CONTENT */}
      <p className="text-muted-foreground leading-relaxed">
        {project.content}
      </p>

    </div>
  );
}