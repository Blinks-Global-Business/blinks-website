"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLocale } from "next-intl";

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);
  const locale = useLocale();

  return (
    <div className="divide-y divide-border">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between py-5 text-left"
            >
              <span className="font-heading font-medium text-text">{item.question[locale]}</span>
              <ChevronDown
                size={18}
                className={`text-primary shrink-0 ml-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen && (
              <p className="font-body text-sm text-text-muted pb-5 pr-8 leading-relaxed">
                {item.answer[locale]}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}