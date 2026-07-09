import NavBar from "@/components/Client/NavBar";
import ListeningHubBooking from "@/components/Client/ListeningHubBooking";
import Footer from "@/sections/Footer/Server";
import Link from "next/link";
import { LISTENING_SESSIONS, formatKes } from "@/lib/listening-hub/config";

export const metadata = {
  title: "Book a Listening Session | The Listening Hub",
  description:
    "Book a confidential listening session — 15 min, 30 min, 1 hour, or 2 hours. Pay via M-Pesa and confirm on WhatsApp.",
};

const workflowSteps = [
  {
    step: "01",
    title: "Choose your slot",
    description: "Pick 15, 30, 60, or 120 minutes based on what you need today.",
  },
  {
    step: "02",
    title: "Share your details",
    description: "Tell us your topic, preferred date, and how you'd like to connect.",
  },
  {
    step: "03",
    title: "Pay via M-Pesa",
    description: "Send payment to 0720977842 using your unique booking reference.",
  },
  {
    step: "04",
    title: "Confirm on WhatsApp or call",
    description:
      "Forward your M-Pesa receipt SMS to 0720977842 on WhatsApp, or call to confirm. We verify payment and lock in your session within 2 hours.",
  },
];

export default function BookListeningSessionPage() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#f5e6c8]">
      <NavBar />

      {/* Header */}
      <section className="border-b border-[#c9a227]/20 px-6 pt-32 pb-12 md:px-16 md:pt-40">
        <Link
          href="/listening-hub"
          className="mb-6 inline-flex text-sm text-[#c9a227] hover:opacity-80"
        >
          ← Back to The Listening Hub
        </Link>
        <p className="mb-3 text-xs uppercase tracking-widest text-[#c9a227]">
          The Listening Hub · Daily Life Navigators
        </p>
        <h1 className="max-w-2xl text-3xl font-light leading-tight md:text-5xl">
          Book a confidential listening session
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#c9b89a] md:text-base">
          A safe space to be heard — before stress becomes burnout, conflict, or
          disengagement. Sessions from {formatKes(LISTENING_SESSIONS[0].priceKes)}.
        </p>
      </section>

      {/* Workflow overview */}
      <section className="border-b border-[#c9a227]/20 bg-[#1e2a4a] px-6 py-12 md:px-16">
        <p className="mb-8 text-xs uppercase tracking-widest text-[#c9a227]">
          How it works
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {workflowSteps.map(({ step, title, description }) => (
            <div key={step}>
              <span className="text-2xl font-light text-[#c9a227]/40">{step}</span>
              <h2 className="mt-2 text-sm font-medium">{title}</h2>
              <p className="mt-1 text-xs leading-relaxed text-[#c9b89a]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Booking wizard */}
      <section className="px-6 py-16 md:px-16 md:py-24">
        <ListeningHubBooking />
      </section>

      {/* Trust & FAQ */}
      <section className="border-t border-[#c9a227]/20 bg-[#1e2a4a] px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-xl font-light md:text-2xl">
            Good to know before you book
          </h2>
          <dl className="space-y-6 text-sm">
            {[
              {
                q: "Who is this for?",
                a: "Anyone who needs a confidential space to talk — whether about work stress, relationships, grief, anxiety, life transitions, or simply needing to be heard. You do not need to be an employee of any organization.",
              },
              {
                q: "Is it therapy?",
                a: "Listening Hub sessions are professional listening and wellbeing support. If you need clinical therapy, The Listening Hub can refer you to Daily Life Navigators therapy care. If you are in crisis, please call emergency services or Befrienders Kenya at +254 722 178 177.",
              },
              {
                q: "When will my session be confirmed?",
                a: "Once we receive and verify your M-Pesa payment receipt on WhatsApp (0720977842) or by phone, we confirm within 2 hours (Mon–Sat, 8am–8pm) and a listener will reach out to finalize your exact time.",
              },
              {
                q: "Can my employer see that I booked?",
                a: "No. Sessions are fully confidential. Organizations partnering with The Listening Hub never receive individual session details.",
              },
              {
                q: "What if I need to cancel?",
                a: "WhatsApp us at least 24 hours before your session for a free reschedule. Cancellations with less than 24 hours notice may forfeit the session fee.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-[#c9a227]/10 pb-6">
                <dt className="mb-2 font-medium text-[#c9a227]">{q}</dt>
                <dd className="leading-relaxed text-[#c9b89a]">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Footer />
    </main>
  );
}
