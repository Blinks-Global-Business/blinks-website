"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useModal } from "@/components/providers/ModalProvider";
import Modal from "@/components/ui/Modal";

const INITIAL_STATE = {
  name: "",
  email: "",
  phone: "",
  company: "",
  projectType: "",
  budget: "",
  description: "",
};

export default function DevisModal() {
  const { activeModal, closeModal } = useModal();
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [status, setStatus] = useState("idle");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setFormData(INITIAL_STATE);
    } catch {
      setStatus("error");
    }
  };

  return (
    <Modal isOpen={activeModal === "devis"} onClose={closeModal}>
      <p className="font-body text-xs uppercase tracking-widest text-primary font-semibold mb-2">
        Devis personnalisé
      </p>
      <h2 className="font-heading font-bold text-2xl text-text mb-2">
        Décrivez votre projet
      </h2>
      <p className="font-body text-sm text-text-muted mb-6">
        Réponse sous 24 heures par l'un de nos experts.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            name="name" placeholder="Nom complet" required
            value={formData.name} onChange={handleChange}
            className="border border-border rounded-md px-4 py-2.5 font-body text-sm focus:border-primary outline-none"
          />
          <input
            name="email" type="email" placeholder="Email professionnel" required
            value={formData.email} onChange={handleChange}
            className="border border-border rounded-md px-4 py-2.5 font-body text-sm focus:border-primary outline-none"
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            name="phone" type="tel" placeholder="Téléphone"
            value={formData.phone} onChange={handleChange}
            className="border border-border rounded-md px-4 py-2.5 font-body text-sm focus:border-primary outline-none"
          />
          <input
            name="company" placeholder="Nom de votre société"
            value={formData.company} onChange={handleChange}
            className="border border-border rounded-md px-4 py-2.5 font-body text-sm focus:border-primary outline-none"
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <select
            name="projectType" value={formData.projectType} onChange={handleChange} required
            className="border border-border rounded-md px-4 py-2.5 font-body text-sm focus:border-primary outline-none"
          >
            <option value="">Type de projet</option>
            <option>Développement Web</option>
            <option>Application web</option>
            <option>Automatisation / IA</option>
            <option>Marketing Digital</option>
            <option>Audit commercial</option>
            <option>Autre</option>
          </select>
          <select
            name="budget" value={formData.budget} onChange={handleChange}
            className="border border-border rounded-md px-4 py-2.5 font-body text-sm focus:border-primary outline-none"
          >
            <option value="">Budget estimatif</option>
            <option>Moins de 1 000 000 FCFA</option>
            <option>1 000 000 FCFA – 5 000 000 FCFA</option>
            <option>5 000 000 FCFA – 10 000 000 FCFA</option>
            <option>Plus de 10 00 000 FCFA</option>
          </select>
        </div>
        <textarea
          name="description" placeholder="Quels sont vos objectifs et enjeux principaux ?" rows={4} required
          value={formData.description} onChange={handleChange}
          className="w-full border border-border rounded-md px-4 py-2.5 font-body text-sm focus:border-primary outline-none resize-none"
        />

        <button
          type="submit" disabled={status === "loading"}
          className="w-full flex items-center justify-center gap-2 bg-accent text-primary-dark font-body font-medium text-sm px-6 py-3 rounded-md hover:opacity-90 disabled:opacity-50"
        >
          {status === "loading" && <Loader2 size={16} className="animate-spin" />}
          {status === "loading" ? "Envoi en cours..." : "Envoyer ma demande"}
        </button>

        {status === "success" && (
          <p className="flex items-center gap-2 font-body text-sm text-emerald">
            <CheckCircle2 size={16} /> Demande envoyée ! Nous revenons vers vous sous 24h.
          </p>
        )}
        {status === "error" && (
          <p className="flex items-center gap-2 font-body text-sm text-red-600">
            <AlertCircle size={16} /> Erreur d'envoi. Réessayez plus tard.
          </p>
        )}
      </form>
    </Modal>
  );
}