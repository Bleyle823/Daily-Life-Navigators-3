"use client";
import cn from "@/utils/cn";
import React, { ReactNode, useState } from "react";
import CheckBoxIcon from "../SVGComponents/CheckBoxIcon";

interface CheckboxProps {
  children: ReactNode;
  className?: string;
  required?: boolean;
}

export default function Checkbox({
  children,
  className,
  required = false,
}: CheckboxProps) {
  const [checked, setChecked] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };
  return (
    <label
      className={cn(
        "flex cursor-pointer items-center gap-2 text-[#f5e6c8]",
        className,
      )}
    >
      <input
        type="checkbox"
        className="hidden"
        onChange={handleChange}
        required={required}
      />
      <span
        className={cn(
          "grid size-3-5 place-items-center border border-[#c9a227]",
          checked && "bg-[#c9a227]",
        )}
      >
        {checked && <CheckBoxIcon className="h-auto w-1-75" />}
      </span>
      <div className="text-sm [line-height:1] md:text-base">{children}</div>
    </label>
  );
}
