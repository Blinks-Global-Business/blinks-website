import { Resend } from "resend";
import { NextResponse } from "next/server";
import { createCalendarEvent, toBusinessDateTime } from "@/lib/googleCalendar";

function formatDateFr(dateStr) {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// Estimation prudente du pays à partir du fuseau horaire — se limite aux zones
// sans ambiguïté. Pour les autres, on affiche simplement l'identifiant du fuseau
// plutôt que de deviner un pays au risque de se tromper.
const TIMEZONE_COUNTRY_GUESS = {
  "Europe/Paris": "France",
  "Africa/Dakar": "Sénégal",
  "Africa/Porto-Novo": "Bénin",
};

function guessCountryLabel(timezone) {
  if (!timezone) return "Non détecté";
  return TIMEZONE_COUNTRY_GUESS[timezone] || `Fuseau : ${timezone}`;
}

function formatInTimezone(utcDate, timezone) {
  return utcDate.toLocaleString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: timezone,
  });
}

export async function POST(request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, email, phone, date, slot, clientTimezone } = await request.json();

    await createCalendarEvent({ name, email, phone, date, slot });

    // Instant UTC réel du rendez-vous, calculé une seule fois puis reformaté
    // dans les deux fuseaux pour l'email interne.
    const appointmentInstant = toBusinessDateTime(date, slot);
    const beninTimeFormatted = formatInTimezone(appointmentInstant, "Africa/Porto-Novo");
    const clientTimeFormatted = clientTimezone
      ? formatInTimezone(appointmentInstant, clientTimezone)
      : null;
    const countryLabel = guessCountryLabel(clientTimezone);

    // 1. Notification interne à l'équipe Blinks Global Business
    await resend.emails.send({
      from: "Site Blinks Global Business <contact@blinksglobalbusiness.com>",
      to: process.env.CONTACT_EMAIL_TO,
      replyTo: email,
      subject: `[RDV confirmé] ${name} — ${slot} (heure Bénin)`,
      html: `
        <h2>Nouveau rendez-vous confirmé</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone || "Non renseigné"}</p>
        <hr />
        <p><strong>Heure du rendez-vous (Bénin, notre fuseau) :</strong> ${beninTimeFormatted}</p>
        ${
          clientTimeFormatted
            ? `<p><strong>Heure côté client :</strong> ${clientTimeFormatted}</p>
               <p><strong>Localisation estimée du client :</strong> ${countryLabel}</p>`
            : `<p><em>Fuseau horaire du client non détecté.</em></p>`
        }
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
        <p><strong>Date et heure :</strong> ${clientTimeFormatted || formatDateFr(date) + " à " + slot}<br/>
        <strong>Durée :</strong> 30 minutes (visioconférence)</p>
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