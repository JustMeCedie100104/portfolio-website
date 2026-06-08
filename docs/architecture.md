# Architecture

**Version:** 2.0 (Phase 2 + Phase 3 complete)

---

## System Overview

```
┌──────────────────────────────┐
│  React Frontend (Vercel)     │
│  React 19 · TypeScript · Vite│
└──────────────┬───────────────┘
               │ HTTPS / REST JSON
               ▼
┌──────────────────────────────┐
│  Express API (Railway)       │
│  Node.js · TypeScript        │
│  JWT Auth · Zod · Rate Limit │
└──────────────┬───────────────┘
               │ Prisma ORM
               ▼
┌──────────────────────────────┐
│  PostgreSQL (Supabase)       │
│  + Row Level Security        │
└──────────────┬───────────────┘
               │ Supabase JS Client
               ▼
┌──────────────────────────────┐
│  Supabase Storage            │
│  project-images / resume     │
│  profile / devlogs           │
└──────────────────────────────┘
```

---

## Request Flow

```
HTTP Request
    ↓
Rate Limiter (express-rate-limit)
    ↓
CORS + Helmet (security headers)
    ↓
Route Match
    ↓
[requireAuth middleware] — if protected route
    ↓ verifies JWT, attaches req.user
Controller
    ↓ parses + validates body (Zod)
Service
    ↓ business logic
Repository
    ↓ Prisma query
Database (Supabase PostgreSQL)
    ↑
Response JSON
```

---

## Layer Responsibilities

| Layer       | Location              | Responsibility                              |
|-------------|----------------------|---------------------------------------------|
| Frontend    | `client/`            | UI rendering, routing, state, animations    |
| API Routes  | `server/src/routes/` | HTTP method + path → controller mapping     |
| Middleware  | `server/src/middleware/` | Auth, rate limit, error handling         |
| Controllers | `server/src/controllers/` | Request parsing, response sending      |
| Services    | `server/src/services/` | Business logic, orchestration             |
| Repositories| `server/src/repositories/` | Prisma DB access only                 |
| Validators  | `server/src/validators/` | Zod input schemas                       |
| Types       | `server/src/types/`  | TypeScript interfaces                       |
| Config      | `server/src/config/` | env, Prisma client, Supabase client         |

---

## Frontend Structure

```
client/src/
├── app/
│   ├── router/       — React Router definitions, ProtectedRoute
│   ├── layouts/      — MainLayout, AdminLayout, AuthLayout
│   └── providers/    — QueryProvider, ThemeProvider, AuthProvider
│
├── pages/            — Route-level page components
│   ├── Home/
│   ├── About/
│   ├── Projects/
│   ├── Skills/
│   ├── Experience/
│   ├── Resume/
│   ├── Contact/
│   ├── DevLog/
│   ├── Admin/        — Dashboard, Projects, Messages, Resume, Analytics, DevLog
│   └── Auth/         — LoginPage
│
├── features/         — Domain modules (co-located API, hooks, schemas, types)
│   ├── projects/
│   ├── contact/
│   ├── resume/
│   ├── analytics/
│   └── devlog/
│
├── components/
│   ├── sections/     — Page section components (home, projects)
│   ├── shared/       — Navbar, Footer, SocialLinks, ParticleBackground
│   ├── ui/           — Badge, Button, Container, SectionHeader, PortraitFrame
│   └── devlog/       — DevLogCard, DevLogList, DevLogFilter, DevLogTimeline
│
├── hooks/            — Shared custom hooks
├── services/         — API client (axios/fetch wrapper)
├── lib/              — Utility functions
├── types/            — Shared TypeScript types
└── styles/           — tokens.css, global.css, layout.css, components.css
```

---

## Backend Structure

```
server/src/
├── config/           — env.ts, prisma.ts, supabase.ts
├── controllers/      — auth, project, contact, devlog, resume, analytics
├── services/         — auth, project, contact, devlog, resume, analytics
├── repositories/     — user, project, contact, devlog, resume, analytics
├── routes/           — auth, project, contact, devlog, resume, analytics
├── middleware/       — auth.middleware, rateLimiter, errorHandler, notFoundHandler
├── validators/       — auth, project, contact, devlog (Zod schemas)
├── types/            — auth, project, contact, devlog, analytics
├── utils/            — asyncHandler, params
├── prisma/           — schema.prisma, migrations/, seed.ts
├── app.ts            — Express factory function
└── server.ts         — HTTP server entry point
```

---

## Database Structure

```
database/
├── migrations/
│   └── 001_initial_schema.sql   — Full schema SQL (Supabase SQL Editor)
├── rls/
│   ├── policies.sql             — Table-level RLS policies
│   └── storage_policies.sql    — Storage bucket access policies
└── seeds/
    └── seed_data.sql            — Manual seed via SQL Editor
```

---

## Key Design Decisions

### Backend

**Layered architecture** — Each layer has one job. Controllers never touch Prisma. Repositories never contain business logic. Makes each layer independently testable and replaceable.

**Zod at the boundary** — All external input (request bodies) is validated at the controller level before reaching any business logic. Failures return 422 with per-field detail.

**JWT stateless auth** — No session store needed. Token carries `sub`, `email`, `role`. Middleware verifies signature on every protected request. Simple, scalable, suitable for a single-admin portfolio.

**Rate limiting tiers** — Three tiers: global API (100/15min), auth (10/15min), contact form (5/hr). Prevents brute force on login and spam on the contact form without over-restricting normal API usage.

**Prisma as the only DB interface** — No raw SQL at runtime. Type-safe queries. Schema-driven migrations. The `service_role` connection string bypasses RLS, which is correct — the Express API enforces its own auth.

### Database

**RLS as defence-in-depth** — Even though Prisma bypasses RLS via service role, enabling RLS on all tables means any accidental direct client connection or future integration can't read admin data or private messages.

**CUID primary keys** — Collision-resistant, URL-safe, sortable. Better than UUID for this use case — shorter and K-sortable.

**Append-only PageViews** — Analytics rows are never updated or deleted. This keeps the analytics table simple and fast, and preserves historical data integrity.

**Single active resume** — The `setActive` method uses an atomic two-step: `updateMany({ isActive: false })` then `update({ isActive: true })`. Prevents two active resumes from existing simultaneously.

---

## Security Model

| Layer        | Mechanism                                    |
|--------------|----------------------------------------------|
| Transport    | HTTPS (enforced by Vercel/Railway)           |
| Headers      | Helmet (CSP, HSTS, X-Frame, etc.)           |
| CORS         | Restricted to configured `CORS_ORIGIN`       |
| Rate limits  | express-rate-limit (3 tiers)                 |
| Auth         | JWT (HS256, configurable expiry)             |
| Passwords    | bcryptjs (12 rounds)                         |
| Input        | Zod validation on all mutations              |
| DB access    | RLS on all tables                            |
| Secrets      | Environment variables only, never in code    |

---

## Deployment Targets

| Service   | What it hosts         | Why                           |
|-----------|-----------------------|-------------------------------|
| Vercel    | React frontend        | Zero-config, CDN, preview URLs|
| Railway   | Express API           | Node.js, env vars, easy scale |
| Supabase  | PostgreSQL + Storage  | Managed DB, built-in storage  |

See `docs/deployment-guide.md` for the full deployment walkthrough.
