# WASM Widgets

Explorations of low level code and cross-platform compilation.

```sh
cd src/widgets

# to compile each widget to wasm, run:
emcc game_of_life.c -O3 -flto -s WASM=1 -s EXPORTED_FUNCTIONS=_init_grid,_step,_get_grid -s EXPORTED_RUNTIME_METHODS=ccall,cwrap,HEAPU8 -o game_of_life.js
# remove -O3 flag for unoptimized (debuggable) JS code

# to test it, serve the folder and open the html file in the browser
python3 -m http.server 8000
```
