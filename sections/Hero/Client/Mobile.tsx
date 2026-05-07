"use client";
import { Dispatch, SetStateAction } from "react";

export default function HeroMobileClient({
  playIntro,
  setPlayIntro,
}: {
  setPlayIntro: Dispatch<SetStateAction<boolean>>;
  playIntro: boolean;
}) {
  return (
    <div
      className="absolute inset-0 grid place-items-center"
    >
      <video
        className="size-full object-cover md:hidden"
        autoPlay
        muted
        loop
        poster="/Hero/elementis-cover-mjpg.png"
      >
        <source src="/Hero/DLN.mp4" type="video/mp4" />
      </video>

    </div>
  );
}
