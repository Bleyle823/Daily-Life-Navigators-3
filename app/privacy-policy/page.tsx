import NavBar from "@/components/Client/NavBar";
import Footer from "@/sections/Footer/Server";

export const metadata = {
  title: "Privacy Policy | Daily Life Navigators Psychological Services",
  description:
    "How Daily Life Navigators Psychological Services collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#f5e6c8]">
      <NavBar />

      <section className="px-6 pt-36 pb-20 md:px-16 md:pt-44">
        <p className="mb-4 text-xs uppercase tracking-widest text-[#c9a227]">Legal</p>
        <h1 className="mb-4 text-4xl font-light md:text-5xl">Privacy Policy</h1>
        <p className="text-sm text-[#c9b89a]">Last updated: June 2026</p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-32 md:px-16">
        <div className="space-y-10 text-sm leading-relaxed text-[#c9b89a] md:text-base">

          <div>
            <h2 className="mb-3 text-base font-medium text-[#f5e6c8] md:text-lg">1. Who We Are</h2>
            <p>
              Daily Life Navigators Psychological Services (&quot;DLNPS&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a
              registered psychological services organization in Kenya (Registration No.
              BN-P6CY2XLZ, Cap 499, Section 14) with its principal office at P.O BOX
              51996-00200, Nairobi, Kenya. We operate the website at{" "}
              <span className="text-[#c9a227]">daily-life-navigators-4.vercel.app</span> and
              provide mental health services in person and virtually.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-medium text-[#f5e6c8] md:text-lg">2. Information We Collect</h2>
            <p className="mb-3">When you use our website or contact us, we may collect:</p>
            <ul className="space-y-2">
              {[
                "Personal identification information (name, email address, phone number)",
                "Health and psychological information voluntarily provided for service purposes",
                "Communication records from forms, emails, and WhatsApp messages",
                "Usage data such as browser type, pages visited, and time spent on site",
                "Location information (country/region) inferred from your IP address",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-3 shrink-0 bg-[#c9a227]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-base font-medium text-[#f5e6c8] md:text-lg">3. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="space-y-2">
              {[
                "Respond to your inquiries and schedule sessions",
                "Provide, personalize, and improve our psychological services",
                "Send appointment reminders and relevant mental health information",
                "Comply with legal obligations and professional ethical standards",
                "Conduct anonymized research to improve mental health services",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-3 shrink-0 bg-[#c9a227]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-base font-medium text-[#f5e6c8] md:text-lg">4. Confidentiality</h2>
            <p>
              All clinical information shared in therapy sessions is strictly confidential. We
              adhere to the ethical codes of the Kenya Counsellors and Psychologists Act and the
              professional standards of our licensing bodies. Information will not be disclosed to
              third parties except where required by law, to prevent imminent harm, or with your
              explicit written consent.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-medium text-[#f5e6c8] md:text-lg">5. Data Sharing</h2>
            <p>
              We do not sell, rent, or trade your personal information. We may share limited
              information with trusted service providers who assist in operating our website or
              delivering services (e.g., email platforms, video call tools), always under strict
              confidentiality agreements. We do not share clinical records without your explicit
              consent except as required by law.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-medium text-[#f5e6c8] md:text-lg">6. Data Retention</h2>
            <p>
              We retain personal data for as long as necessary to provide services and comply
              with legal obligations. Clinical records are retained in accordance with Kenyan
              health law. You may request deletion of non-clinical data by contacting us.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-medium text-[#f5e6c8] md:text-lg">7. Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="space-y-2">
              {[
                "Access the personal data we hold about you",
                "Request correction of inaccurate data",
                "Request deletion of your data (subject to legal and clinical obligations)",
                "Withdraw consent for non-essential communications at any time",
                "Lodge a complaint with the relevant data protection authority in Kenya",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-3 shrink-0 bg-[#c9a227]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-base font-medium text-[#f5e6c8] md:text-lg">8. Cookies</h2>
            <p>
              Our website may use essential cookies to ensure basic functionality. We do not
              use tracking or advertising cookies. You can configure your browser to refuse
              cookies, though some features of the site may not function correctly as a result.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-medium text-[#f5e6c8] md:text-lg">9. Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your
              personal information against unauthorized access, loss, or disclosure. All virtual
              sessions are conducted through secure, encrypted platforms.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-medium text-[#f5e6c8] md:text-lg">10. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or how we handle your data, contact us:
            </p>
            <div className="mt-4 space-y-1">
              <p>Daily Life Navigators Psychological Services</p>
              <p>P.O BOX 51996-00200, Nairobi, Kenya</p>
              <p>Email: <span className="text-[#c9a227]">info.dailylifenavigators@gmail.com</span></p>
              <p>Phone: +254 757 011 751</p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
