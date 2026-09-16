"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TechBadge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";

export function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="08 — Experience"
          title="Experience"
          description="Backend engineering on distributed systems, real-time platforms, IoT and commerce infrastructure."
        />

        <ol className="mt-12 space-y-0 border-l border-border">
          {experience.map((item, index) => (
            <motion.li
              key={item.id}
              initial={reduceMotion ? false : { opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: reduceMotion ? 0 : index * 0.05 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full border border-accent bg-surface"
              />
              <p className="font-mono text-xs tracking-[0.14em] text-accent uppercase">
                {item.period}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-foreground">
                {item.company}
              </h3>
              <p className="mt-1 text-sm text-foreground">{item.role}</p>
              <p className="mt-1 font-mono text-xs text-muted">{item.location}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.summary}</p>
              <ul className="mt-4 space-y-2">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="text-sm leading-relaxed text-muted">
                    <span className="mr-2 text-accent">▸</span>
                    {highlight}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <TechBadge key={tech}>{tech}</TechBadge>
                ))}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
