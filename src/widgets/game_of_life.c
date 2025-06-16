#include <stdint.h>
#include <stdlib.h>
#include <string.h>

#define WIDTH 64
#define HEIGHT 64

static uint8_t grid[WIDTH * HEIGHT];
static uint8_t next_grid[WIDTH * HEIGHT];

// Initialize the grid with random values
void init_grid() {
    for (int i = 0; i < WIDTH * HEIGHT; i++) {
        grid[i] = rand() % 2;
    }
}

// Get the number of live neighbors for a cell
static int count_neighbors(int x, int y) {
    int count = 0;
    for (int dy = -1; dy <= 1; dy++) {
        for (int dx = -1; dx <= 1; dx++) {
            if (dx == 0 && dy == 0) continue;
            int nx = (x + dx + WIDTH) % WIDTH;
            int ny = (y + dy + HEIGHT) % HEIGHT;
            count += grid[ny * WIDTH + nx];
        }
    }
    return count;
}

// Step the simulation forward by one generation
void step() {
    for (int y = 0; y < HEIGHT; y++) {
        for (int x = 0; x < WIDTH; x++) {
            int neighbors = count_neighbors(x, y);
            int idx = y * WIDTH + x;
            if (grid[idx]) {
                next_grid[idx] = (neighbors == 2 || neighbors == 3) ? 1 : 0;
            } else {
                next_grid[idx] = (neighbors == 3) ? 1 : 0;
            }
        }
    }
    memcpy(grid, next_grid, WIDTH * HEIGHT);
}

// Get a pointer to the grid for rendering
uint8_t* get_grid() { return grid; }

int get_width() { return WIDTH; }
int get_height() { return HEIGHT; }