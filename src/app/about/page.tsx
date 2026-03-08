import { SectionWrapper } from "@/components/section-wrapper";
import { BrutalistButton } from "@/components/brutalist-button";
import { AboutTimeline } from "@/components/about-timeline";
import { AboutSkills } from "@/components/about-skills";
import { AboutAchievements } from "@/components/about-achievements";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const timelineItems = [
  {
    year: "2023-Present",
    title: "Frontend Developer",
    subtitle:
      "Started professional frontend journey building scalable web applications.",
    type: "experience" as const,
  },
  {
    year: "2020-2023",
    title: "Bachelor's Degree - Computer Science",
    subtitle: "Vishwakarma Institute of Information Technology",
    type: "education" as const,
  },
  {
    year: "2017-2020",
    title: "Diploma - Computer Science",
    subtitle: "Cusrow Wadia Institute of Technology",
    type: "education" as const,
  },
];

const techStackGroups = [
  {
    label: "Frontend",
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    label: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Chrome DevTools", "Postman"],
  },
  {
    label: "AI Tools",
    skills: ["Cursor", "GitHub Copilot", "ChatGPT"],
  },
];

const achievements = [
  "AWARD: Best Frontend Developer - 2025",
  "AWARD: Spotlight Award - 2024",
];

const resumePath = "/Shreyas_Kulkarni_Resume.pdf";

export default function AboutPage() {
  return (
    <>
      <SectionWrapper className="pt-14 sm:pt-16">
        <section
          className="mx-auto max-w-3xl space-y-6 text-center"
          aria-labelledby="about-title"
        >
          <h1
            id="about-title"
            className="font-heading text-4xl font-bold text-foreground sm:text-5xl"
          >
            About Me
          </h1>
          <p className="text-base text-muted sm:text-lg">
            I&apos;m Shreyas, a frontend developer focused on building fast,
            scalable, and user-friendly web applications using modern
            technologies like React, Next.js, and Tailwind CSS.
          </p>
          <p className="text-base text-muted sm:text-lg">
            I enjoy turning complex ideas into simple, intuitive interfaces and
            continuously exploring new technologies. Recently, I&apos;ve been
            expanding my work into AI-powered frontend experiences, integrating
            modern AI tools to build smarter and more interactive web
            applications.
          </p>
          <p className="text-base text-muted sm:text-lg">
            Currently working as a Frontend Developer with 2.5+ years of
            experience, I&apos;m passionate about crafting performant UIs and
            building products that deliver real value to users.
          </p>
        </section>
      </SectionWrapper>

      <SectionWrapper
        className="border-t-2 border-border"
        as="section"
        id="journey"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Journey Timeline
          </h2>
          <p className="mt-2 max-w-2xl text-muted">
            Education and professional experience from my frontend development
            journey.
          </p>
          <AboutTimeline items={timelineItems} />
        </div>
      </SectionWrapper>

      <SectionWrapper
        className="border-t-2 border-border"
        as="section"
        id="tech-stack"
      >
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Tech Stack
          </h2>
          <p className="mt-2 text-muted">
            Technologies I use to build modern, scalable and user-friendly web
            applications.
          </p>
          <AboutSkills groups={techStackGroups} />
        </div>
      </SectionWrapper>

      <SectionWrapper
        className="border-t-2 border-border"
        as="section"
        id="achievements"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Achievements
          </h2>
          <AboutAchievements items={achievements} />
        </div>
      </SectionWrapper>

      <SectionWrapper
        className="border-t-2 border-border pb-16"
        as="section"
        id="cta"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Interested in working together?
          </h2>
          <p className="mt-3 text-lg text-muted">
            Let&apos;s build something great.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <BrutalistButton href="/reach-out" variant="default">
              Reach Out
            </BrutalistButton>
            <a
              href={resumePath}
              download
              className={cn(
                buttonVariants({ variant: "outline" }),
                "w-full sm:w-auto",
              )}
            >
              Download Resume
            </a>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
