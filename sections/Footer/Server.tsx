import LogoFull from "../../components/SVGComponents/LogoFull";
import ContactUs from "../../components/Server/ContactUs";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#0d1117] md:px-16">
      <div className="border-b border-[#c9a227]/30 px-3-75 py-20 text-[#f5e6c8] md:px-0 md:pt-36 md:pb-28-75">
        <div>
          <LogoFull className="h-auto w-full max-w-fit origin-left" />
          <ContactUs className="mt-17-5 w-fit flex-col gap-y-8 text-base max-md:mt-16 [&>div]:gap-6 md:[&>div]:gap-4" />
        </div>
      </div>
      <div className="flex flex-col gap-y-4 bg-[#0d1117] px-3-75 py-7-5 text-xs text-[#c9b89a] md:flex-row md:justify-between md:pb-10 md:text-base">
        <div className="md:flex-1">© 2026 Daily Life Navigators. All Rights Reserved</div>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/privacy-policy" className="hover:text-[#c9a227] transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-[#c9a227] transition-colors">Terms &amp; Conditions</Link>
          <Link href="/about" className="hover:text-[#c9a227] transition-colors">About Us</Link>
          <Link href="/services" className="hover:text-[#c9a227] transition-colors">Services</Link>
          <Link href="/listening-hub" className="hover:text-[#c9a227] transition-colors">The Listening Hub</Link>
          <Link href="/#book" className="hover:text-[#c9a227] transition-colors">Order the Book</Link>
          <Link
            href="https://wa.me/254757011751"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#c9a227] transition-colors"
          >
            WhatsApp
          </Link>
        </div>
      </div>
    </div>
  );
}
