"use client";
import Image from "next/image";
import Link from "next/link";
import Picture1 from "@/public/elementis-stories/book.png";
import Picture2 from "@/public/elementis-stories/mental.avif";
import ParallaxContainer from "@/components/Client/ParallaxContainer";
import { useIsMobile } from "@/app/providers";
import { AWARENESS_AMPLIFIED_BOOK, BOOK_STORES } from "@/lib/book/config";

export default function ElementisStoryClient() {
  const isMobile = useIsMobile();
  if (typeof isMobile !== "boolean") {
    return null;
  }
  return (
    <>
      {isMobile ? (
        <div className="max-md:mt-8">
          <div
            className="-mx-4 flex cursor-grab gap-4 overflow-x-scroll px-4 [&>*]:shrink-0"
            style={{ scrollbarWidth: "none" }}
          >
            <Image
              src={Picture2}
              alt="Mental health and wellbeing support"
              className="h-auto w-[85%] snap-center"
            />
            <Link
              href={BOOK_STORES.hardCopy.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-[85%] snap-center"
            >
              <Image
                src={Picture1}
                alt={AWARENESS_AMPLIFIED_BOOK.coverAlt}
                className="h-auto w-full"
              />
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="col-span-3 row-span-2">
            <ParallaxContainer parallaxAmount={10}>
              <Link
                href={BOOK_STORES.hardCopy.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-opacity hover:opacity-90"
              >
                <Image
                  src={Picture1}
                  alt={AWARENESS_AMPLIFIED_BOOK.coverAlt}
                  className="h-auto w-full"
                />
              </Link>
            </ParallaxContainer>
          </div>
          <div className="col-span-6 col-start-6 row-start-2">
            <ParallaxContainer parallaxAmount={25}>
              <Image
                src={Picture2}
                alt="Mental health and wellbeing support"
                className="h-auto w-full"
              />
            </ParallaxContainer>
          </div>
        </>
      )}
    </>
  );
}
