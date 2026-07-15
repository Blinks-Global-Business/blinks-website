import { Rocket, Eye } from "lucide-react";
import Button from "@/components/ui/Button";
import KpiBand from "@/components/sections/KpiBand";
import TeamGrid from "@/components/sections/TeamGrid";
import { TEAM_MEMBERS } from "@/data/team";
import { COMPANY_VALUES } from "@/data/values";

export const metadata = {
  title: "À propos - Blinks Global Business",
  description:
    "Découvrez l'histoire, la mission et les valeurs de Blinks Global Business, cabinet international de conseil en transformation digitale.",
};

const ABOUT_KPIS = [
  { label: "Années d'expertise", value: "7" },
  { label: "Clients accompagnés", value: "10+" },
  { label: "Pays desservis", value: "3" },
  { label: "Membres de l'équipe", value: "12+" },
];

export default function AboutPage() {
  return (
    <>
      {/* HEADER DE PAGE */}
      <section className="bg-primary/5 border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <p className="font-body text-xs uppercase tracking-widest text-primary font-semibold mb-3">
            Notre identité
          </p>
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-text mb-4">
            À propos de BLINKS
          </h1>
          <p className="font-accent italic text-text-muted text-lg">
            « Redéfinir l'excellence stratégique à l'ère du numérique pour bâtir les leaders de demain. »
          </p>
        </div>
      </section>

      {/* NOTRE HISTOIRE */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text mb-5">
            Notre histoire
          </h2>
          <p className="font-body text-text-muted leading-relaxed mb-4">
            Fondé sur la conviction que la technologie ne vaut rien sans une
            vision stratégique claire, BLINKS Global Business a débuté comme
            un petit collectif de consultants passionnés. En quelques années,
            nous sommes devenus un partenaire de confiance pour des
            entreprises, institutions et ONG à travers le monde.
          </p>
          <p className="font-body text-text-muted leading-relaxed">
            Notre parcours est marqué par une quête constante d'innovation et
            une compréhension profonde des marchés. Nous ne nous contentons
            pas de conseiller ; nous co-créons des solutions durables qui
            redéfinissent les industries.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -top-5 -left-5 w-full h-full bg-border rounded-xl -z-10" />
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-xl bg-white flex items-center justify-center">
            <span className="font-body text-sm text-text-muted">Image à intégrer</span>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="bg-primary/5 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-16 grid sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border-l-4 border-primary p-8">
            <Rocket className="text-primary mb-4" size={26} />
            <h3 className="font-heading font-semibold text-xl text-text mb-2">Notre mission</h3>
            <p className="font-body text-sm text-text-muted leading-relaxed">
              Accélérer la croissance de nos partenaires en intégrant
              l'intelligence humaine et digitale au cœur de leurs processus
              décisionnels.
            </p>
          </div>
          <div className="bg-white rounded-xl border-l-4 border-accent p-8">
            <Eye className="text-accent mb-4" size={26} />
            <h3 className="font-heading font-semibold text-xl text-text mb-2">Notre vision</h3>
            <p className="font-body text-sm text-text-muted leading-relaxed">
              Devenir la référence mondiale de l'accompagnement hybride, où
              stratégie de haut niveau et excellence d'exécution technologique
              ne font qu'un.
            </p>
          </div>
        </div>
      </section>

      {/* NOS VALEURS */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text mb-3">
            Nos valeurs
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-14 rounded-full" />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {COMPANY_VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.name} className="text-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Icon className="text-primary" size={20} />
                  </div>
                  <h3 className="font-heading font-semibold text-sm text-text">{value.name}</h3>
                  <p className="font-body text-xs text-text-muted mt-1">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BANDE KPI */}
      <KpiBand items={ABOUT_KPIS} />

      {/* ÉQUIPE */}
      <section className="bg-primary/5">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text mb-3">
            L'excellence au service de vos projets
          </h2>
          <p className="font-body text-text-muted mb-14 max-w-lg mx-auto">
            Une équipe multidisciplinaire unie par une même passion : la performance digitale.
          </p>
          <TeamGrid members={TEAM_MEMBERS} />
        </div>
      </section>

      {/* CTA FINAL */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="bg-primary rounded-3xl px-8 py-16 text-center">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-8">
              Envie de collaborer avec nous ?
            </h2>
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