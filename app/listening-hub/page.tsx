import NavBar from "@/components/Client/NavBar";
import Footer from "@/sections/Footer/Server";
import Link from "next/link";

export const metadata = {
  title: "The Listening Hub | Daily Life Navigators Psychological Services",
  description:
    "Confidential digital employee support — trained listeners and wellbeing professionals through a secure platform.",
};

const howItWorks = [
  {
    step: "01",
    title: "Book Your Slot",
    description:
      "Choose a 15, 30, 60, or 120-minute session and pick your preferred date, time, and connection mode — phone, WhatsApp, or video.",
  },
  {
    step: "02",
    title: "Pay via M-Pesa",
    description:
      "Send payment to 0720977842 using your unique booking reference. You will receive an SMS confirmation with a transaction code.",
  },
  {
    step: "03",
    title: "Confirm on WhatsApp",
    description:
      "Forward your M-Pesa receipt message to us on WhatsApp or call to confirm. We verify payment and lock in your session within 2 hours.",
  },
  {
    step: "04",
    title: "Connect & Be Heard",
    description:
      "A trained listener or wellbeing professional connects with you at your scheduled time — confidential, compassionate, and judgment-free.",
  },
];

const orgBenefits = [
  {
    title: "Healthier Workplaces",
    description:
      "Build a culture where employees feel heard, valued, and supported — reducing stigma around seeking help.",
  },
  {
    title: "Greater Resilience",
    description:
      "Equip your workforce with early intervention support that strengthens emotional resilience across teams.",
  },
  {
    title: "Higher Productivity",
    description:
      "Address concerns before they impact performance, focus, and output — keeping your teams engaged and effective.",
  },
  {
    title: "Early Intervention",
    description:
      "Prevent absenteeism, workplace conflict, reduced performance, and resignation by acting before crises emerge.",
  },
];

export default function ListeningHubPage() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#f5e6c8]">
      <NavBar />

      {/* Hero */}
      <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 pt-32 pb-20 text-center md:px-16 md:pt-40">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#c9a227]">
          A programme under Daily Life Navigators Psychological Services
        </p>
        <h1 className="max-w-4xl text-4xl font-light leading-tight md:text-6xl">
          The Listening Hub
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#c9b89a] md:text-lg">
          A confidential digital employee support platform designed to provide
          every employee with a safe space to be heard — before challenges
          escalate into absenteeism, conflict, reduced performance, or
          resignation.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/listening-hub/book"
            className="inline-flex items-center gap-3 bg-[#c9a227] px-8 py-4 text-sm font-medium text-[#0d1117] transition-opacity hover:opacity-90"
          >
            Book a Listening Session
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 border border-[#c9a227]/40 px-8 py-4 text-sm font-medium text-[#c9a227] transition-colors hover:border-[#c9a227]"
          >
            Partner With Us
          </Link>
        </div>
      </section>

      {/* What is The Listening Hub */}
      <section className="px-6 py-24 md:px-16 md:py-32">
        <p className="mb-6 text-xs uppercase tracking-widest text-[#c9a227]">
          What is The Listening Hub?
        </p>
        <h2 className="mb-8 max-w-3xl text-3xl font-light leading-snug md:text-5xl">
          Professional listening, accessible through technology
        </h2>
        <div className="max-w-3xl space-y-5 text-base leading-relaxed text-[#c9b89a] md:text-lg">
          <p>
            The Listening Hub is a secure digital platform through which
            employees can confidentially access trained listeners and wellbeing
            professionals. It gives organizations a proactive way to support
            their people — not only when crises hit, but in the everyday moments
            when someone simply needs to be heard.
          </p>
          <p>
            Many workplace challenges begin quietly: stress, conflict, burnout,
            or personal struggles that employees hesitate to share. Without a
            safe outlet, these issues can grow into absenteeism, team conflict,
            declining performance, or resignation. The Listening Hub intervenes
            early — before small concerns become organizational problems.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="border-y border-[#c9a227]/20 bg-[#1e2a4a] px-6 py-20 md:px-16 md:py-28">
        <p className="mb-6 text-xs uppercase tracking-widest text-[#c9a227]">
          Our Vision
        </p>
        <blockquote className="max-w-3xl text-2xl font-light leading-relaxed md:text-4xl">
          To help organizations build healthier, more resilient, and more
          productive workplaces by making professional listening accessible
          through technology.
        </blockquote>
      </section>

      {/* Book a session */}
      <section className="border-y border-[#c9a227]/20 bg-[#0d1117] px-6 py-20 md:px-16 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs uppercase tracking-widest text-[#c9a227]">
            For Individuals &amp; Employees
          </p>
          <h2 className="mb-6 text-3xl font-light md:text-4xl">
            Book a confidential listening session
          </h2>
          <p className="mb-8 text-base leading-relaxed text-[#c9b89a]">
            Choose a 15-minute, 30-minute, 1-hour, or 2-hour slot. Pay securely via
            M-Pesa, confirm on WhatsApp, and connect with a trained listener at your
            preferred time.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/listening-hub/book"
              className="inline-flex items-center gap-3 bg-[#c9a227] px-8 py-4 text-sm font-medium text-[#0d1117] transition-opacity hover:opacity-90"
            >
              Book a Listening Slot
            </Link>
            <Link
              href="/listening-hub/book"
              className="inline-flex items-center gap-3 border border-[#c9a227]/40 px-8 py-4 text-sm font-medium text-[#c9a227] transition-colors hover:border-[#c9a227]"
            >
              View session options &amp; pricing
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-24 md:px-16 md:py-32">
        <p className="mb-6 text-xs uppercase tracking-widest text-[#c9a227]">
          How It Works
        </p>
        <h2 className="mb-16 max-w-xl text-3xl font-light leading-snug md:text-5xl">
          Three steps to meaningful support
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map(({ step, title, description }) => (
            <div
              key={step}
              className="border border-[#c9a227]/20 p-8 transition-colors hover:border-[#c9a227]/50"
            >
              <span className="text-3xl font-light text-[#c9a227]/50">{step}</span>
              <h3 className="mb-3 mt-4 text-lg font-medium text-[#c9a227]">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-[#c9b89a]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* For Organizations */}
      <section className="bg-[#1e2a4a] px-6 py-24 md:px-16 md:py-32">
        <p className="mb-6 text-xs uppercase tracking-widest text-[#c9a227]">
          For Organizations
        </p>
        <h2 className="mb-16 max-w-xl text-3xl font-light leading-snug md:text-5xl">
          Why organizations choose The Listening Hub
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {orgBenefits.map(({ title, description }) => (
            <div
              key={title}
              className="border border-[#c9a227]/20 p-8 transition-colors hover:border-[#c9a227]/50"
            >
              <div className="mb-3 h-1 w-8 bg-[#c9a227]" />
              <h3 className="mb-3 text-lg font-medium">{title}</h3>
              <p className="text-sm leading-relaxed text-[#c9b89a]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Confidentiality */}
      <section className="px-6 py-24 md:px-16 md:py-32">
        <p className="mb-6 text-xs uppercase tracking-widest text-[#c9a227]">
          Confidentiality &amp; Trust
        </p>
        <h2 className="mb-8 max-w-3xl text-3xl font-light leading-snug md:text-5xl">
          A safe space, protected by design
        </h2>
        <div className="max-w-3xl space-y-5 text-base leading-relaxed text-[#c9b89a] md:text-lg">
          <p>
            Confidentiality is at the heart of The Listening Hub. All
            interactions are protected in accordance with professional ethical
            standards and applicable data protection requirements. Employees can
            speak freely knowing their conversations are private and secure.
          </p>
          <p>
            For full details on how we handle personal information, see our{" "}
            <Link
              href="/privacy-policy"
              className="text-[#c9a227] underline underline-offset-2 hover:opacity-80"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1e2a4a] px-6 py-24 text-center md:px-16 md:py-32">
        <h2 className="mb-6 text-3xl font-light md:text-5xl">
          Bring The Listening Hub to your organization
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-base text-[#c9b89a]">
          Contact Daily Life Navigators to learn how The Listening Hub can
          support your employees and strengthen your workplace culture.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 bg-[#c9a227] px-8 py-4 text-sm font-medium text-[#0d1117] transition-opacity hover:opacity-90"
          >
            Get in Touch
          </Link>
          <Link
            href="https://wa.me/254757011751?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20The%20Listening%20Hub%20for%20my%20organization."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-[#c9a227]/40 px-8 py-4 text-sm font-medium text-[#c9a227] transition-colors hover:border-[#c9a227]"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
