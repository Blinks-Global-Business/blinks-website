"use client";

import { useState } from "react";
import Link from "next/link";
import BlogImage from "@/components/sections/BlogImage";
import { BLOG_CATEGORIES } from "@/data/blogPosts";

const PAGE_SIZE = 6;

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function BlogGrid({ posts }) {
  const [activeCategory, setActiveCategory] = useState("tous");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  const filtered =
    activeCategory === "tous"
      ? rest
      : rest.filter((p) => p.category === activeCategory);

  const visible = filtered.slice(0, visibleCount);

  return (
    <div>
      {/* Filtres */}
      <div className="flex flex-wrap gap-3 mb-10 justify-center">
        {BLOG_CATEGORIES.map((cat) => {
          const isActive = cat.id === activeCategory;
          return (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setVisibleCount(PAGE_SIZE);
              }}
              className={`font-body text-sm rounded-full px-4 py-2 transition-colors ${
                isActive
                  ? "bg-accent text-primary-dark font-medium"
                  : "border border-border text-text hover:border-primary hover:text-primary"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Article vedette */}
      {featured && activeCategory === "tous" && (
        <Link
          href={`/blog/${featured.slug}`}
          className="grid md:grid-cols-2 gap-0 bg-white border border-border rounded-xl overflow-hidden mb-10 hover:border-primary transition-colors"
        >
          <BlogImage src={featured.image} alt={featured.title} className="w-full h-56 md:h-full" />
          <div className="p-8 flex flex-col justify-center">
            <span className="inline-block bg-primary/10 text-primary text-[11px] font-body font-medium uppercase tracking-wide px-2.5 py-1 rounded mb-4 w-fit">
              {BLOG_CATEGORIES.find((c) => c.id === featured.category)?.label}
            </span>
            <h2 className="font-heading font-bold text-xl md:text-2xl text-text mb-3">
              {featured.title}
            </h2>
            <p className="font-body text-sm text-text-muted mb-5">{featured.excerpt}</p>
            <div className="flex items-center gap-2 font-body text-xs text-text-muted">
              <span className="font-medium text-text">{featured.author}</span>
              <span>·</span>
              <span>{formatDate(featured.date)}</span>
              <span>·</span>
              <span>{featured.readTime}</span>
            </div>
          </div>
        </Link>
      )}

      {/* Grille d'articles */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="bg-white border border-border rounded-xl overflow-hidden hover:border-primary transition-colors"
          >
            <BlogImage src={post.image} alt={post.title} className="w-full h-44" />
            <div className="p-5">
              <span className="inline-block bg-primary/10 text-primary text-[11px] font-body font-medium uppercase tracking-wide px-2.5 py-1 rounded mb-3">
                {BLOG_CATEGORIES.find((c) => c.id === post.category)?.label}
              </span>
              <h3 className="font-heading font-semibold text-base text-text mb-2 line-clamp-2">
                {post.title}
              </h3>
              <p className="font-body text-sm text-text-muted mb-4 line-clamp-1">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-2 font-body text-xs text-text-muted">
                <span className="font-medium text-text">{post.author}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Charger plus */}
      {visibleCount < filtered.length && (
        <div className="text-center mt-10">
          <button
            onClick={() => setVisibleCount((v) => v + PAGE_SIZE)}
            className="font-body text-sm border border-primary text-primary rounded-md px-6 py-3 hover:bg-primary hover:text-white transition-colors"
          >
            Charger plus d'articles
          </button>
        </div>
      )}
    </div>
  );
}