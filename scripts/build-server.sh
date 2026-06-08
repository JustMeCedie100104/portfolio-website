#!/usr/bin/env bash
# ────────────────────────────────────────────────────────────
# build-server.sh — Build the Node.js API
# Usage: ./scripts/build-server.sh
# ────────────────────────────────────────────────────────────
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SERVER_DIR="$SCRIPT_DIR/../server"

echo "📦 Building server..."

cd "$SERVER_DIR"

npm ci
npm run db:generate
npm run build

echo "✅ Server build complete → server/dist"
