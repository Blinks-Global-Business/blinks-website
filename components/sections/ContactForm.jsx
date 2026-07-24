"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const INITIAL_STATE = { name: "", email: "", phone: "", company: "", subject: "quote", message: "" };

export default function ContactForm() {
  const t = useTranslations("contact.form");
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, subject: t(`subjectOptions.${formData.subject}`) }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setFormData(INITIAL_STATE);
    } catch {
      setStatus("error");
    }
  };

  const subjectKeys = ["quote", "appointment", "general", "support", "partnership"];

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="font-body text-xs uppercase tracking-wide text-text-muted block mb-1">
            {t("fullName")}
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
            {t("emailLabel")}
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
            {t("phone")}
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
            {t("company")}
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
          {t("subject")}
        </label>
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full border border-border rounded-md px-4 py-2.5 font-body text-sm focus:border-primary outline-none bg-white"
        >
          {subjectKeys.map((key) => (
            <option key={key} value={key}>{t(`subjectOptions.${key}`)}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="font-body text-xs uppercase tracking-wide text-text-muted block mb-1">
          {t("message")}
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
        {status === "loading" ? t("submitting") : t("submit")}
      </button>
      <p className="font-body text-xs text-text-muted text-center">{t("responseTime")}</p>

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
  );
}