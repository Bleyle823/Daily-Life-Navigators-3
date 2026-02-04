"use client";
import { motion, MotionValue, useMotionValueEvent } from "motion/react";
import Image, { StaticImageData } from "next/image";
import { CSSProperties, ReactNode, useState } from "react";
import AnimatedMaskText from "@/components/Client/MaskTextClient";
import ClipImageContainer from "@/components/Client/ClipImageContainer";
import SectionTitle from "../Server/SectionTitle";
import cn from "@/utils/cn";
interface ClipImageCardProps {
  scrollYProgress: MotionValue<number>;
  images: StaticImageData[];
  className?: string;
  style?: CSSProperties;
}

interface DataItem {
  title: ReactNode[];
  description: {
    mobile: ReactNode[];
    desktop: ReactNode[];
  };
}

export default function ClipImageCard({
  scrollYProgress,
  images,
  className,
  style,
}: ClipImageCardProps) {
  const [currentState, setCurrentState] = useState(1);
  const data: DataItem[] = [
    {
      title: [<>Research &</>, <>Innovation</>],
      description: {
        mobile: [
          <>Cutting-edge research to advance</>,
          <>mental health care practices.</>,
        ],
        desktop: [
          <>Cutting-edge research to advance mental</>,
          <>health care practices.</>,
        ],
      },
    },
    {
      title: [<>Clinical</>, <>Excellence</>],
      description: {
        mobile: [
          <>Expert diagnosis and personalized</>,
          <>counseling using evidence-based</>,
          <>approaches.</>,
        ],
        desktop: [
          <>Expert diagnosis and personalized counseling</>,
          <>using evidence-based approaches.</>,
        ],
      },
    },
    {
      title: [<>Empowerment</>, <>Iconic Growth</>],
      description: {
        mobile: [
          <>Life coaching and psychoeducation</>,
          <>for holistic personal development.</>,
        ],
        desktop: [
          <>Life coaching and psychoeducation for</>,
          <>holistic personal development.</>,
        ],
      },
    },
    {
      title: [<>Community</>, <>Support</>],
      description: {
        mobile: [
          <>Group therapy and peer support</>,
          <>in safe, nurturing environments.</>,
        ],
        desktop: [
          <>Group therapy and peer support in safe,</>,
          <>nurturing environments.</>,
        ],
      },
    },
    {
      title: [<>Why Choose</>, <>Us</>],
      description: {
        mobile: [
          <>Safe, supportive counseling environment</>,
          <>with experienced psychologists</>,
          <>(Masters & PhD-level).</>,
        ],
        desktop: [
          <>Safe, supportive counseling environment with</>,
          <>experienced psychologists (Masters & PhD-level).</>,
        ],
      },
    },
  ];

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.125) {
      setCurrentState(1);
    } else if (latest <= 0.375) {
      setCurrentState(2);
    } else if (latest <= 0.625) {
      setCurrentState(3);
    } else if (latest <= 0.875) {
      setCurrentState(4);
    } else {
      setCurrentState(5);
    }
  });
  const prependZero = (num: number) => (num < 10 ? `0${num}` : `${num}`);

  return (
    <motion.div
      initial="initial"
      whileInView="inView"
      viewport={{ amount: 0.5, once: true }}
      style={{ ...style }}
      className={cn(
        "relative z-10 flex h-full flex-col items-center justify-between py-[8vh] text-[#cbf3f0] backdrop-brightness-[60%] md:flex-row md:px-16 md:py-[15vh]",
        className,
      )}
    >
      <SectionTitle className="">Core Values</SectionTitle>
      <motion.div
        variants={{
          initial: { y: "50%" },
          inView: { y: "0%" },
        }}
        transition={{
          ease: [0.24, 0.43, 0.15, 0.97],
          duration: 0.8,
        }}
        className="relative z-20 my-[5vh] flex h-[70vh] min-h-fit w-[90%] flex-col items-center gap-8 bg-[#cbf3f0] p-5-75 text-[#2ec4b6] md:h-full md:max-h-172 md:w-full md:max-w-118 md:px-8 md:py-4"
      >
        <div className="flex items-center gap-1 text-2xs md:text-sm">
          <AnimatedMaskText
            state={currentState}
            lines={[<>{prependZero(currentState)}</>]}
            className="[line-height:1]"
          />
          <span className="opacity-60">-</span>
          <span className="opacity-60">{prependZero(images.length)}</span>
        </div>
        <AnimatedMaskText
          state={currentState}
          lines={data[currentState - 1].title}
          className="-space-y-1 text-center text-lg [line-height:1] font-light md:text-28"
        />

        <div className="relative aspect-[1.62] w-full overflow-hidden md:aspect-[1.85]">
          {images.map((eachImage: StaticImageData, index: number) => (
            <ClipImageContainer
              key={"card-image-container-" + (index + 1)}
              index={index}
              scrollYProgress={scrollYProgress}
            >
              <Image
                src={eachImage}
                alt={"card-image-" + (index + 1)}
                className="size-full object-cover"
              />
            </ClipImageContainer>
          ))}
        </div>
        <AnimatedMaskText
          state={currentState}
          lines={data[currentState - 1].description["desktop"]} //change this
          className="text-center text-sm [line-height:1.25] md:text-base"
        />
      </motion.div>
      <span className="text-base [line-height:1] md:text-xl">
        ( Keep Scrolling ){" "}
      </span>
    </motion.div>
  );
}
