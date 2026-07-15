import { SITE } from "@/lib/constants";

export const metadata = {
  title: "Conditions générales - Blinks Global Business",
  description: "Conditions générales d'utilisation et de vente de Blinks Global Business.",
};

const SECTIONS = [
  {
    title: "1. Objet",
    content: `Les présentes conditions générales régissent l'utilisation du site ${SITE.domain.replace("https://", "")} ainsi que la relation contractuelle entre Blinks Global Business et ses clients dans le cadre de ses prestations de conseil en transformation digitale.`,
  },
  {
    title: "2. Prestations proposées",
    content: `Blinks Global Business propose des prestations de conseil, de développement web et applicatif, d'automatisation et d'intelligence artificielle, détaillées sur la page Services du site. Chaque prestation fait l'objet d'un devis personnalisé et d'un accord préalable entre les parties.`,
  },
  {
    title: "3. Devis et commande",
    content: `Toute prestation débute par une demande de devis via le site ou un contact direct. Le devis précise le périmètre, le calendrier et le tarif de la prestation. La prestation est réputée acceptée à la signature du devis ou confirmation écrite du client.`,
  },
  {
    title: "4. Modalités de paiement",
    content: `Les modalités de paiement (acompte, échéances) sont précisées dans chaque devis. Sauf accord contraire, un acompte est demandé au démarrage du projet.`,
  },
  {
    title: "5. Propriété intellectuelle",
    content: `Sauf mention contraire dans le devis, la propriété intellectuelle des livrables est transférée au client après paiement intégral de la prestation. Blinks Global Business conserve le droit de mentionner le projet réalisé à des fins de référence commerciale, sauf accord de confidentialité spécifique.`,
  },
  {
    title: "6. Responsabilité",
    content: `Blinks Global Business s'engage à exécuter ses prestations avec diligence et selon les règles de l'art. Sa responsabilité ne saurait être engagée en cas de force majeure ou de manquement du client à ses propres obligations (fourniture d'informations, validation des livrables, etc.).`,
  },
  {
    title: "7. Résiliation",
    content: `Toute résiliation anticipée d'une prestation en cours fait l'objet d'un accord entre les parties, incluant le règlement des travaux déjà réalisés.`,
  },
  {
    title: "8. Droit applicable",
    content: `Les présentes conditions générales sont soumises au droit applicable dans le pays d'établissement de Blinks Global Business. Tout litige relève de la compétence des tribunaux compétents.`,
  },
];

export default function ConditionsGeneralesPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16 md:py-20">
      <h1 className="font-heading font-bold text-3xl md:text-4xl text-text mb-3">
        Conditions générales
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