import { Fragment } from "react";
import ResponsiveMaskTextVariant from "@/components/Client/ResponsiveMaskTextVariant";
import ResponsiveMarquee from "@/components/Client/ResponsiveMarquee";
import SustainableRetreatClient from "@/components/Client/SustainableRetreatClient";

export default function SustainableRetreat() {
  return (
    <div className="bg-[#ff9f1c] py-36 text-[#cbf3f0] md:py-60">
      <ResponsiveMarquee
        animationConfig={{
          mobile: {
            max: "-887px",
            speed: 50,
          },
          desktop: {
            max: "-88.7%",
            speed: 5,
          },
        }}
      >
        {"Mental Health Awareness • Community Support • Growth • Safety • "}
      </ResponsiveMarquee>

      <div className="mt-18 flex flex-col gap-y-14 px-8-25 md:mt-26 md:grid md:grid-cols-3 md:grid-rows-[auto_auto] md:gap-y-24 md:px-16">
        <div className="flex flex-col gap-14 md:col-span-2 md:col-start-2 md:flex-row">
          <ResponsiveMaskTextVariant
            desktop={[
              <Fragment key="d-0">
                Group therapy and peer support in
              </Fragment>,
              <Fragment key="d-1">
                safe, nurturing environments.
              </Fragment>,
              <Fragment key="d-2">
                We believe in community and
              </Fragment>,
              <Fragment key="d-3">
                shared growth.
              </Fragment>,
            ]}
            mobile={[
              <Fragment key="m-0">
                Group therapy and peer support
              </Fragment>,
              <Fragment key="m-1">
                in safe, nurturing environments.
              </Fragment>,
            ]}
            className="text-base [line-height:1.33] md:text-lg"
          />

          <ResponsiveMaskTextVariant
            desktop={[
              <Fragment key="d2-0">
                Cutting-edge research to advance
              </Fragment>,
              <Fragment key="d2-1">
                mental health care practices.
              </Fragment>,
              <Fragment key="d2-2">
                We strive for continuous improvement
              </Fragment>,
              <Fragment key="d2-3">
                and innovation.
              </Fragment>,
            ]}
            mobile={[
              <Fragment key="m2-0">
                Cutting-edge research to advance
              </Fragment>,
              <Fragment key="m2-1">
                mental health care practices.
              </Fragment>,
            ]}
            className="text-base [line-height:1.33] md:text-lg"
          />
        </div>
        <SustainableRetreatClient />
      </div>
    </div>
  );
}
