-- ============================================================
-- Migration: 001_initial_schema
-- Description: Full initial schema for the portfolio database
-- Run via: Supabase SQL Editor OR `npm run db:migrate` (Prisma)
-- ============================================================

-- ── Extensions ───────────────────────────────────────────────
-- pgcrypto gives us gen_random_uuid() as an alternative id
-- strategy. Prisma uses cuid() at the app level, but we enable
-- this for future Supabase Auth integration if needed.
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ── Enums ────────────────────────────────────────────────────
CREATE TYPE "Role" AS ENUM ('ADMIN');

-- ── Users ────────────────────────────────────────────────────
CREATE TABLE "User" (
    "id"           TEXT        NOT NULL,
    "email"        TEXT        NOT NULL,
    "passwordHash" TEXT        NOT NULL,
    "role"         "Role"      NOT NULL DEFAULT 'ADMIN',
    "createdAt"    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updatedAt"    TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- ── Projects ─────────────────────────────────────────────────
CREATE TABLE "Project" (
    "id"          TEXT        NOT NULL,
    "title"       TEXT        NOT NULL,
    "slug"        TEXT        NOT NULL,
    "description" TEXT        NOT NULL,
    "techStack"   TEXT[]      NOT NULL DEFAULT '{}',
    "featured"    BOOLEAN     NOT NULL DEFAULT FALSE,
    "published"   BOOLEAN     NOT NULL DEFAULT FALSE,
    "githubUrl"   TEXT,
    "liveUrl"     TEXT,
    "imageUrl"    TEXT,
    "sortOrder"   INTEGER     NOT NULL DEFAULT 0,
    "createdAt"   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updatedAt"   TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "Project_slug_key"      ON "Project"("slug");
CREATE INDEX        "Project_featured_idx"  ON "Project"("featured");
CREATE INDEX        "Project_published_idx" ON "Project"("published");

-- ── Contact Messages ─────────────────────────────────────────
CREATE TABLE "ContactMessage" (
    "id"        TEXT        NOT NULL,
    "name"      TEXT        NOT NULL,
    "email"     TEXT        NOT NULL,
    "subject"   TEXT        NOT NULL,
    "message"   TEXT        NOT NULL,
    "read"      BOOLEAN     NOT NULL DEFAULT FALSE,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT "ContactMessage_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "ContactMessage_read_idx"      ON "ContactMessage"("read");
CREATE INDEX "ContactMessage_createdAt_idx" ON "ContactMessage"("createdAt");

-- ── Resume Files ─────────────────────────────────────────────
CREATE TABLE "ResumeFile" (
    "id"         TEXT        NOT NULL,
    "filename"   TEXT        NOT NULL,
    "url"        TEXT        NOT NULL,
    "version"    INTEGER     NOT NULL DEFAULT 1,
    "isActive"   BOOLEAN     NOT NULL DEFAULT FALSE,
    "uploadedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT "ResumeFile_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "ResumeFile_isActive_idx" ON "ResumeFile"("isActive");

-- ── Page Views ───────────────────────────────────────────────
CREATE TABLE "PageView" (
    "id"        TEXT        NOT NULL,
    "path"      TEXT        NOT NULL,
    "visitorId" TEXT,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT "PageView_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "PageView_path_idx"      ON "PageView"("path");
CREATE INDEX "PageView_createdAt_idx" ON "PageView"("createdAt");

-- ── Dev Log Entries ──────────────────────────────────────────
CREATE TABLE "DevLogEntry" (
    "id"        TEXT        NOT NULL,
    "title"     TEXT        NOT NULL,
    "slug"      TEXT        NOT NULL,
    "summary"   TEXT        NOT NULL,
    "content"   TEXT        NOT NULL,
    "tags"      TEXT[]      NOT NULL DEFAULT '{}',
    "published" BOOLEAN     NOT NULL DEFAULT FALSE,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT "DevLogEntry_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "DevLogEntry_slug_key"       ON "DevLogEntry"("slug");
CREATE INDEX        "DevLogEntry_published_idx"  ON "DevLogEntry"("published");
CREATE INDEX        "DevLogEntry_createdAt_idx"  ON "DevLogEntry"("createdAt");

-- ── updated_at trigger function ──────────────────────────────
-- Automatically keeps updatedAt in sync on every row update.
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW."updatedAt" = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER "User_updatedAt"
    BEFORE UPDATE ON "User"
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER "Project_updatedAt"
    BEFORE UPDATE ON "Project"
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER "DevLogEntry_updatedAt"
    BEFORE UPDATE ON "DevLogEntry"
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
