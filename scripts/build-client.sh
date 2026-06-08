#!/usr/bin/env bash
# ────────────────────────────────────────────────────────────
# build-client.sh — Build the React frontend
# Usage: ./scripts/build-client.sh
# ────────────────────────────────────────────────────────────
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CLIENT_DIR="$SCRIPT_DIR/../client"

echo "📦 Building client..."

cd "$CLIENT_DIR"

# Require VITE_API_URL to be set
if [[ -z "${VITE_API_URL:-}" ]]; then
  echo "⚠️  VITE_API_URL is not set. Using /api as fallback."
fi

npm ci
npm run build

echo "✅ Client build complete → client/dist"
