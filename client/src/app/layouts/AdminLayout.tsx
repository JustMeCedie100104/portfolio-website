import { Outlet, NavLink } from "react-router-dom";
import { ROUTES } from "../router/routes";

const adminLinks = [
  { to: ROUTES.ADMIN.DASHBOARD, label: "Dashboard" },
  { to: ROUTES.ADMIN.PROJECTS, label: "Projects" },
  { to: ROUTES.ADMIN.MESSAGES, label: "Messages" },
  { to: ROUTES.ADMIN.RESUME, label: "Resume" },
  { to: ROUTES.ADMIN.ANALYTICS, label: "Analytics" },
  { to: ROUTES.ADMIN.DEVLOG, label: "Dev Log" },
];

export function AdminLayout() {
  return (
    <div className="admin-layout">
      <aside className="admin-layout__sidebar">
        <h2>Admin</h2>
        <nav>
          {adminLinks.map(({ to, label }) => (
            <NavLink key={to} to={to} className="admin-layout__link">
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <main className="admin-layout__content">
        <Outlet />
      </main>
    </div>
  );
}
