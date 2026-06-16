import { Fragment } from "react";
import ResponsiveMaskText from "@/components/Client/ResponsiveMaskTextVariant";
import MaskText from "@/components/Server/MaskText";
import SectionTitle from "@/components/Server/SectionTitle";
import IntroductionImage from "@/public/introduction.jpg";
import * as motion from "motion/react-client";
import Image from "next/image";
import ResponsiveImage from "@/components/Client/ResponsiveImage";

export default function IntroductionServer() {
  return (
    <div className="grid grid-rows-[auto_auto_auto] gap-y-12 bg-[#1e2a4a] px-3-75 pt-42-5 pb-35 text-[#f5e6c8] md:grid-cols-[1fr_1.9fr] md:grid-rows-[auto_auto] md:gap-y-32 md:px-15 md:pt-56-25 md:pb-50">
      <motion.div className="mb-2 md:col-span-2 md:col-start-2 md:mb-0">
        <ResponsiveImage parallaxAmount={8}>
          <Image
            src={IntroductionImage}
            alt="introduction-image"
            className="w-full object-cover max-md:aspect-[1.18] md:h-auto"
          />
        </ResponsiveImage>
      </motion.div>

      <SectionTitle className="md:col-start-1 md:row-start-2">
        Who We Help
      </SectionTitle>

      <div className="flex flex-col gap-12 md:col-span-2 md:col-start-2 md:gap-20">
        <ResponsiveMaskText
          mobile={[
            <Fragment key="m-1">Professional support for</Fragment>,
            <Fragment key="m-2">
              <span>individuals, families,</span>
            </Fragment>,
            <Fragment key="m-3">and organizations across</Fragment>,
            <Fragment key="m-4">all ages and life stages.</Fragment>,
          ]}
          desktop={[
            <Fragment key="d-1">
              Professional support for <span>individuals,</span>
            </Fragment>,
            <Fragment key="d-2">
              <span>families,</span> and organizations
            </Fragment>,
            <Fragment key="d-3">
              across all ages and
            </Fragment>,
            <Fragment key="d-4">
              life stages.
            </Fragment>,
          ]}
          className="text-24 [line-height:1] md:text-40 [&>:first-child]:indent-23"
        />

        <MaskText
          lines={[
            <Fragment key="l-1">We provide accurate diagnosis, evidence-based therapy,</Fragment>,
            <Fragment key="l-2">psychoeducation, and corporate wellness programs</Fragment>,
            <Fragment key="l-3">
              for children, adolescents, adults, professionals,
            </Fragment>,
            <Fragment key="l-4">
              and seniors — in person and virtually across Kenya.
            </Fragment>,
          ]}
          className="text-base [line-height:1.3] font-normal md:text-lg"
        />
      </div>
    </div>
  );
}
