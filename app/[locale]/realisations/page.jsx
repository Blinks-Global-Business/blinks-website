import { useTranslations } from "next-intl";
import ModalButton from "@/components/ui/ModalButton";
import CaseStudiesGrid from "@/components/sections/CaseStudiesGrid";
import TrustedLogos from "@/components/sections/TrustedLogos";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";
import { CASE_STUDIES } from "@/data/caseStudies";
import { TESTIMONIALS } from "@/data/testimonials";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("realisations.meta");
  return { title: t("title"), description: t("description") };
}

const TRUSTED_BY = [
  { name: "Thiaré TV", logo: "/images/logos/thiare-tv.png" },
  { name: "GS2M", logo: "/images/logos/g2sm.png" },
  { name: "BAOBAB CARE", logo: "/images/logos/baobab.png" },
  { name: "Mine Cosmetics", logo: "/images/logos/mine.png" },
  { name: "Huma", logo: "/images/logos/huma.png" },
  { name: "KUKY+++", logo: "/images/logos/kuky+++.png" },
  { name: "ARCHIPROBAT", logo: "/images/logos/archiprobat.png" },
];

export default function RealisationsPage() {
  const t = useTranslations("realisations");

  return (
    <>
      <section className="bg-primary/5 border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-text mb-4">{t("hero.title")}</h1>
          <p className="font-body text-text-muted">{t("hero.subtitle")}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <CaseStudiesGrid studies={CASE_STUDIES} />
      </section>

      <section className="bg-primary/5 border-y border-border">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <TestimonialCarousel items={TESTIMONIALS} />
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <p className="font-heading font-bold text-sm md:text-base uppercase tracking-widest text-text text-center mb-8">
            {t("trustedBy")}
          </p>
          <TrustedLogos items={TRUSTED_BY} />
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="bg-primary rounded-3xl px-8 py-16 text-center">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">
              {t("finalCta.title")}
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <ModalButton type="devis" variant="primary">{t("finalCta.quoteButton")}</ModalButton>
              <ModalButton type="rdv" variant="ghost" className="!text-white !border !border-white/30 hover:!bg-white/10">
                {t("finalCta.rdvButton")}
              </ModalButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}