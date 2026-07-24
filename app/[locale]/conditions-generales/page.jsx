import { useLocale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { SITE } from "@/lib/constants";

export async function generateMetadata() {
  const t = await getTranslations("legalPages.terms");
  return { title: t("metaTitle"), description: t("metaDescription") };
}

const SECTIONS = [
  {
    title: { fr: "1. Objet", en: "1. Purpose" },
    content: {
      fr: `Les présentes conditions générales régissent l'utilisation du site ${SITE.domain.replace("https://", "")} ainsi que la relation contractuelle entre Blinks Global Business et ses clients dans le cadre de ses prestations de conseil en transformation digitale.`,
      en: `These terms and conditions govern the use of the website ${SITE.domain.replace("https://", "")} as well as the contractual relationship between Blinks Global Business and its clients in connection with its digital transformation consulting services.`,
    },
  },
  {
    title: { fr: "2. Prestations proposées", en: "2. Services offered" },
    content: {
      fr: `Blinks Global Business propose des prestations de conseil, de développement web et applicatif, d'automatisation et d'intelligence artificielle, détaillées sur la page Services du site. Chaque prestation fait l'objet d'un devis personnalisé et d'un accord préalable entre les parties.`,
      en: `Blinks Global Business offers consulting, web and application development, automation and artificial intelligence services, detailed on the Services page of the website. Each service is subject to a personalized quote and prior agreement between the parties.`,
    },
  },
  {
    title: { fr: "3. Devis et commande", en: "3. Quotes and orders" },
    content: {
      fr: `Toute prestation débute par une demande de devis via le site ou un contact direct. Le devis précise le périmètre, le calendrier et le tarif de la prestation. La prestation est réputée acceptée à la signature du devis ou confirmation écrite du client.`,
      en: `Every service begins with a quote request via the website or direct contact. The quote specifies the scope, timeline and price of the service. The service is deemed accepted upon signature of the quote or written confirmation from the client.`,
    },
  },
  {
    title: { fr: "4. Modalités de paiement", en: "4. Payment terms" },
    content: {
      fr: `Les modalités de paiement (acompte, échéances) sont précisées dans chaque devis. Sauf accord contraire, un acompte est demandé au démarrage du projet.`,
      en: `Payment terms (deposit, installments) are specified in each quote. Unless otherwise agreed, a deposit is required at the start of the project.`,
    },
  },
  {
    title: { fr: "5. Propriété intellectuelle", en: "5. Intellectual property" },
    content: {
      fr: `Sauf mention contraire dans le devis, la propriété intellectuelle des livrables est transférée au client après paiement intégral de la prestation. Blinks Global Business conserve le droit de mentionner le projet réalisé à des fins de référence commerciale, sauf accord de confidentialité spécifique.`,
      en: `Unless otherwise stated in the quote, intellectual property of the deliverables is transferred to the client upon full payment for the service. Blinks Global Business retains the right to reference the completed project for commercial purposes, unless a specific confidentiality agreement applies.`,
    },
  },
  {
    title: { fr: "6. Responsabilité", en: "6. Liability" },
    content: {
      fr: `Blinks Global Business s'engage à exécuter ses prestations avec diligence et selon les règles de l'art. Sa responsabilité ne saurait être engagée en cas de force majeure ou de manquement du client à ses propres obligations (fourniture d'informations, validation des livrables, etc.).`,
      en: `Blinks Global Business undertakes to perform its services diligently and according to industry best practices. Its liability cannot be engaged in the event of force majeure or failure by the client to meet its own obligations (providing information, approving deliverables, etc.).`,
    },
  },
  {
    title: { fr: "7. Résiliation", en: "7. Termination" },
    content: {
      fr: `Toute résiliation anticipée d'une prestation en cours fait l'objet d'un accord entre les parties, incluant le règlement des travaux déjà réalisés.`,
      en: `Any early termination of an ongoing service is subject to agreement between the parties, including payment for work already completed.`,
    },
  },
  {
    title: { fr: "8. Droit applicable", en: "8. Governing law" },
    content: {
      fr: `Les présentes conditions générales sont soumises au droit applicable dans le pays d'établissement de Blinks Global Business. Tout litige relève de la compétence des tribunaux compétents.`,
      en: `These terms and conditions are governed by the law applicable in the country where Blinks Global Business is established. Any dispute falls under the jurisdiction of the competent courts.`,
    },
  },
];

export default function ConditionsGeneralesPage() {
  const locale = useLocale();
  const t = useTranslations("legalPages");
  const dateLocale = locale === "en" ? "en-US" : "fr-FR";

  return (
    <section className="max-w-3xl mx-auto px-6 py-16 md:py-20">
      <h1 className="font-heading font-bold text-3xl md:text-4xl text-text mb-3">
        {t("terms.title")}
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