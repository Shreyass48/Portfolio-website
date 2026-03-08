interface TimelineItem {
  year: string;
  title: string;
  subtitle?: string;
  type: "education" | "experience" | "award" | "milestone";
}

const typeLabel: Record<TimelineItem["type"], string> = {
  education: "Education",
  experience: "Experience",
  award: "Award",
  milestone: "Milestone",
};

interface AboutTimelineProps {
  items: TimelineItem[];
}

export function AboutTimeline({ items }: AboutTimelineProps) {
  return (
    <ol
      className="relative mt-10 space-y-6 md:space-y-0 after:pointer-events-none after:absolute after:left-4 after:top-1 after:bottom-1 after:w-0.5 after:bg-border md:after:left-1/2 md:after:-translate-x-1/2"
      aria-label="Career timeline"
    >
      {items.map((item, index) => {
        const isEven = index % 2 === 0;

        return (
          <li
            key={`${item.year}-${item.title}`}
            className="relative pl-12 md:grid md:grid-cols-2 md:gap-8 md:pl-0"
          >
            <span
              className="absolute left-2 top-6 h-4 w-4 border-2 border-border bg-accent md:left-1/2 md:-translate-x-1/2"
              aria-hidden="true"
            />

            <div
              className={`md:py-4 ${isEven ? "md:col-start-1 md:pr-10" : "md:col-start-2 md:pl-10"}`}
            >
              <article className="border-2 border-border bg-background p-5 shadow-brutal-sm sm:p-6">
                <p className="font-mono text-sm text-accent">{item.year}</p>
                <h3 className="mt-2 font-heading text-xl font-bold text-foreground sm:text-2xl">
                  {item.title}
                </h3>
                {item.subtitle ? (
                  <p className="mt-2 text-sm text-muted sm:text-base">
                    {item.subtitle}
                  </p>
                ) : null}
                <p className="mt-4 inline-flex border-2 border-border px-3 py-1 font-mono text-xs uppercase tracking-wide text-foreground">
                  {typeLabel[item.type]}
                </p>
              </article>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
