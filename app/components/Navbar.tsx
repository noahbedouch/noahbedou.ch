"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "./projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full px-5 sm:px-14">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#84DCC6] font-bold text-black">
              NB
            </div>
            <span className="text-lg font-semibold">Noah Bedouch</span>
          </Link>

          <nav className="hidden gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative text-sm text-[#95A3B3] font-bold transition-colors hover:text-[#84DCC6]"
              >
                {item.label}
                <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 rounded-full bg-[#84DCC6] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/Resume.pdf"
              target="_blank"
              className="group relative hidden h-9 items-center justify-center overflow-hidden rounded-lg border border-[#84DCC6] bg-[#84DCC6] px-4 text-sm font-bold text-black shadow-sm transition-colors duration-200 hover:border-white hover:bg-white md:inline-flex"
            >
              <span className="relative z-10 inline-flex items-center justify-center leading-none transition-transform duration-200 group-hover:translate-y-[160%]">
                Resume
              </span>
              <span className="absolute inset-0 flex items-center justify-center translate-y-[160%] leading-none transition-transform duration-200 group-hover:translate-y-0">
                Resume
              </span>
            </Link>

            <button
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md transition-colors hover:bg-white/10 md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8"
              >
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        <div
          id="mobile-navigation"
          className={`overflow-hidden border-t border-white/10 transition-all duration-300 ease-out md:hidden ${
            isMobileMenuOpen
              ? "max-h-64 translate-y-0 opacity-100"
              : "max-h-0 -translate-y-2 opacity-0"
          }`}
          aria-hidden={!isMobileMenuOpen}
        >
          <nav className="flex flex-col gap-3 py-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-bold text-[#95A3B3] transition-colors hover:bg-white/5 hover:text-[#84DCC6]"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/Resume.pdf"
              target="_blank"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 inline-flex h-9 items-center justify-center rounded-lg border border-[#84DCC6] bg-[#84DCC6] px-4 text-sm font-bold text-black shadow-sm transition-colors duration-200 hover:border-white hover:bg-white"
            >
              Resume
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export { Navbar as Header };
