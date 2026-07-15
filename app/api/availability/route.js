import { NextResponse } from "next/server";
import { getAvailableSlots } from "@/lib/googleCalendar";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date"); 

  if (!date) {
    return NextResponse.json({ error: "Date manquante" }, { status: 400 });
  }

  try {
    const slots = await getAvailableSlots(date);
    return NextResponse.json({ slots });
  } catch (error) {
    console.error("Erreur disponibilités:", error);
    return NextResponse.json({ error: "Erreur de récupération" }, { status: 500 });
  }
}