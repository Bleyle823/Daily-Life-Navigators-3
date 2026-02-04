import { MotionProps } from "motion/react";
import * as motion from "motion/react-client";
type LogoFullProps = MotionProps & {
  className?: string;
};
export default function LogoFull(props: LogoFullProps) {
  return (
    <motion.div
      {...props}
      className={`${props.className} font-bold text-lg md:text-xl tracking-wide uppercase whitespace-nowrap`}
    >
      Daily Life Navigators
    </motion.div>
  );
}
