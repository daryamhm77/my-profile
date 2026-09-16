import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="work" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="03 — Selected Work"
          title="Selected Work"
          description="Real-world systems, backend architecture and full-stack applications."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
