#!/usr/bin/env sh

inkscape \
  --export-png=./public/logo.png \
  --export-dpi=200 \
  --export-background-opacity=0 \
  ./public/logo.svg

for n in 32 72 96 128 144 152 192 384 512 \
; do 
  convert ./public/logo.png \
  -define png:compression-filter=5 \
  -define png:compression-level=9 \
  -define png:compression-strategy=1 \
  -resize ${n}x${n} \
  ./public/logo-${n}x${n}.png \
; done

mv ./public/logo-32x32.png ./public/favicon.png