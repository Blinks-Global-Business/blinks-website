import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BlogImage from "@/components/sections/BlogImage";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/data/blogPosts";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

// Génère toutes les pages d'articles à l'avance (meilleure performance et SEO)
export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

// Métadonnées dynamiques (titre d'onglet différent par article)
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) return { title: "Article introuvable - Blinks Global Business" };

  return {
    title: `${post.title} - Blog Blinks Global Business`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) notFound();

  const categoryLabel = BLOG_CATEGORIES.find((c) => c.id === post.category)?.label;

  const related = BLOG_POSTS.filter(
    (p) => p.category === post.category && p.slug !== post.slug
  ).slice(0, 3);

  return (
    <>
      {/* HEADER ARTICLE */}
<section className="bg-primary/5 border-b border-border">
  <div className="max-w-3xl mx-auto px-6 py-12">
    <Link
      href="/blog"
      className="inline-flex items-center gap-2 font-body text-sm text-primary mb-8 ml-1 hover:gap-3 transition-all"
    >
      <ArrowLeft size={16} /> Retour au blog
    </Link>

    <div className="flex items-center gap-3 mb-4">
      <span className="inline-block bg-primary/10 text-primary text-[11px] font-body font-medium uppercase tracking-wide px-2.5 py-1 rounded">
        {categoryLabel}
      </span>
      <span className="font-body text-xs text-text-muted">{post.readTime}</span>
    </div>

    <h1 className="font-heading font-bold text-3xl md:text-4xl text-text mb-5 leading-tight">
      {post.title}
    </h1>

    <div className="flex items-center gap-2 font-body text-sm text-text-muted">
      <span className="font-medium text-text">{post.author}</span>
      <span>·</span>
      <span>{formatDate(post.date)}</span>
    </div>
  </div>
</section>

      {/* IMAGE DE COUVERTURE */}
      <div className="max-w-5xl mx-auto px-6 -mt-8">
        <BlogImage
          src={post.image}
          alt={post.title}
          className="w-full h-64 md:h-96 rounded-xl shadow-lg"
        />
      </div>

      {/* CONTENU */}
      <section className="max-w-3xl mx-auto px-6 py-14">
        <div className="font-body text-text leading-relaxed whitespace-pre-line">
          {post.content}
        </div>
      </section>

      {/* ARTICLES LIÉS */}
      {related.length > 0 && (
        <section className="bg-primary/5 border-t border-border">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <h2 className="font-heading font-bold text-xl md:text-2xl text-text mb-8">
              Articles similaires
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="bg-white border border-border rounded-xl overflow-hidden hover:border-primary transition-colors"
                >
                  <BlogImage src={r.image} alt={r.title} className="w-full h-40" />
                  <div className="p-5">
                    <h3 className="font-heading font-semibold text-sm text-text mb-2 line-clamp-2">
                      {r.title}
                    </h3>
                    <p className="font-body text-xs text-text-muted">{r.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}