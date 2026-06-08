import type { DevLogEntry } from "@/features/devlog/types";

interface DevLogTimelineProps {
  entries: DevLogEntry[];
}

export function DevLogTimeline({ entries }: DevLogTimelineProps) {
  return (
    <ol className="devlog-timeline">
      {entries.map((entry) => (
        <li key={entry.id} className="devlog-timeline__item">
          <time dateTime={entry.createdAt}>{entry.createdAt}</time>
          <h4>{entry.title}</h4>
          <p>{entry.summary}</p>
        </li>
      ))}
    </ol>
  );
}
