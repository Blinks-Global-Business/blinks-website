import { useTranslations, useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Landmark, ShieldCheck, Users } from "lucide-react";
import ModalButton from "@/components/ui/ModalButton";

export async function generateMetadata() {
  const t = await getTranslations("institutional.meta");
  return { title: t("title"), description: t("description") };
}

export default function InstitutionalPage() {
  const t = useTranslations("institutional");
  const locale = useLocale();

  const domainItems = t.raw("domains.items");
  const expertItems = t.raw("approach.experts");

  return (
    <>
      {/* HEADER */}
      <section className="bg-primary text-white border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="w-14 h-14 rounded-lg bg-accent/20 flex items-center justify-center mx-auto mb-6">
            <Landmark className="text-accent" size={26} />
          </div>
          <h1 className="font-heading font-bold text-3xl md:text-4xl mb-4">{t("title")}</h1>
          <p className="font-body text-white/80 text-lg max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>
      </section>

      {/* CONTEXTE */}
      <section>
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text mb-6">{t("context.title")}</h2>
          <p className="font-body text-text-muted leading-relaxed mb-4">{t("context.paragraph1")}</p>
          <p className="font-body text-text-muted leading-relaxed">{t("context.paragraph2")}</p>
        </div>
      </section>

      {/* DOMAINES D'INTERVENTION */}
      <section className="bg-primary/5 border-y border-border">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="text-primary" size={20} />
            </div>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-text">{t("domains.title")}</h2>
          </div>
          <ul className="grid sm:grid-cols-2 gap-4">
            {domainItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 font-body text-text bg-white border border-border rounded-xl p-5"
              >
                <span className="text-accent font-bold mt-0.5">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* NOTRE APPROCHE */}
      <section>
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
              <Users className="text-accent" size={20} />
            </div>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-text">{t("approach.title")}</h2>
          </div>
          <p className="font-body text-text-muted leading-relaxed mb-6">{t("approach.intro")}</p>
          <ul className="space-y-3 mb-8">
            {expertItems.map((item) => (
              <li key={item} className="flex items-start gap-3 font-body text-text">
                <span className="text-primary font-bold mt-0.5">—</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-6 py-5">
            <p className="font-body text-text leading-relaxed">{t("approach.closing")}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="bg-primary rounded-3xl px-8 py-16 text-center">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-8 max-w-2xl mx-auto">
              {t("cta.title")}
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <ModalButton type="rdv" variant="primary">{t("cta.primaryButton")}</ModalButton>
              <ModalButton type="devis" variant="ghost" className="!text-white !border !border-white/30 hover:!bg-white/10">
                {t("cta.secondaryButton")}
              </ModalButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}