import NavBar from "@/components/Client/NavBar";
import Footer from "@/sections/Footer/Server";
import Link from "next/link";

export const metadata = {
  title: "Services | Daily Life Navigators Psychological Services",
  description:
    "Explore our full range of psychological services — individual therapy, assessments, corporate wellness, psychoeducation, and community programs.",
};

const services = [
  {
    category: "Clinical Services",
    items: [
      {
        title: "Individual Therapy",
        description:
          "Personalized one-on-one sessions addressing depression, anxiety, trauma, grief, loss, addiction, PTSD, identity, life transitions, and more. We use evidence-based models tailored to your unique needs.",
        duration: "50–60 min sessions",
        format: "In-person & Virtual",
      },
      {
        title: "Couple & Family Therapy",
        description:
          "Strengthen relationships, improve communication, and navigate conflict with professional guidance. Designed for couples at any stage and families dealing with relational stress, separation, or loss.",
        duration: "60–90 min sessions",
        format: "In-person & Virtual",
      },
      {
        title: "Group Therapy",
        description:
          "Facilitated peer support groups for shared healing. Topics include grief, addiction recovery, trauma, anxiety, and resilience. Groups provide a safe, nurturing environment and a sense of community.",
        duration: "90 min sessions",
        format: "In-person",
      },
      {
        title: "Clinical Diagnosis",
        description:
          "Using clinically validated, reliable, and valid psychological assessment tools, our therapists provide accurate diagnoses communicated clearly to clients — ensuring a sound foundation for treatment.",
        duration: "1–2 sessions",
        format: "In-person",
      },
    ],
  },
  {
    category: "Psychometric & Psychological Assessments",
    items: [
      {
        title: "Psychometric Assessments",
        description:
          "Comprehensive personality, cognitive, and emotional intelligence assessments for individuals, employees, and students. Used for clinical purposes, career guidance, and organizational placement.",
        duration: "2–3 hours",
        format: "In-person",
      },
      {
        title: "Psychological Assessments for Schools",
        description:
          "Specialized assessments for children and adolescents in primary and secondary schools. We have partnered with schools in Nairobi, Kajiado, Rongo, and Migori counties.",
        duration: "Varies",
        format: "In-person (school visits available)",
      },
    ],
  },
  {
    category: "Corporate & Organizational Wellness",
    items: [
      {
        title: "Employee Assistance Programs (EAP)",
        description:
          "Confidential counseling and support for employees dealing with work stress, burnout, conflict, grief, substance use, and personal challenges. Delivered on-site or virtually.",
        duration: "Tailored to organization",
        format: "In-person & Virtual",
      },
      {
        title: "Staff Training & Workshops",
        description:
          "Interactive corporate training on: Anger Management, Communication Skills, Grief Awareness, Time Management, Bullying & Harassment Prevention, Mindfulness & Well-being, Building Resilience, and more.",
        duration: "Half-day to 3-day programs",
        format: "In-person & Virtual",
      },
      {
        title: "Critical Incident Response",
        description:
          "Rapid psychological support for organizations following traumatic events such as loss of a colleague, workplace accidents, or disasters. We help teams process and recover.",
        duration: "As needed",
        format: "In-person",
      },
      {
        title: "The Listening Hub",
        description:
          "Confidential listening support for everyone — book a 15 min to 2 hr session with trained listeners via phone, WhatsApp, or video. Pay via M-Pesa to 0720977842.",
        duration: "15 min – 2 hrs",
        format: "Phone / WhatsApp / Video",
      },
    ],
  },
  {
    category: "Psychoeducation & Community Programs",
    items: [
      {
        title: "Build Mind Muscle (BMM)",
        description:
          "Our signature resilience program targeting children and youth — mostly delivered in groups. Covers life skills, identity, emotional intelligence, stress management, substance use awareness, peer pressure, and adolescent rights.",
        duration: "Multi-week program",
        format: "Group / School-based",
      },
      {
        title: "PSYCHOLOGICALLY HEAL-TO-LEVEL UP (PHLU)",
        description:
          "A structured healing journey designed to help individuals recognize, process, and heal from unresolved emotional wounds. Focused on overcoming psychological stagnation and stepping into full potential.",
        duration: "Multi-session program",
        format: "Group & Individual",
      },
      {
        title: "Community Awareness Campaigns",
        description:
          "Mental health awareness initiatives delivered through relevant platforms to educate the public, reduce stigma, and promote emotional well-being across communities and schools.",
        duration: "Ongoing",
        format: "Community / Online",
      },
    ],
  },
  {
    category: "Research & Advocacy",
    items: [
      {
        title: "Research & Clinical Trials",
        description:
          "Our core team collaborates with other researchers to assess gaps in mental health provision in Kenya. Findings are used to advocate for policy changes in access and affordability of mental health services.",
        duration: "Ongoing",
        format: "Academic / Institutional",
      },
      {
        title: "Training for Leaders & Life Coaching",
        description:
          "Tailored programs for industry leaders and professionals who need flexible, high-impact support. Focuses on emotional intelligence, leadership resilience, purpose, and sustainable high performance.",
        duration: "Tailored",
        format: "In-person & Virtual",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#f5e6c8]">
      <NavBar />

      {/* Hero */}
      <section className="flex min-h-[50vh] flex-col justify-center px-6 pt-36 pb-20 md:px-16 md:pt-44">
        <p className="mb-4 text-xs uppercase tracking-widest text-[#c9a227]">Our Services</p>
        <h1 className="max-w-3xl text-4xl font-light leading-tight md:text-6xl">
          Professional mental health care for every stage of life
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#c9b89a] md:text-lg">
          We provide comprehensive, evidence-based psychological services for
          individuals, families, and organizations — both in person and
          virtually across Nairobi and Kenya.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 bg-[#c9a227] px-8 py-4 text-sm font-medium text-[#0d1117] transition-opacity hover:opacity-90"
          >
            Book a Session
          </Link>
          <Link
            href="https://wa.me/254757011751?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-[#c9a227]/40 px-8 py-4 text-sm font-medium text-[#c9a227] transition-colors hover:border-[#c9a227]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </Link>
        </div>
      </section>

      {/* Booking info banner */}
      <section className="border-y border-[#c9a227]/20 bg-[#1e2a4a] px-6 py-8 md:px-16">
        <div className="flex flex-wrap gap-8 text-sm text-[#c9b89a]">
          {[
            { label: "Location", value: "Nairobi, Kenya (P.O BOX 51996-00200) + virtual sessions" },
            { label: "Phone", value: "+254 757 011 751" },
            { label: "Email", value: "info.dailylifenavigators@gmail.com" },
            { label: "Availability", value: "Mon–Sat, flexible hours" },
          ].map(({ label, value }) => (
            <div key={label}>
              <span className="block text-xs uppercase tracking-widest text-[#c9a227]">{label}</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Service categories */}
      {services.map(({ category, items }) => (
        <section key={category} className="px-6 py-20 odd:bg-[#0d1117] even:bg-[#1e2a4a] md:px-16 md:py-28">
          <p className="mb-10 text-xs uppercase tracking-widest text-[#c9a227]">{category}</p>
          <div className="grid gap-8 md:grid-cols-2">
            {items.map(({ title, description, duration, format }) => (
              <div
                key={title}
                className="flex flex-col border border-[#c9a227]/20 p-8 transition-colors hover:border-[#c9a227]/50"
              >
                <h3 className="mb-3 text-lg font-medium">{title}</h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-[#c9b89a]">{description}</p>
                <div className="flex flex-wrap gap-4 border-t border-[#c9a227]/20 pt-4 text-xs text-[#c9a227]">
                  <span>⏱ {duration}</span>
                  <span>📍 {format}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-[#1e2a4a] px-6 py-24 text-center md:px-16 md:py-32">
        <h2 className="mb-6 text-3xl font-light md:text-5xl">
          Not sure which service is right for you?
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-base text-[#c9b89a]">
          Contact us and we will guide you to the most appropriate support for
          your unique situation. There is no pressure — just a safe conversation.
        </p>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-3 bg-[#c9a227] px-8 py-4 text-sm font-medium text-[#0d1117] transition-opacity hover:opacity-90"
        >
          Get in Touch
        </Link>
      </section>

      <Footer />
    </main>
  );
}
