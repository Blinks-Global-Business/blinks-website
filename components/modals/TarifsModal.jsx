"use client";

import { useState, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useModal } from "@/components/providers/ModalProvider";
import Modal from "@/components/ui/Modal";
import { ACCOMPAGNEMENTS } from "@/data/pricing";
import { SOCIAL_LINKS } from "@/lib/constants";

const INITIAL_STATE = { name: "", email: "", phone: "", company: "", accompagnement: "", message: "" };

export default function TarifsModal() {
  const { activeModal, modalData, closeModal } = useModal();
  const locale = useLocale();
  const t = useTranslations("modals.tarifs");
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [status, setStatus] = useState("idle");

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

      const lines = [
        `${t("whatsappGreeting")} ${formData.name}.`,
        `${t("whatsappInterest")} : ${formData.accompagnement}.`,
        `Email : ${formData.email}`,
        `${locale === "en" ? "Phone" : "Téléphone"} : ${formData.phone}`,
      ];
      if (formData.company) lines.push(`${t("whatsappCompany")} : ${formData.company}`);
      if (formData.message) lines.push(`${t("whatsappMessage")} : ${formData.message}`);
      const waText = encodeURIComponent(lines.join("\n"));

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
          <input name="phone" type="tel" placeholder={t("phone")} required value={formData.phone} onChange={handleChange}
            className="border border-border rounded-md px-4 py-2.5 font-body text-sm focus:border-primary outline-none" />
          <input name="company" placeholder={t("company")} value={formData.company} onChange={handleChange}
            className="border border-border rounded-md px-4 py-2.5 font-body text-sm focus:border-primary outline-none" />
        </div>

        <select name="accompagnement" required value={formData.accompagnement} onChange={handleChange}
          className="w-full border border-border rounded-md px-4 py-2.5 font-body text-sm focus:border-primary outline-none bg-white">
          <option value="">{t("selectPackage")}</option>
          {ACCOMPAGNEMENTS.map((a) => (
            <option key={a.id} value={a.name[locale]}>{a.name[locale]}</option>
          ))}
          <option value={t("diagnostic")}>{t("diagnostic")}</option>
          <option value={t("customService")}>{t("customService")}</option>
        </select>

        <textarea name="message" placeholder={t("message")} rows={3} value={formData.message} onChange={handleChange}
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