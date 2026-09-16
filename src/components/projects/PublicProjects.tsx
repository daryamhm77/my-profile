"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TechBadge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { publicProjects } from "@/data/public-projects";

export function PublicProjects() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="public-projects" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="04 — Public Projects"
          title="Public Projects"
          description="Deployed full-stack and frontend applications available to explore."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {publicProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.4,
                delay: reduceMotion ? 0 : index * 0.04,
              }}
              className="flex flex-col border border-border bg-surface p-5 backdrop-blur-sm transition-colors hover:border-accent/40 sm:p-6"
            >
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <TechBadge key={tech}>{tech}</TechBadge>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button href={project.href} variant="secondary" external>
                  View Live
                </Button>
                <Button href={project.github} variant="secondary" external>
                  GitHub
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
