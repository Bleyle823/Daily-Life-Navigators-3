import NavBar from "@/components/Client/NavBar";
import Footer from "@/sections/Footer/Server";
import Link from "next/link";

export const metadata = {
  title: "About Us | Daily Life Navigators Psychological Services",
  description:
    "Learn about Daily Life Navigators Psychological Services — our story, mission, values, and the expert team guiding your mental health journey.",
};

const values = [
  {
    title: "Reverence",
    description:
      "We honor our spiritual commitment in all activities while respecting the beliefs of others.",
  },
  {
    title: "Diversity & Dignity",
    description:
      "We recognize and celebrate the value of diversity, upholding the dignity and worth of every individual.",
  },
  {
    title: "Integrity & Transparency",
    description:
      "We commit to honesty, transparency, and accountability, fostering open communication with all stakeholders.",
  },
  {
    title: "Children's Rights",
    description:
      "We are dedicated to upholding and advocating for the rights and well-being of children in all our actions.",
  },
  {
    title: "Humility",
    description:
      "We acknowledge our role within a larger global alliance, striving for modesty in our conduct.",
  },
  {
    title: "Confidentiality",
    description:
      "We rigorously protect confidentiality in accordance with legal standards and the ethical codes of the counseling profession.",
  },
];

const team = [
  {
    name: "Dr. Preskilla Ochieng-Munda",
    role: "Founder, Clinical Psychologist & Psychology Lecturer",
    qualifications: [
      "Ph.D. Clinical Psychology — Daystar University (2017–2020)",
      "M.A. Counselling Psychology — Daystar University (2010–2012)",
      "M.B.A. Marketing — United States International University (1998–2000)",
      "B.Sc. Biochemistry & Zoology — University of Nairobi (1990–1995)",
    ],
    bio: "Dr. Preskilla Akoth Ochieng-Munda is a highly esteemed Psychology Lecturer and Clinical Psychologist practicing in Nairobi, Kenya. With over 20 years in healthcare and more than a decade as a Psychotherapist, Psychometrician, and Corporate Trainer, she integrates evidence-based psychotherapy, psychoeducation, life skills training, and coaching to promote holistic well-being. Her expertise spans PTSD, Depression, Anxiety, Substance Use, and life-stage challenges. She lectures and supervises theses at Pan Africa Christian University, Daystar University, Multimedia University, and Africa International University. She also spearheads the Build Mind Muscle (BMM) resilience program and the PSYCHOLOGICALLY HEAL-TO-LEVEL UP (PHLU) initiative.",
  },
  {
    name: "Sylvia Akinyi Osewe",
    role: "Program Coordinator, Counselling Psychologist",
    qualifications: [
      "M.A. Counselling Psychology — Kenyatta University",
      "B.Ed. Early Childhood Education — Kenyatta University",
      "Diploma in Education",
    ],
    bio: "Sylvia is a seasoned education and mental health professional with 20 years of experience working with children, adolescents, youth, and adults. She has successfully implemented peer education and counseling programs across various schools in Kenya through FAWE-Kenya. Sylvia specializes in Resilience Training, character strength development, emotional intelligence, stress management, cognitive restructuring, and Post-Traumatic Growth (PTG). She is skilled in individual and group counseling, career guidance, reproductive health rights training, relationship therapy, and leads workshops both face-to-face and online.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#f5e6c8]">
      <NavBar />

      {/* Hero */}
      <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 pt-32 pb-20 text-center md:px-16 md:pt-40">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#c9a227]">
          Registered in Kenya · BN-P6CY2XLZ, Cap 499, Sec 14
        </p>
        <h1 className="max-w-4xl text-4xl font-light leading-tight md:text-6xl">
          Guiding You Through Life&apos;s Complexities
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#c9b89a] md:text-lg">
          At Daily Life Navigators Psychological Services, we believe that
          psychological well-being is not merely the absence of illness — it is
          the presence of self-awareness, resilience, meaningful relationships,
          and purposeful living.
        </p>
        <Link
          href="/#contact"
          className="mt-10 inline-flex items-center gap-3 bg-[#c9a227] px-8 py-4 text-sm font-medium text-[#0d1117] transition-opacity hover:opacity-90"
        >
          Book a Session
        </Link>
      </section>

      {/* Mission / Vision / Motto */}
      <section className="grid gap-px border-t border-[#c9a227]/20 bg-[#c9a227]/20 md:grid-cols-3">
        {[
          {
            label: "Our Vision",
            text: "To enhance access to affordable and professional mental health services — in person and virtually — empowering individuals to enjoy life and navigate daily challenges with optimal emotional well-being.",
          },
          {
            label: "Our Mission",
            text: "To promote mental health across all ages and genders using clinically proven treatment models and preventive strategies, while collaborating with communities to empower members through awareness, training, counseling, and life skills education.",
          },
          {
            label: "Our Motto",
            text: "Navigate. Thrive. Flourish.",
          },
        ].map(({ label, text }) => (
          <div key={label} className="bg-[#0d1117] px-8 py-12 md:px-10 md:py-16">
            <p className="mb-4 text-xs uppercase tracking-widest text-[#c9a227]">{label}</p>
            <p className="text-base leading-relaxed text-[#c9b89a] md:text-lg">{text}</p>
          </div>
        ))}
      </section>

      {/* Our Story */}
      <section className="px-6 py-24 md:px-16 md:py-32">
        <p className="mb-6 text-xs uppercase tracking-widest text-[#c9a227]">Our Story</p>
        <h2 className="mb-8 max-w-3xl text-3xl font-light leading-snug md:text-5xl">
          Born from Lived Experience
        </h2>
        <div className="max-w-3xl space-y-5 text-base leading-relaxed text-[#c9b89a] md:text-lg">
          <p>
            Daily Life Navigators Psychological Services emerged from the journeys
            of individuals who have traversed diverse landscapes of life — growing
            up within the rich communal fabric of rural communities, navigating the
            complexities of modern urban living, building professional careers,
            raising families, and confronting the inevitable challenges that
            accompany each stage of human development.
          </p>
          <p>
            These experiences revealed a profound reality: while society has
            advanced technologically and economically, many people today navigate
            life with fewer emotional anchors than previous generations. Many
            children and young people are growing up in a world saturated with
            information but often deprived of wisdom; connected digitally, yet
            disconnected relationally.
          </p>
          <p>
            At Daily Life Navigators, we asked ourselves: <em>Who helps people
            navigate the psychological terrain of everyday life?</em> Not only
            during moments of crisis, but throughout the ordinary yet profoundly
            significant transitions that shape who we become. That question gave
            birth to our work.
          </p>
          <p>
            We are a registered entity under the laws of Kenya with a national
            office in Nairobi and program units across various counties. Our
            services cater to corporate and individual clients at every life stage
            — from children and adolescents to mid-career professionals, leaders,
            retirees, and those facing the unique challenges of aging.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[#1e2a4a] px-6 py-24 md:px-16 md:py-32">
        <p className="mb-6 text-xs uppercase tracking-widest text-[#c9a227]">Our Core Values</p>
        <h2 className="mb-16 max-w-xl text-3xl font-light leading-snug md:text-5xl">
          The principles that guide every interaction
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {values.map(({ title, description }) => (
            <div
              key={title}
              className="border border-[#c9a227]/20 p-8 transition-colors hover:border-[#c9a227]/50"
            >
              <div className="mb-3 h-1 w-8 bg-[#c9a227]" />
              <h3 className="mb-3 text-lg font-medium text-[#c9a227]">{title}</h3>
              <p className="text-sm leading-relaxed text-[#c9b89a]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="px-6 py-24 md:px-16 md:py-32">
        <p className="mb-6 text-xs uppercase tracking-widest text-[#c9a227]">Meet the Team</p>
        <h2 className="mb-16 max-w-xl text-3xl font-light leading-snug md:text-5xl">
          Highly trained professionals committed to your well-being
        </h2>
        <div className="grid gap-12 md:grid-cols-2">
          {team.map(({ name, role, qualifications, bio }) => (
            <div key={name} className="border-t border-[#c9a227]/30 pt-8">
              <h3 className="mb-1 text-xl font-medium text-[#c9a227]">{name}</h3>
              <p className="mb-6 text-sm uppercase tracking-wider text-[#c9b89a]">{role}</p>
              <ul className="mb-6 space-y-1">
                {qualifications.map((q) => (
                  <li key={q} className="flex items-start gap-2 text-sm text-[#c9b89a]">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#c9a227]" />
                    {q}
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-[#c9b89a]">{bio}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 border border-[#c9a227]/20 p-8">
          <h3 className="mb-3 text-lg font-medium text-[#c9a227]">Youth Coordinators &amp; Peer Educators</h3>
          <p className="text-sm leading-relaxed text-[#c9b89a]">
            Our extended network includes Jeremiah, Havilla, Enock, Sheilla Perez, Bilha, Eliver,
            Peculiar, Dr. Brian, Dr. Melanie Zilpa, Dr. Beryl, Hazel Williams, Beverly, Natalie,
            Stephanie, Claire, and Kimberlie — youth coordinators and peer educators representing us
            in organizations like WFP, with on-the-ground feedback from Tanzania, USA, UK, and France.
          </p>
        </div>
      </section>

      {/* Publications */}
      <section className="bg-[#1e2a4a] px-6 py-24 md:px-16 md:py-32">
        <p className="mb-6 text-xs uppercase tracking-widest text-[#c9a227]">Research &amp; Publications</p>
        <h2 className="mb-12 max-w-xl text-3xl font-light leading-snug md:text-5xl">
          Grounded in evidence-based research
        </h2>
        <ul className="max-w-3xl space-y-6 text-sm leading-relaxed text-[#c9b89a]">
          {[
            "Ochieng-Munda, P. (2020). Cognitive Behavioral Intervention for Trauma in Schools (CBITS) in treating PTSD among adolescents in Public Primary Schools in Informal Settlements, Kajiado County, Kenya. [Dissertation, Daystar University]",
            "Ochieng-Munda, P., Munene, A., Nyagwencha, S. (2020). Prevalence and Severity of PTSD among Adolescents in Informal Settlements, Kajiado North. Africa Journal of Clinical Psychology, 2(03).",
            "Ochieng-Munda, P. (2024). Effectiveness of CBITS in alleviating PTSD among Adolescents in Informal Settlements, Kajiado. International Journal of Emergency Mental Health and Human Resilience. ISSN: 1522-4821",
            "Wanjiru, D., Ojuade, S., Ochieng-Munda, P. (2025). Correlates of Psychological Distress and Smartphone Addiction among University Students at AIU, Nairobi. Journal of Sociology, Psychology and Religious, 5(04).",
            "Fundi, T., Ojuade, S., Ochieng-Munda, P., Ireri, N. (2025). Parenting Styles and Oppositional Defiant Disorder — CITAM Churches, Nairobi. Journal of Sociology, Psychology and Religious, 5(03). DOI: 10.70619/vol5iss3pp52-61",
          ].map((pub) => (
            <li key={pub} className="flex items-start gap-3">
              <span className="mt-1.5 h-1 w-4 shrink-0 bg-[#c9a227]" />
              {pub}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center md:px-16 md:py-32">
        <h2 className="mb-6 text-3xl font-light md:text-5xl">
          Ready to Begin Your Journey?
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-base text-[#c9b89a]">
          Whether you are seeking help for yourself, your family, or your
          organization, we offer a safe, professional, and judgment-free
          environment to facilitate healing and growth.
        </p>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-3 bg-[#c9a227] px-8 py-4 text-sm font-medium text-[#0d1117] transition-opacity hover:opacity-90"
        >
          Book a Session
        </Link>
      </section>

      <Footer />
    </main>
  );
}
