"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LanguageSwitcher({ compact = false }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (nextLocale) => {
    if (nextLocale === locale) return;
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div className={`flex items-center gap-1.5 ${compact ? "text-xs" : "text-sm"}`}>
      <button
        onClick={() => switchTo("fr")}
        aria-label="Français"
        className={locale === "fr" ? "opacity-100" : "opacity-40 hover:opacity-70 transition-opacity"}
      >
        🇫🇷
      </button>
      <span className="text-text-muted">|</span>
      <button
        onClick={() => switchTo("en")}
        aria-label="English"
        className={locale === "en" ? "opacity-100" : "opacity-40 hover:opacity-70 transition-opacity"}
      >
        🇬🇧
      </button>
    </div>
  );
}