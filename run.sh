#!/bin/bash

set -o errexit
set -o pipefail
set -o nounset

jekyll build \
    --source docs

export BROWSER=none

netlify dev \
    --geo=mock \
    --port=4000
