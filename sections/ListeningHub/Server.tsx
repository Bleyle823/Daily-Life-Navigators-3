import Image from "next/image";
import { Fragment } from "react";
import Link from "next/link";
import ClinicalPsychology from "@/public/ClinicalPsychology.png";
import ResponsiveMaskText from "@/components/Client/ResponsiveMaskTextVariant";
import SectionTitle from "@/components/Server/SectionTitle";
import MaskText from "@/components/Server/MaskText";
import ResponsiveImage from "@/components/Client/ResponsiveImage";

export default function ListeningHubServer() {
  const textLines = {
    desktop: [
      <Fragment key="d-1">
        <span>Professional listening</span> before
      </Fragment>,
      <Fragment key="d-2">challenges escalate.</Fragment>,
    ],
    mobile: [
      <Fragment key="m-1">
        <span>Professional listening</span> before
      </Fragment>,
      <Fragment key="m-2">challenges escalate.</Fragment>,
    ],
  };

  return (
    <div className="flex flex-col bg-[#0d1117] text-[#f5e6c8] md:grid md:grid-cols-2">
      <div className="order-2 flex flex-col justify-center px-3-75 py-40 md:order-1 md:py-0">
        <div className="flex flex-col gap-12 md:ml-36 md:w-fit md:gap-16">
          <div>
            <SectionTitle>The Listening Hub</SectionTitle>
            <p className="mt-4 text-xs uppercase tracking-widest text-[#c9a227]">
              A programme under Daily Life Navigators
            </p>
          </div>
          <ResponsiveMaskText
            {...textLines}
            className="text-24 [line-height:1] md:text-40"
          />
          <MaskText
            lines={[
              <span className="block" key="lh1">
                A confidential digital employee support platform giving every
                employee a safe space to be heard.
              </span>,
              <span className="block mt-4" key="lh2">
                Prevent absenteeism, conflict, reduced performance, and
                resignation — before they take hold.
              </span>,
            ]}
            className="text-lg [line-height:1.4] font-normal whitespace-normal text-left"
          />
          <div className="flex flex-wrap gap-4">
            <Link
              href="/listening-hub/book"
              className="inline-flex items-center gap-2 bg-[#c9a227] px-6 py-3 text-sm font-medium text-[#0d1117] transition-opacity hover:opacity-90"
            >
              Book a Listening Slot
            </Link>
            <Link
              href="/listening-hub"
              className="inline-flex items-center gap-2 border border-[#c9a227]/40 px-6 py-3 text-sm font-medium text-[#c9a227] transition-colors hover:border-[#c9a227]"
            >
              Explore The Listening Hub
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 border border-[#c9a227]/40 px-6 py-3 text-sm font-medium text-[#c9a227] transition-colors hover:border-[#c9a227]"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
      <div className="order-1 md:order-2">
        <ResponsiveImage parallaxAmount={20}>
          <Image
            src={ClinicalPsychology}
            alt="The Listening Hub — corporate employee support"
            className="h-auto w-full"
          />
        </ResponsiveImage>
      </div>
    </div>
  );
}
