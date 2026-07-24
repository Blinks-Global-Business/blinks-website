"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export default function NewsletterForm() {
  const t = useTranslations("newsletter");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <p className="flex items-center gap-2 font-body text-sm text-emerald">
        <CheckCircle2 size={18} /> {t("success")}
      </p>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full md:w-auto gap-3">
        <input
          type="email"
          placeholder={t("placeholder")}
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full sm:flex-1 md:w-64 border border-border rounded-md focus:border-primary outline-none font-body text-sm px-4 py-2.5 bg-bg"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full sm:w-auto shrink-0 flex items-center justify-center gap-2 bg-accent text-primary-dark font-body font-medium text-sm px-6 py-2.5 rounded-md hover:opacity-90 disabled:opacity-50"
        >
          {status === "loading" && <Loader2 size={14} className="animate-spin" />}
          {status === "loading" ? t("subscribing") : t("subscribe")}
        </button>
      </form>

      {status === "error" && (
        <p className="flex items-center gap-2 font-body text-xs text-red-600 mt-3">
          <AlertCircle size={14} /> {t("error")}
        </p>
      )}
    </div>
  );
}