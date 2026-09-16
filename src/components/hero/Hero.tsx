"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { siteConfig, socialLinks } from "@/data/social";

const codeLines = [
  "@Injectable()",
  "export class UserService {",
  "  constructor(private readonly db: Db) {}",
  "  async findById(id: string) {",
  "    return this.db.users.findUnique({ id });",
  "  }",
  "}",
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative isolate min-h-[min(92vh,880px)] overflow-hidden border-b border-border"
    >
      {/* Full-bleed coffee & code background */}
      <Image
        src="/images/coffee-code-hero-v2.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[50%_42%] scale-105"
        aria-hidden="true"
      />

      {/* Silver / purple readability overlays */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(12,12,16,0.88) 0%, rgba(12,12,16,0.72) 34%, rgba(12,12,16,0.35) 58%, rgba(18,14,28,0.45) 100%), radial-gradient(ellipse 50% 45% at 70% 40%, rgba(180,168,255,0.16), transparent 60%)",
        }}
      />

      {/* Animated coffee steam — positioned over mug area */}
      {!reduceMotion ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[42%] left-[28%] h-40 w-24 sm:left-[32%] md:left-[34%] lg:left-[36%]"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="absolute bottom-0 left-1/2 h-28 w-8 -translate-x-1/2 rounded-full bg-gradient-to-t from-accent/35 via-silver/25 to-transparent blur-md"
              style={{ left: `${30 + i * 18}%` }}
              animate={{
                y: [0, -56, -90],
                opacity: [0, 0.7, 0],
                scaleX: [0.7, 1.1, 1.4],
                x: [0, i % 2 === 0 ? 10 : -12, i % 2 === 0 ? -6 : 8],
              }}
              transition={{
                duration: 3.2 + i * 0.45,
                repeat: Infinity,
                ease: "easeOut",
                delay: i * 0.7,
              }}
            />
          ))}
        </div>
      ) : null}

      {/* Animated code glow on laptop screen area */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[34%] right-[8%] hidden w-[min(38%,420px)] overflow-hidden rounded-md border border-accent/20 bg-[#0d0d14]/55 p-3 font-mono text-[10px] leading-5 text-silver/80 shadow-[0_0_40px_rgba(180,168,255,0.25)] backdrop-blur-[2px] sm:block md:right-[10%] md:top-[32%] md:text-[11px] lg:right-[12%]"
      >
        <div className="mb-2 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent/80" />
          <span className="h-1.5 w-1.5 rounded-full bg-silver/50" />
          <span className="h-1.5 w-1.5 rounded-full bg-silver/30" />
          <span className="ml-2 tracking-wide text-silver/50 uppercase">
            user.service.ts
          </span>
        </div>
        <div className="relative h-[7.5rem] overflow-hidden">
          <motion.div
            animate={
              reduceMotion
                ? undefined
                : { y: ["0%", "-45%"] }
            }
            transition={
              reduceMotion
                ? undefined
                : { duration: 8, repeat: Infinity, ease: "linear" }
            }
          >
            {[...codeLines, ...codeLines].map((line, index) => (
              <p key={`${line}-${index}`} className="whitespace-nowrap">
                <span className="mr-2 text-accent/70">
                  {String((index % codeLines.length) + 1).padStart(2, "0")}
                </span>
                <span className="text-silver-bright/85">{line}</span>
              </p>
            ))}
          </motion.div>
          {!reduceMotion ? (
            <motion.div
              className="absolute inset-x-0 h-8 bg-gradient-to-b from-accent/20 to-transparent"
              animate={{ top: ["0%", "85%", "0%"] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />
          ) : null}
        </div>
      </div>

      {/* Hero copy */}
      <div className="relative mx-auto flex min-h-[min(92vh,880px)] max-w-6xl items-center px-5 py-24 sm:px-8 lg:py-28">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-xl"
        >
          <p className="font-mono text-xs tracking-[0.22em] text-accent uppercase">
            {siteConfig.name}
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
            Backend-focused
            <br />
            Full-Stack Engineer
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-silver-bright/85 sm:text-xl">
            {siteConfig.statement}
          </p>
          <p className="mt-4 font-mono text-xs tracking-[0.18em] text-silver/70 uppercase">
            Scalable systems · Clean code
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#work">View Projects</Button>
            <Button href={socialLinks.cv.href} variant="secondary">
              Download CV
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
