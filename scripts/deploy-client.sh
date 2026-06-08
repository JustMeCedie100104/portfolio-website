#!/usr/bin/env bash
# ────────────────────────────────────────────────────────────
# deploy-client.sh — Deploy frontend to Vercel
# Requires: Vercel CLI installed and logged in (vercel login)
# Usage: ./scripts/deploy-client.sh [--prod]
# ────────────────────────────────────────────────────────────
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CLIENT_DIR="$SCRIPT_DIR/../client"

PROD_FLAG=""
if [[ "${1:-}" == "--prod" ]]; then
  PROD_FLAG="--prod"
  echo "🚀 Deploying client to Vercel (PRODUCTION)..."
else
  echo "🔍 Deploying client to Vercel (preview)..."
fi

# Build first
"$SCRIPT_DIR/build-client.sh"

cd "$CLIENT_DIR"

# Check Vercel CLI is available
if ! command -v vercel &> /dev/null; then
  echo "❌ Vercel CLI not found. Install it: npm i -g vercel"
  exit 1
fi

vercel $PROD_FLAG

echo "✅ Client deployed."
