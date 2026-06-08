export function DevLogFilter() {
  return (
    <div className="devlog-filter">
      <input type="search" placeholder="Search entries…" aria-label="Search dev log" />
      <select aria-label="Filter by tag">
        <option value="">All tags</option>
      </select>
    </div>
  );
}
