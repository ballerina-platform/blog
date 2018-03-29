#!/bin/sh
#nightly build script
echo ".....Building blog site....."
mkdocs build; mkdir -p $1; rsync -ir ./site/ $1/;
echo "....Completed building blog site...."
