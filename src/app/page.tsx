"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { BrutalistButton } from "@/components/brutalist-button";
import { ProjectCard } from "@/components/project-card";
import { TypingHero } from "@/components/typing-hero";
import { motion } from "framer-motion";

const intro =
  "I build fast, accessible web experiences with React, Next.js, and TypeScript.";

const projects = [
  {
    title: "Billing System - PWA",
    description:
      "Developed a Progressive Web App (PWA) billing system to manage invoices and transactions efficiently. The application provides a fast, responsive user experience and modern UI components, enabling users to access billing data seamlessly across devices.",
    githubLink: "#",
    liveLink: "#",
    tags: [
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "shadcn/ui",
      "PWA",
      "Service Worker",
      "Responsive UI",
    ],
  },
  {
    title: "Design System",
    description:
      "Reusable component library with dark mode, theming, and full accessibility compliance.",
    githubLink: "#",
    tags: ["React", "Storybook", "CSS Variables"],
  },
  {
    title: "Analytics Dashboard",
    description:
      "Real-time metrics and charts for product teams. Responsive and data-dense UI.",
    githubLink: "#",
    liveLink: "#",
    tags: ["Next.js", "Recharts", "PostgreSQL"],
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Git",
  ,
];

export default function HomePage() {
  return (
    <>
      {/* Hero — mobile: stacked center; desktop: asymmetric */}
      <section className="w-full overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <motion.div
            className="flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="w-full">
              <TypingHero />
            </h1>
            <p className="mt-4 max-w-xl text-lg text-muted font-body">
              {intro}
            </p>
            <div className="mt-8 flex w-full flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <BrutalistButton href="#work" variant="default">
                View Work
              </BrutalistButton>
              <BrutalistButton href="/reach-out" variant="outline">
                Reach Out
              </BrutalistButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Snapshot */}
      <SectionWrapper id="work">
        <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
          Selected Work
        </h2>
        <p className="mt-2 text-muted font-body">
          A few projects I&apos;ve built recently.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </SectionWrapper>

      {/* Skills Strip */}
      <SectionWrapper className="border-t-2 border-border">
        <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
          Skills
        </h2>
        <div className="mt-6 flex flex-wrap gap-3" role="list">
          {skills.map((skill) => (
            <span
              key={skill}
              className="font-mono text-sm px-4 py-2 border-2 border-border bg-background text-foreground min-h-[48px] inline-flex items-center shadow-brutal-sm transition-all duration-200 hover:shadow-brutal hover:-translate-y-1 hover:border-accent/50 hover:text-accent"
              role="listitem"
            >
              {skill}
            </span>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
