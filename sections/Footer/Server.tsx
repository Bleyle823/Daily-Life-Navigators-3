import LogoFull from "../../components/SVGComponents/LogoFull";
import ContactUs from "../../components/Server/ContactUs";

export default function Footer() {
  return (
    <div className="bg-[#2ec4b6] md:px-16">
      <div className="border-b border-white/50 px-3-75 py-20 text-[#cbf3f0] md:px-0 md:pt-36 md:pb-28-75">
        <div>
          <LogoFull className="h-auto w-full max-w-fit origin-left" />
          <ContactUs className="mt-17-5 w-fit flex-col gap-y-8 text-base max-md:mt-16 [&>div]:gap-6 md:[&>div]:gap-4" />
        </div>
      </div>
      <div className="flex flex-col gap-y-4 bg-[#2ec4b6] px-3-75 py-7-5 text-xs text-[#cbf3f0] md:flex-row md:justify-between md:pb-10 md:text-base">
        <div className="md:flex-1">© 2026 Daily Life Navigators. All Rights Reserved</div>
      </div>
    </div>
  );
}
