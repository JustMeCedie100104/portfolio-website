# PHASE-2-BACKEND.md

## Phase 2: Backend Development

**Status:** COMPLETED
**Stack:** Node.js · Express · TypeScript · Prisma · Zod · JWT · bcryptjs

---

## Overview

The backend is a fully layered REST API following the
Controller → Service → Repository → Prisma pattern.
Every public mutation is validated with Zod.
Every admin route is protected by JWT middleware.
Rate limiting is applied globally and tightened on auth and contact endpoints.

---

## Project Structure

```
server/src/
├── config/
│   ├── env.ts            — Environment variable loader (fail-fast on missing keys)
│   ├── prisma.ts         — Prisma client singleton
│   └── supabase.ts       — Supabase client (for storage operations)
│
├── controllers/          — Parse request, delegate to service, send response
│   ├── auth.controller.ts
│   ├── project.controller.ts
│   ├── contact.controller.ts
│   ├── devlog.controller.ts
│   ├── resume.controller.ts
│   └── analytics.controller.ts
│
├── services/             — Business logic
│   ├── auth.service.ts
│   ├── project.service.ts
│   ├── contact.service.ts
│   ├── devlog.service.ts
│   ├── resume.service.ts
│   └── analytics.service.ts
│
├── repositories/         — Prisma database access only
│   ├── user.repository.ts
│   ├── project.repository.ts
│   ├── contact.repository.ts
│   ├── devlog.repository.ts
│   ├── resume.repository.ts
│   └── analytics.repository.ts
│
├── routes/               — Express router definitions
│   ├── auth.routes.ts
│   ├── project.routes.ts
│   ├── contact.routes.ts
│   ├── devlog.routes.ts
│   ├── resume.routes.ts
│   └── analytics.routes.ts
│
├── middleware/
│   ├── auth.middleware.ts     — JWT verification, attaches req.user
│   ├── rateLimiter.ts         — api / auth / contact rate limiters
│   ├── errorHandler.ts        — Zod errors → 422, domain errors → correct codes
│   └── notFoundHandler.ts     — 404 catch-all
│
├── validators/           — Zod schemas (input validation)
│   ├── auth.validator.ts
│   ├── project.validator.ts
│   ├── contact.validator.ts
│   └── devlog.validator.ts
│
├── types/                — TypeScript interfaces
│   ├── auth.types.ts
│   ├── project.types.ts
│   ├── contact.types.ts
│   ├── devlog.types.ts
│   └── analytics.types.ts
│
├── utils/
│   ├── asyncHandler.ts   — Wraps async route handlers, forwards errors to next()
│   └── params.ts         — Safe req.params extraction
│
├── prisma/
│   ├── schema.prisma     — Database schema
│   └── seed.ts           — Admin user + sample data
│
├── app.ts                — Express app factory
└── server.ts             — HTTP server entry point
```

---

## API Endpoints

### Auth  `POST /api/auth/*`

| Method | Path              | Auth | Description           |
|--------|-------------------|------|-----------------------|
| POST   | /login            | —    | Email + password login, returns JWT |
| POST   | /logout           | ✅   | Client-side token discard |
| GET    | /profile          | ✅   | Returns authenticated user info |

### Projects  `/api/projects/*`

| Method | Path              | Auth | Description           |
|--------|-------------------|------|-----------------------|
| GET    | /                 | —    | Published projects     |
| GET    | /featured         | —    | Featured projects only |
| GET    | /:slug            | —    | Single project by slug |
| GET    | /admin/all        | ✅   | All projects (admin)   |
| POST   | /                 | ✅   | Create project         |
| PUT    | /:id              | ✅   | Update project         |
| DELETE | /:id              | ✅   | Delete project         |

### Contact  `/api/contact/*`

| Method | Path              | Auth | Description              |
|--------|-------------------|------|--------------------------|
| POST   | /                 | —    | Submit contact message    |
| GET    | /                 | ✅   | All messages (admin)      |
| GET    | /:id              | ✅   | Single message by id      |
| PATCH  | /:id/read         | ✅   | Mark message as read      |
| DELETE | /:id              | ✅   | Delete message            |

### DevLog  `/api/devlogs/*`

| Method | Path              | Auth | Description              |
|--------|-------------------|------|--------------------------|
| GET    | /                 | —    | Published entries         |
| GET    | /:slug            | —    | Single entry by slug      |
| GET    | /admin/all        | ✅   | All entries (admin)       |
| POST   | /                 | ✅   | Create entry              |
| PUT    | /:id              | ✅   | Update entry              |
| DELETE | /:id              | ✅   | Delete entry              |

### Resume  `/api/resume/*`

| Method | Path              | Auth | Description              |
|--------|-------------------|------|--------------------------|
| GET    | /active           | —    | Active resume file URL    |
| GET    | /                 | ✅   | All resume versions       |
| POST   | /                 | ✅   | Upload new resume         |
| PATCH  | /:id/activate     | ✅   | Set resume as active      |
| DELETE | /:id              | ✅   | Delete resume version     |

### Analytics  `/api/analytics/*`

| Method | Path              | Auth | Description              |
|--------|-------------------|------|--------------------------|
| POST   | /track            | —    | Track a page view         |
| GET    | /summary          | ✅   | Dashboard summary data    |

---

## Authentication

JWT-based, stateless.

```
POST /api/auth/login  →  { token, user }
Include token:  Authorization: Bearer <token>
Expiry:         7 days (configurable via JWT_EXPIRES_IN)
```

Passwords are hashed with bcryptjs (12 rounds).
The JWT secret is loaded from `JWT_SECRET` env var — the server will refuse to start if it is missing.

---

## Rate Limiting

| Limiter       | Window    | Max requests | Applied to                  |
|---------------|-----------|--------------|-----------------------------|
| apiLimiter    | 15 min    | 100          | All `/api/*` routes         |
| authLimiter   | 15 min    | 10           | `POST /api/auth/login`      |
| contactLimiter| 60 min    | 5            | `POST /api/contact`         |

---

## Validation

All inputs are validated with Zod before reaching the service layer.
Validation failures return `422 Unprocessable Entity` with per-field error details.

---

## Error Responses

| Scenario              | Status | Body                                      |
|-----------------------|--------|-------------------------------------------|
| Zod validation fail   | 422    | `{ error, issues: [{ field, message }] }` |
| Invalid credentials   | 401    | `{ error: "Invalid credentials" }`        |
| Missing/invalid token | 401    | `{ error: "Unauthorized" }` or `"Invalid or expired token"` |
| Resource not found    | 404    | `{ error: "..." }`                        |
| Server error          | 500    | `{ error: "Internal server error" }`      |

---

## Environment Variables

| Variable                | Required | Description                              |
|-------------------------|----------|------------------------------------------|
| DATABASE_URL            | ✅       | PostgreSQL connection string             |
| JWT_SECRET              | ✅       | ≥32-char random string                   |
| PORT                    | —        | Default: 3001                            |
| NODE_ENV                | —        | development / production                 |
| JWT_EXPIRES_IN          | —        | Default: 7d                              |
| CORS_ORIGIN             | —        | Default: http://localhost:5173           |
| SUPABASE_URL            | —        | Required for file storage operations     |
| SUPABASE_SERVICE_ROLE_KEY| —       | Required for file storage operations     |
| ADMIN_EMAIL             | —        | Seed only. Default: admin@portfolio.dev  |
| ADMIN_PASSWORD          | —        | Seed only. Change before running         |

---

## Local Development

```bash
# 1. Install dependencies
cd server
npm install

# 2. Copy and fill environment variables
cp .env.example .env

# 3. Generate Prisma client
npm run db:generate

# 4. Run migrations (requires running Postgres)
npm run db:migrate

# 5. Seed the database
npm run db:seed

# 6. Start dev server (hot reload)
npm run dev
```

---

## Scripts

| Script           | Description                              |
|------------------|------------------------------------------|
| `npm run dev`    | Start with tsx watch (hot reload)        |
| `npm run build`  | Compile TypeScript to dist/              |
| `npm run start`  | Run compiled dist/server.js              |
| `npm run lint`   | Type-check without emitting              |
| `npm run db:generate` | Regenerate Prisma client            |
| `npm run db:migrate`  | Run pending migrations              |
| `npm run db:seed`     | Seed admin user + sample data       |
| `npm run db:studio`   | Open Prisma Studio (DB GUI)         |

---

## Security Checklist

- [x] Passwords hashed with bcrypt (12 rounds)
- [x] JWT signature verified on every protected route
- [x] Rate limiting on all API routes
- [x] Stricter rate limiting on login and contact
- [x] Input validation (Zod) on all mutations
- [x] Helmet security headers
- [x] CORS restricted to configured origin
- [x] Error messages sanitized in production
- [x] Environment secrets never hard-coded
