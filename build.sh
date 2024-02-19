#!/bin/bash

set -o errexit
set -o pipefail
set -o nounset

echo "INFO: build starting at $(date -u +%Y-%m-%dT%H:%M:%SZ)"

echo '{}' \
    | jq --arg COMMIT $(git rev-parse --short HEAD) '.commit|=$COMMIT' \
    | jq --arg LASTMOD $(date -u  +%Y-%m-%dT%H:%M:%SZ) '.lastmod|=$LASTMOD' \
    | jq --sort-keys . \
    > "./build.json"

jekyll build \
    --source docs

echo "INFO: build complete at $(date -u +%Y-%m-%dT%H:%M:%SZ)"
