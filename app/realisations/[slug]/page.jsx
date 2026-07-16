import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CaseStudyImage from "@/components/sections/CaseStudyImage";
import ModalButton from "@/components/ui/ModalButton";
import { CASE_STUDIES, CASE_STUDY_FILTERS } from "@/data/caseStudies";

export async function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({ slug: study.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((s) => s.id === slug);
  if (!study) return { title: "Étude de cas introuvable - Blinks Global Business" };
  return {
    title: `${study.title} - Réalisations Blinks Global Business`,
    description: study.challenge,
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((s) => s.id === slug);

  if (!study) notFound();

  const categoryLabel = CASE_STUDY_FILTERS.find((c) => c.id === study.category)?.label;

  const related = CASE_STUDIES.filter(
    (s) => s.category === study.category && s.id !== study.id
  ).slice(0, 2);

  return (
    <>
      <section className="bg-primary/5 border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <Link
            href="/realisations"
            className="inline-flex items-center gap-2 font-body text-sm text-primary mb-8 ml-1 hover:gap-3 transition-all"
          >
            <ArrowLeft size={16} /> Retour aux réalisations
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-primary/10 text-primary text-[11px] font-body font-medium uppercase tracking-wide px-2.5 py-1 rounded">
              {study.sector}
            </span>
            <span className="font-body text-xs text-text-muted">{categoryLabel}</span>
          </div>

          <h1 className="font-heading font-bold text-3xl md:text-4xl text-text leading-tight">
            {study.title}
          </h1>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 -mt-8">
        <CaseStudyImage
          src={study.image}
          alt={study.title}
          className="w-full h-64 md:h-96 rounded-xl shadow-lg"
        />
      </div>

      <section className="max-w-3xl mx-auto px-6 py-14">
        {/* Métriques clés en évidence */}
        <div className="flex flex-wrap gap-4 mb-10">
          {study.metrics.map((m) => (
            <div key={m.label} className="bg-primary/5 border border-border rounded-lg px-5 py-3 text-center">
              <p className="font-heading font-bold text-xl text-emerald">{m.value}</p>
              <p className="font-body text-xs text-text-muted">{m.label}</p>
            </div>
          ))}
        </div>

        <div className="font-body text-text leading-relaxed whitespace-pre-line">
          {study.content}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary/5 border-y border-border">
        <div className="max-w-3xl mx-auto px-6 py-14 text-center">
          <h2 className="font-heading font-bold text-xl md:text-2xl text-text mb-6">
            Un projet similaire en tête ?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <ModalButton type="devis" variant="primary">Démarrer mon projet</ModalButton>
            <ModalButton type="rdv" variant="outline">Prendre rendez-vous</ModalButton>
          </div>
        </div>
      </section>

      {/* Études liées */}
      {related.length > 0 && (
        <section>
          <div className="max-w-7xl mx-auto px-6 py-16">
            <h2 className="font-heading font-bold text-xl md:text-2xl text-text mb-8">
              Réalisations similaires
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/realisations/${r.id}`}
                  className="bg-white border border-border rounded-xl overflow-hidden hover:border-primary transition-colors"
                >
                  <CaseStudyImage src={r.image} alt={r.title} className="w-full h-40" />
                  <div className="p-5">
                    <h3 className="font-heading font-semibold text-sm text-text mb-1">{r.title}</h3>
                    <p className="font-body text-xs text-text-muted">{r.sector}</p>
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