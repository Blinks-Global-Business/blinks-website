import Link from "next/link";
import Button from "@/components/ui/Button";
import ServiceCard from "@/components/sections/ServiceCard";
import { SERVICE_CATEGORIES } from "@/data/services";
import { METHODOLOGY_STEPS } from "@/data/methodology";
import { CATEGORY_ICONS } from "@/lib/serviceIcons";

export const metadata = {
  title: "Nos services - Blinks Global Business",
  description:
    "Découvrez l'ensemble de nos services de transformation digitale : sites web, applications, automatisation, intelligence artificielle et plus encore.",
};

export default function ServicesPage() {
  return (
    <>
      {/* HEADER DE PAGE */}
      <section className="bg-primary/5 border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-text mb-4">
            Nos services
          </h1>
          <p className="font-body text-text-muted">
            Nous accompagnons les entreprises dans leur transformation
            digitale de bout en bout, en alliant vision stratégique et
            excellence technologique pour créer de la valeur durable.
          </p>
        </div>
      </section>

      {/* NAVIGATION RAPIDE PAR CATÉGORIE */}
      <div className="sticky top-[73px] z-40 bg-bg/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-3 overflow-x-auto">
          {SERVICE_CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="shrink-0 font-body text-sm text-text border border-border rounded-full px-4 py-2 hover:border-primary hover:text-primary transition-colors"
            >
              {cat.label}
            </a>
          ))}
        </div>
      </div>

      {/* BLOCS PAR CATÉGORIE */}
      {SERVICE_CATEGORIES.map((cat, index) => {
        const Icon = CATEGORY_ICONS[cat.id];
        const isEven = index % 2 === 0;
        return (
          <section
            key={cat.id}
            id={cat.id}
            className={`scroll-mt-32 ${isEven ? "" : "bg-primary/5"}`}
          >
            <div className="max-w-7xl mx-auto px-6 py-16">
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-text mb-8">
                {cat.label}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.services.map((service) => (
                  <ServiceCard key={service.id} service={service} Icon={Icon} />
                ))}
              </div>
            </div>

            {/* CTA intermédiaire au milieu de la liste */}
            {index === 2 && (
              <div className="bg-primary">
                <div className="max-w-3xl mx-auto px-6 py-14 text-center">
                  <h3 className="font-heading font-bold text-xl md:text-2xl text-white mb-6">
                    Un projet spécifique en tête ?
                  </h3>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button variant="primary">Demander un devis</Button>
                    <Button
                      variant="ghost"
                      className="!text-white !border !border-white/30 hover:!bg-white/10"
                    >
                      Prendre rendez-vous
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </section>
        );
      })}

      {/* NOTRE MÉTHODOLOGIE */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text mb-3">
            Notre méthodologie de travail
          </h2>
          <p className="font-body text-text-muted mb-14 max-w-xl mx-auto">
            Une approche rigoureuse en 6 étapes pour garantir la réussite de vos projets.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {METHODOLOGY_STEPS.map((step) => {
              const StepIcon = step.icon;
              return (
                <div key={step.label} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <StepIcon className="text-primary" size={20} />
                  </div>
                  <p className="font-heading font-semibold text-sm text-text">
                    {step.label}
                  </p>
                  <p className="font-body text-xs text-text-muted mt-1">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section>
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="bg-primary rounded-3xl px-8 py-16 text-center">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">
              Prêt à transformer votre activité ?
            </h2>
            <p className="font-body text-white/70 max-w-lg mx-auto mb-8">
              Contactez nos experts pour définir ensemble la stratégie digitale
              qui propulsera votre entreprise vers de nouveaux sommets.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="primary">Prendre rendez-vous</Button>
              <Button
                variant="ghost"
                className="!text-white !border !border-white/30 hover:!bg-white/10"
              >
                Demander un devis
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}