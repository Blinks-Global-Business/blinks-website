"use client";

import { useState } from "react";

export default function CaseStudyImage({ src, alt }) {
  const [error, setError] = useState(false);

  if (!src || error) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-border">
        <span className="font-body text-xs text-text-muted">Image à intégrer</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      className="w-full h-full object-cover"
    />
  );
}