# Deployment Guide

**Frontend:** Vercel
**Backend:** Railway
**Database + Storage:** Supabase
**CI/CD:** GitHub Actions

---

## Architecture

```
GitHub (main branch)
    │
    ├── GitHub Actions CI
    │       ├── Type-check server
    │       ├── Build server
    │       └── Build client
    │
    ├── GitHub Actions Deploy
    │       └── Run Prisma migrations → Supabase
    │
    ├── Vercel (auto-deploy on push)
    │       └── React frontend → CDN
    │
    └── Railway (auto-deploy on push)
            └── Express API → Docker container
```

---

## Prerequisites

- GitHub account + repository
- Supabase project (see `scripts/setup-supabase.md`)
- Vercel account (free tier works)
- Railway account (free trial, then $5/month Hobby)

---

## Part 1 — Deploy the Backend to Railway

### 1.1 — Create a Railway Project

1. Go to [https://railway.app](https://railway.app)
2. Click **New Project → Deploy from GitHub repo**
3. Select your portfolio repository
4. When asked for the service root: set it to `server/`
5. Railway detects the `Dockerfile` automatically

### 1.2 — Set Environment Variables in Railway

In your Railway project → **Variables**, add every variable from `server/.env`:

| Variable | Value |
|---|---|
| `NODE_ENV` | `production` |
| `PORT` | `3001` |
| `DATABASE_URL` | Your Supabase connection string |
| `SUPABASE_URL` | Your Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Your service role key |
| `JWT_SECRET` | Your 64-byte hex secret |
| `JWT_EXPIRES_IN` | `7d` |
| `CORS_ORIGIN` | Your Vercel frontend URL (set after Step 2) |

**Do not set `ADMIN_EMAIL` or `ADMIN_PASSWORD` in production** — seed was already run locally.

### 1.3 — Set the Railway Start Command

In Railway → **Settings → Deploy**:

```
node dist/server.js
```

The `railway.toml` in `server/` already configures this.

### 1.4 — Get Your API URL

Once deployed, Railway gives you a URL like:
```
https://portfolio-api-production.up.railway.app
```

Save this — you'll need it for the Vercel frontend env.

---

## Part 2 — Deploy the Frontend to Vercel

### 2.1 — Import the Project

1. Go to [https://vercel.com](https://vercel.com)
2. Click **Add New → Project → Import Git Repository**
3. Select your portfolio repository
4. Set **Root Directory** to `client/`
5. Framework: **Vite** (auto-detected)

### 2.2 — Set Environment Variables in Vercel

In Vercel project → **Settings → Environment Variables**, add:

| Variable | Value |
|---|---|
| `VITE_API_URL` | `https://[your-railway-url]/api` |
| `VITE_SUPABASE_URL` | Your Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Your Supabase **anon** (public) key |

The anon key is in **Supabase → Project Settings → API → Project API Keys → anon public**.

### 2.3 — Set the Build Settings

Vercel reads `client/vercel.json` automatically. The rewrites handle client-side routing (React Router).

### 2.4 — Deploy

Click **Deploy**. Vercel builds and deploys. You get a URL like:
```
https://portfolio-website.vercel.app
```

Or connect your custom domain in **Vercel → Settings → Domains**.

### 2.5 — Update CORS_ORIGIN in Railway

Go back to Railway → **Variables** and update:
```
CORS_ORIGIN=https://portfolio-website.vercel.app
```

Or your custom domain if you've connected one.

---

## Part 3 — GitHub Actions CI/CD

### 3.1 — Add GitHub Secrets

In your GitHub repository → **Settings → Secrets and variables → Actions → New repository secret**, add:

| Secret | Value |
|---|---|
| `DATABASE_URL` | Supabase connection string |
| `VITE_API_URL` | Railway API URL + `/api` |
| `VITE_SUPABASE_URL` | Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Supabase anon key |

### 3.2 — How the Pipelines Work

**On every push / pull request → `ci.yml` runs:**
1. Type-checks the server (`tsc --noEmit`)
2. Builds the server (`tsc`)
3. Builds the client (`vite build`)

Protects `main` from broken code merging.

**On push to `main` → `deploy.yml` runs:**
1. Runs the CI checks
2. Runs `prisma migrate deploy` against the production Supabase DB
3. Vercel auto-deploys the frontend (GitHub integration)
4. Railway auto-deploys the backend (GitHub integration)

You never need to manually deploy — push to `main` and everything runs.

### 3.3 — Protect the Main Branch (recommended)

In GitHub → **Settings → Branches → Add branch protection rule**:

- Branch name pattern: `main`
- ✅ Require status checks to pass before merging
- Select: `Lint & Build` (from `ci.yml`)
- ✅ Require branches to be up to date

---

## Part 4 — Custom Domain (Optional)

### Vercel

1. Vercel → **Settings → Domains → Add**
2. Enter your domain (e.g. `markcedricsalinas.dev`)
3. Add the DNS records Vercel provides at your domain registrar
4. Vercel provisions SSL automatically

### Railway

1. Railway → **Settings → Networking → Custom Domain**
2. Enter your API subdomain (e.g. `api.markcedricsalinas.dev`)
3. Add the CNAME record at your registrar
4. Update `CORS_ORIGIN` in Railway vars to your production frontend domain

---

## Part 5 — Post-Deployment Verification

Run these checks after every deployment:

```bash
# Health check
curl https://[your-railway-url]/health
# Expected: {"status":"ok","env":"production"}

# Public projects endpoint
curl https://[your-railway-url]/api/projects
# Expected: JSON array

# Auth
curl -X POST https://[your-railway-url]/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@portfolio.dev","password":"YourPassword"}'
# Expected: {"token":"...","user":{...}}
```

---

## Environment Variables Summary

### server/.env (local dev only — gitignored)
```env
NODE_ENV=development
PORT=3001
DATABASE_URL=postgresql://...
SUPABASE_URL=https://...
SUPABASE_SERVICE_ROLE_KEY=...
JWT_SECRET=...
JWT_EXPIRES_IN=7d
CORS_ORIGIN=http://localhost:5173
ADMIN_EMAIL=admin@portfolio.dev
ADMIN_PASSWORD=...
```

### client/.env (local dev only — gitignored)
```env
VITE_API_URL=http://localhost:3001/api
VITE_SUPABASE_URL=https://...
VITE_SUPABASE_ANON_KEY=...
```

### GitHub Secrets (CI/CD)
```
DATABASE_URL
VITE_API_URL
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
```

### Railway Variables (production)
```
NODE_ENV=production
PORT=3001
DATABASE_URL
SUPABASE_URL
SUPABASE_SERVICE_ROLE_KEY
JWT_SECRET
JWT_EXPIRES_IN=7d
CORS_ORIGIN=[vercel-url]
```

### Vercel Variables (production)
```
VITE_API_URL=[railway-url]/api
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
```
