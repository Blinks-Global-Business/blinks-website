import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaWhatsapp, FaLinkedinIn, FaInstagram, FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa6";
import ContactForm from "@/components/sections/ContactForm";
import ModalButton from "@/components/ui/ModalButton";
import ContactMap from "@/components/sections/ContactMap";
import FaqAccordion from "@/components/sections/FaqAccordion";
import { SITE, SOCIAL_LINKS } from "@/lib/constants";
import { CONTACT_FAQ } from "@/data/contactFaq";

export async function generateMetadata() {
  const t = await getTranslations("contact.meta");
  return { title: t("title"), description: t("description") };
}

export default function ContactPage() {
  const t = useTranslations("contact");
  const tFooter = useTranslations("footer");

  return (
    <>
      <section className="bg-primary/5 border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-text mb-4">{t("hero.title")}</h1>
          <p className="font-body text-text-muted">{t("hero.subtitle")}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <ContactForm />

        <div className="bg-primary rounded-xl p-8 md:p-10 text-white h-fit">
          <h2 className="font-heading font-bold text-xl mb-6">{t("info.title")}</h2>
          <div className="space-y-5">
            <div className="flex gap-3">
              <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
              <div>
                <p className="font-body text-[11px] uppercase tracking-wide text-white/60">{t("info.address")}</p>
                <p className="font-body text-sm">{SITE.address}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Phone size={18} className="text-accent shrink-0 mt-0.5" />
              <div>
                <p className="font-body text-[11px] uppercase tracking-wide text-white/60">{t("info.phone")}</p>
                <p className="flex items-center gap-2">🇫🇷 {SITE.phone2}</p>
                <p className="flex items-center gap-2">🇧🇯 {SITE.phone1}</p>
                <p className="flex items-center gap-2">🇸🇳 {SITE.phone3}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Mail size={18} className="text-accent shrink-0 mt-0.5" />
              <div>
                <p className="font-body text-[11px] uppercase tracking-wide text-white/60">{t("info.email")}</p>
                <p className="font-body text-sm">{SITE.email}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock size={18} className="text-accent shrink-0 mt-0.5" />
              <div>
                <p className="font-body text-[11px] uppercase tracking-wide text-white/60">{t("info.hours")}</p>
                <p className="font-body text-sm">{tFooter("hours")}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-6 pt-6">
            <p className="font-body text-[11px] uppercase tracking-wide text-white/60 mb-3">{t("info.followUs")}</p>
            <div className="flex gap-3">
              <a href={SOCIAL_LINKS.linkedin} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary-dark transition-colors">
                <FaLinkedinIn size={16} />
              </a>
              <a href={SOCIAL_LINKS.instagram} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary-dark transition-colors">
                <FaInstagram size={16} />
              </a>
              <a href={SOCIAL_LINKS.facebook} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary-dark transition-colors">
                <FaFacebookF size={16} />
              </a>
              <a href={SOCIAL_LINKS.tiktok} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary-dark transition-colors">
                <FaTiktok size={16} />
              </a>
              <a href={SOCIAL_LINKS.youtube} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary-dark transition-colors">
                <FaYoutube size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-16">
        <ContactMap address={SITE.address} />
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-16 grid sm:grid-cols-2 gap-6">
        <div className="bg-white border border-border rounded-xl p-6 flex items-start gap-4">
          <div className="w-11 h-11 rounded-lg bg-emerald/10 flex items-center justify-center shrink-0">
            <FaWhatsapp className="text-emerald" size={20} />
          </div>
          <div>
            <h3 className="font-heading font-semibold text-text mb-1">{t("whatsapp.title")}</h3>
            <p className="font-body text-sm text-text-muted mb-2">{t("whatsapp.text")}</p>
            <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="font-body text-sm text-emerald font-medium hover:underline">
              {t("whatsapp.cta")}
            </a>
          </div>
        </div>

        <div className="bg-white border border-border rounded-xl p-6 flex items-start gap-4">
          <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
            <Clock className="text-accent" size={20} />
          </div>
          <div>
            <h3 className="font-heading font-semibold text-text mb-1">{t("booking.title")}</h3>
            <p className="font-body text-sm text-text-muted mb-2">{t("booking.text")}</p>
            <ModalButton type="rdv" variant="ghost" className="!p-0 !bg-transparent text-accent font-medium hover:underline">
              {t("booking.cta")}
            </ModalButton>
          </div>
        </div>
      </section>

      <section className="bg-primary/5 border-t border-border">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="font-heading font-bold text-2xl text-text text-center mb-8">{t("faqTitle")}</h2>
          <FaqAccordion items={CONTACT_FAQ} />
        </div>
      </section>
    </>
  );
}