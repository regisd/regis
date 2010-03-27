#!/bin/sh
# This shell script encodes a decrypted VOB into a
# mp4 file that is playable on Samsung mobile
#
# GPL 2
# (c) 2007 Regis Decamps
#
f=$1

VIDEO_BITRATE=112
VIDEO_FRAME_RATE=12
VIDEO_SIZE=cif

AUDIO_FREQ=24000
AUDIO_BITRATE=96

ffmpeg -i "$f" \
-vcodec mpeg4 \
-r $VIDEO_FRAME_RATE  \
-b $VIDEO_BITRATE \
-s $VIDEO_SIZE \
-acodec aac \
-ar $AUDIO_FREQ \
-ab $AUDIO_BITRATE \
-map 0.0 \
-map 0.1 \
"$(basename $f .vob).mp4"
