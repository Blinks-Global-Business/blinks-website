"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { FaLinkedinIn } from "react-icons/fa6";

function MemberPhoto({ src, alt }) {
  const [error, setError] = useState(false);

  if (!src || error) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-primary/10">
        <span className="font-heading font-bold text-2xl text-primary">
          {alt.split(" ").map((w) => w[0]).join("")}
        </span>
      </div>
    );
  }

  return <img src={src} alt={alt} onError={() => setError(true)} className="w-full h-full object-cover" />;
}

export default function TeamGrid({ members }) {
  const locale = useLocale();
  const t = useTranslations("about.team");

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {members.map((member) => (
        <div key={member.name} className="text-center">
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden mx-auto mb-4 border-2 border-accent">
            <MemberPhoto src={member.photo} alt={member.name} />
          </div>
          <h3 className="font-heading font-semibold text-sm text-text">{member.name}</h3>
          <p className="font-body text-xs text-text-muted mt-0.5">{member.role[locale]}</p>
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary text-xs font-body mt-2 hover:underline"
            >
              <FaLinkedinIn size={12} /> {t("connect")}
            </a>
          )}
        </div>
      ))}
    </div>
  );
}