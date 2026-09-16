"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { navLinks, siteConfig, socialLinks } from "@/data/social";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors",
        scrolled
          ? "border-border bg-surface/80 backdrop-blur-md"
          : "border-transparent bg-transparent backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="#top"
          className="inline-flex items-center gap-2.5 text-foreground"
        >
          <img
            src="/images/darya-mark.svg"
            alt=""
            width={22}
            height={22}
            className="h-[22px] w-[22px] shrink-0"
            aria-hidden="true"
          />
          <span className="font-mono text-sm font-semibold tracking-[0.18em]">
            {siteConfig.shortName}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button href={socialLinks.github.href} variant="ghost" external className="px-2 py-1.5">
            GitHub
          </Button>
          <Button href={socialLinks.linkedin.href} variant="ghost" external className="px-2 py-1.5">
            LinkedIn
          </Button>
          <Button href={socialLinks.cv.href} variant="secondary" className="ml-1">
            CV
          </Button>
          <ThemeToggle className="ml-1" />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span
                className={cn(
                  "block h-px w-4 bg-current transition-transform",
                  open && "translate-y-[3.5px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "block h-px w-4 bg-current transition-transform",
                  open && "-translate-y-[3.5px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "border-t border-border bg-surface/95 backdrop-blur-md md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-3 text-base text-foreground hover:bg-surface"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 flex flex-wrap gap-2 border-t border-border pt-4">
            <Button href={socialLinks.github.href} variant="secondary" external>
              GitHub
            </Button>
            <Button href={socialLinks.linkedin.href} variant="secondary" external>
              LinkedIn
            </Button>
            <Button href={socialLinks.cv.href} variant="primary">
              CV
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
