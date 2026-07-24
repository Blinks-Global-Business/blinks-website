import { useTranslations, useLocale } from "next-intl";
import { Rocket, Eye } from "lucide-react";
import ModalButton from "@/components/ui/ModalButton";
import KpiBand from "@/components/sections/KpiBand";
import TeamGrid from "@/components/sections/TeamGrid";
import { TEAM_MEMBERS } from "@/data/team";
import { COMPANY_VALUES } from "@/data/values";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("about.meta");
  return { title: t("title"), description: t("description") };
}

export default function AboutPage() {
  const t = useTranslations("about");
  const locale = useLocale();
  const kpis = t.raw("kpis");

  return (
    <>
      <section className="bg-primary/5 border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <p className="font-body text-xs uppercase tracking-widest text-primary font-semibold mb-3">{t("eyebrow")}</p>
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-text mb-4">{t("title")}</h1>
          <p className="font-accent italic text-text-muted text-lg">{t("quote")}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text mb-5">{t("story.title")}</h2>
          <p className="font-body text-text-muted leading-relaxed mb-4">{t("story.paragraph1")}</p>
          <p className="font-body text-text-muted leading-relaxed">{t("story.paragraph2")}</p>
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
            <h3 className="font-heading font-semibold text-xl text-text mb-2">{t("mission.title")}</h3>
            <p className="font-body text-sm text-text-muted leading-relaxed">{t("mission.text")}</p>
          </div>
          <div className="bg-white rounded-xl border-l-4 border-accent p-8">
            <Eye className="text-accent mb-4" size={26} />
            <h3 className="font-heading font-semibold text-xl text-text mb-2">{t("vision.title")}</h3>
            <p className="font-body text-sm text-text-muted leading-relaxed">{t("vision.text")}</p>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text mb-3">{t("values.title")}</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-14 rounded-full" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {COMPANY_VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.name[locale]} className="text-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Icon className="text-primary" size={20} />
                  </div>
                  <h3 className="font-heading font-semibold text-sm text-text">{value.name[locale]}</h3>
                  <p className="font-body text-xs text-text-muted mt-1">{value.description[locale]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <KpiBand items={kpis} />

      <section className="bg-primary/5">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text mb-3">{t("team.title")}</h2>
          <p className="font-body text-text-muted mb-14 max-w-lg mx-auto">{t("team.subtitle")}</p>
          <TeamGrid members={TEAM_MEMBERS} />
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="bg-primary rounded-3xl px-8 py-16 text-center">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-8">
              {t("finalCta.title")}
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <ModalButton type="rdv" variant="primary">{t("finalCta.rdvButton")}</ModalButton>
              <ModalButton type="devis" variant="ghost" className="!text-white !border !border-white/30 hover:!bg-white/10">
                {t("finalCta.quoteButton")}
              </ModalButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}