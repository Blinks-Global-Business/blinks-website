import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import {
  ArrowRight,
  Globe,
  Award,
  Zap,
  Handshake,
} from "lucide-react";
import ModalButton from "@/components/ui/ModalButton";
import Card from "@/components/ui/Card";
import FaqAccordion from "@/components/sections/FaqAccordion";
import TrustedLogos from "@/components/sections/TrustedLogos";
import CaseStudyImage from "@/components/sections/CaseStudyImage";
import { CASE_STUDIES } from "@/data/caseStudies";
import { SERVICE_CATEGORIES } from "@/data/services";
import { ACCOMPAGNEMENTS } from "@/data/pricing";
import { FAQ_ITEMS } from "@/data/faq";
import { CATEGORY_ICONS } from "@/lib/serviceIcons";

export async function generateMetadata() {
  const t = await getTranslations("home.meta");
  return { title: t("title"), description: t("description") };
}

const WHY_US_ICONS = { award: Award, agility: Zap, engagement: Handshake };

const CASE_STUDIES_PREVIEW = CASE_STUDIES.slice(0, 3);

const TRUSTED_BY = [
  { name: "Thiaré TV", logo: "/images/logos/thiare-tv.png" },
  { name: "GS2M", logo: "/images/logos/g2sm.png" },
  { name: "BAOBAB CARE", logo: "/images/logos/baobab.png" },
  { name: "Mine Cosmetics", logo: "/images/logos/mine.png" },
  { name: "Huma", logo: "/images/logos/huma.png" },
  { name: "KUKY+++", logo: "/images/logos/kuky+++.png" },
  { name: "ARCHIPROBAT", logo: "/images/logos/archiprobat.png" },
];

export default function HomePage() {
  const t = useTranslations("home");
  const tNav = useTranslations("nav");
  const locale = useLocale();

  const kpis = t.raw("kpis");
  const kpisLoop = [...kpis, ...kpis];
  const whyUsKeys = ["award", "agility", "engagement"];

  return (
    <>
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-accent italic text-primary text-lg mb-4">{t("hero.eyebrow")}</p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-text leading-tight mb-6">
            {t("hero.titleLine1")} <span className="text-primary">{t("hero.titleHighlight")}</span>
          </h1>
          <p className="font-body text-text-muted text-lg mb-8 max-w-md">{t("hero.subtitle")}</p>
          <div className="flex flex-wrap gap-4">
            <ModalButton type="rdv" variant="primary">{tNav("bookAppointment")}</ModalButton>
            <ModalButton type="devis" variant="outline">{t("hero.requestQuote")}</ModalButton>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-5 -right-5 w-full h-full bg-border rounded-xl -z-10" />
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-xl bg-white">
            <img src="/images/hero-main.jpg" alt="Équipe Blinks Global Business" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* BANDE KPI */}
      <section className="bg-primary overflow-hidden py-4">
        <div className="flex whitespace-nowrap animate-scroll-kpi w-max">
          {kpisLoop.map((kpi, i) => (
            <div key={i} className="flex items-center gap-2 px-8 shrink-0">
              <span className="font-heading font-bold text-xl text-accent">{kpi.value}</span>
              <span className="font-body text-xs text-white/80 uppercase tracking-wide">{kpi.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* NOTRE MISSION */}
      <section className="border-t-4 border-primary">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <p className="font-body text-xs uppercase tracking-widest text-primary font-semibold mb-4">
            {t("mission.eyebrow")}
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-6 leading-tight">
            {t("mission.title")}
          </h2>
          <p className="font-body text-text-muted leading-relaxed">{t("mission.text")}</p>
        </div>
      </section>

      {/* NOS DOMAINES D'EXPERTISE */}
      <section className="bg-primary/5">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-text">{t("expertise.title")}</h2>
              <p className="font-body text-text-muted mt-2 max-w-lg">{t("expertise.subtitle")}</p>
            </div>
            <Link href="/services" className="font-body text-sm text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all">
              {t("expertise.viewAll")} <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_CATEGORIES.map((cat) => {
              const Icon = CATEGORY_ICONS[cat.id] ?? Globe;
              return (
                <Card key={cat.id} className="hover:border-primary transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={22} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-text mb-2">{cat.label[locale]}</h3>
                  <p className="font-body text-sm text-text-muted mb-4">
                    {t("expertise.servicesAvailable", { count: cat.services.length })}
                  </p>
                  <Link href={`/services#${cat.id}`} className="font-body text-sm text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all">
                    {t("expertise.learnMore")} <ArrowRight size={14} />
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* APERÇU DES ACCOMPAGNEMENTS */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-4">{t("accompagnements.title")}</h2>
            <p className="font-body text-text-muted">{t("accompagnements.subtitle")}</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {ACCOMPAGNEMENTS.map((a) => (
              <div
                key={a.id}
                className={`rounded-xl border p-6 text-center ${a.recommended ? "border-accent shadow-lg" : "border-border"}`}
              >
                {a.recommended && (
                  <span className="inline-block bg-accent text-primary-dark font-body font-semibold text-[10px] px-3 py-1 rounded-full mb-3">
                    {t("accompagnements.recommended")}
                  </span>
                )}
                <h3 className="font-heading font-bold text-text mb-1">{a.name[locale]}</h3>
                <p className="font-heading font-bold text-2xl text-primary mb-1">
                  {a.price} <span className="text-sm font-body text-text-muted">FCFA{a.period[locale]}</span>
                </p>
                <p className="font-body text-xs text-text-muted mb-6">{a.equivalent}</p>
                <p className="font-body text-xs text-text-muted">{a.engagement[locale]}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/offres#tarifs" className="font-body text-sm text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
              {t("accompagnements.viewAllPricing")} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* POURQUOI BLINKS */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <img src="/images/about/pourquoi-blinks.jpg" alt="Pourquoi choisir Blinks Global Business" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-6 right-0 translate-x-6 bg-accent rounded-lg px-6 py-5 shadow-xl max-w-[220px]">
              <p className="font-heading font-bold text-xl text-primary-dark">{t("whyUs.excellence")}</p>
              <p className="font-body text-[11px] uppercase tracking-wide text-primary-dark/70 mt-1">{t("whyUs.excellenceSubtitle")}</p>
            </div>
          </div>
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-10">{t("whyUs.title")}</h2>
            <div className="space-y-8">
              {whyUsKeys.map((key) => {
                const Icon = WHY_US_ICONS[key];
                return (
                  <div key={key} className="flex gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-accent/15 flex items-center justify-center">
                      <Icon className="text-accent" size={18} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-text mb-1">{t(`whyUs.${key}.title`)}</h3>
                      <p className="font-body text-sm text-text-muted leading-relaxed">{t(`whyUs.${key}.description`)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* RÉALISATIONS (aperçu) */}
      <section className="bg-primary/5">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-4">{t("caseStudies.title")}</h2>
            <p className="font-body text-text-muted">{t("caseStudies.subtitle")}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASE_STUDIES_PREVIEW.map((study) => (
              <Card key={study.id} className="!p-0 overflow-hidden">
                <div className="w-full aspect-video">
                  <CaseStudyImage src={study.image} alt={study.title[locale]} />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-primary/10 text-primary text-[11px] font-body font-medium uppercase tracking-wide px-2.5 py-1 rounded mb-4">
                    {study.sector[locale]}
                  </span>
                  <h3 className="font-heading font-semibold text-base text-text mb-4">{study.title[locale]}</h3>

                  <div className="flex flex-wrap gap-3 mb-4">
                    {study.metrics.map((m, i) => {
                      const value = typeof m.value === "object" ? m.value[locale] : m.value;
                      const label = typeof m.label === "object" ? m.label[locale] : m.label;
                      return (
                        <div key={i} className="bg-bg border border-border rounded-lg px-3 py-2">
                          <p className="font-heading font-bold text-sm text-emerald">{value}</p>
                          <p className="font-body text-[11px] text-text-muted">{label}</p>
                        </div>
                      );
                    })}
                  </div>

                  <Link href={`/realisations/${study.id}`} className="font-body text-sm text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all">
                    {t("caseStudies.viewCaseStudy")} <ArrowRight size={14} />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ILS NOUS FONT CONFIANCE */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <p className="font-heading font-bold text-sm md:text-base uppercase tracking-widest text-text text-center mb-8">
            {t("trustedBy")}
          </p>
          <TrustedLogos items={TRUSTED_BY} />
        </div>
        <div className="h-px bg-text/20 max-w-7xl mx-auto" />
      </section>

      {/* FAQ */}
      <section>
        <div className="max-w-3xl mx-auto px-6 py-20">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text text-center mb-4">{t("faq.title")}</h2>
          <p className="font-body text-text-muted text-center mb-10">{t("faq.subtitle")}</p>
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      {/* CTA FINAL */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="bg-primary rounded-3xl px-8 py-16 text-center">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">{t("finalCta.title")}</h2>
            <p className="font-body text-white/70 max-w-lg mx-auto mb-8">{t("finalCta.subtitle")}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <ModalButton type="rdv" variant="primary">{tNav("bookAppointment")}</ModalButton>
              <ModalButton type="devis" variant="ghost" className="!text-white !border !border-white/30 hover:!bg-white/10">
                {t("hero.requestQuote")}
              </ModalButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}