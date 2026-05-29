import Image from "next/image";
import Link from "next/link";
import { MotionProps } from "motion/react";
import * as motion from "motion/react-client";

type LogoFullProps = MotionProps & {
  className?: string;
  /** Sync logo image treatment with navbar scroll variants (drop shadow vs scrolled). */
  logoMotion?: boolean;
};

const logoImageVariants = {
  initial: {
    filter: "drop-shadow(0 2px 10px rgba(0, 0, 0, 0.45))",
  },
  animate: {
    filter: "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.12))",
  },
};

export default function LogoFull({
  className,
  logoMotion,
  animate,
  ...rest
}: LogoFullProps) {
  const imageWrapClass =
    "relative size-9 shrink-0 md:size-11 [&>img]:object-contain";

  const mark = (
    <Image
      src="/logo.png"
      alt=""
      aria-hidden
      fill
      className="object-contain"
      sizes="(max-width: 768px) 36px, 44px"
      priority
    />
  );

  return (
    <Link
      href="/"
      className="inline-flex max-w-full no-underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a227]"
    >
      <motion.div
        animate={animate}
        {...rest}
        className={`${className} inline-flex max-w-full items-center gap-2 font-bold text-lg tracking-wide whitespace-nowrap uppercase md:gap-3 md:text-xl`}
      >
        {logoMotion ? (
          <motion.div
            animate={animate}
            variants={logoImageVariants}
            className={imageWrapClass}
          >
            {mark}
          </motion.div>
        ) : (
          <div className={imageWrapClass}>{mark}</div>
        )}
        <span className="min-w-0 leading-none">Daily Life Navigators</span>
      </motion.div>
    </Link>
  );
}
