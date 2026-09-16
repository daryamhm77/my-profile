"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { codeSnippets } from "@/data/code-snippets";
import { codePhilosophy } from "@/data/technologies";
import { cn } from "@/lib/utils";

export function CodeSection() {
  const [activeId, setActiveId] = useState(codeSnippets[0]?.id ?? "");
  const active = codeSnippets.find((snippet) => snippet.id === activeId) ?? codeSnippets[0];

  return (
    <section id="code" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="07 — Code"
          title="Code"
          description="Short, production-oriented TypeScript examples — typed, readable and boundary-aware."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.35fr]">
          <div className="space-y-2">
            {codeSnippets.map((snippet) => (
              <button
                key={snippet.id}
                type="button"
                onClick={() => setActiveId(snippet.id)}
                className={cn(
                  "flex w-full flex-col rounded-lg border px-4 py-3 text-left transition-colors",
                  activeId === snippet.id
                    ? "border-accent bg-accent-soft"
                    : "border-border bg-surface hover:border-accent/40",
                )}
              >
                <span className="text-sm font-medium text-foreground">{snippet.title}</span>
                <span className="mt-1 font-mono text-xs text-muted">{snippet.filename}</span>
              </button>
            ))}

            <div className="mt-6 rounded-lg border border-border bg-surface p-4">
              <p className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                I care about
              </p>
              <ul className="mt-3 grid grid-cols-2 gap-2">
                {codePhilosophy.map((item) => (
                  <li key={item} className="text-sm text-muted">
                    <span className="mr-2 text-accent">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-border bg-[#140f1f]">
            <div className="flex items-center justify-between border-b border-violet-400/15 px-4 py-3">
              <p className="font-mono text-xs text-silver">{active?.filename}</p>
              <p className="font-mono text-[11px] tracking-wide text-violet-300/60 uppercase">
                {active?.language}
              </p>
            </div>
            <pre className="overflow-x-auto p-4 text-[13px] leading-6 text-[#e8e6ef] sm:p-5">
              <code>{active?.code}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
