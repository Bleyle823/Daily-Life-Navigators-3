"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";
import Image1 from "@/public/ImageContainer/Community.jpg";
import Image2 from "@/public/ImageContainer/Clinical.jpg";
import Image3 from "@/public/ImageContainer/hands.avif";
import Image4 from "@/public/ImageContainer/Empowerment.jpg";
import Image5 from "@/public/ImageContainer/Research.jpg";
import { useImageReveal } from "@/hooks/useImageReveal";

interface ItemType {
  title: string;
  img: StaticImageData;
}

export default function SustainableRetreatClient() {
  const { imgContainerRef, handleFocus } = useImageReveal();
  const items: ItemType[] = [
    { title: "Services", img: Image1 },
    { title: "Clinical Diagnosis", img: Image2 },
    { title: "Psychoeducation", img: Image3 },
    { title: "Training & Coaching", img: Image4 },
    { title: "Research", img: Image5 },
  ];

  return (
    <>
      <div ref={imgContainerRef} className="relative overflow-hidden md:w-fit">
        <Image
          src={items[items.length - 1].img}
          alt="placeholder"
          aria-hidden={true}
          className="invisible w-full max-md:aspect-[0.82] md:h-full md:w-auto"
        />
        {items.map((eachItem, i) => (
          <motion.div
            key={`image-${i + 1}`}
            data-index={i}
            className="absolute inset-0"
            style={{ zIndex: -i }}
          >
            <Image
              src={eachItem.img}
              alt={eachItem.title}
              className="size-full object-cover md:w-auto"
            />
          </motion.div>
        ))}
      </div>
      <div className="-mx-8-25 grid grid-rows-5 divide-y divide-[#cbf3f0] border-y border-[#cbf3f0] md:col-span-2 md:col-start-2 md:row-start-2 md:mx-0">
        {items.map((eachItem, index) => (
          <div
            key={`item-${index + 1}`}
            className="relative flex h-full cursor-pointer items-center justify-between p-5 text-lg font-normal [line-height:1] text-[#cbf3f0] md:text-26"
            onMouseEnter={() => handleFocus(index, false)}
            onMouseLeave={() => handleFocus(0, false)}
          >
            <span className="text-2xs leading-[1] font-normal md:text-sm">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{eachItem.title}</span>
          </div>
        ))}
      </div>
    </>
  );
}
