import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { AdminLayout } from "../layouts/AdminLayout";
import { AuthLayout } from "../layouts/AuthLayout";
import { ProtectedRoute } from "./ProtectedRoute";
import { ROUTES } from "./routes";
import { HomePage } from "@/pages/Home/HomePage";
import { AboutPage } from "@/pages/About/AboutPage";
import { ProjectsPage } from "@/pages/Projects/ProjectsPage";
import { ProjectDetailPage } from "@/pages/Projects/ProjectDetailPage";
import { ExperiencePage } from "@/pages/Experience/ExperiencePage";
import { ResumePage } from "@/pages/Resume/ResumePage";
import { ContactPage } from "@/pages/Contact/ContactPage";
import { DevLogPage } from "@/pages/DevLog/DevLogPage";
import { LoginPage } from "@/pages/Auth/LoginPage";
import { DashboardPage } from "@/pages/Admin/DashboardPage";
import { AdminProjectsPage } from "@/pages/Admin/ProjectsPage";
import { MessagesPage } from "@/pages/Admin/MessagesPage";
import { AdminResumePage } from "@/pages/Admin/ResumePage";
import { AnalyticsPage } from "@/pages/Admin/AnalyticsPage";
import { AdminDevLogPage } from "@/pages/Admin/DevLogPage";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: ROUTES.HOME, element: <HomePage /> },
      { path: ROUTES.ABOUT, element: <AboutPage /> },
      { path: ROUTES.PROJECTS, element: <ProjectsPage /> },
      { path: ROUTES.PROJECT_DETAIL, element: <ProjectDetailPage /> },
      { path: ROUTES.EXPERIENCE, element: <ExperiencePage /> },
      { path: ROUTES.RESUME, element: <ResumePage /> },
      { path: ROUTES.CONTACT, element: <ContactPage /> },
      { path: ROUTES.DEVLOG, element: <DevLogPage /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [{ path: ROUTES.LOGIN, element: <LoginPage /> }],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          { path: ROUTES.ADMIN.DASHBOARD, element: <DashboardPage /> },
          { path: ROUTES.ADMIN.PROJECTS, element: <AdminProjectsPage /> },
          { path: ROUTES.ADMIN.MESSAGES, element: <MessagesPage /> },
          { path: ROUTES.ADMIN.RESUME, element: <AdminResumePage /> },
          { path: ROUTES.ADMIN.ANALYTICS, element: <AnalyticsPage /> },
          { path: ROUTES.ADMIN.DEVLOG, element: <AdminDevLogPage /> },
        ],
      },
    ],
  },
]);
