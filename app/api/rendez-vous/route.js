import { Resend } from "resend";
import { NextResponse } from "next/server";
import { createCalendarEvent } from "@/lib/googleCalendar";

function formatDateFr(dateStr) {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export async function POST(request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, email, phone, date, slot } = await request.json();

    await createCalendarEvent({ name, email, phone, date, slot });

    // 1. Notification interne à l'équipe Blinks Global Business
    await resend.emails.send({
      from: "Site Blinks Global Business <contact@blinksglobalbusiness.com>",
      to: process.env.CONTACT_EMAIL_TO,
      replyTo: email,
      subject: `[RDV confirmé] ${name} — ${slot}`,
      html: `
        <h2>Nouveau rendez-vous confirmé</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone || "Non renseigné"}</p>
        <p><strong>Date :</strong> ${formatDateFr(date)}</p>
        <p><strong>Créneau :</strong> ${slot}</p>
      `,
    });

    // 2. Email de confirmation envoyé directement au client
    await resend.emails.send({
      from: "Blinks Global Business <contact@blinksglobalbusiness.com>",
      to: email,
      subject: `Votre rendez-vous avec Blinks Global Business est confirmé`,
      html: `
        <h2>Rendez-vous confirmé !</h2>
        <p>Bonjour ${name},</p>
        <p>Votre rendez-vous avec l'équipe Blinks Global Business est bien confirmé :</p>
        <p><strong>Date :</strong> ${formatDateFr(date)}<br/>
        <strong>Heure :</strong> ${slot}<br/>
        <strong>Durée :</strong> 45 minutes (visioconférence)</p>
        <p>Nous avons hâte d'échanger avec vous sur votre projet.</p>
        <p>À très bientôt,<br/>L'équipe Blinks Global Business</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur RDV:", error);
    return NextResponse.json({ error: "Erreur d'envoi" }, { status: 500 });
  }
}