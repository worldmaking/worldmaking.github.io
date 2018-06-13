#!/bin/bash

for D in *; do
    if [ -d "${D}" ]; then
        echo "folder ${D}"   # your processing here
        cd ${D}
        	rm -rf thumbs
        	mkdir thumbs
        	
        	mogrify -format jpg -sampling-factor 2x1 -quality 95 -unsharp 0x.5 -path thumbs -thumbnail 300x300 *.jpg
        	
        	# didn't really work for animated gif
        	mogrify -format png -unsharp 0x.5 -path thumbs -thumbnail 300x300 *.png
        	
        	for G in *.gif; do
        		
        		echo "gif $G"
        		gifsicle --unoptimize --resize _x150 -O3 $G -o thumbs/$G
        	done

        cd ..
    fi
done