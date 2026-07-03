export type SessionDuration = "15" | "30" | "60" | "120";

export type SessionMode = "phone" | "whatsapp" | "video";

export interface ListeningSession {
  id: SessionDuration;
  label: string;
  durationMinutes: number;
  priceKes: number;
  tagline: string;
  bestFor: string[];
  popular?: boolean;
}

export const LISTENING_SESSIONS: ListeningSession[] = [
  {
    id: "15",
    label: "15 Minutes",
    durationMinutes: 15,
    priceKes: 500,
    tagline: "Quick Check-In",
    bestFor: [
      "Need to vent or decompress quickly",
      "A brief moment of clarity before a meeting",
      "Checking in after a stressful day",
    ],
  },
  {
    id: "30",
    label: "30 Minutes",
    durationMinutes: 30,
    priceKes: 1000,
    tagline: "Standard Listening",
    bestFor: [
      "Work stress, conflict, or burnout",
      "Processing a difficult conversation",
      "Most common choice for first-time sessions",
    ],
    popular: true,
  },
  {
    id: "60",
    label: "1 Hour",
    durationMinutes: 60,
    priceKes: 1800,
    tagline: "Deep Listening",
    bestFor: [
      "Exploring concerns in greater depth",
      "Grief, anxiety, or relationship matters",
      "Multiple topics you want to unpack",
    ],
  },
  {
    id: "120",
    label: "2 Hours",
    durationMinutes: 120,
    priceKes: 3200,
    tagline: "Extended Support",
    bestFor: [
      "Complex or layered emotional challenges",
      "Trauma processing or major life transitions",
      "Comprehensive support in a single sitting",
    ],
  },
];

export const SESSION_TOPICS = [
  "Work stress & burnout",
  "Workplace conflict",
  "Anxiety & overwhelm",
  "Grief & loss",
  "Relationship concerns",
  "Career transition",
  "Parenting & family",
  "Self-esteem & confidence",
  "Life transition",
  "Just need to be heard",
  "Other",
] as const;

export type SessionTopic = (typeof SESSION_TOPICS)[number];

export const SESSION_MODES: { id: SessionMode; label: string; description: string }[] = [
  {
    id: "phone",
    label: "Phone Call",
    description: "A trained listener calls you at your preferred time.",
  },
  {
    id: "whatsapp",
    label: "WhatsApp Voice",
    description: "Confidential voice session via WhatsApp — no travel needed.",
  },
  {
    id: "video",
    label: "Video Call",
    description: "Secure video session via Google Meet or WhatsApp video.",
  },
];

export const TIME_SLOTS = [
  "08:00 – 09:00",
  "09:00 – 10:00",
  "10:00 – 11:00",
  "11:00 – 12:00",
  "12:00 – 13:00",
  "14:00 – 15:00",
  "15:00 – 16:00",
  "16:00 – 17:00",
  "17:00 – 18:00",
  "18:00 – 19:00",
  "19:00 – 20:00",
] as const;

export const MPESA = {
  phoneNumber: "0720977842",
  phoneE164: "254720977842",
  accountName: "Daily Life Navigators",
} as const;

export const LISTENING_HUB_CONTACT = {
  whatsapp: MPESA.phoneE164,
  phone: MPESA.phoneE164,
  displayPhone: "+254 720 977 842",
} as const;

export function getSessionById(id: SessionDuration): ListeningSession {
  const session = LISTENING_SESSIONS.find((s) => s.id === id);
  if (!session) throw new Error(`Unknown session: ${id}`);
  return session;
}

export function formatKes(amount: number): string {
  return `KES ${amount.toLocaleString("en-KE")}`;
}

export function generateBookingReference(): string {
  const date = new Date();
  const stamp = date
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, "")
    .slice(2);
  const random = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `DLN-LH-${stamp}-${random}`;
}

export function buildWhatsAppReceiptMessage(booking: {
  reference: string;
  name: string;
  phone: string;
  sessionLabel: string;
  priceKes: number;
  preferredDate: string;
  preferredTime: string;
  topic: string;
  mode: string;
  mpesaCode?: string;
}): string {
  const lines = [
    "Hello, I have completed M-Pesa payment for my Listening Hub session.",
    "",
    `Booking Reference: ${booking.reference}`,
    `Name: ${booking.name}`,
    `Phone: ${booking.phone}`,
    `Session: ${booking.sessionLabel}`,
    `Amount: ${formatKes(booking.priceKes)}`,
    `Preferred Date: ${booking.preferredDate}`,
    `Preferred Time: ${booking.preferredTime}`,
    `Topic: ${booking.topic}`,
    `Mode: ${booking.mode}`,
    booking.mpesaCode ? `M-Pesa Code: ${booking.mpesaCode}` : "M-Pesa Code: [paste from your SMS]",
    "",
    "I have attached / will forward my M-Pesa confirmation message.",
    "Please confirm my booking. Thank you.",
  ];
  return lines.join("\n");
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${LISTENING_HUB_CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}
