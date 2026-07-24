import { useTranslations, useLocale } from "next-intl";
import ModalButton from "@/components/ui/ModalButton";
import ServiceCard from "@/components/sections/ServiceCard";
import { SERVICE_CATEGORIES } from "@/data/services";
import { METHODOLOGY_STEPS } from "@/data/methodology";
import { CATEGORY_ICONS } from "@/lib/serviceIcons";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("services.meta");
  return { title: t("title"), description: t("description") };
}

export default function ServicesPage() {
  const t = useTranslations("services");
  const locale = useLocale();

  return (
    <>
      <section className="bg-primary/5 border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-text mb-4">{t("title")}</h1>
          <p className="font-body text-text-muted">{t("subtitle")}</p>
        </div>
      </section>

      <div className="sticky top-[73px] z-40 bg-bg/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-3 overflow-x-auto">
          {SERVICE_CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="shrink-0 font-body text-sm text-text border border-border rounded-full px-4 py-2 hover:border-primary hover:text-primary transition-colors"
            >
              {cat.label[locale]}
            </a>
          ))}
          <a
            href="/offres"
            className="shrink-0 font-body text-sm text-primary-dark bg-accent/20 border border-accent rounded-full px-4 py-2 hover:bg-accent/30 transition-colors"
          >
            {t("viewOffers")}
          </a>
        </div>
      </div>

      {SERVICE_CATEGORIES.map((cat, index) => {
        const Icon = CATEGORY_ICONS[cat.id];
        const isEven = index % 2 === 0;
        return (
          <section key={cat.id} id={cat.id} className={`scroll-mt-32 ${isEven ? "" : "bg-primary/5"}`}>
            <div className="max-w-7xl mx-auto px-6 py-16">
              <div className="grid md:grid-cols-3 gap-8 mb-10 items-center">
                <div className="md:col-span-1 relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                  <img src={cat.image} alt={cat.label[locale]} className="w-full h-full object-cover" />
                </div>
                <div className="md:col-span-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={22} />
                  </div>
                  <h2 className="font-heading font-bold text-2xl md:text-3xl text-text">{cat.label[locale]}</h2>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.services.map((service) => (
                  <ServiceCard key={service.id} service={service} Icon={Icon} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* MÉTHODOLOGIE DARE */}
      <section className="bg-primary/5">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text mb-3">
            {t("methodology.title")}
          </h2>
          <p className="font-body text-text-muted mb-14 max-w-xl mx-auto">{t("methodology.subtitle")}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {METHODOLOGY_STEPS.map((step) => {
  const StepIcon = step.icon;
  return (
    <div key={step.letter} className="relative flex flex-col items-center text-center">
      <div className="relative">
        <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-heading font-bold text-xl">
          {step.letter}
        </div>
        <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center absolute -bottom-2 -right-2 border-2 border-bg">
          <StepIcon className="text-primary-dark" size={16} />
        </div>
      </div>
      <p className="font-heading font-bold text-sm uppercase tracking-wide text-text mt-5">
        {step.label[locale]}
      </p>
      <p className="font-body text-xs text-text-muted mt-2 max-w-[160px]">
        {step.description[locale]}
      </p>
    </div>
  );
})}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="bg-primary rounded-3xl px-8 py-16 text-center">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">
              {t("finalCta.title")}
            </h2>
            <p className="font-body text-white/70 max-w-lg mx-auto mb-8">{t("finalCta.subtitle")}</p>
            <a
              href="/offres"
              className="inline-flex items-center justify-center bg-accent text-primary-dark font-body font-medium text-sm px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
            >
              {t("finalCta.button")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}