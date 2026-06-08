# Portfolio Website

Production-grade personal portfolio built with **React**, **TypeScript**, **Node.js**, **Prisma**, and **Supabase**.

## Structure

```
client/     → React frontend (Vite)
server/     → Node.js REST API (Express)
database/   → SQL migrations, seeds, RLS policies
docs/       → Architecture & API documentation
scripts/    → Build & deployment automation
```

## Quick Start

```bash
# Install dependencies
npm install

# Copy environment files
cp server/.env.example server/.env
cp client/.env.example client/.env

# Run database migrations
npm run db:migrate

# Start dev servers (client + API)
npm run dev
```

| Service  | URL                   |
|----------|-----------------------|
| Frontend | http://localhost:5173 |
| API      | http://localhost:3001 |

## Documentation

- [Architecture](./docs/architecture.md)
- [API](./docs/api-documentation.md)
- [Database Schema](./docs/database-schema.md)
- [Dev Log Guide](./docs/dev-log-guide.md)
- [Deployment](./docs/deployment-guide.md)
