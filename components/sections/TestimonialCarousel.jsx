"use client";

import { useState, useEffect, useRef } from "react";

export default function TestimonialCarousel({ items }) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isPaused || items.length <= 1) return;

    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, [isPaused, items.length]);

  const current = items[index];

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="text-center"
    >
      <div key={index} className="animate-fade-in">
        <p className="font-accent italic text-xl md:text-2xl text-text leading-relaxed mb-6 min-h-[6rem] flex items-center justify-center">
          « {current.quote} »
        </p>
        <p className="font-body text-sm text-text-muted font-medium">
          — {current.author}
        </p>
      </div>

      {/* Indicateurs de position */}
      {items.length > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Témoignage ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-primary" : "w-1.5 bg-border"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}