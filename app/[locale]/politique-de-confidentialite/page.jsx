import { useLocale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { SITE } from "@/lib/constants";

export async function generateMetadata() {
  const t = await getTranslations("legalPages.privacy");
  return { title: t("metaTitle"), description: t("metaDescription") };
}

const SECTIONS = [
  {
    title: { fr: "1. Données collectées", en: "1. Data collected" },
    content: {
      fr: `Lorsque vous utilisez nos formulaires (contact, devis, prise de rendez-vous), nous collectons : votre nom, votre adresse email, votre numéro de téléphone, le nom de votre entreprise (le cas échéant), et le contenu de votre message.`,
      en: `When you use our forms (contact, quote request, booking), we collect: your name, email address, phone number, company name (if applicable), and the content of your message.`,
    },
  },
  {
    title: { fr: "2. Finalité du traitement", en: "2. Purpose of processing" },
    content: {
      fr: `Ces données sont utilisées exclusivement pour répondre à vos demandes, vous recontacter dans le cadre d'un projet, et planifier d'éventuels rendez-vous. Elles ne sont jamais revendues ni transmises à des tiers à des fins commerciales.`,
      en: `This data is used solely to respond to your requests, follow up with you on a project, and schedule any appointments. It is never sold or shared with third parties for commercial purposes.`,
    },
  },
  {
    title: { fr: "3. Durée de conservation", en: "3. Retention period" },
    content: {
      fr: `Vos données sont conservées pendant la durée nécessaire au traitement de votre demande, puis archivées ou supprimées conformément aux obligations légales applicables.`,
      en: `Your data is retained for as long as necessary to process your request, then archived or deleted in accordance with applicable legal obligations.`,
    },
  },
  {
    title: { fr: "4. Cookies", en: "4. Cookies" },
    content: {
      fr: `Ce site peut utiliser des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie publicitaire ou de tracking tiers n'est utilisé sans votre consentement préalable.`,
      en: `This website may use technical cookies necessary for it to function properly. No advertising or third-party tracking cookies are used without your prior consent.`,
    },
  },
  {
    title: { fr: "5. Vos droits", en: "5. Your rights" },
    content: {
      fr: `Conformément à la réglementation applicable en matière de protection des données, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition concernant vos données personnelles. Pour exercer ces droits, contactez-nous à l'adresse : ${SITE.email}`,
      en: `In accordance with applicable data protection regulations, you have the right to access, rectify, delete and object to the processing of your personal data. To exercise these rights, contact us at: ${SITE.email}`,
    },
  },
  {
    title: { fr: "6. Sécurité", en: "6. Security" },
    content: {
      fr: `Nous mettons en œuvre des mesures techniques et organisationnelles raisonnables pour protéger vos données contre tout accès non autorisé, perte ou divulgation.`,
      en: `We implement reasonable technical and organizational measures to protect your data against unauthorized access, loss or disclosure.`,
    },
  },
  {
    title: { fr: "7. Contact", en: "7. Contact" },
    content: {
      fr: `Pour toute question relative à cette politique de confidentialité, vous pouvez nous contacter à l'adresse ${SITE.email} ou au ${SITE.phone1}.`,
      en: `For any question regarding this privacy policy, you can contact us at ${SITE.email} or at ${SITE.phone1}.`,
    },
  },
];

export default function PolitiqueConfidentialitePage() {
  const locale = useLocale();
  const t = useTranslations("legalPages");
  const dateLocale = locale === "en" ? "en-US" : "fr-FR";

  return (
    <section className="max-w-3xl mx-auto px-6 py-16 md:py-20">
      <h1 className="font-heading font-bold text-3xl md:text-4xl text-text mb-3">
        {t("privacy.title")}
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