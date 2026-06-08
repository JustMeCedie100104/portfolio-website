-- ============================================================
-- Seed Data — Portfolio Database
--
-- USE CASE: Quick manual seeding via Supabase SQL Editor
-- without running the Node seed script.
--
-- NOTE: The admin password hash below is for "ChangeMe123!"
-- generated with bcrypt 12 rounds. REPLACE IT before use.
-- Generate a new hash: node -e "require('bcryptjs').hash('YourPassword', 12).then(console.log)"
-- ============================================================

-- ── Admin User ───────────────────────────────────────────────
INSERT INTO "User" ("id", "email", "passwordHash", "role", "createdAt", "updatedAt")
VALUES (
    'cluser000000000000000000000',
    'admin@portfolio.dev',
    -- bcrypt hash of: ChangeMe123!  (rounds=12)
    '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQyCjAfozOOVMw7reFPuFLEre',
    'ADMIN',
    NOW(),
    NOW()
)
ON CONFLICT ("email") DO NOTHING;

-- ── Sample Project ───────────────────────────────────────────
INSERT INTO "Project" (
    "id", "title", "slug", "description", "techStack",
    "featured", "published", "sortOrder", "createdAt", "updatedAt"
)
VALUES (
    'clproject000000000000000001',
    'Portfolio Website',
    'portfolio-website',
    'A production-grade full-stack personal portfolio built with React, TypeScript, Node.js, Express, Prisma, and Supabase. Demonstrates the complete software engineering lifecycle from architecture to deployment.',
    ARRAY['React', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'Supabase', 'Tailwind CSS'],
    TRUE,
    TRUE,
    1,
    NOW(),
    NOW()
)
ON CONFLICT ("slug") DO NOTHING;

-- ── Sample Dev Log Entry ─────────────────────────────────────
INSERT INTO "DevLogEntry" (
    "id", "title", "slug", "summary", "content",
    "tags", "published", "createdAt", "updatedAt"
)
VALUES (
    'cldevlog00000000000000000001',
    'Project Scaffold Complete',
    'project-scaffold-complete',
    'Initial portfolio architecture and full-stack scaffold created.',
    E'## What I Built\n\nSet up a React + Node.js monorepo with feature-based organization.\n\n## Key Decisions\n\n- **Prisma** for the ORM layer — type-safe queries and migrations\n- **Zod** for input validation at the API boundary\n- **JWT** for stateless admin authentication\n- **bcryptjs** for password hashing (12 rounds)\n\n## What''s Next\n\nPhase 3 database setup, then deployment to Railway + Vercel.',
    ARRAY['setup', 'architecture', 'backend'],
    TRUE,
    NOW(),
    NOW()
)
ON CONFLICT ("slug") DO NOTHING;
