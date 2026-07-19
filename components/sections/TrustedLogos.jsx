"use client";

import { useState } from "react";

function LogoItem({ name, logo }) {
  const [error, setError] = useState(false);

  if (!logo || error) {
    return (
      <span className="font-heading font-extrabold text-xl md:text-2xl text-text/40 uppercase tracking-wide">
        {name}
      </span>
    );
  }

  return (
    <img
      src={logo}
      alt={name}
      onError={() => setError(true)}
      className="h-14 md:h-16 w-auto object-contain"
    />
  );
}

export default function TrustedLogos({ items }) {
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <div className="flex whitespace-nowrap animate-scroll-kpi w-max items-center gap-16 px-8">
        {loop.map((item, i) => (
          <div key={i} className="shrink-0">
            <LogoItem name={item.name} logo={item.logo} />
          </div>
        ))}
      </div>
    </div>
  );
}