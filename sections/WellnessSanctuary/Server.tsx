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
    <div className="flex flex-col bg-[#0d1117] text-[#f5e6c8] md:grid md:grid-cols-2">
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
              <span className="block" key="ws1">Individual, couple, family &amp; group therapy.</span>,
              <span className="block mt-2" key="ws2">Psychometric &amp; psychological assessments.</span>,
              <span className="block mt-2" key="ws3">Corporate wellness &amp; employee assistance programs.</span>,
              <span className="block mt-2" key="ws4">Psychoeducation, life skills &amp; resilience training.</span>,
              <span className="block mt-2" key="ws5">Research, advocacy &amp; community mental health campaigns.</span>,
            ]}
            className="text-lg [line-height:1.4] font-normal whitespace-normal text-left"
          />
        </div>
      </div>
    </div>
  );
}
