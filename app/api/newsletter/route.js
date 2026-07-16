import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email manquant" }, { status: 400 });
    }

    await resend.contacts.create({
      email,
      audienceId: process.env.RESEND_AUDIENCE_ID,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur newsletter:", error);
    return NextResponse.json({ error: "Erreur d'inscription" }, { status: 500 });
  }
}