import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, phone, company, projectType, budget, description } = await request.json();

    await resend.emails.send({
      from: "Site Blinks Global Business <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL_TO,
      replyTo: email,
      subject: `[Devis] ${projectType} — ${name}`,
      html: `
        <h2>Nouvelle demande de devis</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone || "Non renseigné"}</p>
        <p><strong>Entreprise :</strong> ${company || "Non renseignée"}</p>
        <p><strong>Type de projet :</strong> ${projectType}</p>
        <p><strong>Budget :</strong> ${budget || "Non précisé"}</p>
        <p><strong>Description :</strong></p>
        <p>${description.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur devis:", error);
    return NextResponse.json({ error: "Erreur d'envoi" }, { status: 500 });
  }
}