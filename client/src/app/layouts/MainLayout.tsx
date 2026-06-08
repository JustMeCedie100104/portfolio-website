import { Outlet, ScrollRestoration } from "react-router-dom";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { ParticleBackground } from "@/components/shared/ParticleBackground";

export function MainLayout() {
  return (
    <div className="layout">
      <ScrollRestoration />
      {/* Ambient rising particles — fixed behind all content */}
      <ParticleBackground />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
