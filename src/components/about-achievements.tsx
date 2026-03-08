interface AboutAchievementsProps {
  items: string[];
}

export function AboutAchievements({ items }: AboutAchievementsProps) {
  return (
    <ul className="mt-6 space-y-3" role="list" aria-label="Achievements">
      {items.map((item) => (
        <li
          key={item}
          className="border-2 border-border bg-background px-4 py-3 font-body text-base text-foreground shadow-brutal-sm sm:px-5 sm:text-lg"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
