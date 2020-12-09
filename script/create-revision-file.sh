#!/usr/bin/env sh

echo "{\"revision\":\"$(git rev-parse HEAD | cut -c1-8)\"}" > ./src/Revision.json
