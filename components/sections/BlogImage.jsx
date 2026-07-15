"use client";

import { useState } from "react";

export default function BlogImage({ src, alt, className = "" }) {
  const [error, setError] = useState(false);

  if (!src || error) {
    return (
      <div className={`flex items-center justify-center bg-border ${className}`}>
        <span className="font-body text-xs text-text-muted">Image à intégrer</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      className={`object-cover ${className}`}
    />
  );
}