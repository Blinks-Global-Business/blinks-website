import { SITE } from "@/lib/constants";

export const metadata = {
  title: "Mentions légales - Blinks Global Business",
  description: "Mentions légales du site Blinks Global Business.",
};

const SECTIONS = [
  {
    title: "1. Éditeur du site",
    content: `Le site ${SITE.domain.replace("https://", "")} est édité par Blinks Global Business.
Adresse : ${SITE.address}
Email : ${SITE.email}
Téléphone : ${SITE.phone1}`,
  },
  {
    title: "2. Directeur de la publication",
    content: `La direction de la publication est assurée par la représentante légale de Blinks Global Business.`,
  },
  {
    title: "3. Hébergement",
    content: `Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
Le nom de domaine est enregistré auprès de IONOS.`,
  },
  {
    title: "4. Propriété intellectuelle",
    content: `L'ensemble des contenus présents sur ce site (textes, images, logos, graphismes) sont la propriété exclusive de Blinks Global Business, sauf mention contraire. Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans autorisation préalable est interdite.`,
  },
  {
    title: "5. Responsabilité",
    content: `Blinks Global Business s'efforce d'assurer l'exactitude des informations diffusées sur ce site, mais ne peut garantir l'absence d'erreurs ou d'omissions. L'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.`,
  },
  {
    title: "6. Liens externes",
    content: `Ce site peut contenir des liens vers des sites tiers. Blinks Global Business n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.`,
  },
  {
    title: "7. Droit applicable",
    content: `Les présentes mentions légales sont soumises au droit applicable dans le pays d'établissement de Blinks Global Business. Tout litige relève de la compétence des tribunaux compétents.`,
  },
];

export default function MentionsLegalesPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16 md:py-20">
      <h1 className="font-heading font-bold text-3xl md:text-4xl text-text mb-3">
        Mentions légales
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