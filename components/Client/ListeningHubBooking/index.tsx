"use client";

import { useMemo, useState } from "react";
import Input from "@/components/Server/Input";
import Label from "@/components/Server/Label";
import cn from "@/utils/cn";
import {
  LISTENING_SESSIONS,
  SESSION_MODES,
  SESSION_TOPICS,
  TIME_SLOTS,
  MPESA,
  LISTENING_HUB_CONTACT,
  buildWhatsAppReceiptMessage,
  buildWhatsAppUrl,
  formatKes,
  generateBookingReference,
  getSessionById,
  type SessionDuration,
  type SessionMode,
  type SessionTopic,
} from "@/lib/listening-hub/config";

type Step = 1 | 2 | 3 | 4 | 5;

interface BookingForm {
  sessionId: SessionDuration | null;
  topic: SessionTopic | "";
  mode: SessionMode;
  preferredDate: string;
  preferredTime: string;
  name: string;
  phone: string;
  email: string;
  organization: string;
  notes: string;
  mpesaCode: string;
}

const STEPS = [
  { num: 1, label: "Choose Session" },
  { num: 2, label: "Your Needs" },
  { num: 3, label: "Your Details" },
  { num: 4, label: "Pay via M-Pesa" },
  { num: 5, label: "Confirm" },
] as const;

const initialForm: BookingForm = {
  sessionId: null,
  topic: "",
  mode: "phone",
  preferredDate: "",
  preferredTime: "",
  name: "",
  phone: "",
  email: "",
  organization: "",
  notes: "",
  mpesaCode: "",
};

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function ListeningHubBooking() {
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState<BookingForm>(initialForm);
  const [reference] = useState(() => generateBookingReference());
  const [copied, setCopied] = useState<string | null>(null);

  const session = form.sessionId ? getSessionById(form.sessionId) : null;
  const modeLabel = SESSION_MODES.find((m) => m.id === form.mode)?.label ?? form.mode;

  const minDate = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  }, []);

  const whatsAppUrl = useMemo(() => {
    if (!session || !form.name || !form.phone) return "";
    return buildWhatsAppUrl(
      buildWhatsAppReceiptMessage({
        reference,
        name: form.name,
        phone: form.phone,
        sessionLabel: `${session.label} — ${session.tagline}`,
        priceKes: session.priceKes,
        preferredDate: form.preferredDate,
        preferredTime: form.preferredTime,
        topic: form.topic || "Not specified",
        mode: modeLabel,
        mpesaCode: form.mpesaCode || undefined,
      }),
    );
  }, [session, form, reference, modeLabel]);

  function update<K extends keyof BookingForm>(key: K, value: BookingForm[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function copyText(text: string, key: string) {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  }

  function canProceed(): boolean {
    switch (step) {
      case 1:
        return form.sessionId !== null;
      case 2:
        return !!form.topic && !!form.preferredDate && !!form.preferredTime;
      case 3:
        return form.name.trim().length >= 2 && form.phone.trim().length >= 9;
      case 4:
        return true;
      default:
        return true;
    }
  }

  return (
    <div className="mx-auto max-w-3xl">
      {/* Progress */}
      <nav aria-label="Booking progress" className="mb-12">
        <ol className="flex flex-wrap gap-2 md:gap-0 md:justify-between">
          {STEPS.map(({ num, label }) => (
            <li
              key={num}
              className={cn(
                "flex items-center gap-2 text-xs md:text-sm",
                step === num ? "text-[#c9a227]" : step > num ? "text-[#c9a227]/60" : "text-[#c9b89a]/50",
              )}
            >
              <span
                className={cn(
                  "flex size-7 shrink-0 items-center justify-center rounded-full border text-xs font-medium",
                  step === num
                    ? "border-[#c9a227] bg-[#c9a227] text-[#0d1117]"
                    : step > num
                      ? "border-[#c9a227]/60 bg-[#c9a227]/10 text-[#c9a227]"
                      : "border-[#c9a227]/20 text-[#c9b89a]",
                )}
              >
                {step > num ? "✓" : num}
              </span>
              <span className="hidden sm:inline">{label}</span>
            </li>
          ))}
        </ol>
      </nav>

      {/* Step 1: Choose session */}
      {step === 1 && (
        <div>
          <h2 className="mb-2 text-2xl font-light md:text-3xl">Choose your listening slot</h2>
          <p className="mb-8 text-sm text-[#c9b89a]">
            Select the duration that fits your needs. Every session is confidential and led by a
            trained listener or wellbeing professional.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {LISTENING_SESSIONS.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => update("sessionId", s.id)}
                className={cn(
                  "relative border p-6 text-left transition-all",
                  form.sessionId === s.id
                    ? "border-[#c9a227] bg-[#c9a227]/10"
                    : "border-[#c9a227]/20 hover:border-[#c9a227]/50",
                )}
              >
                {s.popular && (
                  <span className="absolute right-4 top-4 rounded bg-[#c9a227] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[#0d1117]">
                    Popular
                  </span>
                )}
                <p className="text-lg font-medium">{s.label}</p>
                <p className="text-sm text-[#c9a227]">{s.tagline}</p>
                <p className="mt-3 text-xl font-light">{formatKes(s.priceKes)}</p>
                <ul className="mt-4 space-y-1">
                  {s.bestFor.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-[#c9b89a]">
                      <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[#c9a227]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Needs & schedule */}
      {step === 2 && (
        <div>
          <h2 className="mb-2 text-2xl font-light md:text-3xl">Tell us what you need</h2>
          <p className="mb-8 text-sm text-[#c9b89a]">
            Help us match you with the right listener. All information is kept strictly confidential.
          </p>
          <div className="space-y-6">
            <Label label="What would you like to talk about?">
              <select
                value={form.topic}
                onChange={(e) => update("topic", e.target.value as SessionTopic)}
                className="w-full border-b border-[#c9a227]/40 bg-[#1e2a4a] px-4 py-3 text-sm text-[#f5e6c8] outline-none md:px-6 md:text-base"
              >
                <option value="">Select a topic...</option>
                {SESSION_TOPICS.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </Label>

            <div>
              <p className="mb-3 text-sm opacity-60">How would you like to connect?</p>
              <div className="grid gap-3 sm:grid-cols-3">
                {SESSION_MODES.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => update("mode", m.id)}
                    className={cn(
                      "border p-4 text-left text-sm transition-all",
                      form.mode === m.id
                        ? "border-[#c9a227] bg-[#c9a227]/10"
                        : "border-[#c9a227]/20 hover:border-[#c9a227]/50",
                    )}
                  >
                    <p className="font-medium">{m.label}</p>
                    <p className="mt-1 text-xs text-[#c9b89a]">{m.description}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <Label label="Preferred date">
                <Input
                  type="date"
                  min={minDate}
                  value={form.preferredDate}
                  onChange={(e) => update("preferredDate", e.target.value)}
                />
              </Label>
              <Label label="Preferred time window">
                <select
                  value={form.preferredTime}
                  onChange={(e) => update("preferredTime", e.target.value)}
                  className="w-full border-b border-[#c9a227]/40 bg-[#1e2a4a] px-4 py-3 text-sm text-[#f5e6c8] outline-none md:px-6 md:text-base"
                >
                  <option value="">Select a time...</option>
                  {TIME_SLOTS.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Label>
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Contact details */}
      {step === 3 && (
        <div>
          <h2 className="mb-2 text-2xl font-light md:text-3xl">Your contact details</h2>
          <p className="mb-8 text-sm text-[#c9b89a]">
            We will use this to confirm your session and reach you at your preferred time.
          </p>
          <div className="space-y-6">
            <Label label="Full name *">
              <Input
                type="text"
                placeholder="Enter your full name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                required
              />
            </Label>
            <Label label="Phone number * (M-Pesa & session contact)">
              <Input
                type="tel"
                placeholder="e.g. 0712345678"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                required
              />
            </Label>
            <Label label="Email (optional)">
              <Input
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
              />
            </Label>
            <Label label="Organization (optional)">
              <Input
                type="text"
                placeholder="Company or institution name"
                value={form.organization}
                onChange={(e) => update("organization", e.target.value)}
              />
            </Label>
            <Label label="Anything else we should know? (optional)">
              <textarea
                value={form.notes}
                onChange={(e) => update("notes", e.target.value)}
                placeholder="Share any context that helps us prepare..."
                rows={3}
                className="w-full resize-none border-b border-[#c9a227]/40 bg-[#1e2a4a] px-4 py-3 text-xs text-[#f5e6c8] outline-none placeholder:text-[#c9b89a]/50 md:px-6 md:text-base"
              />
            </Label>
          </div>

          {/* Booking summary preview */}
          {session && (
            <div className="mt-10 border border-[#c9a227]/20 p-6">
              <p className="mb-4 text-xs uppercase tracking-widest text-[#c9a227]">Booking Summary</p>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-[#c9b89a]">Reference</dt>
                  <dd className="font-mono text-[#c9a227]">{reference}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[#c9b89a]">Session</dt>
                  <dd>{session.label} — {session.tagline}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[#c9b89a]">Total</dt>
                  <dd className="font-medium text-[#c9a227]">{formatKes(session.priceKes)}</dd>
                </div>
              </dl>
            </div>
          )}
        </div>
      )}

      {/* Step 4: M-Pesa payment */}
      {step === 4 && session && (
        <div>
          <h2 className="mb-2 text-2xl font-light md:text-3xl">Pay via M-Pesa</h2>
          <p className="mb-8 text-sm text-[#c9b89a]">
            Pay to <strong className="text-[#f5e6c8]">{MPESA.phoneNumber}</strong> to secure your
            slot. Use your booking reference when sending payment.
          </p>

          <div className="mb-8 border border-[#c9a227]/30 bg-[#1e2a4a] p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#c9a227]">Amount to pay</p>
                <p className="mt-1 text-3xl font-light">{formatKes(session.priceKes)}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-[#c9b89a]">Booking ref</p>
                <button
                  type="button"
                  onClick={() => copyText(reference, "ref")}
                  className="mt-1 font-mono text-sm text-[#c9a227] hover:underline"
                >
                  {reference} {copied === "ref" ? "✓ Copied" : "📋"}
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border border-[#c9a227]/20 p-6">
              <p className="mb-4 flex items-center gap-2 font-medium">
                <span className="flex size-6 items-center justify-center rounded-full bg-[#c9a227] text-xs text-[#0d1117]">1</span>
                Open M-Pesa on your phone
              </p>
            </div>

            <div className="border border-[#c9a227]/20 p-6">
              <p className="mb-4 flex items-center gap-2 font-medium">
                <span className="flex size-6 items-center justify-center rounded-full bg-[#c9a227] text-xs text-[#0d1117]">2</span>
                Select <strong className="mx-1">Send Money</strong>
              </p>
              <div className="ml-8 space-y-2 rounded bg-[#0d1117] p-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#c9b89a]">Phone number</span>
                  <button
                    type="button"
                    onClick={() => copyText(MPESA.phoneNumber, "phone")}
                    className="font-mono text-[#c9a227] hover:underline"
                  >
                    {MPESA.phoneNumber} {copied === "phone" ? "✓" : "📋"}
                  </button>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#c9b89a]">Amount</span>
                  <span className="font-medium">{formatKes(session.priceKes)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#c9b89a]">Account / Name</span>
                  <span>{MPESA.accountName}</span>
                </div>
              </div>
            </div>

            <div className="border border-[#c9a227]/20 p-6">
              <p className="mb-2 flex items-center gap-2 font-medium">
                <span className="flex size-6 items-center justify-center rounded-full bg-[#c9a227] text-xs text-[#0d1117]">3</span>
                Confirm payment with your M-Pesa PIN
              </p>
              <p className="ml-8 text-sm text-[#c9b89a]">
                You will receive an SMS confirmation with a transaction code (e.g.{" "}
                <span className="font-mono text-[#f5e6c8]">SIA1ABC234</span>). Keep this message —
                you will need it in the next step.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded border border-[#25D366]/30 bg-[#25D366]/5 p-4 text-sm text-[#c9b89a]">
            <strong className="text-[#f5e6c8]">Tip:</strong> On Safaricom, you can also dial{" "}
            <span className="font-mono text-[#c9a227]">*334#</span> → Send Money → enter{" "}
            {MPESA.phoneNumber} → {formatKes(session.priceKes)}.
          </div>
        </div>
      )}

      {/* Step 5: Confirm via WhatsApp */}
      {step === 5 && session && (
        <div>
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-[#c9a227]/20 text-3xl">
              ✓
            </div>
            <h2 className="text-2xl font-light md:text-3xl">Almost done — confirm your payment</h2>
            <p className="mt-3 text-sm text-[#c9b89a]">
              Send your M-Pesa transaction receipt to{" "}
              <strong className="text-[#f5e6c8]">{MPESA.phoneNumber}</strong> on WhatsApp, or call
              to confirm your booking and schedule your session.
            </p>
          </div>

          <div className="mb-8 border border-[#c9a227]/20 p-6">
            <p className="mb-4 text-xs uppercase tracking-widest text-[#c9a227]">Your booking</p>
            <dl className="space-y-2 text-sm">
              {[
                ["Reference", reference],
                ["Session", `${session.label} — ${session.tagline}`],
                ["Amount", formatKes(session.priceKes)],
                ["Date", form.preferredDate],
                ["Time", form.preferredTime],
                ["Topic", form.topic],
                ["Mode", modeLabel],
                ["Name", form.name],
                ["Phone", form.phone],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between gap-4">
                  <dt className="shrink-0 text-[#c9b89a]">{label}</dt>
                  <dd className="text-right">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <Label label="M-Pesa transaction code (from your SMS)">
            <Input
              type="text"
              placeholder="e.g. SIA1ABC234"
              value={form.mpesaCode}
              onChange={(e) => update("mpesaCode", e.target.value.toUpperCase())}
              className="font-mono uppercase"
            />
          </Label>

          <div className="mt-8 space-y-4">
            <p className="text-sm font-medium">After paying, send your M-Pesa receipt SMS:</p>

            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-3 rounded bg-[#25D366] px-6 py-4 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              <WhatsAppIcon />
              Send M-Pesa receipt via WhatsApp ({MPESA.phoneNumber})
            </a>

            <a
              href={`tel:+${LISTENING_HUB_CONTACT.phone}`}
              className="flex w-full items-center justify-center gap-3 border border-[#c9a227]/40 px-6 py-4 text-sm font-medium text-[#c9a227] transition-colors hover:border-[#c9a227]"
            >
              📞 Call {LISTENING_HUB_CONTACT.displayPhone} to confirm
            </a>
          </div>

          <div className="mt-10 space-y-4 border-t border-[#c9a227]/20 pt-8">
            <p className="text-xs uppercase tracking-widest text-[#c9a227]">What happens next?</p>
            <ol className="space-y-3 text-sm text-[#c9b89a]">
              {[
                "We verify your M-Pesa payment within 2 hours (Mon–Sat, 8am–8pm).",
                "A trained listener contacts you to confirm your exact session time.",
                "Your session takes place via your chosen mode — phone, WhatsApp, or video.",
                "Everything shared remains strictly confidential.",
              ].map((item, i) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#c9a227]/20 text-xs text-[#c9a227]">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </div>

          <p className="mt-8 text-center text-xs text-[#c9b89a]/70">
            Need to reschedule? WhatsApp us at least 24 hours before your session for a free
            reschedule. See our{" "}
            <a href="/terms" className="text-[#c9a227] underline">
              Terms &amp; Conditions
            </a>
            .
          </p>
        </div>
      )}

      {/* Navigation buttons */}
      {step < 5 && (
        <div className="mt-12 flex justify-between gap-4">
          <button
            type="button"
            onClick={() => setStep((s) => (s > 1 ? ((s - 1) as Step) : s))}
            disabled={step === 1}
            className="px-6 py-3 text-sm text-[#c9b89a] transition-colors hover:text-[#f5e6c8] disabled:opacity-30"
          >
            ← Back
          </button>
          <button
            type="button"
            onClick={() => {
              if (canProceed()) setStep((s) => (s < 5 ? ((s + 1) as Step) : s));
            }}
            disabled={!canProceed()}
            className="bg-[#c9a227] px-8 py-3 text-sm font-medium text-[#0d1117] transition-opacity hover:opacity-90 disabled:opacity-40"
          >
            {step === 4 ? "I've paid — continue" : "Continue →"}
          </button>
        </div>
      )}
    </div>
  );
}
