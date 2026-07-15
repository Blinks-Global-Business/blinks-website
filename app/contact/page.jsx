import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaWhatsapp, FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa6";
import ContactForm from "@/components/sections/ContactForm";
import { SITE, SOCIAL_LINKS } from "@/lib/constants";
import { CONTACT_FAQ } from "@/data/contactFaq";
import FaqAccordion from "@/components/sections/FaqAccordion";

export const metadata = {
  title: "Contact - Blinks Global Business",
  description:
    "Contactez Blinks Global Business pour discuter de votre projet de transformation digitale.",
};

export default function ContactPage() {
  return (
    <>
      {/* HEADER DE PAGE */}
      <section className="bg-primary/5 border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-text mb-4">
            Contactez-nous
          </h1>
          <p className="font-body text-text-muted">
            Prêt à transformer votre vision en réalité numérique ? Notre
            équipe d'experts est là pour vous accompagner dans chaque étape
            de votre croissance.
          </p>
        </div>
      </section>

      {/* FORMULAIRE + COORDONNÉES */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        {/* Formulaire */}
        <ContactForm />

        {/* Carte coordonnées */}
        <div className="bg-primary rounded-xl p-8 md:p-10 text-white h-fit">
          <h2 className="font-heading font-bold text-xl mb-6">Nos coordonnées</h2>

          <div className="space-y-5">
            <div className="flex gap-3">
              <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
              <div>
                <p className="font-body text-[11px] uppercase tracking-wide text-white/60">Adresse</p>
                <p className="font-body text-sm">{SITE.address}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Phone size={18} className="text-accent shrink-0 mt-0.5" />
              <div>
                <p className="font-body text-[11px] uppercase tracking-wide text-white/60">Téléphone</p>
                <p className="font-body text-sm">{SITE.phone1}</p>
                <p className="font-body text-sm">{SITE.phone2}</p>
                <p className="font-body text-sm">{SITE.phone3}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Mail size={18} className="text-accent shrink-0 mt-0.5" />
              <div>
                <p className="font-body text-[11px] uppercase tracking-wide text-white/60">Email</p>
                <p className="font-body text-sm">{SITE.email}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Clock size={18} className="text-accent shrink-0 mt-0.5" />
              <div>
                <p className="font-body text-[11px] uppercase tracking-wide text-white/60">Horaires</p>
                <p className="font-body text-sm">{SITE.hours}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-6 pt-6">
            <p className="font-body text-[11px] uppercase tracking-wide text-white/60 mb-3">
              Suivez-nous
            </p>
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
</div>
          </div>
        </div>
      </section>

      {/* CARTE (placeholder) */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="w-full h-72 rounded-xl bg-border flex flex-col items-center justify-center gap-2">
          <MapPin size={28} className="text-text-muted" />
          <span className="font-body text-sm text-text-muted">Carte interactive à intégrer</span>
        </div>
      </section>

      {/* ACCÈS RAPIDE */}
      <section className="max-w-7xl mx-auto px-6 pb-16 grid sm:grid-cols-2 gap-6">
        <div className="bg-white border border-border rounded-xl p-6 flex items-start gap-4">
          <div className="w-11 h-11 rounded-lg bg-emerald/10 flex items-center justify-center shrink-0">
            <FaWhatsapp className="text-emerald" size={20} />
          </div>
          <div>
            <h3 className="font-heading font-semibold text-text mb-1">Discutons sur WhatsApp</h3>
            <p className="font-body text-sm text-text-muted mb-2">
              Une réponse rapide pour vos questions urgentes et le suivi de projet.
            </p>
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-emerald font-medium hover:underline"
            >
              Lancer la discussion →
            </a>
          </div>
        </div>

        <div className="bg-white border border-border rounded-xl p-6 flex items-start gap-4">
          <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
            <Clock className="text-accent" size={20} />
          </div>
          <div>
            <h3 className="font-heading font-semibold text-text mb-1">Réservez un créneau</h3>
            <p className="font-body text-sm text-text-muted mb-2">
              Planifiez un appel avec l'un de nos consultants seniors.
            </p>
            <button className="font-body text-sm text-accent font-medium hover:underline">
              Voir le calendrier →
            </button>
          </div>
        </div>
      </section>

      {/* MINI FAQ */}
      <section className="bg-primary/5 border-t border-border">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="font-heading font-bold text-2xl text-text text-center mb-8">
            Questions fréquentes
          </h2>
          <FaqAccordion items={CONTACT_FAQ} />
        </div>
      </section>
    </>
  );
}