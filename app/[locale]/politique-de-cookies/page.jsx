import { useLocale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { SITE } from "@/lib/constants";

export async function generateMetadata() {
  const t = await getTranslations("legalPages.cookies");
  return { title: t("metaTitle"), description: t("metaDescription") };
}

const SECTIONS = [
  {
    title: { fr: "1. Qu'est-ce qu'un cookie ?", en: "1. What is a cookie?" },
    content: {
      fr: `Un cookie est un petit fichier texte déposé sur votre appareil lors de la visite d'un site web. Il permet de conserver certaines informations d'une visite à l'autre.`,
      en: `A cookie is a small text file placed on your device when you visit a website. It allows certain information to be retained from one visit to the next.`,
    },
  },
  {
    title: { fr: "2. Cookies utilisés sur ce site", en: "2. Cookies used on this website" },
    content: {
      fr: `Nous utilisons uniquement des cookies techniques strictement nécessaires au bon fonctionnement du site (navigation, mémorisation de préférences d'affichage). Aucun cookie publicitaire ou de suivi comportemental tiers n'est déposé sans votre consentement.`,
      en: `We only use technical cookies strictly necessary for the proper functioning of the website (navigation, remembering display preferences). No advertising or third-party behavioral tracking cookies are placed without your consent.`,
    },
  },
  {
    title: { fr: "3. Durée de conservation", en: "3. Retention period" },
    content: {
      fr: `Les cookies techniques sont conservés pour la durée de votre session de navigation ou jusqu'à 13 mois maximum selon leur nature.`,
      en: `Technical cookies are retained for the duration of your browsing session or up to a maximum of 13 months depending on their nature.`,
    },
  },
  {
    title: { fr: "4. Gestion des cookies", en: "4. Managing cookies" },
    content: {
      fr: `Vous pouvez à tout moment configurer votre navigateur pour refuser les cookies ou être averti avant leur dépôt. Le refus des cookies techniques peut toutefois affecter le bon fonctionnement du site.`,
      en: `You can configure your browser at any time to refuse cookies or to be notified before they are placed. Refusing technical cookies may, however, affect the proper functioning of the website.`,
    },
  },
  {
    title: { fr: "5. Contact", en: "5. Contact" },
    content: {
      fr: `Pour toute question relative à notre usage des cookies, contactez-nous à l'adresse ${SITE.email}.`,
      en: `For any question regarding our use of cookies, contact us at ${SITE.email}.`,
    },
  },
];

export default function CookiesPage() {
  const locale = useLocale();
  const t = useTranslations("legalPages");
  const dateLocale = locale === "en" ? "en-US" : "fr-FR";

  return (
    <section className="max-w-3xl mx-auto px-6 py-16 md:py-20">
      <h1 className="font-heading font-bold text-3xl md:text-4xl text-text mb-3">
        {t("cookies.title")}
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