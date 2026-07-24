import { Check } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Card from "@/components/ui/Card";

export default function ServiceCard({ service, Icon }) {
  const locale = useLocale();
  const t = useTranslations("services");

  return (
    <Card>
      {Icon && (
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="text-primary" size={22} />
        </div>
      )}
      <h3 className="font-heading font-semibold text-lg text-text mb-3">{service.name[locale]}</h3>

      <p className="font-accent italic text-text mb-4 leading-snug">{service.probleme[locale]}</p>

      <p className="font-body text-xs uppercase tracking-wide text-text-muted font-medium mb-1">
        {t("solutionLabel")}
      </p>
      <p className="font-body text-sm text-text mb-4">{service.solution[locale]}</p>

      <ul className="space-y-1.5">
        {service.benefices[locale].map((b) => (
          <li key={b} className="flex items-start gap-2 font-body text-sm text-text">
            <Check size={15} className="text-emerald shrink-0 mt-0.5" />
            {b}
          </li>
        ))}
      </ul>
    </Card>
  );
}