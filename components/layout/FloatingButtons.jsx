"use client";

import { useTranslations } from "next-intl";
import { MessageCircle, Sparkles } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function FloatingButtons() {
  const t = useTranslations("floatingButtons");

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <button
        aria-label={t("aiAssistant")}
        className="w-14 h-14 rounded-full bg-primary text-accent shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
        onClick={() => alert(t("aiComingSoon"))}
      >
        <Sparkles size={22} />
      </button>

      <a
        href={SOCIAL_LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("whatsapp")}
        className="w-14 h-14 rounded-full bg-emerald text-white shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}