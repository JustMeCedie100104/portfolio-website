import type { DevLogEntry } from "@/features/devlog/types";

interface DevLogCardProps {
  entry: DevLogEntry;
}

export function DevLogCard({ entry }: DevLogCardProps) {
  return (
    <article className="devlog-card">
      <h3>{entry.title}</h3>
      <time dateTime={entry.createdAt}>{entry.createdAt}</time>
      <p>{entry.summary}</p>
      {entry.tags.length > 0 && (
        <ul className="devlog-card__tags">
          {entry.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      )}
    </article>
  );
}
