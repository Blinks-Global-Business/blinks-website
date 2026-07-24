import { notFound } from "next/navigation";
import { getTranslations, getLocale } from "next-intl/server";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BlogImage from "@/components/sections/BlogImage";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/data/blogPosts";
import BlogContent from "@/components/sections/BlogContent";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const locale = await getLocale();
  const t = await getTranslations("blog");

  if (!post) return { title: t("notFoundTitle") };

  return {
    title: `${post.title[locale]} - Blog Blinks Global Business`,
    description: post.excerpt[locale],
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const locale = await getLocale();
  const t = await getTranslations("blog");

  if (!post) notFound();

  const dateLocale = locale === "en" ? "en-US" : "fr-FR";
  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString(dateLocale, { day: "2-digit", month: "long", year: "numeric" });

  const categoryLabel = BLOG_CATEGORIES.find((c) => c.id === post.category)?.label[locale];

  const related = BLOG_POSTS.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section className="bg-primary/5 border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-body text-sm text-primary mb-8 ml-1 hover:gap-3 transition-all"
          >
            <ArrowLeft size={16} /> {t("backToBlog")}
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-primary/10 text-primary text-[11px] font-body font-medium uppercase tracking-wide px-2.5 py-1 rounded">
              {categoryLabel}
            </span>
            <span className="font-body text-xs text-text-muted">{post.readTime[locale]}</span>
          </div>

          <h1 className="font-heading font-bold text-3xl md:text-4xl text-text mb-5 leading-tight">
            {post.title[locale]}
          </h1>

          <div className="flex items-center gap-2 font-body text-sm text-text-muted">
            <span className="font-medium text-text">{post.author}</span>
            <span>·</span>
            <span>{formatDate(post.date)}</span>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 -mt-8">
        <BlogImage src={post.image} alt={post.title[locale]} className="w-full h-64 md:h-96 rounded-xl shadow-lg" />
      </div>

      <section className="max-w-3xl mx-auto px-6 py-14">
        <BlogContent content={post.content[locale]} />
      </section>

      {related.length > 0 && (
        <section className="bg-primary/5 border-t border-border">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <h2 className="font-heading font-bold text-xl md:text-2xl text-text mb-8">{t("relatedArticles")}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="bg-white border border-border rounded-xl overflow-hidden hover:border-primary transition-colors"
                >
                  <BlogImage src={r.image} alt={r.title[locale]} className="w-full h-40" />
                  <div className="p-5">
                    <h3 className="font-heading font-semibold text-sm text-text mb-2 line-clamp-2">{r.title[locale]}</h3>
                    <p className="font-body text-xs text-text-muted">{r.readTime[locale]}</p>
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