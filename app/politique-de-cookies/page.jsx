import { SITE } from "@/lib/constants";

export const metadata = {
  title: "Politique de cookies - Blinks Global Business",
  description: "Politique d'utilisation des cookies du site Blinks Global Business.",
};

const SECTIONS = [
  {
    title: "1. Qu'est-ce qu'un cookie ?",
    content: `Un cookie est un petit fichier texte déposé sur votre appareil lors de la visite d'un site web. Il permet de conserver certaines informations d'une visite à l'autre.`,
  },
  {
    title: "2. Cookies utilisés sur ce site",
    content: `Nous utilisons uniquement des cookies techniques strictement nécessaires au bon fonctionnement du site (navigation, mémorisation de préférences d'affichage). Aucun cookie publicitaire ou de suivi comportemental tiers n'est déposé sans votre consentement.`,
  },
  {
    title: "3. Durée de conservation",
    content: `Les cookies techniques sont conservés pour la durée de votre session de navigation ou jusqu'à 13 mois maximum selon leur nature.`,
  },
  {
    title: "4. Gestion des cookies",
    content: `Vous pouvez à tout moment configurer votre navigateur pour refuser les cookies ou être averti avant leur dépôt. Le refus des cookies techniques peut toutefois affecter le bon fonctionnement du site.`,
  },
  {
    title: "5. Contact",
    content: `Pour toute question relative à notre usage des cookies, contactez-nous à l'adresse ${SITE.email}.`,
  },
];

export default function CookiesPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16 md:py-20">
      <h1 className="font-heading font-bold text-3xl md:text-4xl text-text mb-3">
        Politique de cookies
      </h1>
      <p className="font-body text-sm text-text-muted mb-12">
        Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { month: "long", year: "numeric" })}
      </p>
      <div className="space-y-10">
        {SECTIONS.map((section) => (
          <div key={section.title}>
            <h2 className="font-heading font-semibold text-lg text-text mb-3">{section.title}</h2>
            <p className="font-body text-sm text-text-muted leading-relaxed whitespace-pre-line">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}