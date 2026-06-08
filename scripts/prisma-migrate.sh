#!/usr/bin/env bash
# ────────────────────────────────────────────────────────────
# prisma-migrate.sh
# Runs Prisma migrations from the project root.
# Usage:
#   ./scripts/prisma-migrate.sh          — runs pending migrations
#   ./scripts/prisma-migrate.sh reset    — resets DB and re-runs all
# ────────────────────────────────────────────────────────────

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SERVER_DIR="$SCRIPT_DIR/../server"

cd "$SERVER_DIR"

if [[ "${1:-}" == "reset" ]]; then
  echo "⚠️  Resetting database..."
  npx prisma migrate reset --schema src/prisma/schema.prisma --force
else
  echo "🔄 Running pending migrations..."
  npx prisma migrate dev --schema src/prisma/schema.prisma
fi

echo "✅ Migration complete."
