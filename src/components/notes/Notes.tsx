import { SectionHeading } from "@/components/ui/SectionHeading";
import { notes } from "@/data/notes";

export function Notes() {
  return (
    <section id="notes" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="09 — Engineering Notes"
          title="Engineering Notes"
          description="Short technical writing on architecture, caching, messaging and system design."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {notes.map((note) => (
            <article
              key={note.id}
              className="border border-border bg-surface p-5 transition-colors hover:border-accent/40 sm:p-6"
            >
              <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
                <time dateTime={note.date}>
                  {new Date(note.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
                <span aria-hidden="true">·</span>
                <span>{note.readingTime}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{note.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{note.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
