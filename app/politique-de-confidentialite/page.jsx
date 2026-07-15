import { SITE } from "@/lib/constants";

export const metadata = {
  title: "Politique de confidentialité - Blinks Global Business",
  description: "Politique de confidentialité et protection des données du site Blinks Global Business.",
};

const SECTIONS = [
  {
    title: "1. Données collectées",
    content: `Lorsque vous utilisez nos formulaires (contact, devis, prise de rendez-vous), nous collectons : votre nom, votre adresse email, votre numéro de téléphone, le nom de votre entreprise (le cas échéant), et le contenu de votre message.`,
  },
  {
    title: "2. Finalité du traitement",
    content: `Ces données sont utilisées exclusivement pour répondre à vos demandes, vous recontacter dans le cadre d'un projet, et planifier d'éventuels rendez-vous. Elles ne sont jamais revendues ni transmises à des tiers à des fins commerciales.`,
  },
  {
    title: "3. Durée de conservation",
    content: `Vos données sont conservées pendant la durée nécessaire au traitement de votre demande, puis archivées ou supprimées conformément aux obligations légales applicables.`,
  },
  {
    title: "4. Cookies",
    content: `Ce site peut utiliser des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie publicitaire ou de tracking tiers n'est utilisé sans votre consentement préalable.`,
  },
  {
    title: "5. Vos droits",
    content: `Conformément à la réglementation applicable en matière de protection des données, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition concernant vos données personnelles. Pour exercer ces droits, contactez-nous à l'adresse : ${SITE.email}`,
  },
  {
    title: "6. Sécurité",
    content: `Nous mettons en œuvre des mesures techniques et organisationnelles raisonnables pour protéger vos données contre tout accès non autorisé, perte ou divulgation.`,
  },
  {
    title: "7. Contact",
    content: `Pour toute question relative à cette politique de confidentialité, vous pouvez nous contacter à l'adresse ${SITE.email} ou au ${SITE.phone1}.`,
  },
];

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16 md:py-20">
      <h1 className="font-heading font-bold text-3xl md:text-4xl text-text mb-3">
        Politique de confidentialité
      </h1>
      <p className="font-body text-sm text-text-muted mb-12">
        Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { month: "long", year: "numeric" })}
      </p>

      <div className="space-y-10">
        {SECTIONS.map((section) => (
          <div key={section.title}>
            <h2 className="font-heading font-semibold text-lg text-text mb-3">
              {section.title}
            </h2>
            <p className="font-body text-sm text-text-muted leading-relaxed whitespace-pre-line">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}