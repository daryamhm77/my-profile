import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { socialLinks } from "@/data/social";

export function Contact() {
  return (
    <section id="contact" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="11 — Contact"
          title="Let's Build Something"
          description="Have a product, backend system, or engineering challenge in mind?"
        />

        <div className="mt-10 flex flex-wrap gap-3">
          <Button href={socialLinks.email.href}>Email</Button>
          <Button href={socialLinks.linkedin.href} variant="secondary" external>
            LinkedIn
          </Button>
          <Button href={socialLinks.github.href} variant="secondary" external>
            GitHub
          </Button>
          <Button href={socialLinks.telegram.href} variant="secondary" external>
            Telegram
          </Button>
          <Button href={socialLinks.cv.href} variant="secondary">
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
}
