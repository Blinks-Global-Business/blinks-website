import { Search, Rocket, TrendingUp as TrendingUpIcon } from "lucide-react";
import ModalButton from "@/components/ui/ModalButton";
import AccompagnementCard from "@/components/sections/AccompagnementCard";
import { DIAGNOSTIC_OFFER, ACCOMPAGNEMENTS, A_LA_CARTE, POURQUOI_BLINKS } from "@/data/pricing";

export const metadata = {
  title: "Nos Offres & Tarifs - Blinks Global Business",
  description: "Diagnostic, accompagnements mensuels et prestations à la carte pour votre transformation digitale.",
};

export default function OffresPage() {
  return (
    <>
      <section className="bg-primary/5 border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-text mb-4">
            Nos offres & nos tarifs
          </h1>
          <p className="font-body text-text-muted">
            Un engagement clair, un prix fixe, zéro surprise. Choisissez le niveau
            d'accompagnement adapté à votre situation.
          </p>
        </div>
      </section>

      {/* NOTRE APPROCHE EN 3 TEMPS */}
      <section className="bg-primary">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-12">
            Notre approche en 3 temps
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { icon: Search, title: "Diagnostiquer", desc: "Comprendre votre situation réelle avant de proposer quoi que ce soit." },
              { icon: Rocket, title: "Déployer", desc: "Livrer des solutions concrètes, avec des livrables chiffrés et des délais tenus." },
              { icon: TrendingUpIcon, title: "Développer", desc: "Accompagner votre croissance dans la durée avec des résultats mesurables." },
            ].map((step) => {
              const StepIcon = step.icon;
              return (
                <div key={step.title} className="text-center">
                  <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                    <StepIcon className="text-primary-dark" size={24} />
                  </div>
                  <h3 className="font-heading font-bold text-white mb-2">{step.title}</h3>
                  <p className="font-body text-sm text-white/70">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DIAGNOSTIC */}
      <section id="tarifs" className="scroll-mt-24">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <p className="font-body text-xs uppercase tracking-widest text-primary font-semibold mb-3">
            Votre porte d'entrée
          </p>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text mb-8">
            {DIAGNOSTIC_OFFER.title}
          </h2>

          <div className="bg-white border-2 border-primary rounded-2xl p-8 text-left">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-heading font-bold text-3xl text-primary">{DIAGNOSTIC_OFFER.price}</span>
              <span className="font-body text-text-muted">{DIAGNOSTIC_OFFER.currency}</span>
            </div>
            <p className="font-body text-xs text-text-muted mb-6">
              {DIAGNOSTIC_OFFER.equivalent} · {DIAGNOSTIC_OFFER.delay}
            </p>
            <ul className="space-y-2 mb-6">
              {DIAGNOSTIC_OFFER.features.map((f) => (
                <li key={f} className="font-body text-sm text-text">— {f}</li>
              ))}
            </ul>
            <p className="font-body text-sm bg-accent/10 border border-accent/30 rounded-lg p-4 mb-6">
              ★ {DIAGNOSTIC_OFFER.highlight}
            </p>
            <ModalButton type="tarifs" data={{ accompagnement: "Diagnostic Stratégique & Digital" }} variant="primary" className="w-full justify-center">
              Réserver mon diagnostic
            </ModalButton>
          </div>
        </div>
      </section>

      {/* ACCOMPAGNEMENTS */}
      <section className="bg-primary/5">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-text mb-3">
              Trois accompagnements. Une seule ambition : votre croissance.
            </h2>
            <p className="font-body text-text-muted">
              Un accompagnement mensuel tout inclus, sans surprise.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {ACCOMPAGNEMENTS.map((a) => (
              <AccompagnementCard key={a.id} accompagnement={a} />
            ))}
          </div>
        </div>
      </section>

      {/* À LA CARTE */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="font-body text-xs uppercase tracking-widest text-primary font-semibold mb-3">
              Un besoin précis ?
            </p>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-text mb-3">
              Prestations à la commande
            </h2>
            <p className="font-body text-text-muted">
              Vous laissez le brief. On livre. Devis précis sous 48h.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {A_LA_CARTE.map((item) => (
              <div key={item.name} className="bg-white border border-border rounded-xl p-6">
                <h3 className="font-heading font-semibold text-text mb-1">{item.name}</h3>
                <p className="font-body text-sm text-accent font-semibold mb-3">{item.price}</p>
                <p className="font-body text-sm text-text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GRANDS COMPTES */}
      <section className="bg-primary/5 border-y border-border">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <p className="font-body text-xs uppercase tracking-widest text-primary font-semibold mb-3">
            Grands comptes
          </p>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text mb-4">
            Institutions & organisations
          </h2>
          <p className="font-body text-text-muted mb-8">
            Ministères, agences publiques, ONG internationales, grandes entreprises : vos projets
            exigent une réponse dédiée. Étude de votre besoin et proposition détaillée sous 10 jours ouvrés.
          </p>
          <ModalButton type="devis" variant="primary">Consultation initiale offerte</ModalButton>
        </div>
      </section>

      {/* POURQUOI BLINKS GLOBAL BUSINESS */}
      <section>
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text text-center mb-10">
            Pourquoi Blinks Global Business ?
          </h2>
          <ul className="space-y-4">
            {POURQUOI_BLINKS.map((item) => (
              <li key={item} className="flex items-start gap-3 font-body text-text">
                <span className="text-accent font-bold mt-0.5">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA FINAL */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="bg-primary rounded-3xl px-8 py-16 text-center">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">
              Passez à l'action
            </h2>
            <p className="font-body text-white/70 max-w-lg mx-auto mb-8">
              Réservez votre Diagnostic Stratégique & Digital · 19 900 FCFA
            </p>
            <ModalButton type="tarifs" data={{ accompagnement: "Diagnostic Stratégique & Digital" }} variant="primary">
              Réserver mon diagnostic
            </ModalButton>
          </div>
        </div>
      </section>
    </>
  );
}