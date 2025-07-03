---
title: on cross-platform compilation systems
date: "2025-05-27T00:00:00.000Z"
description: CMake mess. Are Bazel or build2 better? Cargo definitely is.
---

# what a mess C build systems are

Looking into four major build systems in this post. **CMake**, **build2**, **Bazel**, and comparing them to Rust's **Cargo**. This post was motivated by some work I was doing compiling C to WASM.

## an example program: open a window, render "hello world" and an image

```c
// main.c example
#include <SDL.h>
#include <SDL_image.h>
#include <stdio.h>

int main(int argc, char* argv[]) {
    // ...
    SDL_Window* win = SDL_CreateWindow("Hello World Window", 100, 100, 640, 480, SDL_WINDOW_SHOWN);
    // ...
    SDL_Surface* img = IMG_Load("hello.png");
    // this would require having the `hello.png` file in the same directory as the executable
}
```

## CMake

**CMakeLists.txt:**
```cmake
cmake_minimum_required(VERSION 3.10)
project(HelloWindow C)

find_package(SDL2 REQUIRED)
find_package(SDL2_image REQUIRED)

add_executable(hello main.c)
target_link_libraries(hello SDL2::SDL2 SDL2_image::SDL2_image)
```

- declarative but odd syntax
- cross-platform support

## build2

**buildfile:**
```
exe{hello}: {hxx cxx}{main} \
            libsdl2%lib{sdl2} \
            libsdl2_image%lib{sdl2_image}
```

- declarative and simpler syntax than CMake
- automatic header dependency extraction, interesting
- docs are very rough

## Bazel

**BUILD file:**
```python
load("@rules_cc//cc:defs.bzl", "cc_binary")

cc_binary(
    name = "hello",
    srcs = ["main.c"],
    deps = [
        "@sdl2//:sdl2",
        "@sdl2_image//:sdl2_image",
    ],
    data = ["hello.png"],
)
```

**WORKSPACE file:**
```python
http_archive(
    name = "sdl2",
    url = "https://github.com/libsdl-org/SDL/releases/download/release-2.28.5/SDL2-2.28.5.tar.gz",
    # ... other fields ...
)
http_archive(
    name = "sdl2_image",
    url = "https://github.com/libsdl-org/SDL_image/releases/download/release-2.8.2/SDL2_image-2.8.2.tar.gz",
    # ... other fields ...
)
```

- cc_binary.data! it can bundle the image as a static resource. definitely feels like something that is missing from CMake and build2 that require the image file to be present in the directory

## Rust's Cargo

**Cargo.toml:**
```toml
[package]
name = "hello_window"
version = "0.1.0"
edition = "2021"

[dependencies]
iced = { version = "0.10", features = ["image"] }
```

- dead simple, just works, handles compilation, linking, static assets...

## References

- [OpenCV with CMake example (shows CMakeLists.txt for image display)](https://docs.opencv.org/4.x/db/df5/tutorial_linux_gcc_cmake.html)
- [Bazel C++ build example and structure](https://blog.devgenius.io/getting-started-with-bazel-for-c-cb3944c673f)
- [Rust Iced GUI with image example](https://stackoverflow.com/questions/62712245/draw-img-with-iced-rust)
- [SDL2, SDL2_image with CMake on Windows](https://www.reddit.com/r/sdl/comments/134kpd0/how_to_setup_sdl2_sdl_image_with_cmake_on_windows/)
- [build2 build system manual](https://build2.org/build2/doc/build2-build-system-manual.xhtml)
- [Bazel C/C++ rules and static resource handling](https://bazel.build/reference/be/c-cpp)
- [build2 toolchain introduction](https://build2.org/build2-toolchain/doc/build2-toolchain-intro.xhtml)
- [Setting up a basic Windows C++ project with CMake for Visual Studio 2022](https://www.dominikgrabiec.com/cmake/2022/11/11/setting_up_basic_project_cmake_visual_studio.html)
- [How to display images on opening window using #OpenCV | #GUI #Python | Tuitions Tonight](https://www.youtube.com/watch?v=uG_ZLZD-vPA)
- [Image viewer (C)](https://tecnocode.co.uk/misc/platform-demos/image-viewer.c.xhtml)
- [Code a GUI in C from Scratch | 2D Graphics Engine & BMP Tutorial](https://www.youtube.com/watch?v=Z6BWRcfnivo) - good channel
- [GitHub - bsdlab/dp-c-sdl2-example: An example of rendering text and images with SDL2 including sending and reading LSL markers](https://github.com/bsdlab/dp-c-sdl2-example)

