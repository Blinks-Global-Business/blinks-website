import { Check } from "lucide-react";
import ModalButton from "@/components/ui/ModalButton";

export default function ParcoursCard({ parcours }) {
  return (
    <div
      className={`relative rounded-2xl border p-8 flex flex-col ${
        parcours.recommended
          ? "border-accent shadow-xl bg-white scale-[1.02]"
          : "border-border bg-white"
      }`}
    >
      {parcours.recommended && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-primary-dark font-body font-semibold text-xs px-4 py-1 rounded-full">
          ★ RECOMMANDÉE
        </span>
      )}

      <h3 className="font-heading font-bold text-xl text-text mb-1">{parcours.name}</h3>
      <p className="font-body text-sm text-text-muted mb-5">{parcours.tagline}</p>

      <div className="mb-1">
        <span className="font-body text-sm text-text-muted line-through mr-2">
          {parcours.priceOriginal} F
        </span>
      </div>
      <div className="flex items-baseline gap-1 mb-1">
        <span className="font-heading font-bold text-3xl text-primary">{parcours.price}</span>
        <span className="font-body text-sm text-text-muted">FCFA{parcours.period}</span>
      </div>
      <p className="font-body text-xs text-text-muted mb-6">{parcours.engagement}</p>

      <p className="font-body text-xs uppercase tracking-wide text-text-muted font-semibold mb-3">
        Inclus chaque mois
      </p>
      <ul className="space-y-2 mb-6 flex-1">
        {parcours.features.map((f) => (
          <li key={f} className="flex items-start gap-2 font-body text-sm text-text">
            <Check size={15} className="text-emerald shrink-0 mt-0.5" />
            {f}
          </li>
        ))}
      </ul>

      {parcours.note && (
        <p className="font-body text-xs italic text-text-muted mb-4">{parcours.note}</p>
      )}

      <ModalButton
        type="devis"
        variant={parcours.recommended ? "primary" : "outline"}
        className="w-full justify-center mt-auto"
      >
        Choisir ce parcours
      </ModalButton>
    </div>
  );
}