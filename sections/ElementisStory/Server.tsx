import ResponsiveMaskText from "@/components/Client/ResponsiveMaskTextVariant";
import SectionTitle from "@/components/Server/SectionTitle";
import { Fragment } from "react";

export default function ElementisStoryServer() {
  const textLines = {
    mobile: [
      <Fragment key="m-1">
        <span>Build Mind Muscle (BMM):</span> A
      </Fragment>,
      <Fragment key="m-2">
        resilience program targeting children
      </Fragment>,
      <Fragment key="m-3">
        and youth, helping them improve life
      </Fragment>,
      <Fragment key="m-4">skills, change attitudes, and deal with</Fragment>,
      <Fragment key="m-5">stress and anxiety.</Fragment>,
      <Fragment key="m-6">
        <br />
      </Fragment>,
      <Fragment key="m-7">
        <span>PHLU:</span> A structured healing journey
      </Fragment>,
      <Fragment key="m-8">designed to help you recognize,</Fragment>,
      <Fragment key="m-9">process, and heal from unresolved</Fragment>,
      <Fragment key="m-10">emotional wounds.</Fragment>,
    ],
    desktop: [
      <Fragment key="d-1">
        <span>Build Mind Muscle (BMM):</span> A resilience
      </Fragment>,
      <Fragment key="d-2">
        program for children and youth to improve life
      </Fragment>,
      <Fragment key="d-3">skills, change attitudes, and deal with stress.</Fragment>,
      <Fragment key="d-4">
        <br />
      </Fragment>,
      <Fragment key="d-5">
        <span>PHLU:</span> A structured healing journey designed
      </Fragment>,
      <Fragment key="d-6">to help you recognize, process, and heal</Fragment>,
      <Fragment key="d-7">from unresolved emotional wounds.</Fragment>,
    ],
  };
  return (
    <>
      <SectionTitle className="md:col-span-3">Signature Programs</SectionTitle>
      <div className="max-md:mt-12 md:col-span-6 md:col-start-6">
        <ResponsiveMaskText
          {...textLines}
          className="text-24 [line-height:1] md:text-40 [&>:first-child]:indent-23"
        />
      </div>
    </>
  );
}
