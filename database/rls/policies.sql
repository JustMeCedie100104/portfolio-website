-- ============================================================
-- Row Level Security Policies
-- Portfolio Database — Supabase PostgreSQL
--
-- STRATEGY
-- ─────────
-- The Express backend connects with the Prisma service-role
-- connection string (DATABASE_URL), which bypasses RLS entirely.
-- That means Prisma has full unrestricted access — correct for
-- a server-side API that already enforces auth via JWT.
--
-- RLS is enabled here as a defence-in-depth layer. It prevents
-- any accidental direct-DB queries, Supabase client calls, or
-- future integrations from bypassing the intended access rules.
--
-- ROLES
-- ─────
-- anon       — unauthenticated Supabase JS client
-- authenticated — Supabase Auth session (not used yet, reserved)
-- service_role  — server / Prisma (bypasses RLS)
-- ============================================================

-- ── Enable RLS on all tables ─────────────────────────────────
ALTER TABLE "User"           ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Project"        ENABLE ROW LEVEL SECURITY;
ALTER TABLE "ContactMessage" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "ResumeFile"     ENABLE ROW LEVEL SECURITY;
ALTER TABLE "PageView"       ENABLE ROW LEVEL SECURITY;
ALTER TABLE "DevLogEntry"    ENABLE ROW LEVEL SECURITY;

-- ============================================================
-- USER TABLE
-- Admin credentials — never publicly readable.
-- Only the service role (Prisma/backend) can read or write.
-- ============================================================
-- No policies created for anon/authenticated → access denied by default.

-- ============================================================
-- PROJECT TABLE
-- Public can read published projects.
-- Only service role can write.
-- ============================================================
CREATE POLICY "projects_select_published"
    ON "Project"
    FOR SELECT
    TO anon, authenticated
    USING ("published" = TRUE);

-- ============================================================
-- CONTACT MESSAGE TABLE
-- Anyone can insert a message (contact form).
-- Nobody except service role can read (admin inbox via API).
-- ============================================================
CREATE POLICY "contact_insert_public"
    ON "ContactMessage"
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (TRUE);

-- ============================================================
-- RESUME FILE TABLE
-- Public can read active resume.
-- Only service role can write.
-- ============================================================
CREATE POLICY "resume_select_active"
    ON "ResumeFile"
    FOR SELECT
    TO anon, authenticated
    USING ("isActive" = TRUE);

-- ============================================================
-- PAGE VIEW TABLE
-- Anyone can insert a page view (analytics tracking).
-- Nobody except service role can read (dashboard via API).
-- ============================================================
CREATE POLICY "pageview_insert_public"
    ON "PageView"
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (TRUE);

-- ============================================================
-- DEV LOG ENTRY TABLE
-- Public can read published entries.
-- Only service role can write.
-- ============================================================
CREATE POLICY "devlog_select_published"
    ON "DevLogEntry"
    FOR SELECT
    TO anon, authenticated
    USING ("published" = TRUE);
