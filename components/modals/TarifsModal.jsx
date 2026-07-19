"use client";

import { useState, useEffect } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useModal } from "@/components/providers/ModalProvider";
import Modal from "@/components/ui/Modal";
import { ACCOMPAGNEMENTS } from "@/data/pricing";
import { SOCIAL_LINKS } from "@/lib/constants";

const INITIAL_STATE = { name: "", email: "", phone: "", company: "", accompagnement: "", message: "" };

export default function TarifsModal() {
  const { activeModal, modalData, closeModal } = useModal();
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [status, setStatus] = useState("idle");

  // Pré-remplit l'accompagnement choisi si on vient d'une carte spécifique
  useEffect(() => {
    if (activeModal === "tarifs") {
      setFormData((prev) => ({ ...prev, accompagnement: modalData?.accompagnement || "" }));
    }
  }, [activeModal, modalData]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/tarifs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error();

      setStatus("success");

      // Construction du message WhatsApp pré-rempli
      const lines = [
        `Bonjour Blinks Global Business, je m'appelle ${formData.name}.`,
        `Je souhaite en savoir plus sur : ${formData.accompagnement}.`,
        `Email : ${formData.email}`,
        `Téléphone : ${formData.phone}`,
      ];
      if (formData.company) lines.push(`Entreprise : ${formData.company}`);
      if (formData.message) lines.push(`Message : ${formData.message}`);
      const waText = encodeURIComponent(lines.join("\n"));

      // Redirection WhatsApp après un court délai (le temps de voir la confirmation)
      setTimeout(() => {
        window.location.href = `${SOCIAL_LINKS.whatsapp}?text=${waText}`;
      }, 1200);

      setFormData(INITIAL_STATE);
    } catch {
      setStatus("error");
    }
  };

  return (
    <Modal isOpen={activeModal === "tarifs"} onClose={closeModal} maxWidth="max-w-lg">
      <p className="font-body text-xs uppercase tracking-widest text-primary font-semibold mb-2">
        Demande d'accompagnement
      </p>
      <h2 className="font-heading font-bold text-2xl text-text mb-2">Parlons de votre projet</h2>
      <p className="font-body text-sm text-text-muted mb-6">
        Après l'envoi, vous serez redirigé vers WhatsApp pour échanger directement avec notre équipe.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <input name="name" placeholder="Nom complet" required value={formData.name} onChange={handleChange}
            className="border border-border rounded-md px-4 py-2.5 font-body text-sm focus:border-primary outline-none" />
          <input name="email" type="email" placeholder="Email" required value={formData.email} onChange={handleChange}
            className="border border-border rounded-md px-4 py-2.5 font-body text-sm focus:border-primary outline-none" />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <input name="phone" type="tel" placeholder="Téléphone" required value={formData.phone} onChange={handleChange}
            className="border border-border rounded-md px-4 py-2.5 font-body text-sm focus:border-primary outline-none" />
          <input name="company" placeholder="Entreprise (optionnel)" value={formData.company} onChange={handleChange}
            className="border border-border rounded-md px-4 py-2.5 font-body text-sm focus:border-primary outline-none" />
        </div>

        <select name="accompagnement" required value={formData.accompagnement} onChange={handleChange}
          className="w-full border border-border rounded-md px-4 py-2.5 font-body text-sm focus:border-primary outline-none bg-white">
          <option value="">Sélectionnez un accompagnement</option>
          {ACCOMPAGNEMENTS.map((a) => (
            <option key={a.id} value={a.name}>{a.name}</option>
          ))}
          <option value="Diagnostic Stratégique & Digital">Diagnostic Stratégique & Digital</option>
          <option value="Prestation à la carte">Prestation à la carte</option>
        </select>

        <textarea name="message" placeholder="Message (optionnel)" rows={3} value={formData.message} onChange={handleChange}
          className="w-full border border-border rounded-md px-4 py-2.5 font-body text-sm focus:border-primary outline-none resize-none" />

        <button type="submit" disabled={status === "loading"}
          className="w-full flex items-center justify-center gap-2 bg-accent text-primary-dark font-body font-medium text-sm px-6 py-3 rounded-md hover:opacity-90 disabled:opacity-50">
          {status === "loading" && <Loader2 size={16} className="animate-spin" />}
          {status === "loading" ? "Envoi en cours..." : "Envoyer et continuer sur WhatsApp"}
        </button>

        {status === "success" && (
          <p className="flex items-center gap-2 font-body text-sm text-emerald">
            <CheckCircle2 size={16} /> Message envoyé ! Redirection vers WhatsApp...
          </p>
        )}
        {status === "error" && (
          <p className="flex items-center gap-2 font-body text-sm text-red-600">
            <AlertCircle size={16} /> Erreur d'envoi. Réessayez ou contactez-nous directement.
          </p>
        )}
      </form>
    </Modal>
  );
}