"use client";
import { useState } from "react";

interface SelectClientProps {
  options: string[];
  defaultSelection: string;
}

export default function SelectClient({
  defaultSelection,
  options,
}: SelectClientProps) {
  const [selectedOption, setSelectedOption] =
    useState<string>(defaultSelection);
  return (
    <div className="cursor-pointer border-b border-[#c9a227]/40 bg-[#1e2a4a] px-4 py-3 md:px-6">
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        className="cursor-pointer bg-[#1e2a4a] text-xs text-[#f5e6c8] outline-none md:text-base"
      >
        {options.map((option, i) => (
          <option key={option + i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
