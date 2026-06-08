import { DevLogCard } from "./DevLogCard";
import { DevLogFilter } from "./DevLogFilter";
import { useDevLogs } from "@/features/devlog/hooks/useDevLogs";

export function DevLogList() {
  const { data, isLoading } = useDevLogs();

  if (isLoading) return <p>Loading dev log entries…</p>;

  return (
    <div className="devlog-list">
      <DevLogFilter />
      {data?.map((entry) => (
        <DevLogCard key={entry.id} entry={entry} />
      ))}
    </div>
  );
}
