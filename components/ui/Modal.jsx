"use client";

import { X } from "lucide-react";

export default function Modal({ isOpen, onClose, children, maxWidth = "max-w-lg" }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-primary-dark/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-2xl shadow-2xl w-full ${maxWidth} max-h-[90vh] overflow-y-auto relative p-8`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Fermer"
          className="absolute top-5 right-5 text-text-muted hover:text-text"
        >
          <X size={22} />
        </button>
        {children}
      </div>
    </div>
  );
}