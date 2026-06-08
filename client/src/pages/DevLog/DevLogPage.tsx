import { DevLogList } from "@/components/devlog/DevLogList";

export function DevLogPage() {
  return (
    <section>
      <h1>Dev Log</h1>
      <p>Building in public — progress updates and lessons learned.</p>
      <DevLogList />
    </section>
  );
}
