"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Badge, TechBadge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: reduceMotion ? 0 : index * 0.06 }}
      className={cn(
        "group flex flex-col border border-border bg-surface p-6 backdrop-blur-sm transition-colors hover:border-accent/40 sm:p-7",
        index === 0 && "sm:col-span-2",
      )}
    >
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="muted">{project.category}</Badge>
        {project.private ? <Badge tone="accent">Private Project</Badge> : null}
      </div>

      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
        {project.title}
      </h3>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
        {project.description}
      </p>

      <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
        <div>
          <dt className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
            Role
          </dt>
          <dd className="mt-1 text-foreground">{project.role}</dd>
        </div>
        <div>
          <dt className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
            Architecture
          </dt>
          <dd className="mt-1 text-foreground">{project.architecture}</dd>
        </div>
      </dl>

      <div className="mt-5">
        <p className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
          Technologies
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.technologies.slice(0, index === 0 ? 8 : 6).map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>
      </div>

      <div className="mt-auto pt-6">
        {project.private ? (
          <span className="text-sm text-muted">Source unavailable · Private engagement</span>
        ) : project.href ? (
          <Button href={project.href} variant="secondary" external>
            View on GitHub
          </Button>
        ) : (
          <Button href="#contact" variant="secondary">
            View Project
          </Button>
        )}
      </div>
    </motion.article>
  );
}
