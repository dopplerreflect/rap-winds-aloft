#!/bin/bash

if md5sum -c public/logo.svg.md5sum; then
  echo "No changes to logo.svg. Skipping PNG creation."
  exit 0;
fi

if [[ "$(docker images -q image-tools 2> /dev/null)" == "" ]]; then
  echo "Creating image-tools Docker image"
  docker build -t image-tools .
fi

docker run -it --rm -v `pwd`:`pwd` -w `pwd` image-tools /bin/ash -c "pwd && \
echo 'converting logo.svg to logo.png'

inkscape \
  --export-filename=./public/logo.png \
  --export-dpi=200 \
  --export-background-opacity=0 \
  ./public/logo.svg && \

for n in 32 72 96 128 144 152 192 384 512 \
; do
  echo creating logo-\${n}x\${n}.png

  convert \
    ./public/logo.png \
    -resize \${n}x\${n} \
    ./public/logo-\${n}x\${n}.png \
; done
"

echo "creating favicon.png"
mv -f ./public/logo-32x32.png ./public/favicon.png

echo "saving md5sum form logo.svg"
md5sum public/logo.svg > public/logo.svg.md5sum