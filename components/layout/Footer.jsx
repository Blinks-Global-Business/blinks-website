import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube } from "react-icons/fa6";
import { SITE, SOCIAL_LINKS, NAV_LINKS, LEGAL_LINKS } from "@/lib/constants";
import { SERVICE_CATEGORIES } from "@/data/services";
import LanguageToggle from "@/components/ui/LanguageToggle";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Colonne 1 — Marque */}
        <div>
          <span className="font-heading font-bold text-lg">Blinks Global Business</span>
          <p className="font-body text-sm text-white/70 mt-3 leading-relaxed">
            Cabinet international de conseil en transformation digitale.
          </p>
          <div className="flex gap-3 mt-5">
            <a href={SOCIAL_LINKS.linkedin} aria-label="LinkedIn" className="hover:text-accent">
                <FaLinkedinIn size={18} />
            </a>
            <a href={SOCIAL_LINKS.instagram} aria-label="Instagram" className="hover:text-accent">
                <FaInstagram size={18} />
            </a>
            <a href={SOCIAL_LINKS.facebook} aria-label="Facebook" className="hover:text-accent">
                <FaFacebookF size={18} />
            </a>
            <a href={SOCIAL_LINKS.whatsapp} aria-label="WhatsApp" className="hover:text-accent">
                <MessageCircle size={18} />
            </a>
            <a href={SOCIAL_LINKS.tiktok} aria-label="Tiktok" className="hover:text-accent">
                <FaTiktok size={18} />
            </a>
            <a href={SOCIAL_LINKS.youtube} aria-label="YouTube" className="hover:text-accent">
                <FaYoutube size={18} />
            </a>
          </div>
        </div>

        {/* Colonne 2 — Navigation */}
        <div>
          <h4 className="font-heading font-semibold text-sm mb-4">Navigation</h4>
          <ul className="space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="font-body text-sm text-white/70 hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Colonne 3 — Légal */}
        <div>
          <h4 className="font-heading font-semibold text-sm mb-4">Légal</h4>
            <ul className="space-y-2.5">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-body text-sm text-white/70 hover:text-accent">
                    {link.label}
                  </Link>
                </li>
            ))}
            </ul>
        </div>

        {/* Colonne 4 — Contact */}
        <div>
          <h4 className="font-heading font-semibold text-sm mb-4">Contact</h4>
          <ul className="space-y-2.5 font-body text-sm text-white/70">
            <li>{SITE.email}</li>
            <li>{SITE.phone1}</li>
            <li>{SITE.address}</li>
            <li>{SITE.hours}</li>
          </ul>
        </div>
      </div>

      {/* Barre du bas */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/50 font-body">
          <span>© {new Date().getFullYear()} Blinks Global Business. Tous droits réservés.</span>
          <LanguageToggle />
        </div>
      </div>
    </footer>
  );
}