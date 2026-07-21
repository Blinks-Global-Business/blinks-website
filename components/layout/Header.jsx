"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { useModal } from "@/components/providers/ModalProvider";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useModal();

  return (
    <header className="sticky top-0 z-50 bg-bg/90 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image src="/logo/blinks-logo.png" alt="Blinks Global Business" width={38} height={38} />
          <span className="font-heading font-bold text-sm leading-tight text-primary">
            Blinks 
            <br />
            <span className="font-body font-medium text-[10px] tracking-wide text-primary">
              GLOBAL BUSINESS
            </span>
          </span>
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group">
                <button className="flex items-center gap-1 font-body text-sm text-text hover:text-primary transition-colors py-2">
                  {link.label}
                  <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                </button>

                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="bg-white border border-border rounded-xl shadow-xl p-2 w-72 flex flex-col gap-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-4 py-3 hover:bg-primary/5 transition-colors"
                      >
                        <p className="font-heading font-semibold text-sm text-text">{child.label}</p>
                        <p className="font-body text-xs text-text-muted mt-0.5">{child.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm text-text hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA desktop */}
        <button
          onClick={() => openModal("rdv")}
          className="hidden md:block bg-accent text-primary-dark font-body font-medium text-sm px-5 py-2.5 rounded-md hover:opacity-90 transition-opacity"
        >
          Prendre rendez-vous
        </button>

       {/* Burger — mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary"
            aria-label="Menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}

      {/* Menu mobile */}
      {isOpen && (
        <nav className="md:hidden bg-bg border-t border-border px-6 py-6 flex flex-col gap-1">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key={link.label} className="py-2">
                <p className="font-body text-base text-text font-medium mb-2">{link.label}</p>
                <div className="flex flex-col gap-1 pl-4 border-l-2 border-border">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setIsOpen(false)}
                      className="py-2"
                    >
                      <p className="font-body text-sm text-primary font-medium">{child.label}</p>
                      <p className="font-body text-xs text-text-muted">{child.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-body text-base text-text py-3"
              >
                {link.label}
              </Link>
            )
          )}
          <button
            onClick={() => {
              openModal("rdv");
              setIsOpen(false);
            }}
            className="bg-accent text-primary-dark font-body font-medium text-sm px-5 py-3 rounded-md mt-4"
          >
            Prendre rendez-vous
          </button>
        </nav>
      )}
    </header>
  );
}