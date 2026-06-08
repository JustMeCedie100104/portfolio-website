import { prisma } from "../config/prisma.js";
import { authService } from "../services/auth.service.js";

async function main() {
  console.log("🌱 Seeding database...");

  // ── Admin User ─────────────────────────────────────────────
  const adminEmail = process.env.ADMIN_EMAIL ?? "admin@portfolio.dev";
  const adminPassword = process.env.ADMIN_PASSWORD ?? "ChangeMe123!";

  const existingUser = await prisma.user.findUnique({ where: { email: adminEmail } });

  if (!existingUser) {
    const passwordHash = await authService.hashPassword(adminPassword);
    await prisma.user.create({ data: { email: adminEmail, passwordHash } });
    console.log(`✅ Admin user created: ${adminEmail}`);
  } else {
    console.log(`⏭️  Admin user already exists: ${adminEmail}`);
  }

  // ── Sample Projects ────────────────────────────────────────
  const projectCount = await prisma.project.count();

  if (projectCount === 0) {
    await prisma.project.createMany({
      data: [
        {
          title: "Portfolio Website",
          slug: "portfolio-website",
          description:
            "A production-grade full-stack personal portfolio built with React, TypeScript, Node.js, Express, Prisma, and Supabase. Demonstrates complete software engineering lifecycle.",
          techStack: ["React", "TypeScript", "Node.js", "Express", "Prisma", "Supabase"],
          featured: true,
          published: true,
          sortOrder: 1,
        },
      ],
    });
    console.log("✅ Sample project created");
  }

  // ── Sample Dev Log ─────────────────────────────────────────
  const devlogCount = await prisma.devLogEntry.count();

  if (devlogCount === 0) {
    await prisma.devLogEntry.create({
      data: {
        title: "Project Scaffold Complete",
        slug: "project-scaffold-complete",
        summary: "Initial portfolio architecture and file structure created.",
        content:
          "Set up React + Node.js monorepo with feature-based organization. Configured Prisma schema, Express API with full CRUD, JWT authentication, rate limiting, and Zod validation across all modules.",
        tags: ["setup", "architecture", "backend"],
        published: true,
      },
    });
    console.log("✅ Sample dev log entry created");
  }

  console.log("🌱 Seed complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
