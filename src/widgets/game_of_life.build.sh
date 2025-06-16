# !/bin/bash
CURR_DIR=`pwd`
cd `dirname "$0"`
emcc game_of_life.c \
  -O3 -flto -s WASM=1 -s EXPORTED_FUNCTIONS=_init_grid,_step,_get_grid,_get_width,_get_height -s EXPORTED_RUNTIME_METHODS=ccall,cwrap,HEAPU8 \
  -o build/game_of_life.js
cd -

# remove -O3 flag for unoptimized (debuggable) JS code