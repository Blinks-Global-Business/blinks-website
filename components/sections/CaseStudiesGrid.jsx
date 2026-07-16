"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Card from "@/components/ui/Card";
import CaseStudyImage from "@/components/sections/CaseStudyImage";
import { CASE_STUDY_FILTERS } from "@/data/caseStudies";

export default function CaseStudiesGrid({ studies }) {
  const [activeFilter, setActiveFilter] = useState("tous");

  // N'affiche que les filtres pour lesquels il existe au moins une étude de cas
  const availableFilters = useMemo(() => {
    const usedCategories = new Set(studies.map((s) => s.category));
    return CASE_STUDY_FILTERS.filter((f) => f.id === "tous" || usedCategories.has(f.id));
  }, [studies]);

  const filtered =
    activeFilter === "tous" ? studies : studies.filter((s) => s.category === activeFilter);

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-10 justify-center">
        {availableFilters.map((filter) => {
          const isActive = filter.id === activeFilter;
          return (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`font-body text-sm rounded-full px-4 py-2 transition-colors ${
                isActive
                  ? "bg-accent text-primary-dark font-medium"
                  : "border border-border text-text hover:border-primary hover:text-primary"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="text-center font-body text-sm text-text-muted py-10">
          Aucune étude de cas disponible dans cette catégorie pour le moment.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 gap-6">
          {filtered.map((study) => (
            <Card key={study.id} className="!p-0 overflow-hidden">
              <div className="w-full aspect-video">
                <CaseStudyImage src={study.image} alt={study.title} />
              </div>
              <div className="p-6">
                <span className="inline-block bg-primary/10 text-primary text-[11px] font-body font-medium uppercase tracking-wide px-2.5 py-1 rounded mb-3">
                  {study.sector}
                </span>
                <h3 className="font-heading font-semibold text-lg text-text mb-2">{study.title}</h3>
                <p className="font-body text-sm text-text-muted mb-4">{study.challenge}</p>

                <div className="flex flex-wrap gap-4 mb-4">
                  {study.metrics.map((m) => (
                    <div key={m.label} className="bg-bg border border-border rounded-lg px-3 py-2">
                      <p className="font-heading font-bold text-sm text-emerald">{m.value}</p>
                      <p className="font-body text-[11px] text-text-muted">{m.label}</p>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/realisations/${study.id}`}
                  className="font-body text-sm text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Voir l'étude de cas <ArrowRight size={14} />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}