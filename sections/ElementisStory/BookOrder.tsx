import Link from "next/link";
import {
  AWARENESS_AMPLIFIED_BOOK,
  BOOK_STORES,
} from "@/lib/book/config";

export default function BookOrder() {
  return (
    <div
      id="book"
      className="scroll-mt-24 max-md:mt-16 md:col-span-11 md:col-start-1 md:row-start-3 md:mt-8"
    >
      <p className="mb-3 text-xs uppercase tracking-widest text-[#c9a227]">
        Order the Book
      </p>
      <h3 className="text-2xl font-light md:text-3xl">
        {AWARENESS_AMPLIFIED_BOOK.title}:{" "}
        <span className="text-[#c9b89a]">{AWARENESS_AMPLIFIED_BOOK.subtitle}</span>
      </h3>
      <p className="mt-1 text-sm text-[#c9a227]">by {AWARENESS_AMPLIFIED_BOOK.author}</p>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#c9b89a] md:text-base">
        {AWARENESS_AMPLIFIED_BOOK.description}
      </p>
      <div className="mt-6 flex flex-wrap gap-4">
        <Link
          href={BOOK_STORES.hardCopy.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#c9a227] px-6 py-3 text-sm font-medium text-[#0d1117] transition-opacity hover:opacity-90"
        >
          {BOOK_STORES.hardCopy.label}
          <span className="text-xs font-normal opacity-80">— {BOOK_STORES.hardCopy.vendor}</span>
        </Link>
        <Link
          href={BOOK_STORES.eCopy.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-[#c9a227]/40 px-6 py-3 text-sm font-medium text-[#c9a227] transition-colors hover:border-[#c9a227]"
        >
          {BOOK_STORES.eCopy.label}
          <span className="text-xs font-normal opacity-80">— {BOOK_STORES.eCopy.vendor}</span>
        </Link>
      </div>
    </div>
  );
}
