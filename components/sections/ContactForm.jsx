"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const INITIAL_STATE = {
  name: "",
  email: "",
  phone: "",
  company: "",
  subject: "Demande de devis",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
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
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="font-body text-xs uppercase tracking-wide text-text-muted block mb-1">
            Nom complet
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-border rounded-md px-4 py-2.5 font-body text-sm focus:border-primary outline-none bg-white"
          />
        </div>
        <div>
          <label className="font-body text-xs uppercase tracking-wide text-text-muted block mb-1">
            Email professionnel
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-border rounded-md px-4 py-2.5 font-body text-sm focus:border-primary outline-none bg-white"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="font-body text-xs uppercase tracking-wide text-text-muted block mb-1">
            Téléphone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-border rounded-md px-4 py-2.5 font-body text-sm focus:border-primary outline-none bg-white"
          />
        </div>
        <div>
          <label className="font-body text-xs uppercase tracking-wide text-text-muted block mb-1">
            Entreprise
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full border border-border rounded-md px-4 py-2.5 font-body text-sm focus:border-primary outline-none bg-white"
          />
        </div>
      </div>

      <div>
        <label className="font-body text-xs uppercase tracking-wide text-text-muted block mb-1">
          Sujet
        </label>
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full border border-border rounded-md px-4 py-2.5 font-body text-sm focus:border-primary outline-none bg-white"
        >
          <option>Demande de devis</option>
          <option>Prise de rendez-vous</option>
          <option>Question générale</option>
          <option>Support</option>
          <option>Partenariat</option>
        </select>
      </div>

      <div>
        <label className="font-body text-xs uppercase tracking-wide text-text-muted block mb-1">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
          className="w-full border border-border rounded-md px-4 py-2.5 font-body text-sm focus:border-primary outline-none bg-white resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 bg-accent text-primary-dark font-body font-medium text-sm px-6 py-3 rounded-md hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {status === "loading" && <Loader2 size={16} className="animate-spin" />}
        {status === "loading" ? "Envoi en cours..." : "Envoyer le message"}
      </button>
      <p> Réponse garantie sous 24h ouvrées.</p>

      {status === "success" && (
        <p className="flex items-center gap-2 font-body text-sm text-emerald">
          <CheckCircle2 size={16} /> Message envoyé avec succès ! Nous revenons vers vous sous 24h.
        </p>
      )}

      {status === "error" && (
        <p className="flex items-center gap-2 font-body text-sm text-red-600">
          <AlertCircle size={16} /> Une erreur est survenue. Réessayez ou contactez-nous directement par email.
        </p>
      )}
    </form>
  );
}