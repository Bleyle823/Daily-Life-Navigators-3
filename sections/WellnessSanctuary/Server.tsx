import Image from "next/image";
import { Fragment } from "react";
import WellnessSanctuaryImage from "@/public/WellnessSanctuaryImage.png";
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
          src={WellnessSanctuaryImage}
          alt="wellness-sanctuary-image"
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
              <>Expert diagnosis and personalized</>,
              <>counseling using evidence-based approaches.</>,
              <>Life coaching and psychoeducation</>,
              <>for holistic personal development.</>,
              <>Transformative healing journeys.</>,
            ]}
            className="text-lg [line-height:1.3] font-normal"
          />
        </div>
      </div>
    </div>
  );
}
