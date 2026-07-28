import { google } from "googleapis";

export const GOOGLE_CALENDAR_ENABLED = Boolean(
  process.env.GOOGLE_CLIENT_EMAIL &&
    process.env.GOOGLE_PRIVATE_KEY &&
    process.env.GOOGLE_CALENDAR_ID
);

// Bénin (Porto-Novo) est en UTC+1 toute l'année, sans heure d'été.
const BUSINESS_TZ_OFFSET = "+01:00";

function getCalendarClient() {
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_CLIENT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/calendar"],
  });

  return google.calendar({ version: "v3", auth });
}

const MEETING_DURATION_MINUTES = 30;
const GAP_MINUTES = 15;
const STEP_MINUTES = MEETING_DURATION_MINUTES + GAP_MINUTES; // 45

// ⚠️ Calcule le jour de la semaine SANS dépendre du fuseau horaire du serveur.
// On parse à midi UTC (jamais de risque de basculer sur le jour d'avant/après),
// et on utilise getUTCDay() plutôt que getDay() pour ignorer le fuseau du runtime.
function getWeekday(dateStr) {
  const safeDate = new Date(`${dateStr}T12:00:00Z`);
  return safeDate.getUTCDay(); // 0 = Dimanche, 6 = Samedi
}

// Définit les plages horaires ouvertes selon le jour de la semaine
function getDaySchedule(dateStr) {
  const day = getWeekday(dateStr);

  if (day === 0 || day === 6) {
    return null; // Fermé le week-end
  }

  if (day === 5) {
    // Vendredi : matin uniquement
    return { blocks: [{ start: "09:30", end: "12:00" }] };
  }

  // Lundi à Jeudi : matin + après-midi, coupure déjeuner
  return {
    blocks: [
      { start: "09:30", end: "12:00" },
      { start: "13:30", end: "15:00" },
    ],
  };
}

function timeToMinutes(t) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

function minutesToTime(mins) {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

function generateDaySlots(dateStr) {
  const schedule = getDaySchedule(dateStr);
  if (!schedule) return [];

  const slots = [];
  for (const block of schedule.blocks) {
    let current = timeToMinutes(block.start);
    const blockEnd = timeToMinutes(block.end);
    while (current + MEETING_DURATION_MINUTES <= blockEnd) {
      slots.push(minutesToTime(current));
      current += STEP_MINUTES;
    }
  }
  return slots;
}

// Construit un instant UTC précis à partir d'une date + heure LOCALE (Bénin),
// en spécifiant explicitement le décalage +01:00 — indépendant du fuseau du serveur.
export function toBusinessDateTime(dateStr, timeStr) {
  return new Date(`${dateStr}T${timeStr}:00${BUSINESS_TZ_OFFSET}`);
}

export async function getAvailableSlots(dateStr) {
  const allSlots = generateDaySlots(dateStr);

  if (allSlots.length === 0) {
    return []; // Jour fermé, inutile d'interroger Google Calendar
  }

  if (!GOOGLE_CALENDAR_ENABLED) {
    return allSlots; // Mode repli sans Google Calendar configuré
  }

  const calendar = getCalendarClient();
  const calendarId = process.env.GOOGLE_CALENDAR_ID;

  // Bornes de la journée EN HEURE DU BÉNIN, pas en UTC brut du serveur.
  const dayStart = toBusinessDateTime(dateStr, "00:00");
  const dayEnd = toBusinessDateTime(dateStr, "23:59");

  const freebusy = await calendar.freebusy.query({
    requestBody: {
      timeMin: dayStart.toISOString(),
      timeMax: dayEnd.toISOString(),
      items: [{ id: calendarId }],
    },
  });

  const busySlots = freebusy.data.calendars[calendarId].busy || [];

  return allSlots.filter((slot) => {
    const slotStart = toBusinessDateTime(dateStr, slot);
    const slotEnd = new Date(slotStart.getTime() + MEETING_DURATION_MINUTES * 60000);

    return !busySlots.some((busy) => {
      const busyStart = new Date(busy.start);
      const busyEnd = new Date(busy.end);
      return slotStart < busyEnd && slotEnd > busyStart;
    });
  });
}

export async function createCalendarEvent({ name, email, phone, date, slot }) {
  if (!GOOGLE_CALENDAR_ENABLED) {
    return null;
  }

  const calendar = getCalendarClient();
  const calendarId = process.env.GOOGLE_CALENDAR_ID;

  // `date` est maintenant une simple chaîne "YYYY-MM-DD" (voir correctif RdvModal ci-dessous)
  const startDateTime = toBusinessDateTime(date, slot);
  const endDateTime = new Date(startDateTime.getTime() + MEETING_DURATION_MINUTES * 60000);

  const event = await calendar.events.insert({
    calendarId,
    conferenceDataVersion: 1,
    requestBody: {
      summary: `RDV Blinks Global Business - ${name}`,
      description: `Prise de rendez-vous via le site.\nEmail : ${email}\nTéléphone : ${phone || "Non renseigné"}`,
      start: { dateTime: startDateTime.toISOString(), timeZone: "Africa/Porto-Novo" },
      end: { dateTime: endDateTime.toISOString(), timeZone: "Africa/Porto-Novo" },
      conferenceData: {
        createRequest: { requestId: `${Date.now()}` },
      },
    },
  });

  return event.data;
}