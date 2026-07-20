import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email manquant" }, { status: 400 });
    }

    const result = await resend.contacts.create({
      email,
      audienceId: process.env.RESEND_AUDIENCE_ID,
    });

    if (result.error) {
      console.error("Erreur Resend:", result.error);
      return NextResponse.json({ error: "Erreur d'inscription", detail: result.error.message }, { status: 500 });
    }

    // 1. Email de bienvenue envoyé au client
    await resend.emails.send({
      from: "Blinks Global Business <contact@blinksglobalbusiness.com>",
      to: email,
      subject: "Bienvenue dans la newsletter Blinks Global Business",
      html: `
        <h2>Merci de votre inscription !</h2>
        <p>Vous recevrez désormais nos actualités sur la transformation digitale,
        l'intelligence artificielle, le marketing stratégique et l'entrepreneuriat.</p>
        <p>À très bientôt,<br/>L'équipe Blinks Global Business</p>
      `,
    });

    // 2. Notification interne à l'équipe
    await resend.emails.send({
      from: "Site Blinks Global Business <contact@blinksglobalbusiness.com>",
      to: process.env.CONTACT_EMAIL_TO,
      subject: `[Newsletter] Nouvel inscrit : ${email}`,
      html: `<p>Un nouveau contact vient de s'inscrire à la newsletter : <strong>${email}</strong></p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur newsletter:", error);
    return NextResponse.json({ error: "Erreur d'inscription", detail: error.message }, { status: 500 });
  }
}