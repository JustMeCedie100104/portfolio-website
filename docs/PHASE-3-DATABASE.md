# PHASE-3-DATABASE.md

## Phase 3: Database Development

**Status:** COMPLETED
**Provider:** Supabase PostgreSQL
**ORM:** Prisma 6
**Security:** Row Level Security (RLS)
**Storage:** Supabase Storage (4 buckets)

---

## Overview

The database layer is the source of truth for all persistent data in the portfolio.
Prisma acts as the ORM — schema-first, type-safe, migration-tracked.
Supabase provides the PostgreSQL host, storage buckets, and RLS enforcement.

---

## What Was Built in This Phase

```
server/src/prisma/
├── schema.prisma          — 6 models, 1 enum, indexes, triggers
└── seed.ts                — Admin user + sample data seeder

database/
├── migrations/
│   └── 001_initial_schema.sql   — Full DDL for manual Supabase setup
├── rls/
│   ├── policies.sql             — Table RLS policies (7 policies)
│   └── storage_policies.sql    — Storage bucket policies (12 policies)
└── seeds/
    └── seed_data.sql            — Manual seed SQL alternative

scripts/
├── setup-supabase.md            — Step-by-step Supabase setup checklist
└── prisma-migrate.sh            — Migration helper script

docs/
├── database-schema.md           — Complete schema reference
├── api-documentation.md         — Updated full API reference
└── architecture.md              — Updated full architecture doc
```

---

## Database Models

| Model          | Purpose                              | Public Access        |
|----------------|--------------------------------------|----------------------|
| User           | Admin credentials                    | None (service only)  |
| Project        | Portfolio project entries            | published=true only  |
| ContactMessage | Inbound contact form submissions     | Insert only          |
| ResumeFile     | Versioned resume files               | isActive=true only   |
| PageView       | Anonymous analytics events           | Insert only          |
| DevLogEntry    | Dev log posts with markdown content  | published=true only  |

Full column-level reference: `docs/database-schema.md`

---

## Prisma Schema Highlights

### User (new in Phase 2/3)
```prisma
model User {
  id           String   @id @default(cuid())
  email        String   @unique
  passwordHash String
  role         Role     @default(ADMIN)
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
}
```

### Project (upgraded)
Added: `published`, `imageUrl`, `sortOrder`
Indexes: `featured`, `published`

### DevLogEntry (upgraded)
Added: `slug` (unique, URL-safe)
Indexes: `published`, `createdAt`

---

## Row Level Security Strategy

```
Express (Prisma) → service_role connection → BYPASSES RLS ✅
Direct DB / Supabase JS client → anon/authenticated → SUBJECT TO RLS ✅
```

This means RLS is defence-in-depth — it doesn't interfere with the API
but blocks any accidental or malicious direct database access.

### Policy Summary

| Table          | anon can SELECT          | anon can INSERT |
|----------------|--------------------------|-----------------|
| User           | ❌ Never                 | ❌ Never        |
| Project        | ✅ published=true only   | ❌              |
| ContactMessage | ❌                       | ✅ Always       |
| ResumeFile     | ✅ isActive=true only    | ❌              |
| PageView       | ❌                       | ✅ Always       |
| DevLogEntry    | ✅ published=true only   | ❌              |

---

## Storage Buckets

| Bucket         | Public | Max Size | MIME Types                          |
|----------------|--------|----------|-------------------------------------|
| project-images | ✅     | 5 MB     | image/jpeg, image/png, image/webp   |
| resume         | ✅     | 10 MB    | application/pdf                     |
| profile        | ✅     | 5 MB     | image/jpeg, image/png, image/webp   |
| devlogs        | ✅     | 10 MB    | image/jpeg, image/png, image/webp   |

All buckets: public read, authenticated write/delete (service role).

---

## Setup Instructions

### Option A — Prisma Migrations (recommended for dev)

```bash
# 1. Fill in server/.env (DATABASE_URL, JWT_SECRET)
cp server/.env.example server/.env

# 2. Run migrations
npm run db:migrate

# 3. Seed
npm run db:seed

# 4. Open Prisma Studio to verify
npm run db:studio
```

### Option B — Manual SQL (for production Supabase)

1. Run `database/migrations/001_initial_schema.sql` in SQL Editor
2. Run `database/rls/policies.sql` in SQL Editor
3. Create the 4 storage buckets in Dashboard → Storage
4. Run `database/rls/storage_policies.sql` in SQL Editor
5. Run `database/seeds/seed_data.sql` (update password hash first)

Full walkthrough: `scripts/setup-supabase.md`

---

## Environment Variables Required

```env
DATABASE_URL=postgresql://postgres:[pass]@db.[ref].supabase.co:5432/postgres
JWT_SECRET=[64-byte hex string]
SUPABASE_URL=https://[ref].supabase.co
SUPABASE_SERVICE_ROLE_KEY=[service role key]
ADMIN_EMAIL=admin@portfolio.dev
ADMIN_PASSWORD=YourStrongPassword1!
```

Generate JWT secret:
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

---

## Verification Checklist

- [ ] `User` table contains admin account
- [ ] `Project` table contains at least one published entry
- [ ] `DevLogEntry` table contains at least one published entry
- [ ] RLS enabled on all 6 tables (lock icon in Supabase Table Editor)
- [ ] 4 storage buckets created and visible
- [ ] Storage policies applied
- [ ] `GET /api/projects` returns data (test with curl or browser)
- [ ] `POST /api/auth/login` returns JWT
- [ ] `GET /api/devlogs` returns data

---

## Security Checklist

- [x] Passwords stored as bcrypt hashes (never plaintext)
- [x] RLS enabled on all tables
- [x] User table has zero public access policies
- [x] Storage buckets allow public read, authenticated write only
- [x] Service role key stored in env var only (never committed)
- [x] DATABASE_URL in .env (gitignored)
- [x] Seed password configurable via env var
