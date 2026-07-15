import { Resend } from "resend";
import { NextResponse } from "next/server";
import { createCalendarEvent } from "@/lib/googleCalendar";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, phone, date, slot } = await request.json();

    await createCalendarEvent({ name, email, phone, date, slot });

    await resend.emails.send({
      from: "Site Blinks Global Business <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL_TO,
      replyTo: email,
      subject: `[RDV confirmé] ${name} — ${slot}`,
      html: `
        <h2>Nouveau rendez-vous confirmé</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone || "Non renseigné"}</p>
        <p><strong>Date :</strong> ${new Date(date).toLocaleDateString("fr-FR")}</p>
        <p><strong>Créneau :</strong> ${slot}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur RDV:", error);
    return NextResponse.json({ error: "Erreur d'envoi" }, { status: 500 });
  }
}