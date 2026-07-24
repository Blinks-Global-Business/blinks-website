"use client";

import { useState, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useModal } from "@/components/providers/ModalProvider";
import Modal from "@/components/ui/Modal";
import DatePicker from "@/components/ui/DatePicker";

const INITIAL_STATE = { name: "", email: "", phone: "" };

function toDateString(date) {
  return date.toISOString().split("T")[0];
}

export default function RdvModal() {
  const { activeModal, closeModal } = useModal();
  const locale = useLocale();
  const t = useTranslations("modals.rdv");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [status, setStatus] = useState("idle");

  const dateLocale = locale === "en" ? "en-US" : "fr-FR";

  function formatDate(date) {
    return date.toLocaleDateString(dateLocale, { weekday: "long", day: "numeric", month: "long" });
  }

  useEffect(() => {
    if (!selectedDate) return;
    setLoadingSlots(true);
    setSelectedSlot(null);

    fetch(`/api/availability?date=${toDateString(selectedDate)}`)
      .then((res) => res.json())
      .then((data) => setAvailableSlots(data.slots || []))
      .catch(() => setAvailableSlots([]))
      .finally(() => setLoadingSlots(false));
  }, [selectedDate]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedSlot) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/rendez-vous", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, date: selectedDate.toISOString(), slot: selectedSlot }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setFormData(INITIAL_STATE);
      setSelectedDate(null);
      setSelectedSlot(null);
    } catch {
      setStatus("error");
    }
  };

  return (
    <Modal isOpen={activeModal === "rdv"} onClose={closeModal} maxWidth="max-w-2xl">
      <h2 className="font-heading font-bold text-2xl text-text mb-2">{t("title")}</h2>
      <p className="font-body text-sm text-text-muted mb-6">{t("subtitle")}</p>

      <div className="grid sm:grid-cols-2 gap-6 mb-6">
        <div>
          <p className="font-body text-xs uppercase tracking-wide text-text-muted font-medium mb-2">{t("step1")}</p>
          <DatePicker selectedDate={selectedDate} onSelect={setSelectedDate} />
        </div>

        <div>
          <p className="font-body text-xs uppercase tracking-wide text-text-muted font-medium mb-2">{t("step2")}</p>

          {!selectedDate && (
            <p className="font-body text-sm text-text-muted italic">{t("selectDateFirst")}</p>
          )}

          {selectedDate && loadingSlots && (
            <p className="font-body text-sm text-text-muted flex items-center gap-2">
              <Loader2 size={14} className="animate-spin" /> {t("checkingAvailability")}
            </p>
          )}

          {selectedDate && !loadingSlots && availableSlots.length === 0 && (
            <p className="font-body text-sm text-text-muted italic">{t("noSlotsAvailable")}</p>
          )}

          {selectedDate && !loadingSlots && availableSlots.length > 0 && (
            <div className="grid grid-cols-2 gap-2">
              {availableSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setSelectedSlot(slot)}
                  className={`font-body text-sm rounded-md py-2.5 border transition-colors ${
                    selectedSlot === slot
                      ? "bg-accent border-accent text-primary-dark font-medium"
                      : "border-border text-text hover:border-primary"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          )}

          {selectedDate && selectedSlot && (
            <p className="font-body text-xs text-primary bg-primary/5 rounded-md px-3 py-2 mt-4">
              {t("appointmentSummary")} <strong>{formatDate(selectedDate)}</strong> {t("at")} <strong>{selectedSlot}</strong>
            </p>
          )}
        </div>
      </div>

      <div className="border-t border-border pt-6">
        <p className="font-body text-xs uppercase tracking-wide text-text-muted font-medium mb-3">{t("step3")}</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" placeholder={t("fullName")} required value={formData.name} onChange={handleChange}
              className="border border-border rounded-md px-4 py-2.5 font-body text-sm focus:border-primary outline-none" />
            <input name="email" type="email" placeholder={t("email")} required value={formData.email} onChange={handleChange}
              className="border border-border rounded-md px-4 py-2.5 font-body text-sm focus:border-primary outline-none" />
          </div>
          <input name="phone" type="tel" placeholder={t("phone")} value={formData.phone} onChange={handleChange}
            className="w-full border border-border rounded-md px-4 py-2.5 font-body text-sm focus:border-primary outline-none" />

          <button type="submit" disabled={status === "loading" || !selectedDate || !selectedSlot}
            className="w-full flex items-center justify-center gap-2 bg-accent text-primary-dark font-body font-medium text-sm px-6 py-3 rounded-md hover:opacity-90 disabled:opacity-50">
            {status === "loading" && <Loader2 size={16} className="animate-spin" />}
            {status === "loading" ? t("confirming") : t("confirm")}
          </button>

          <p className="font-body text-xs text-text-muted text-center">{t("emailNotice")}</p>

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
      </div>
    </Modal>
  );
}