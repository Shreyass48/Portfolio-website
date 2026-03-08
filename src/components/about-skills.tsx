interface SkillGroup {
  label: string;
  skills: string[];
}

interface AboutSkillsProps {
  groups: SkillGroup[];
}

export function AboutSkills({ groups }: AboutSkillsProps) {
  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {groups.map((group) => (
        <section
          key={group.label}
          aria-label={group.label}
          className="border-2 border-border bg-background p-4 text-left shadow-brutal-sm"
        >
          <h3 className="font-heading text-lg font-bold text-foreground">
            {group.label}
          </h3>
          <ul
            className="mt-4 flex flex-wrap justify-center gap-3 md:justify-start"
            role="list"
            aria-label={`${group.label} technologies`}
          >
            {group.skills.map((skill) => (
              <li key={skill}>
                <span className="inline-flex min-h-[48px] items-center border-2 border-white px-4 py-2 font-medium text-sm text-foreground shadow-brutal-sm transition-all duration-150 hover:-translate-y-0.5 hover:border-[#00FF88] hover:text-accent hover:shadow-brutal">
                  {skill}
                </span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
