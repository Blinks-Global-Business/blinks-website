import { useLocale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { SITE } from "@/lib/constants";

export async function generateMetadata() {
  const t = await getTranslations("legalPages.mentions");
  return { title: t("metaTitle"), description: t("metaDescription") };
}

const SECTIONS = [
  {
    title: { fr: "1. Éditeur du site", en: "1. Website publisher" },
    content: {
      fr: `Le site ${SITE.domain.replace("https://", "")} est édité par Blinks Global Business.
Adresse : ${SITE.address}
Email : ${SITE.email}
Téléphone : ${SITE.phone1}`,
      en: `The website ${SITE.domain.replace("https://", "")} is published by Blinks Global Business.
Address: ${SITE.address}
Email: ${SITE.email}
Phone: ${SITE.phone1}`,
    },
  },
  {
    title: { fr: "2. Directeur de la publication", en: "2. Publication director" },
    content: {
      fr: `La direction de la publication est assurée par la représentante légale de Blinks Global Business.`,
      en: `Publication is directed by the legal representative of Blinks Global Business.`,
    },
  },
  {
    title: { fr: "3. Hébergement", en: "3. Hosting" },
    content: {
      fr: `Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
Le nom de domaine est enregistré auprès de IONOS.`,
      en: `The website is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, United States.
The domain name is registered with IONOS.`,
    },
  },
  {
    title: { fr: "4. Propriété intellectuelle", en: "4. Intellectual property" },
    content: {
      fr: `L'ensemble des contenus présents sur ce site (textes, images, logos, graphismes) sont la propriété exclusive de Blinks Global Business, sauf mention contraire. Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans autorisation préalable est interdite.`,
      en: `All content on this website (text, images, logos, graphics) is the exclusive property of Blinks Global Business, unless otherwise stated. Any reproduction, representation, modification or use, in whole or in part, without prior authorization is prohibited.`,
    },
  },
  {
    title: { fr: "5. Responsabilité", en: "5. Liability" },
    content: {
      fr: `Blinks Global Business s'efforce d'assurer l'exactitude des informations diffusées sur ce site, mais ne peut garantir l'absence d'erreurs ou d'omissions. L'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.`,
      en: `Blinks Global Business strives to ensure the accuracy of the information published on this website, but cannot guarantee the absence of errors or omissions. Users acknowledge using this information at their own risk.`,
    },
  },
  {
    title: { fr: "6. Liens externes", en: "6. External links" },
    content: {
      fr: `Ce site peut contenir des liens vers des sites tiers. Blinks Global Business n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.`,
      en: `This website may contain links to third-party sites. Blinks Global Business has no control over these sites and disclaims any responsibility for their content.`,
    },
  },
  {
    title: { fr: "7. Droit applicable", en: "7. Governing law" },
    content: {
      fr: `Les présentes mentions légales sont soumises au droit applicable dans le pays d'établissement de Blinks Global Business. Tout litige relève de la compétence des tribunaux compétents.`,
      en: `This legal notice is governed by the law applicable in the country where Blinks Global Business is established. Any dispute falls under the jurisdiction of the competent courts.`,
    },
  },
];

export default function MentionsLegalesPage() {
  const locale = useLocale();
  const t = useTranslations("legalPages");
  const dateLocale = locale === "en" ? "en-US" : "fr-FR";

  return (
    <section className="max-w-3xl mx-auto px-6 py-16 md:py-20">
      <h1 className="font-heading font-bold text-3xl md:text-4xl text-text mb-3">
        {t("mentions.title")}
      </h1>
      <p className="font-body text-sm text-text-muted mb-12">
        {t("lastUpdated")} : {new Date().toLocaleDateString(dateLocale, { month: "long", year: "numeric" })}
      </p>

      <div className="space-y-10">
        {SECTIONS.map((section) => (
          <div key={section.title[locale]}>
            <h2 className="font-heading font-semibold text-lg text-text mb-3">{section.title[locale]}</h2>
            <p className="font-body text-sm text-text-muted leading-relaxed whitespace-pre-line">
              {section.content[locale]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}