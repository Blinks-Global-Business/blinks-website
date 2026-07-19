import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, email, phone, company, accompagnement, message } = await request.json();

    await resend.emails.send({
      from: "Site Blinks Global Business <contact@blinksglobalbusiness.com>",
      to: process.env.CONTACT_EMAIL_TO,
      replyTo: email,
      subject: `[Demande accompagnement] ${accompagnement} — ${name}`,
      html: `
        <h2>Nouvelle demande d'accompagnement</h2>
        <p><strong>Accompagnement souhaité :</strong> ${accompagnement}</p>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone}</p>
        <p><strong>Entreprise :</strong> ${company || "Non renseignée"}</p>
        <p><strong>Message :</strong></p>
        <p>${(message || "Aucun message").replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur tarifs:", error);
    return NextResponse.json({ error: "Erreur d'envoi" }, { status: 500 });
  }
}