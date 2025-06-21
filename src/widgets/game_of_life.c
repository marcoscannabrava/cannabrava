#include <stdint.h>
#include <stdlib.h>
#include <string.h>

#define WIDTH 64
#define HEIGHT 64

static uint8_t grid[HEIGHT][WIDTH];
static uint8_t next_grid[HEIGHT][WIDTH];

// Initialize the grid with random values
void init_grid() {
    for (int y = 0; y < HEIGHT; y++) {
        for (int x = 0; x < WIDTH; x++) {
            grid[y][x] = rand() % 2;
        }
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
            count += grid[ny][nx];
        }
    }
    return count;
}

// Step the simulation forward by one generation
void step() {
    for (int y = 0; y < HEIGHT; y++) {
        for (int x = 0; x < WIDTH; x++) {
            int neighbors = count_neighbors(x, y);
            if (grid[y][x]) {
                next_grid[y][x] = (neighbors == 2 || neighbors == 3) ? 1 : 0;
            } else {
                next_grid[y][x] = (neighbors == 3) ? 1 : 0;
            }
        }
    }
    memcpy(grid, next_grid, sizeof(grid));
}

// Get a pointer to the grid for rendering
uint8_t* get_grid() { return &grid[0][0]; }

int get_width() { return WIDTH; }
int get_height() { return HEIGHT; }