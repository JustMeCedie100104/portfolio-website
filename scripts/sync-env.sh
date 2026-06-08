#!/usr/bin/env bash
# ────────────────────────────────────────────────────────────
# sync-env.sh — Push environment variables to hosting platforms
#
# Usage:
#   ./scripts/sync-env.sh vercel     → sync client env to Vercel
#   ./scripts/sync-env.sh railway    → sync server env to Railway
#   ./scripts/sync-env.sh all        → sync both
#
# Prerequisites:
#   vercel login   (for Vercel)
#   railway login  (for Railway)
# ────────────────────────────────────────────────────────────
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$SCRIPT_DIR/.."

sync_vercel() {
  echo "🔄 Syncing client env to Vercel..."

  CLIENT_ENV="$ROOT_DIR/client/.env"
  if [[ ! -f "$CLIENT_ENV" ]]; then
    echo "❌ client/.env not found"
    exit 1
  fi

  if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Install: npm i -g vercel"
    exit 1
  fi

  # Read each line from client/.env and push to Vercel
  while IFS='=' read -r key value; do
    # Skip comments and empty lines
    [[ "$key" =~ ^#.*$ ]] && continue
    [[ -z "$key" ]] && continue

    echo "  Setting $key..."
    echo "$value" | vercel env add "$key" production --force 2>/dev/null || true
  done < "$CLIENT_ENV"

  echo "✅ Vercel env synced."
}

sync_railway() {
  echo "🔄 Syncing server env to Railway..."

  SERVER_ENV="$ROOT_DIR/server/.env"
  if [[ ! -f "$SERVER_ENV" ]]; then
    echo "❌ server/.env not found"
    exit 1
  fi

  if ! command -v railway &> /dev/null; then
    echo "❌ Railway CLI not found. Install: npm i -g @railway/cli"
    exit 1
  fi

  cd "$ROOT_DIR/server"

  while IFS='=' read -r key value; do
    [[ "$key" =~ ^#.*$ ]] && continue
    [[ -z "$key" ]] && continue

    echo "  Setting $key..."
    railway variables set "$key=$value" 2>/dev/null || true
  done < "$SERVER_ENV"

  echo "✅ Railway env synced."
}

TARGET="${1:-all}"

case "$TARGET" in
  vercel)  sync_vercel ;;
  railway) sync_railway ;;
  all)     sync_vercel; sync_railway ;;
  *)
    echo "Usage: $0 [vercel|railway|all]"
    exit 1
    ;;
esac
