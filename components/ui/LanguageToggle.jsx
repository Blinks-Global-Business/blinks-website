"use client";

import { useState } from "react";

// ⚠️ PLACEHOLDER — bouton visuel uniquement, aucune traduction réelle branchée.
// Le vrai bilinguisme FR/EN est prévu en V2 (nécessite next-intl + restructuration
// des routes en /fr et /en + traduction de tout le contenu).
export default function LanguageToggle() {
  const [lang, setLang] = useState("FR");

  return (
    <button
      onClick={() => setLang(lang === "FR" ? "EN" : "FR")}
      className="font-body text-xs text-white/70 hover:text-accent transition-colors"
      title="Version anglaise disponible prochainement"
    >
      <span className={lang === "FR" ? "text-white font-medium" : ""}>FR</span>
      {" | "}
      <span className={lang === "EN" ? "text-white font-medium" : ""}>EN</span>
    </button>
  );
}