import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Award,
  Zap,
  Handshake,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import FaqAccordion from "@/components/sections/FaqAccordion";
import { SERVICE_CATEGORIES } from "@/data/services";
import { FAQ_ITEMS } from "@/data/faq";
import TrustedLogos from "@/components/sections/TrustedLogos";
import CaseStudyImage from "@/components/sections/CaseStudyImage";
import { CATEGORY_ICONS } from "@/lib/serviceIcons";

const KPIS = [
  { label: "Clients accompagnés", value: "10+" },
  { label: "Projets livrés", value: "50+" },
  { label: "Années d'expertise", value: "7" },
  { label: "Taux de satisfaction", value: "98%" },
];

const KPIS_LOOP = [...KPIS, ...KPIS];

const WHY_US = [
  {
    icon: Award,
    title: "Expertise certifiée",
    description: "Nos consultants détiennent les certifications les plus reconnues du marché.",
  },
  {
    icon: Zap,
    title: "Agilité d'exécution",
    description: "Nous déployons des solutions plus rapidement grâce à nos méthodologies éprouvées.",
  },
  {
    icon: Handshake,
    title: "Engagement résultat",
    description: "Chaque mission est pilotée par des objectifs mesurables et un vrai suivi de performance.",
  },
];

const CASE_STUDIES_PREVIEW = [
  {
    sector: "ONG",
    title: "Transformation digitale de HealthConnect",
    metric: "+45%",
    metricLabel: "Conversion",
    image: "/images/realisations/healthconnect.jpg",
  },
  {
    sector: "PME",
    title: "Transformation digitale d'Innovatech",
    metric: "-25%",
    metricLabel: "Coûts d'exploitation",
    image: "/images/realisations/innovatech.jpg",
  },
  {
    sector: "Institution",
    title: "Souveraineté de DataGov",
    metric: "2M+",
    metricLabel: "Utilisateurs",
    image: "/images/realisations/datagov.jpg",
  },
];

const TRUSTED_BY = [
  { name: "Techno", logo: "/images/logos/techno.png" },
  { name: "Luxury.co", logo: "/images/logos/luxuryco.png" },
  { name: "GlobalBank", logo: "/images/logos/globalbank.png" },
  { name: "Aerospace", logo: "/images/logos/aerospace.png" },
  { name: "FutureHub", logo: "/images/logos/futurehub.png" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-accent italic text-primary text-lg mb-4">
            Conseil. Croissance. Excellence.
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-text leading-tight mb-6">
            Propulsez votre <span className="text-primary">transformation digitale</span>
          </h1>
          <p className="font-body text-text-muted text-lg mb-8 max-w-md">
            Accompagnement expert pour digitaliser vos processus, booster vos
            ventes et prendre de meilleures décisions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Prendre rendez-vous</Button>
            <Button variant="outline">Demander un devis</Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-5 -right-5 w-full h-full bg-border rounded-xl -z-10" />
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-xl bg-white">
            <div className="w-full h-full flex items-center justify-center text-text-muted font-body text-sm">
              Image à intégrer
            </div>
          </div>
        </div>
      </section>

      {/* BANDE KPI — violet */}
      <section className="bg-primary overflow-hidden py-4">
        <div className="flex whitespace-nowrap animate-scroll-kpi w-max">
          {KPIS_LOOP.map((kpi, i) => (
            <div key={i} className="flex items-center gap-2 px-8 shrink-0">
              <span className="font-heading font-bold text-xl text-accent">
                {kpi.value}
              </span>
              <span className="font-body text-xs text-white/80 uppercase tracking-wide">
                {kpi.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* NOTRE MISSION — blanc */}
      <section className="border-t-4 border-primary">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <p className="font-body text-xs uppercase tracking-widest text-primary font-semibold mb-4">
            Notre mission
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-6 leading-tight">
            Redéfinir les frontières du possible pour les entreprises globales
          </h2>
          <p className="font-body text-text-muted leading-relaxed">
            Chez BLINKS, nous ne nous contentons pas de conseiller ; nous
            co-créons l'avenir. Notre approche fusionne l'intelligence
            stratégique de haut niveau avec une maîtrise technique de pointe
            pour transformer des défis complexes en avantages compétitifs
            durables.
          </p>
        </div>
      </section>

      {/* NOS DOMAINES D'EXPERTISE — violet clair */}
      <section className="bg-primary/5">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-text">
                Nos domaines d'expertise
              </h2>
              <p className="font-body text-text-muted mt-2 max-w-lg">
                Des solutions concrètes pour chaque étape de votre transformation.
              </p>
            </div>
            <Link
              href="/services"
              className="font-body text-sm text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all"
            >
              Voir tous nos services <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_CATEGORIES.map((cat) => {
              const Icon = CATEGORY_ICONS[cat.id] ?? Globe;
              return (
                <Card key={cat.id} className="hover:border-primary transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={22} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-text mb-2">
                    {cat.label}
                  </h3>
                  <p className="font-body text-sm text-text-muted mb-4">
                    {cat.services.length} services disponibles
                  </p>
                  <Link
                    href={`/services#${cat.id}`}
                    className="font-body text-sm text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    En savoir plus <ArrowRight size={14} />
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* POURQUOI BLINKS — blanc */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-border flex items-center justify-center">
              <span className="font-body text-sm text-text-muted">Image à intégrer</span>
            </div>
            <div className="absolute bottom-6 right-0 translate-x-6 bg-accent rounded-lg px-6 py-5 shadow-xl max-w-[220px]">
              <p className="font-heading font-bold text-xl text-primary-dark">Excellence</p>
              <p className="font-body text-[11px] uppercase tracking-wide text-primary-dark/70 mt-1">
                Notre norme quotidienne
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-10">
              Pourquoi BLINKS ?
            </h2>
            <div className="space-y-8">
              {WHY_US.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-accent/15 flex items-center justify-center">
                      <Icon className="text-accent" size={18} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-text mb-1">
                        {item.title}
                      </h3>
                      <p className="font-body text-sm text-text-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* RÉALISATIONS (aperçu) — violet clair */}
      <section className="bg-primary/5">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-4">
              Études de cas
            </h2>
            <p className="font-body text-text-muted">
              Découvrez comment nous transformons les défis de nos clients en résultats concrets.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASE_STUDIES_PREVIEW.map((study) => (
              <Card key={study.title} className="!p-0 overflow-hidden">
                <div className="w-full aspect-video">
                  <CaseStudyImage src={study.image} alt={study.title} />
                </div>
          <div className="p-6">
          <span className="inline-block bg-primary/10 text-primary text-[11px] font-body font-medium uppercase tracking-wide px-2.5 py-1 rounded mb-4">
            {study.sector}
          </span>
    <h3 className="font-heading font-semibold text-base text-text mb-4">
      {study.title}
    </h3>
    <div className="flex items-baseline gap-2 mb-4">
      <span className="font-heading font-bold text-2xl text-emerald">
        {study.metric}
      </span>
      <span className="font-body text-xs text-text-muted">{study.metricLabel}</span>
    </div>
    <Link
      href="/realisations"
      className="font-body text-sm text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all"
    >
      Voir l'étude de cas <ArrowRight size={14} />
    </Link>
  </div>
</Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* ILS NOUS FONT CONFIANCE — blanc, bande défilante, séparateur noir en bas */}
<section>
  <div className="max-w-7xl mx-auto px-6 py-16">
    <p className="font-heading font-bold text-sm md:text-base uppercase tracking-widest text-text text-center mb-8">
      Ils nous font confiance
    </p>
    <TrustedLogos items={TRUSTED_BY} />
  </div>
  <div className="h-px bg-text/20 max-w-7xl mx-auto" />
</section>

      {/* FAQ — blanc, même fond que la section précédente */}
      <section>
        <div className="max-w-3xl mx-auto px-6 py-20">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text text-center mb-4">
            Questions fréquentes
          </h2>
          <p className="font-body text-text-muted text-center mb-10">
            Tout ce que vous devez savoir avant de démarrer.
          </p>
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      {/* CTA FINAL — card violette arrondie sur fond blanc */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="bg-primary rounded-3xl px-8 py-16 text-center">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">
              Prêt à franchir le cap du digital ?
            </h2>
            <p className="font-body text-white/70 max-w-lg mx-auto mb-8">
              Échangeons sur les leviers qui feront de l'excellence technologique
              votre moteur de croissance.
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