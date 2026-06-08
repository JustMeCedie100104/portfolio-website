# PHASE-4-DEPLOYMENT.md

## Phase 4: Deployment & DevOps

**Status:** COMPLETED
**Frontend:** Vercel
**Backend:** Railway (Docker)
**Database + Storage:** Supabase
**CI/CD:** GitHub Actions

---

## What Was Built in This Phase

```
.github/
└── workflows/
    ├── ci.yml          — Lint, type-check, build on every push/PR
    └── deploy.yml      — Prisma migration on push to main

server/
├── Dockerfile          — Multi-stage build (builder + production runner)
├── .dockerignore       — Excludes node_modules, .env, dist
└── railway.toml        — Railway deployment configuration

client/
└── vercel.json         — Vercel build settings, SPA rewrites, cache headers

scripts/
├── build-client.sh     — Build React frontend
├── build-server.sh     — Build Node API
├── deploy-client.sh    — Deploy to Vercel via CLI
├── deploy-server.sh    — Deploy to Railway via CLI + run migrations
└── sync-env.sh         — Push .env vars to Vercel/Railway via CLIs

docker-compose.yml      — Local dev: Postgres + API container

docs/
└── deployment-guide.md — Complete step-by-step deployment walkthrough

package.json            — Added db:migrate:prod (prisma migrate deploy)
server/package.json     — Added db:migrate:prod
```

---

## Docker Setup

### Multi-Stage Dockerfile

```
Stage 1 (builder):
  node:20-alpine
  npm ci (all deps)
  prisma generate
  tsc → dist/

Stage 2 (runner):
  node:20-alpine
  npm ci --omit=dev (production deps only)
  copy dist/ from builder
  copy .prisma/ and @prisma/client from builder
  non-root user (appuser)
  HEALTHCHECK → GET /health
```

The final image contains no TypeScript source, no devDependencies, and runs as a non-root user.

### Local Docker Dev

```bash
docker compose up -d        # start postgres + api
docker compose logs -f api  # watch API logs
docker compose down         # stop
```

---

## CI/CD Pipeline

### ci.yml — triggers on every push and PR to main

```
Checkout
  ↓
Setup Node 20
  ↓
Install deps (root + server + client)
  ↓
Generate Prisma Client
  ↓
Type-check server (tsc --noEmit)
  ↓
Build server (tsc)
  ↓
Build client (vite build)
```

### deploy.yml — triggers on push to main only

```
CI check (reuses ci.yml)
  ↓
Run Prisma migrations (prisma migrate deploy)
  ↓
Vercel auto-deploys frontend (GitHub integration)
Railway auto-deploys backend (GitHub integration)
```

---

## Deployment Flow

```
git push origin main
        │
        ├── GitHub Actions: CI (type-check + build)
        │
        ├── GitHub Actions: prisma migrate deploy → Supabase
        │
        ├── Vercel: detects push, builds client/, deploys to CDN
        │
        └── Railway: detects push, builds Dockerfile, deploys container
```

Zero-downtime: Railway uses rolling deploys. Vercel is atomic (instant swap).

---

## Environment Variables

Three separate scopes — never mixed:

| Scope | Location | Used by |
|---|---|---|
| Local dev | `server/.env`, `client/.env` | `npm run dev` |
| CI | GitHub Secrets | GitHub Actions workflows |
| Production | Railway Variables, Vercel Variables | Live services |

---

## Security Checklist

- [x] Multi-stage Docker build (no source or devDeps in production image)
- [x] Non-root user in Docker container
- [x] Docker HEALTHCHECK configured
- [x] `.env` files gitignored — never committed
- [x] `.dockerignore` prevents `.env` from entering image
- [x] All secrets in environment variables, not in code
- [x] `prisma migrate deploy` used in CI (not `migrate dev`)
- [x] `CORS_ORIGIN` locked to specific frontend domain in production
- [x] Branch protection recommended (CI must pass before merge)
- [x] Vercel security headers (X-Frame-Options, X-Content-Type-Options, etc.)
- [x] Immutable cache headers on Vite hashed assets

---

## Production Commands Reference

```bash
# Run migrations in production (CI does this automatically)
npm run db:migrate:prod

# Manual deploy via CLI
./scripts/deploy-client.sh --prod   # Vercel production
./scripts/deploy-server.sh          # Railway

# Sync env vars from .env files to platforms
./scripts/sync-env.sh vercel        # push client/.env to Vercel
./scripts/sync-env.sh railway       # push server/.env to Railway
./scripts/sync-env.sh all           # both

# Local Docker
docker compose up -d
docker compose down
```

---

## Full Deployment Walkthrough

See `docs/deployment-guide.md` for the complete step-by-step guide covering:
- Railway project setup
- Vercel project setup
- GitHub Secrets configuration
- Custom domain setup
- Post-deployment verification
