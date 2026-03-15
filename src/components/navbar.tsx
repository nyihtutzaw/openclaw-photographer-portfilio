"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="flex flex-col gap-4 rounded-full border border-white/70 bg-white/70 px-6 py-4 shadow-sm backdrop-blur transition-colors md:flex-row md:items-center md:justify-between dark:border-stone-700/80 dark:bg-stone-900/75">
      <div>
        <Link
          href="/"
          className="text-lg font-semibold tracking-wide text-stone-950 transition hover:text-stone-700 dark:text-white dark:hover:text-stone-300"
        >
          Aria Noor Studio
        </Link>
        <p className="text-sm text-stone-600 dark:text-stone-300">
          Personal portfolio and showcase for a modern photographer.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <nav className="flex flex-wrap gap-5 text-sm font-medium text-stone-700 dark:text-stone-300">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`transition hover:text-stone-950 dark:hover:text-white ${
                pathname === href
                  ? "text-stone-950 underline underline-offset-4 dark:text-white"
                  : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
