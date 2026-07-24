import { MessageCircle } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SITE, SOCIAL_LINKS, NAV_LINKS, LEGAL_LINKS } from "@/lib/constants";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

export default function Footer() {
  const tNav = useTranslations("nav");
  const tLegal = useTranslations("legal");
  const tFooter = useTranslations("footer");

  const labelFor = (key) => (key === "services" ? tNav("servicesLabel") : tNav(key));

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <span className="font-heading font-bold text-lg">Blinks Global Business</span>
          <p className="font-body text-sm text-white/70 mt-3 leading-relaxed">
            {tFooter("description")}
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

        <div>
          <h4 className="font-heading font-semibold text-sm mb-4">{tFooter("navigationTitle")}</h4>
          <ul className="space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="font-body text-sm text-white/70 hover:text-accent">
                  {labelFor(link.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-sm mb-4">{tFooter("legalTitle")}</h4>
          <ul className="space-y-2.5">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="font-body text-sm text-white/70 hover:text-accent">
                  {tLegal(link.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-sm mb-4">{tFooter("contactTitle")}</h4>
          <ul className="space-y-2.5 font-body text-sm text-white/70">
            <li>{SITE.email}</li>
            <li className="flex items-center gap-2">🇫🇷 {SITE.phone2}</li>
            <li className="flex items-center gap-2">🇧🇯 {SITE.phone1}</li>
            <li className="flex items-center gap-2">🇸🇳 {SITE.phone3}</li>
            <li>{tFooter("hours")}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/50 font-body">
          <span>© {new Date().getFullYear()} Blinks Global Business. {tFooter("rights")}</span>
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  );
}