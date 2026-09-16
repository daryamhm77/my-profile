import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  ariaLabel?: string;
};

const variants = {
  primary:
    "bg-accent text-[#0f0f14] dark:text-[#0f0f14] hover:bg-violet-400 dark:hover:bg-violet-300 border border-transparent shadow-[0_0_20px_rgba(180,168,255,0.2)]",
  secondary:
    "border border-silver/50 bg-surface/50 text-silver-bright hover:border-silver hover:text-foreground backdrop-blur-sm",
  ghost: "text-muted hover:text-foreground",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
  onClick,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition-colors",
    variants[variant],
    className,
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
