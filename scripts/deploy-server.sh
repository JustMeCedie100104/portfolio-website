#!/usr/bin/env bash
# ────────────────────────────────────────────────────────────
# deploy-server.sh — Deploy backend to Railway
# Requires: Railway CLI installed and logged in (railway login)
# Usage: ./scripts/deploy-server.sh
# ────────────────────────────────────────────────────────────
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SERVER_DIR="$SCRIPT_DIR/../server"

echo "🚀 Deploying server to Railway..."

# Check Railway CLI is available
if ! command -v railway &> /dev/null; then
  echo "❌ Railway CLI not found. Install it: npm i -g @railway/cli"
  exit 1
fi

cd "$SERVER_DIR"

# Run production migration before deploying
echo "🔄 Running production migrations..."
npx prisma migrate deploy --schema src/prisma/schema.prisma

# Deploy via Railway CLI
railway up --detach

echo "✅ Server deployed to Railway."
