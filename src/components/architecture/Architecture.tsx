"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  architecturePrinciple,
  architecturePrinciples,
  architectureProtocols,
  architectureZones,
} from "@/data/architecture";
import { cn } from "@/lib/utils";

export function Architecture() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="architecture" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="06 — Architecture"
          title="How I Build Systems"
          description={architecturePrinciple}
        />

        <div className="mt-12 overflow-hidden rounded-xl border border-border bg-surface">
          <div className="flex items-center justify-between border-b border-border px-5 py-3 sm:px-6">
            <p className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
              Reference architecture
            </p>
            <p className="hidden font-mono text-[11px] text-muted sm:block">
              Presentation → Edge → Domain → Data → Platform
            </p>
          </div>

          <div className="grid gap-px bg-border md:grid-cols-2 xl:grid-cols-3">
            {architectureZones.map((zone, index) => (
              <motion.div
                key={zone.id}
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.4,
                  delay: reduceMotion ? 0 : index * 0.05,
                }}
                className="bg-surface p-5 sm:p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.16em] text-accent uppercase">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-foreground">
                      {zone.label}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{zone.description}</p>
                  </div>
                  {index < architectureZones.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="mt-1 hidden font-mono text-xs text-accent/70 xl:inline"
                    >
                      →
                    </span>
                  ) : null}
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {zone.nodes.map((node) => (
                    <li
                      key={node}
                      className={cn(
                        "rounded-md border border-border bg-surface-elevated px-2.5 py-1 font-mono text-xs text-foreground",
                        (node === "GraphQL" ||
                          node === "WebSocket" ||
                          node === "TypeORM" ||
                          node === "Socket fan-out") &&
                          "border-accent/35 text-accent",
                      )}
                    >
                      {node}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
            <p className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
              Communication model
            </p>
            <p className="mt-2 max-w-xl text-sm text-muted">
              Protocol choice is part of the design. Each channel has a job.
            </p>

            <ul className="mt-6 divide-y divide-border">
              {architectureProtocols.map((protocol, index) => (
                <motion.li
                  key={protocol.id}
                  initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: reduceMotion ? 0 : index * 0.04,
                  }}
                  className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:gap-6"
                >
                  <span className="w-28 shrink-0 font-mono text-sm text-accent">
                    {protocol.name}
                  </span>
                  <span className="text-sm leading-relaxed text-muted">
                    {protocol.useWhen}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
            <p className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
              Design principles
            </p>
            <ul className="mt-6 space-y-5">
              {architecturePrinciples.map((principle) => (
                <li key={principle.id}>
                  <h4 className="text-sm font-semibold text-foreground">
                    {principle.title}
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {principle.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
