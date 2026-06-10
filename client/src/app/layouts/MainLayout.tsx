import { Outlet, ScrollRestoration } from "react-router-dom";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { ParticleBackground } from "@/components/shared/ParticleBackground";
import { CursorGlow } from "@/components/shared/CursorGlow";

export function MainLayout() {
  return (
    <div className="layout">
      <ScrollRestoration />
      <CursorGlow />
      <ParticleBackground />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
