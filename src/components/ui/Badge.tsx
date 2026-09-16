import { cn } from "@/lib/utils";

export function Badge({
  children,
  tone = "default",
  className,
}: {
  children: React.ReactNode;
  tone?: "default" | "accent" | "muted";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-[11px] tracking-wide uppercase",
        tone === "default" && "border-border text-muted",
        tone === "accent" && "border-accent/40 bg-accent-soft text-accent",
        tone === "muted" && "border-transparent bg-surface-elevated text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-muted">
      {children}
    </span>
  );
}
