"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useModal } from "@/components/providers/ModalProvider";
import Modal from "@/components/ui/Modal";

const INITIAL_STATE = { name: "", email: "", phone: "", company: "", projectType: "", budget: "", description: "" };

export default function DevisModal() {
  const { activeModal, closeModal } = useModal();
  const t = useTranslations("modals.devis");
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          projectType: formData.projectType ? t(`projectTypeOptions.${formData.projectType}`) : "",
          budget: formData.budget ? t(`budgetOptions.${formData.budget}`) : "",
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setFormData(INITIAL_STATE);
    } catch {
      setStatus("error");
    }
  };

  const projectTypeKeys = ["web", "app", "automation", "marketing", "audit", "other"];
  const budgetKeys = ["under500k", "500kTo1m", "1mTo5m", "over5m"];

  return (
    <Modal isOpen={activeModal === "devis"} onClose={closeModal}>
      <p className="font-body text-xs uppercase tracking-widest text-primary font-semibold mb-2">{t("eyebrow")}</p>
      <h2 className="font-heading font-bold text-2xl text-text mb-2">{t("title")}</h2>
      <p className="font-body text-sm text-text-muted mb-6">{t("subtitle")}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <input name="name" placeholder={t("fullName")} required value={formData.name} onChange={handleChange}
            className="border border-border rounded-md px-4 py-2.5 font-body text-sm focus:border-primary outline-none" />
          <input name="email" type="email" placeholder={t("email")} required value={formData.email} onChange={handleChange}
            className="border border-border rounded-md px-4 py-2.5 font-body text-sm focus:border-primary outline-none" />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <input name="phone" type="tel" placeholder={t("phone")} value={formData.phone} onChange={handleChange}
            className="border border-border rounded-md px-4 py-2.5 font-body text-sm focus:border-primary outline-none" />
          <input name="company" placeholder={t("company")} value={formData.company} onChange={handleChange}
            className="border border-border rounded-md px-4 py-2.5 font-body text-sm focus:border-primary outline-none" />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <select name="projectType" value={formData.projectType} onChange={handleChange} required
            className="border border-border rounded-md px-4 py-2.5 font-body text-sm focus:border-primary outline-none">
            <option value="">{t("projectType")}</option>
            {projectTypeKeys.map((key) => (
              <option key={key} value={key}>{t(`projectTypeOptions.${key}`)}</option>
            ))}
          </select>
          <select name="budget" value={formData.budget} onChange={handleChange}
            className="border border-border rounded-md px-4 py-2.5 font-body text-sm focus:border-primary outline-none">
            <option value="">{t("budget")}</option>
            {budgetKeys.map((key) => (
              <option key={key} value={key}>{t(`budgetOptions.${key}`)}</option>
            ))}
          </select>
        </div>
        <textarea name="description" placeholder={t("description")} rows={4} required
          value={formData.description} onChange={handleChange}
          className="w-full border border-border rounded-md px-4 py-2.5 font-body text-sm focus:border-primary outline-none resize-none" />

        <button type="submit" disabled={status === "loading"}
          className="w-full flex items-center justify-center gap-2 bg-accent text-primary-dark font-body font-medium text-sm px-6 py-3 rounded-md hover:opacity-90 disabled:opacity-50">
          {status === "loading" && <Loader2 size={16} className="animate-spin" />}
          {status === "loading" ? t("submitting") : t("submit")}
        </button>

        {status === "success" && (
          <p className="flex items-center gap-2 font-body text-sm text-emerald">
            <CheckCircle2 size={16} /> {t("success")}
          </p>
        )}
        {status === "error" && (
          <p className="flex items-center gap-2 font-body text-sm text-red-600">
            <AlertCircle size={16} /> {t("error")}
          </p>
        )}
      </form>
    </Modal>
  );
}