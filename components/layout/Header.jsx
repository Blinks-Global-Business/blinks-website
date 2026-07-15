"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { useModal } from "@/components/providers/ModalProvider";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useModal();

  return (
    <header className="sticky top-0 z-50 bg-bg/90 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image src="/logo/blinks-logo.png" alt="BLINKS Global Business" width={40} height={40} />
          <span className="font-heading font-bold text-lg text-primary hidden sm:block">
            Blinks Global Business
          </span>
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm text-text hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA desktop */}
        <button
          onClick={() => openModal("rdv")} 
          className="hidden md:block bg-accent text-primary-dark font-body font-medium text-sm px-5 py-2.5 rounded-md hover:opacity-90 transition-opacity"
        >
          Prendre rendez-vous
        </button>

        {/* Toggle mobile */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <nav className="md:hidden bg-bg border-t border-border px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-base text-text"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => openModal("rdv")} 
            className="bg-accent text-primary-dark font-body font-medium text-sm px-5 py-3 rounded-md mt-2"
          >
            Prendre rendez-vous
          </button>
        </nav>
      )}
    </header>
  );
}