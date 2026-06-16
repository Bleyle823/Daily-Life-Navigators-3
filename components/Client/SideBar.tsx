"use client";

import { Dispatch, SetStateAction } from "react";
import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
import CustomLink from "@/components/Server/CustomLink";
import CloseIcon from "@/components/SVGComponents/CloseIcon";
import { useImageReveal } from "@/hooks/useImageReveal";

interface LinkItem {
  href: string;
  link: string;
  src?: StaticImageData;
}

interface SideBarProps {
  setOpenSideBar: Dispatch<SetStateAction<boolean>>;
}
export default function SideBar({ setOpenSideBar }: SideBarProps) {
  const { imgContainerRef, handleFocus } = useImageReveal();
  const data: LinkItem[] = [
    { href: "/about", link: "About Us" },
    { href: "/services", link: "Services" },
    { href: "/#contact", link: "Contact" },
  ];

  const temp = {
    initialDelay: 0.8 * 0.4,
    delay: 0.05,
    duration: 0.5,
  };

  const variants = {
    initial: {
      y: "60%",
      opacity: 0,
    },
    animate: {
      y: "0%",
      opacity: 1,
    },
  };
  return (
    <motion.div
      key="Side-bar"
      initial={{ backgroundColor: "rgba(0,0,0,0)" }}
      animate={{
        backgroundColor: "rgba(0,0,0,0.35)",
        transition: {
          duration: 0.8,
          ease: [0.24, 0.43, 0.15, 0.97],
        },
      }}
      exit={{
        clipPath: "inset(0% 0% 100% 0%)",
        transition: {
          delay: 0.1,
          duration: 0.8,
          ease: [0.24, 0.43, 0.15, 0.97],
        },
      }}
      className="fixed top-0 z-[200] w-full"
    >
      <motion.div
        className="flex h-screen bg-[#0d1117]"
        initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{
          duration: 0.8,
          ease: [0.24, 0.43, 0.15, 0.97],
        }}
      >
        <motion.div
          initial={{
            clipPath: "inset(100% 0% 0% 0%)",
          }}
          animate={{
            clipPath: "inset(0% 0% 0% 0%)",
            transition: {
              delay: 0.1,
              ease: [0.24, 0.43, 0.15, 0.97],
              duration: 0.8,
            },
          }}
          exit={{
            clipPath: "inset(0% 0% 100% 0%)",
            transition: {
              ease: [0.24, 0.43, 0.15, 0.97],
              duration: 0.8,
            },
          }}
          className="relative flex-[0.9]"
          ref={imgContainerRef}
        >
          {data.length > 0 && data.map(({ src, link }, i) => src ? (
            <motion.div
              key={link}
              data-index={i}
              style={{ zIndex: -i }}
              className="absolute inset-0"
            >
              <Image src={src} alt={link} fill style={{ objectFit: "cover" }} />
            </motion.div>
          ) : null)}
        </motion.div>
        <div className="flex-1 pt-7000svh pr-16 pb-3500svh pl-48">
          {data.length > 0 && (
            <>
              <span className="text-1800svh text-[#c9a227]/70">Navigate</span>
              <nav
                aria-label="pages"
                className="mt-6400svh mb-8000svh flex flex-col gap-y-2"
              >
                {data.map((eachColData, i) => (
                  <CustomLink
                    {...temp}
                    key={"link-" + (i + 1)}
                    href={eachColData.href}
                    sNo={i + 1}
                    handleFocus={handleFocus}
                  >
                    {eachColData.link}
                  </CustomLink>
                ))}
              </nav>
            </>
          )}
          <motion.div
            className="space-y-5600svh"
            initial="initial"
            animate="animate"
            variants={{
              animate: {
                transition: {
                  delayChildren: temp.initialDelay + 5 * temp.delay,
                  staggerChildren: temp.delay,
                  duration: temp.duration,
                },
              },
            }}
          >
            <motion.div
              variants={variants}
              transition={{
                duration: temp.duration,
                ease: [0.24, 0.43, 0.15, 0.97],
              }}
              id="contact-us"
              className="space-y-2400svh text-1800svh text-[#c9a227]"
            >
              <div className="text-[#c9a227]/70">Contact Us</div>
              <div className="flex items-center [&_.animated-underline]:h-[2px] [&_.animated-underline]:bg-[#c9a227]">
                <span>info.dailylifenavigators@gmail.com</span>
                <div className="mx-5">|</div>
                <span>+254-757-011-751</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <motion.button
          initial="initial"
          whileHover="whileHover"
          className="absolute top-8 right-16 cursor-pointer"
          // p-2000svh
          onClick={() => setOpenSideBar((prev) => !prev)}
        >
          <CloseIcon className="size-4 [&_path]:[stroke-width:1px]" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
