#!/usr/bin/env bash
# Convenience launcher: uses the project-local Node toolchain.
set -e
ulimit -n 65536 || true
export PATH="$HOME/.local/cursor-portfolio-toolchain/node/bin:$PATH"
exec npm run dev
