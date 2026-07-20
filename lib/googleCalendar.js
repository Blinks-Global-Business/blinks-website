import { google } from "googleapis";

function getCalendarClient() {
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_CLIENT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/calendar"],
  });

  return google.calendar({ version: "v3", auth });
}

const BUSINESS_HOURS = { start: 9, end: 18 }; 
const SLOT_DURATION_MINUTES = 45;

function generateDaySlots() {
  const slots = [];
  let hour = BUSINESS_HOURS.start;
  let minute = 0;

  while (hour < BUSINESS_HOURS.end) {
    slots.push(`${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`);
    minute += SLOT_DURATION_MINUTES;
    if (minute >= 60) {
      minute -= 60;
      hour += 1;
    }
  }
  return slots;
}

export async function getAvailableSlots(dateStr) {
  const calendar = getCalendarClient();
  const calendarId = process.env.GOOGLE_CALENDAR_ID;

  const dayStart = new Date(`${dateStr}T00:00:00`);
  const dayEnd = new Date(`${dateStr}T23:59:59`);

  const freebusy = await calendar.freebusy.query({
    requestBody: {
      timeMin: dayStart.toISOString(),
      timeMax: dayEnd.toISOString(),
      items: [{ id: calendarId }],
    },
  });

  const busySlots = freebusy.data.calendars[calendarId].busy || [];
  const allSlots = generateDaySlots();

  const available = allSlots.filter((slot) => {
    const [h, m] = slot.split(":").map(Number);
    const slotStart = new Date(dateStr);
    slotStart.setHours(h, m, 0, 0);
    const slotEnd = new Date(slotStart.getTime() + SLOT_DURATION_MINUTES * 60000);

    // Le créneau est libre s'il ne chevauche AUCUNE période occupée
    return !busySlots.some((busy) => {
      const busyStart = new Date(busy.start);
      const busyEnd = new Date(busy.end);
      return slotStart < busyEnd && slotEnd > busyStart;
    });
  });

  return available;
}

export async function createCalendarEvent({ name, email, phone, date, slot }) {
  const calendar = getCalendarClient();
  const calendarId = process.env.GOOGLE_CALENDAR_ID;

  const [h, m] = slot.split(":").map(Number);
  const startDateTime = new Date(date);
  startDateTime.setHours(h, m, 0, 0);
  const endDateTime = new Date(startDateTime.getTime() + SLOT_DURATION_MINUTES * 60000);

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