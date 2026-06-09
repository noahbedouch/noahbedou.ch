import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/noahbedouch",
    target: "_blank",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.605-3.37-1.344-3.37-1.344-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.748-1.027 2.748-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.337 4.695-4.566 4.943.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/noahbedouch/",
    target: "_blank",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.01 2.01 0 0 0 3.25 5c0 1.11.89 2 2 2a2 2 0 1 0 0-4ZM20.75 12.53c0-3.09-1.65-4.53-3.86-4.53-1.78 0-2.58.98-3.03 1.67V8.5h-3.38c.04.78 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.12-.92.27-.68.88-1.39 1.92-1.39 1.36 0 1.9 1.04 1.9 2.56V20h3.38v-7.47Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:noahbedouch@gmail.com",
    target: "_blank",
    icon: (
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
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
];

export function Hero() {
  return (
    <section className="flex min-h-[90vh] items-center px-6 py-20 lg:px-12">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 space-y-6 lg:order-1">
            <h1 className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Hi, I&apos;m <span className="text-[#84DCC6]">Noah Bedouch</span>
            </h1>

            <p className="max-w-xl text-[#95A3B3] text-lg leading-relaxed">
              I&apos;m an incoming Freshman at{" "}
              <span className="font-bold text-[#84DCC6]">
                Stanford University
              </span>
              , pursuing my{" "}
              <span className="font-bold text-[#84DCC6]">
                B.S. in Computer Science
              </span>
              .
            </p>

            <p className="max-w-xl text-[#95A3B3] text-lg leading-relaxed">
              Outside of programming, you might find me performing onstage in
              musicals, playing a variety of instruments, or exploring whatever
              hobby has piqued my interest this week.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="#projects"
                className="group inline-flex items-center rounded-lg bg-[#84DCC6] px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-white"
              >
                View My Work
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
              >
                Get In Touch
              </Link>
            </div>

            <div className="flex gap-4 pt-6">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.target}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:bg-white/10 hover:text-[#84DCC6]"
                  aria-label={link.label}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl opacity-50 blur-2xl"
                style={{
                  background:
                    "linear-gradient(to right, rgba(75,78,109,0.4), rgba(132,220,198,0.4))",
                }}
              />
              <div className="relative overflow-hidden rounded-2xl border-4 border-background shadow-2xl">
                <Image
                  src="/noah.jpg"
                  alt="Noah Bedouch"
                  width={1080}
                  height={1080}
                  className="aspect-square w-full object-cover object-[100%_center]"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
