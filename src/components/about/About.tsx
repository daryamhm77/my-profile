import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutCopy } from "@/data/notes";

export function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading eyebrow="10 — About" title="About" />
        <div className="mt-8 max-w-2xl space-y-4">
          {aboutCopy.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-muted sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
