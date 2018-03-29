#!/bin/sh
#nightly build script
echo ".....Building blog site....."
mkdocs build; rsync -ir site/ $1/;
echo "....Completed building blog site...."
