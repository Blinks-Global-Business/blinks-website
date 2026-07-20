import BlogGrid from "@/components/sections/BlogGrid";
import { BLOG_POSTS } from "@/data/blogPosts";
import NewsletterForm from "@/components/sections/NewsletterForm";

export const metadata = {
  title: "Blog - Blinks Global Business",
  description:
    "Transformation digitale, intelligence artificielle, marketing et entrepreneuriat : l'expertise Blinks Global Business en articles.",
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-primary/5 border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-text mb-4">
            Blog Blinks Global Business
          </h1>
          <p className="font-body text-text-muted">
            Nous partageons notre expertise sur la transformation digitale,
            l'IA, le marketing stratégique et l'entrepreneuriat pour propulser
            votre croissance.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <BlogGrid posts={BLOG_POSTS} />
      </section>

      {/* NEWSLETTER */}
<section className="bg-primary/5 border-t border-border">
  <div className="max-w-7xl mx-auto px-6 py-16">
    <div className="bg-white rounded-2xl border border-border shadow-md p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
      <div>
        <h2 className="font-heading font-bold text-xl md:text-2xl text-text mb-2">
          Restez informé de nos dernières actualités
        </h2>
        <p className="font-body text-sm text-text-muted">
          Rejoignez nos lecteurs qui reçoivent nos analyses mensuelles directement dans leur boîte mail.
        </p>
      </div>
      <NewsletterForm />
    </div>
  </div>
</section>
    </>
  );
}