import Image from "next/image";
import { Fragment } from "react";
import ClinicalPsychology from "@/public/ClinicalPsychology.png";
import ResponsiveMaskText from "@/components/Client/ResponsiveMaskTextVariant";
import SectionTitle from "@/components/Server/SectionTitle";
import MaskText from "@/components/Server/MaskText";
import ResponsiveImage from "@/components/Client/ResponsiveImage";
export default function WellnessSanctuary() {
  const textLines = {
    desktop: [
      <Fragment key="desktop-1">
        <span>Clinical Excellence</span> &
      </Fragment>,
      <Fragment key="desktop-2">Empowerment</Fragment>,
      <Fragment key="desktop-3">Growth</Fragment>,
    ],
    mobile: [
      <Fragment key="mobile-1">
        <span>Clinical Excellence</span> &
      </Fragment>,
      <Fragment key="mobile-2">Empowerment</Fragment>,
      <Fragment key="mobile-3">Growth</Fragment>,
    ],
  };

  return (
    <div className="flex flex-col bg-[#ff9f1c] text-[#cbf3f0] md:grid md:grid-cols-2">
      <ResponsiveImage parallaxAmount={20}>
        <Image
          src={ClinicalPsychology}
          alt="clinical-psychology-image"
          className="h-auto w-full"
        />
      </ResponsiveImage>
      <div className="flex flex-col justify-center px-3-75 py-40 md:py-0">
        <div className="flex flex-col gap-12 md:ml-36 md:w-fit md:gap-16">
          <SectionTitle>Services</SectionTitle>
          <ResponsiveMaskText
            {...textLines}
            className="text-24 [line-height:1] md:text-40"
          />
          <MaskText
            lines={[
              <span className="block" key="ws1">Expert diagnosis and personalized counseling</span>,
              <span className="block" key="ws2">using evidence-based approaches.</span>,
              <span className="block mt-2" key="ws3">Life coaching and psychoeducation</span>,
              <span className="block" key="ws4">for holistic personal development.</span>,
              <span className="block mt-2" key="ws5">Transformative healing journeys.</span>,
            ]}
            className="text-lg [line-height:1.4] font-normal whitespace-normal text-left"
          />
        </div>
      </div>
    </div>
  );
}
