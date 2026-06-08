# Database Schema

**Provider:** Supabase PostgreSQL
**ORM:** Prisma 6
**Schema location:** `server/src/prisma/schema.prisma`

---

## Models

### User

Stores the admin account. Only one user is expected (single-owner portfolio).
Passwords are hashed with bcryptjs (12 rounds) before storage.

| Column        | Type        | Notes                        |
|---------------|-------------|------------------------------|
| id            | String (cuid) | Primary key                |
| email         | String      | Unique                       |
| passwordHash  | String      | bcrypt hash                  |
| role          | Role enum   | Default: ADMIN               |
| createdAt     | DateTime    | Auto                         |
| updatedAt     | DateTime    | Auto-updated via trigger     |

---

### Project

Portfolio project entries. Only `published = true` records are returned
by the public API. `featured = true` records appear in the homepage section.

| Column      | Type      | Notes                              |
|-------------|-----------|-------------------------------------|
| id          | String    | Primary key (cuid)                  |
| title       | String    | Display title                       |
| slug        | String    | Unique, URL-safe identifier         |
| description | String    | Full description (up to 2000 chars) |
| techStack   | String[]  | Array of technology names           |
| featured    | Boolean   | Show on homepage featured section   |
| published   | Boolean   | Visible on public API               |
| githubUrl   | String?   | Optional GitHub link                |
| liveUrl     | String?   | Optional live demo link             |
| imageUrl    | String?   | Supabase Storage URL                |
| sortOrder   | Int       | Manual display ordering             |
| createdAt   | DateTime  | Auto                                |
| updatedAt   | DateTime  | Auto-updated                        |

Indexes: `featured`, `published`

---

### ContactMessage

Inbound contact form submissions. Publicly insertable, admin-readable only.

| Column    | Type     | Notes                           |
|-----------|----------|---------------------------------|
| id        | String   | Primary key (cuid)              |
| name      | String   | Sender name (max 80 chars)      |
| email     | String   | Sender email (max 120 chars)    |
| subject   | String   | Message subject (max 150 chars) |
| message   | String   | Body (max 2000 chars)           |
| read      | Boolean  | Default false                   |
| createdAt | DateTime | Auto                            |

Indexes: `read`, `createdAt`

---

### ResumeFile

Versioned resume file registry. Only one record has `isActive = true` at a time.
The `setActive` service method atomically deactivates all and activates the target.

| Column     | Type     | Notes                            |
|------------|----------|----------------------------------|
| id         | String   | Primary key (cuid)               |
| filename   | String   | Original filename                |
| url        | String   | Supabase Storage URL             |
| version    | Int      | Incremental version number       |
| isActive   | Boolean  | Only one true at a time          |
| uploadedAt | DateTime | Auto                             |

Indexes: `isActive`

---

### PageView

Anonymous page view events for analytics. Append-only — never updated or deleted.

| Column    | Type     | Notes                                   |
|-----------|----------|-----------------------------------------|
| id        | String   | Primary key (cuid)                      |
| path      | String   | URL path (e.g. `/projects/my-project`)  |
| visitorId | String?  | Optional anonymous fingerprint          |
| createdAt | DateTime | Auto                                    |

Indexes: `path`, `createdAt`

---

### DevLogEntry

Dev log posts with markdown content and tags.
Only `published = true` records are returned by the public API.

| Column    | Type      | Notes                          |
|-----------|-----------|--------------------------------|
| id        | String    | Primary key (cuid)             |
| title     | String    | Post title (max 120 chars)     |
| slug      | String    | Unique, URL-safe identifier    |
| summary   | String    | Short teaser (max 500 chars)   |
| content   | String    | Full markdown content          |
| tags      | String[]  | Array of tag strings           |
| published | Boolean   | Default false                  |
| createdAt | DateTime  | Auto                           |
| updatedAt | DateTime  | Auto-updated                   |

Indexes: `published`, `createdAt`

---

## Enums

### Role
```
ADMIN
```

---

## Row Level Security

RLS is enabled on all tables. The Express backend connects via the
`DATABASE_URL` (Prisma service role) which bypasses RLS entirely.
RLS acts as a defence-in-depth layer for any direct DB access.

| Table          | anon SELECT | anon INSERT | Notes                    |
|----------------|-------------|-------------|--------------------------|
| User           | ❌          | ❌          | Service role only        |
| Project        | published=true only | ❌ | Published filter         |
| ContactMessage | ❌          | ✅          | Submit-only for public   |
| ResumeFile     | isActive=true only | ❌ | Active only              |
| PageView       | ❌          | ✅          | Track-only for public    |
| DevLogEntry    | published=true only | ❌ | Published filter         |

See `database/rls/policies.sql` for full policy definitions.

---

## Storage Buckets

| Bucket         | Public | Purpose                        |
|----------------|--------|--------------------------------|
| project-images | ✅     | Project screenshot images      |
| resume         | ✅     | Resume PDF files               |
| profile        | ✅     | Portrait / avatar image        |
| devlogs        | ✅     | Images embedded in dev log posts |

Public URL pattern:
```
https://[project-ref].supabase.co/storage/v1/object/public/[bucket]/[filename]
```

See `database/rls/storage_policies.sql` for access policy definitions.

---

## Migrations

### Via Prisma (recommended)
```bash
# From project root
npm run db:migrate

# Or from server/ directory
npm run db:migrate
# → prisma migrate dev --schema src/prisma/schema.prisma
```

### Via Supabase SQL Editor (manual)
Paste and run: `database/migrations/001_initial_schema.sql`

---

## Seed

```bash
# From project root
npm run db:seed

# Environment variables used:
# ADMIN_EMAIL    (default: admin@portfolio.dev)
# ADMIN_PASSWORD (default: ChangeMe123! — change this)
```

Creates:
- Admin user with bcrypt-hashed password
- Sample project entry
- Sample dev log entry

---

## Prisma Commands

| Command               | Description                        |
|-----------------------|------------------------------------|
| `npm run db:generate` | Regenerate Prisma Client           |
| `npm run db:migrate`  | Create and apply new migration     |
| `npm run db:seed`     | Seed admin user and sample data    |
| `npm run db:studio`   | Open Prisma Studio (visual DB UI)  |

---

## Setup Guide

See `scripts/setup-supabase.md` for the complete step-by-step
Supabase project setup checklist.
