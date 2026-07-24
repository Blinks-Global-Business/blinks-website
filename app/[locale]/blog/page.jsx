import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import BlogGrid from "@/components/sections/BlogGrid";
import { BLOG_POSTS } from "@/data/blogPosts";
import NewsletterForm from "@/components/sections/NewsletterForm";

export async function generateMetadata() {
  const t = await getTranslations("blog.meta");
  return { title: t("title"), description: t("description") };
}

export default function BlogPage() {
  const t = useTranslations("blog");

  return (
    <>
      <section className="bg-primary/5 border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-text mb-4">{t("title")}</h1>
          <p className="font-body text-text-muted">{t("subtitle")}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <BlogGrid posts={BLOG_POSTS} />
      </section>

      <section className="bg-primary/5 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="bg-white rounded-2xl border border-border shadow-md p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-heading font-bold text-xl md:text-2xl text-text mb-2">{t("newsletterTitle")}</h2>
              <p className="font-body text-sm text-text-muted">{t("newsletterSubtitle")}</p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}