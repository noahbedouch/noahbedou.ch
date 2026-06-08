import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
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
                className="group relative text-sm font-bold text-foreground/70 transition-colors hover:text-[#84DCC6]"
              >
                {item.label}
                <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 rounded-full bg-[#84DCC6] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/resume"
              className="group relative hidden overflow-hidden rounded-full border border-[#84DCC6] px-4 py-2 text-sm font-medium md:inline-flex"
            >
              <span className="relative z-10 transition-transform duration-200 group-hover:-translate-y-full">
                Resume
              </span>
              <span className="absolute inset-0 flex translate-y-full items-center justify-center transition-transform duration-200 group-hover:translate-y-0">
                Resume
              </span>
            </Link>

            <button
              type="button"
              aria-label="Open navigation menu"
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
                className="h-5 w-5"
              >
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export { Navbar as Header };
