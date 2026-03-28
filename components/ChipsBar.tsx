"use client";

import Link from "next/link";

interface Props {
  active: string;
  categories: string[];
}

export function ChipsBar({ active, categories }: Props) {
  return (
    <nav className="chips-bar" aria-label="Video categories">
      {categories.map((cat) => (
        <Link
          key={cat}
          href={cat === "All" ? "/" : `/?cat=${cat}`}
          className={`chip ${active === cat ? "active" : ""}`}
          aria-current={active === cat ? "page" : undefined}
        >
          {cat}
        </Link>
      ))}
    </nav>
  );
}
