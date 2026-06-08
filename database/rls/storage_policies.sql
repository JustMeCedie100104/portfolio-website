-- ============================================================
-- Supabase Storage — Bucket & Policy Setup
--
-- Run this in the Supabase SQL Editor AFTER creating the
-- buckets in the Supabase Dashboard (Storage → New bucket).
--
-- BUCKETS TO CREATE IN DASHBOARD
-- ────────────────────────────────
--  Name              Public?   Max size   Allowed MIME
--  ──────────────────────────────────────────────────
--  project-images    YES       5 MB       image/jpeg, image/png, image/webp
--  resume            NO        10 MB      application/pdf
--  profile           YES       5 MB       image/jpeg, image/png, image/webp
--  devlogs           NO        10 MB      image/jpeg, image/png, image/webp
-- ============================================================

-- ── project-images ───────────────────────────────────────────
-- Public read (portfolio visitors see project screenshots)
-- Only authenticated service role can upload/delete

CREATE POLICY "project_images_public_read"
    ON storage.objects
    FOR SELECT
    TO public
    USING (bucket_id = 'project-images');

CREATE POLICY "project_images_service_write"
    ON storage.objects
    FOR INSERT
    TO authenticated
    WITH CHECK (bucket_id = 'project-images');

CREATE POLICY "project_images_service_delete"
    ON storage.objects
    FOR DELETE
    TO authenticated
    USING (bucket_id = 'project-images');

-- ── resume ───────────────────────────────────────────────────
-- Public read for active resume downloads
-- Only service role can upload/delete

CREATE POLICY "resume_public_read"
    ON storage.objects
    FOR SELECT
    TO public
    USING (bucket_id = 'resume');

CREATE POLICY "resume_service_write"
    ON storage.objects
    FOR INSERT
    TO authenticated
    WITH CHECK (bucket_id = 'resume');

CREATE POLICY "resume_service_delete"
    ON storage.objects
    FOR DELETE
    TO authenticated
    USING (bucket_id = 'resume');

-- ── profile ──────────────────────────────────────────────────
-- Public read (portrait/avatar displayed on portfolio)

CREATE POLICY "profile_public_read"
    ON storage.objects
    FOR SELECT
    TO public
    USING (bucket_id = 'profile');

CREATE POLICY "profile_service_write"
    ON storage.objects
    FOR INSERT
    TO authenticated
    WITH CHECK (bucket_id = 'profile');

CREATE POLICY "profile_service_delete"
    ON storage.objects
    FOR DELETE
    TO authenticated
    USING (bucket_id = 'profile');

-- ── devlogs ──────────────────────────────────────────────────
-- Public read for devlog images embedded in post content

CREATE POLICY "devlogs_public_read"
    ON storage.objects
    FOR SELECT
    TO public
    USING (bucket_id = 'devlogs');

CREATE POLICY "devlogs_service_write"
    ON storage.objects
    FOR INSERT
    TO authenticated
    WITH CHECK (bucket_id = 'devlogs');

CREATE POLICY "devlogs_service_delete"
    ON storage.objects
    FOR DELETE
    TO authenticated
    USING (bucket_id = 'devlogs');
