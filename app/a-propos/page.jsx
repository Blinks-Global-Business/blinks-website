import { Rocket, Eye } from "lucide-react";
import ModalButton from "@/components/ui/ModalButton";
import KpiBand from "@/components/sections/KpiBand";
import TeamGrid from "@/components/sections/TeamGrid";
import { TEAM_MEMBERS } from "@/data/team";
import { COMPANY_VALUES } from "@/data/values";

export const metadata = {
  title: "À propos - Blinks Global Business",
  description: "Découvrez l'histoire, la mission et les valeurs de Blinks Global Business.",
};

const ABOUT_KPIS = [
  { label: "Années d'expertise", value: "10" },
  { label: "Clients accompagnés", value: "10+" },
  { label: "Pays desservis", value: "3" },
  { label: "équipe cœur appuyée par un réseau d'experts certifiés", value: "Une" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary/5 border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <p className="font-body text-xs uppercase tracking-widest text-primary font-semibold mb-3">Notre identité</p>
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-text mb-4">À propos de Blinks Global Business</h1>
          <p className="font-accent italic text-text-muted text-lg">
            « Redéfinir l'excellence stratégique à l'ère du numérique pour bâtir les leaders de demain. »
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text mb-5">Notre histoire</h2>
          <p className="font-body text-text-muted leading-relaxed mb-4">
            Fondé sur la conviction que la technologie ne vaut rien sans vision stratégique, 
            Blinks Global Business est né comme un collectif de consultants passionnés. 
            Aujourd'hui, nous accompagnons entreprises, institutions et associations en Afrique de l'Ouest et en Europe avec une ambition simple : des résultats mesurables, projet après projet. 
          </p>
          <p className="font-body text-text-muted leading-relaxed">
            Notre parcours est marqué par une quête constante d'innovation et une compréhension profonde des
            marchés. Nous ne nous contentons pas de conseiller, nous co-créons des solutions durables qui
            redéfinissent les industries.
          </p>
        </div>
        <div className="relative">
  <div className="absolute -top-5 -left-5 w-full h-full bg-border rounded-xl -z-10" />
  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
    <img
      src="/images/about/notre-histoire.jpg"
      alt="L'histoire de Blinks Global Business"
      className="w-full h-full object-cover"
    />
  </div>
</div>
      </section>

      <section className="bg-primary/5 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-16 grid sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border-l-4 border-primary p-8">
            <Rocket className="text-primary mb-4" size={26} />
            <h3 className="font-heading font-semibold text-xl text-text mb-2">Notre mission</h3>
            <p className="font-body text-sm text-text-muted leading-relaxed">
              Accompagner les organisations africaines dans leur transformation digitale grâce à l'innovation, 
              à l'intelligence artificielle et à des stratégies performantes pour accélérer leur croissance et leur compétitivité.
            </p>
          </div>
          <div className="bg-white rounded-xl border-l-4 border-accent p-8">
            <Eye className="text-accent mb-4" size={26} />
            <h3 className="font-heading font-semibold text-xl text-text mb-2">Notre vision</h3>
            <p className="font-body text-sm text-text-muted leading-relaxed">
              Devenir le cabinet de conseil de référence en transformation digitale des organisations africaines, 
              leader en innovation, intelligence artificielle et perfomance économique.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text mb-3">Nos valeurs</h2>
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

      <KpiBand items={ABOUT_KPIS} />

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

      <section>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="bg-primary rounded-3xl px-8 py-16 text-center">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-8">
              Envie de collaborer avec nous ?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <ModalButton type="rdv" variant="primary">Prendre rendez-vous</ModalButton>
              <ModalButton type="devis" variant="ghost" className="!text-white !border !border-white/30 hover:!bg-white/10">
                Demander un devis
              </ModalButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}