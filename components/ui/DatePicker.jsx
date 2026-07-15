"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MONTHS_FR = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
];
const DAYS_FR = ["L", "M", "M", "J", "V", "S", "D"];

export default function DatePicker({ selectedDate, onSelect }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [viewDate, setViewDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startOffset = (firstDayOfMonth.getDay() + 6) % 7;

  const days = [];
  for (let i = 0; i < startOffset; i++) days.push(null);
  for (let d = 1; d <= daysInMonth; d++) days.push(d);

  const goToPrevMonth = () => setViewDate(new Date(year, month - 1, 1));
  const goToNextMonth = () => setViewDate(new Date(year, month + 1, 1));

  const isPast = (day) => {
    const date = new Date(year, month, day);
    return date < today;
  };

  const isSelected = (day) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === month &&
      selectedDate.getFullYear() === year
    );
  };

  return (
    <div className="bg-bg rounded-lg p-4 border border-border">
      <div className="flex items-center justify-between mb-4">
        <span className="font-heading font-semibold text-sm text-text">
          {MONTHS_FR[month]} {year}
        </span>
        <div className="flex gap-1">
          <button
            type="button"
            onClick={goToPrevMonth}
            className="w-7 h-7 rounded-md hover:bg-border flex items-center justify-center text-text-muted"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={goToNextMonth}
            className="w-7 h-7 rounded-md hover:bg-border flex items-center justify-center text-text-muted"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {DAYS_FR.map((d, i) => (
          <span key={i} className="font-body text-[10px] text-text-muted text-center uppercase">
            {d}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((day, i) => {
          if (!day) return <div key={i} />;
          const disabled = isPast(day);
          const selected = isSelected(day);
          return (
            <button
              key={i}
              type="button"
              disabled={disabled}
              onClick={() => onSelect(new Date(year, month, day))}
              className={`w-8 h-8 rounded-md font-body text-sm transition-colors ${
                selected
                  ? "bg-primary text-white font-medium"
                  : disabled
                  ? "text-text-muted/30 cursor-not-allowed"
                  : "text-text hover:bg-primary/10"
              }`}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}