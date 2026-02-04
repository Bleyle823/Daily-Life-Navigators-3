import React, { CSSProperties } from "react";
import DashedLink from "./DashedLink";
import cn from "@/utils/cn";

export default function ContactUs({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      style={style}
      className={cn("flex flex-col [line-height:1]", className)}
    >
      <div>Contact Us</div>
      <div className="flex cursor-default md:flex-col">
        <DashedLink>info.dailylifenavigators@gmail.com</DashedLink>
        <div className="md:hidden">|</div>
        <DashedLink>+254-757-011-751</DashedLink>
        <div className="md:hidden">|</div>
        <DashedLink>P.O BOX 51996-00200, Nairobi, Kenya</DashedLink>
      </div>
    </div>
  );
}
