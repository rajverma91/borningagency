import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "../shared/AnimatedSection";

export default function ProjectsGrid({ projects, projectImages }) {
  const [visibleCount, setVisibleCount] = useState(3);
  const loadMoreRef = useRef(null);

  // ✅ Infinite scroll (smooth & reliable)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => {
            if (prev >= projects.length) return prev;
            return prev + 2;
          });
        }
      },
      { threshold: 1 }
    );

    if (loadMoreRef.current) observer.observe(loadMoreRef.current);

    return () => {
      if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
    };
  }, [projects.length]);

  const visibleProjects = projects.slice(0, visibleCount);

  return (
    <section className="relative">

      {/* ✅ CONTENT */}
      <div className="max-w-6xl mx-auto px-4 space-y-16">

        {visibleProjects.map((project, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <AnimatedSection key={index} delay={0.05 * index}>
              <Link to={`/work/${project.slug}`} className="group block">

                <div
                  className={`flex flex-col ${
                    isReverse ? "md:flex-row-reverse" : "md:flex-row"
                  } gap-10 items-center`}
                >

                  {/* LEFT CONTENT */}
                  <div className="flex-1 max-w-md">
                    <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition">
                      {project.title}
                    </h3>               
                {project.description.split("\n\n").map((para, i) => (
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4" key={i}>{para}</p>
                ))}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 bg-muted rounded-full text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* RIGHT IMAGE */}
                  <div className="flex-1 w-full">
                    <div className="overflow-hidden rounded-2xl">
                      <img
                        src={projectImages[index]}
                        alt={project.title}
                        className="w-full h-[300px] md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>

                </div>

              </Link>
            </AnimatedSection>
          );
        })}

        {/* ✅ Load Trigger */}
        {visibleCount < projects.length && (
          <div
            ref={loadMoreRef}
            className="text-center py-10 text-sm text-muted-foreground"
          >
            Loading more projects...
          </div>
        )}

      </div>

      {/* ✅ Sticky Button (ONLY inside this section) */}
      <div className="sticky bottom-0 left-0 w-full flex justify-center py-6 bg-gradient-to-t from-white via-white/80 to-transparent">
        <Link
          to="/work"
          className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 transition"
        >
          ● See all work
        </Link>
      </div>

    </section>
  );
}