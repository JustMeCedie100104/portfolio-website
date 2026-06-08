# Supabase Setup Checklist

Complete these steps in order. Each step links to where in the
Supabase Dashboard you need to go.

---

## Step 1 — Create a Supabase Project

1. Go to https://supabase.com/dashboard
2. Click **New project**
3. Choose your organization
4. Fill in:
   - **Name:** `portfolio-website` (or any name)
   - **Database Password:** generate a strong one and save it
   - **Region:** closest to your deployment region
5. Wait for provisioning (~2 minutes)

---

## Step 2 — Get Your Credentials

### Dashboard → Project Settings → API

Copy these to your `server/.env`:

```env
SUPABASE_URL=https://[your-project-ref].supabase.co
SUPABASE_SERVICE_ROLE_KEY=[service_role key — keep this secret]
```

### Dashboard → Project Settings → Database → Connection string → URI

Copy the full URI to your `server/.env`:

```env
DATABASE_URL=postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres
```

---

## Step 3 — Run Prisma Migration

From your terminal in the project root:

```bash
npm run db:migrate
```

This creates all tables via Prisma's migration system.

**Alternative — Manual SQL:**
If you prefer to run the SQL directly, paste the contents of
`database/migrations/001_initial_schema.sql`
into **Supabase Dashboard → SQL Editor → New query** and run it.

---

## Step 4 — Apply RLS Policies

In **Supabase Dashboard → SQL Editor**, run:

1. `database/rls/policies.sql` — table-level RLS policies

---

## Step 5 — Create Storage Buckets

In **Supabase Dashboard → Storage**:

| Bucket name      | Public | Purpose                          |
|------------------|--------|----------------------------------|
| `project-images` | ✅ Yes | Project screenshots              |
| `resume`         | ✅ Yes | Resume PDF (public download)     |
| `profile`        | ✅ Yes | Portrait / avatar image          |
| `devlogs`        | ✅ Yes | Images embedded in dev log posts |

**For each bucket:**
1. Click **New bucket**
2. Enter the name exactly as above
3. Toggle **Public bucket** on/off as indicated
4. Set file size limit (5 MB for images, 10 MB for PDFs)

Then in **SQL Editor**, run:

`database/rls/storage_policies.sql`

---

## Step 6 — Seed the Database

```bash
# Uses ADMIN_EMAIL and ADMIN_PASSWORD from server/.env
npm run db:seed
```

Or paste `database/seeds/seed_data.sql` into the SQL Editor
(remember to update the password hash first).

---

## Step 7 — Verify

Open Prisma Studio to confirm all tables and rows:

```bash
npm run db:studio
```

Check:
- [ ] `User` table has your admin account
- [ ] `Project` table has the sample project
- [ ] `DevLogEntry` table has the sample post
- [ ] RLS enabled: Dashboard → Table Editor → each table shows a lock icon
- [ ] Storage buckets visible in Dashboard → Storage

---

## Step 8 — Generate a Strong JWT Secret

```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

Paste the output into `server/.env` as `JWT_SECRET`.

---

## Storage URL Pattern

Once buckets are created, file URLs follow this pattern:

```
https://[project-ref].supabase.co/storage/v1/object/public/[bucket]/[filename]
```

Use this pattern when storing `imageUrl` on projects or `url` on resume files.
