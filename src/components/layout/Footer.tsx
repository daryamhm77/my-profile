import { siteConfig, socialLinks } from "@/data/social";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
            {siteConfig.name}
          </p>
          <p className="mt-2 text-sm text-muted">{siteConfig.title}</p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-muted">
          <a href={socialLinks.github.href} className="hover:text-foreground" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={socialLinks.linkedin.href} className="hover:text-foreground" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={socialLinks.telegram.href} className="hover:text-foreground" target="_blank" rel="noopener noreferrer">
            Telegram
          </a>
          <a href={socialLinks.email.href} className="hover:text-foreground">
            Email
          </a>
        </div>

        <p className="text-sm text-muted">© 2026 {siteConfig.name}</p>
      </div>
    </footer>
  );
}
