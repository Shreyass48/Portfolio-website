"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  githubLink: string;
  liveLink?: string;
  tags: string[];
  className?: string;
}

export function ProjectCard({
  title,
  description,
  githubLink,
  liveLink,
  tags,
  className,
}: ProjectCardProps) {
  return (
    <article
      className={cn(
        "block p-5 md:p-6 border-2 border-border bg-background shadow-brutal-sm",
        "transition-all duration-200 hover:shadow-brutal hover:-translate-y-1 hover:border-accent/50 group",
        className,
      )}
    >
      <h3 className="font-heading font-bold text-lg md:text-xl text-foreground group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-muted text-sm md:text-base font-body">
        {description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
        {tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs px-2 py-1 border border-border bg-foreground/5 text-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-3" aria-label={`${title} links`}>
        <Link
          href={githubLink}
          target={githubLink.startsWith("http") ? "_blank" : undefined}
          rel={
            githubLink.startsWith("http") ? "noopener noreferrer" : undefined
          }
          className="inline-flex min-h-[44px] items-center border-2 border-border px-4 py-2 font-mono text-xs text-foreground transition-all duration-150 hover:-translate-y-0.5 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          GitHub
        </Link>

        {liveLink ? (
          <Link
            href={liveLink}
            target={liveLink.startsWith("http") ? "_blank" : undefined}
            rel={
              liveLink.startsWith("http") ? "noopener noreferrer" : undefined
            }
            className="inline-flex min-h-[44px] items-center border-2 border-border px-4 py-2 font-mono text-xs text-foreground transition-all duration-150 hover:-translate-y-0.5 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Live
          </Link>
        ) : null}
      </div>
    </article>
  );
}
