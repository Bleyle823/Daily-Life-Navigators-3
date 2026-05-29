import { ComponentProps } from "react";
import cn from "@/utils/cn";

type InputProps = ComponentProps<"input"> & {
  className?: string;
};
export default function Input({ className, ...rest }: InputProps) {
  return (
    <input
      {...rest}
      className={cn(
        "w-full border-b border-[#c9a227]/40 bg-[#1e2a4a] px-4 py-3 text-xs text-[#f5e6c8] outline-none placeholder:text-[#c9b89a]/50 md:px-6 md:text-base",
        className,
      )}
    />
  );
}
