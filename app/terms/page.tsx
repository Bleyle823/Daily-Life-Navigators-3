import NavBar from "@/components/Client/NavBar";
import Footer from "@/sections/Footer/Server";

export const metadata = {
  title: "Terms & Conditions | Daily Life Navigators Psychological Services",
  description:
    "Terms and conditions governing the use of Daily Life Navigators Psychological Services website and services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#f5e6c8]">
      <NavBar />

      <section className="px-6 pt-36 pb-20 md:px-16 md:pt-44">
        <p className="mb-4 text-xs uppercase tracking-widest text-[#c9a227]">Legal</p>
        <h1 className="mb-4 text-4xl font-light md:text-5xl">Terms &amp; Conditions</h1>
        <p className="text-sm text-[#c9b89a]">Last updated: June 2026</p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-32 md:px-16">
        <div className="space-y-10 text-sm leading-relaxed text-[#c9b89a] md:text-base">

          <div>
            <h2 className="mb-3 text-base font-medium text-[#f5e6c8] md:text-lg">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Daily Life Navigators Psychological Services website
              or engaging our services, you agree to be bound by these Terms &amp; Conditions.
              If you do not agree to these terms, please do not use our website or services.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-medium text-[#f5e6c8] md:text-lg">2. Services Provided</h2>
            <p>
              Daily Life Navigators Psychological Services provides professional psychological
              services including individual therapy, group therapy, couple and family therapy,
              psychometric assessments, corporate wellness programs, and psychoeducation. All
              services are delivered by qualified professionals and are subject to the ethical
              guidelines of the Kenya Counsellors and Psychologists Act.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-medium text-[#f5e6c8] md:text-lg">3. Not a Crisis Service</h2>
            <p>
              Our website and services are not a crisis or emergency service. If you are
              experiencing a mental health emergency, suicidal thoughts, or are in immediate
              danger, please contact emergency services (999 or 112) or go to your nearest
              hospital immediately. Befrienders Kenya can be reached at +254 722 178 177.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-medium text-[#f5e6c8] md:text-lg">4. Appointments &amp; Cancellations</h2>
            <ul className="space-y-2">
              {[
                "Appointments must be booked in advance via our contact form, phone, or WhatsApp.",
                "We request at least 24 hours notice for cancellations or rescheduling.",
                "Late cancellations or no-shows may be subject to a cancellation fee.",
                "We reserve the right to cancel or reschedule sessions in exceptional circumstances with reasonable notice.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-3 shrink-0 bg-[#c9a227]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-base font-medium text-[#f5e6c8] md:text-lg">5. Payment</h2>
            <p>
              Service fees are discussed and agreed upon before commencement of services. Payment
              is expected as agreed. We are committed to affordability and may offer reduced rates
              for clients facing financial hardship — please discuss this with us confidentially.
              All fees are subject to change with reasonable notice.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-medium text-[#f5e6c8] md:text-lg">6. Confidentiality &amp; Limits</h2>
            <p className="mb-3">
              All information shared in sessions is strictly confidential. However, confidentiality
              has legal and ethical limits. We are required to disclose information when:
            </p>
            <ul className="space-y-2">
              {[
                "There is imminent risk of harm to yourself or others",
                "Abuse or neglect of a child or vulnerable person is disclosed or suspected",
                "A court order requires disclosure",
                "You provide written consent for specific disclosures",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-3 shrink-0 bg-[#c9a227]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-base font-medium text-[#f5e6c8] md:text-lg">7. Intellectual Property</h2>
            <p>
              All content on this website — including text, graphics, logos, program materials,
              and assessments — is the intellectual property of Daily Life Navigators
              Psychological Services unless otherwise stated. You may not reproduce, distribute,
              or use any content without our prior written permission.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-medium text-[#f5e6c8] md:text-lg">8. Disclaimer of Warranties</h2>
            <p>
              Our website is provided &quot;as is&quot;. We make no representations that the website will
              be uninterrupted or error-free. The content on this website is for informational
              purposes and does not constitute professional advice. Always seek guidance from a
              qualified mental health professional for your specific situation.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-medium text-[#f5e6c8] md:text-lg">9. Limitation of Liability</h2>
            <p>
              Daily Life Navigators Psychological Services shall not be liable for any indirect,
              incidental, or consequential damages arising from the use of this website or our
              services, except where liability cannot be excluded by law.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-medium text-[#f5e6c8] md:text-lg">10. Governing Law</h2>
            <p>
              These terms are governed by the laws of the Republic of Kenya. Any disputes shall
              be subject to the jurisdiction of Kenyan courts.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-medium text-[#f5e6c8] md:text-lg">11. Changes to Terms</h2>
            <p>
              We reserve the right to update these Terms &amp; Conditions at any time. Changes will
              be posted on this page with an updated date. Continued use of our services after
              changes constitutes acceptance of the revised terms.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-medium text-[#f5e6c8] md:text-lg">12. Contact</h2>
            <p>For questions about these terms, contact us:</p>
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
