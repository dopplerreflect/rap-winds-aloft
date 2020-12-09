#!/bin/bash

if [[ "$(docker images -q image-tools 2> /dev/null)" == "" ]]; then
  echo "Creating image-tools Docker image"
  docker build -t image-tools .
fi

docker run -it --rm -v `pwd`:`pwd` -w `pwd` image-tools /bin/ash -c "pwd && \
inkscape \
  --export-filename=./public/logo.png \
  --export-dpi=200 \
  --export-background-opacity=0 \
  ./public/logo.svg && \

for n in 32 72 96 128 144 152 192 384 512 \
; do 
  convert ./public/logo.png \
  -define png:compression-filter=5 \
  -define png:compression-level=9 \
  -define png:compression-strategy=1 \
  -resize \${n}x\${n} \
  ./public/logo-\${n}x\${n}.png \
; done
"

# mv ./public/logo-32x32.png ./public/favicon.png