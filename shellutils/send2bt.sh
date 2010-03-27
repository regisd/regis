#!/bin/bash
# This program sends file(s) to my bluetooth device
# 
# GPL 2
# (c) 2007, Regis Decamps
#
# Requires gtkpod:/usr/share/gtkpod/scripts/convert-ogg2mp3.sh
#

# dest bluetooth device 
BT_DEVICE="00:1A:8A:22:26:CA"

# this script requires at least one argument
if [ $# == 0 ] ; then
	echo "requires file(s) argument"
	exit
fi

# foreach argument (supposely a file name)
# note that $@ is an array. Filename can contain spaces.
for file in "$@" ; do
	# if file extension is "ogg"
	if [ "$(basename $file .ogg)" != "$file" ] ; then
		echo "convert '$file' to mp3"
		#last line is converted filename
		tmpfile=$(mktemp)
		/usr/share/gtkpod/scripts/convert-ogg2mp3.sh "$file" > $tmpfile
		file=$(tail -n 1 $tmpfile)
	fi
	# send to bluetooth device mobile phone
	obexftp -b $BT_DEVICE -p "$file"
done
