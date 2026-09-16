"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { techCategories } from "@/data/technologies";
import { cn } from "@/lib/utils";

export function Engineering() {
  const [active, setActive] = useState<string | null>(null);
  const activeItem = techCategories
    .flatMap((category) => category.items.map((item) => ({ ...item, category: category.title })))
    .find((item) => item.name === active);

  return (
    <section id="engineering" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="05 — Engineering"
          title="Engineering"
          description="Technical depth across backend, data, frontend, distributed systems, DevOps and security."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="space-y-8">
            {techCategories.map((category) => (
              <div key={category.id}>
                <h3 className="font-mono text-xs tracking-[0.18em] text-muted uppercase">
                  {category.title}
                </h3>
                <div className="mt-3 flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible">
                  {category.items.map((item) => {
                    const isActive = active === item.name;
                    return (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() => setActive(isActive ? null : item.name)}
                        onMouseEnter={() => setActive(item.name)}
                        className={cn(
                          "shrink-0 rounded-md border px-3 py-1.5 font-mono text-xs transition-colors",
                          isActive
                            ? "border-accent bg-accent-soft text-accent"
                            : "border-border bg-surface text-muted hover:border-accent/40 hover:text-foreground",
                        )}
                      >
                        {item.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <aside className="h-fit rounded-xl border border-border bg-surface p-5 sm:sticky sm:top-24">
            <p className="font-mono text-[11px] tracking-[0.18em] text-accent uppercase">
              Stack detail
            </p>
            {activeItem ? (
              <div className="mt-4">
                <h4 className="text-xl font-semibold text-foreground">{activeItem.name}</h4>
                <p className="mt-1 font-mono text-xs text-muted">{activeItem.category}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {activeItem.description}
                </p>
              </div>
            ) : (
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Hover or select a technology to see how it fits into production systems.
              </p>
            )}

            <div className="mt-8 border-t border-border pt-5 font-mono text-[11px] leading-6 text-muted">
              <pre className="overflow-x-auto whitespace-pre">{`FULL-STACK
    │
FRONTEND ── BACKEND
    │          │
 Next.js    NestJS
 React      REST / GraphQL
            WebSocket / gRPC
              │
     DATABASE ── INFRA
 PostgreSQL     Docker
 Drizzle ORM    K8s / CI
 MongoDB/Redis  AWS`}</pre>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
