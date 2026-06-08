# ──────────────────────────────────────────────────────────────
# Stage 1: Builder
# Install all deps, generate Prisma client, compile TypeScript
# ──────────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Copy manifests first — layer-cached unless deps change
COPY package.json package-lock.json ./

# Install all dependencies (including devDeps needed for build)
RUN npm ci

# Copy source
COPY . .

# Generate Prisma client from schema
RUN npm run db:generate

# Compile TypeScript → dist/
RUN npm run build

# ──────────────────────────────────────────────────────────────
# Stage 2: Production image
# Only production dependencies + compiled output
# ──────────────────────────────────────────────────────────────
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copy manifests
COPY package.json package-lock.json ./

# Install production deps only
RUN npm ci --omit=dev

# Copy compiled output from builder
COPY --from=builder /app/dist ./dist

# Copy generated Prisma client (needed at runtime)
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma/client ./node_modules/@prisma/client

# Non-root user for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

EXPOSE 3001

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost:3001/health || exit 1

CMD ["node", "dist/server.js"]
