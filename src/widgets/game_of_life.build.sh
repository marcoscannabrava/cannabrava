# !/bin/bash
CURR_DIR=$(dirname "$0")
emcc $CURR_DIR/game_of_life.c -O3 -flto -s WASM=1 -s EXPORTED_FUNCTIONS=_init_grid,_step,_get_grid -s EXPORTED_RUNTIME_METHODS=ccall,cwrap,HEAPU8 -o $CURR_DIR/build/game_of_life.js
# remove -O3 flag for unoptimized (debuggable) JS code