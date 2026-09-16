export const siteConfig = {
  name: "Darya Mohammadi",
  shortName: "DARYA",
  title: "Backend-focused Full-Stack Engineer",
  statement: "I build scalable web systems, not just websites.",
  description:
    "Portfolio of Darya Mohammadi, a Backend-focused Full-Stack Engineer building scalable web systems with TypeScript, NestJS, Next.js, databases and modern infrastructure.",
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://daryamohammadi.dev"
  ).replace(/\/$/, ""),
};

export const socialLinks = {
  github: {
    label: "GitHub",
    href: "https://github.com/daryamhm77",
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/darya-mohammadi7",
  },
  email: {
    label: "Email",
    href: "mailto:daryaprm88@gmail.com",
  },
  telegram: {
    label: "Telegram",
    href: "https://t.me/mhm7D8",
  },
  cv: {
    label: "Download CV",
    href: "/cv.pdf",
  },
} as const;

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Public", href: "#public-projects" },
  { label: "Engineering", href: "#engineering" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
] as const;
