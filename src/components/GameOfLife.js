'use client'
import React, { useEffect } from "react";

export default function GameOfLife() {
  const cellSize = 8;

  useEffect(() => {
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    const gridWidth = Math.floor(width / cellSize);
    const gridHeight = Math.floor(height / cellSize);

    let grid = createGrid();
    function createGrid() {
      return Array.from({ length: gridHeight }, () =>
        Array.from({ length: gridWidth }, () => Math.random() < 0.5)
      );
    }
    
    function drawGrid() {
      ctx.clearRect(0, 0, width, height);
      for (let y = 0; y < gridHeight; y++) {
        for (let x = 0; x < gridWidth; x++) {
          if (grid[y][x]) {
            ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
          }
        }
      }
    }
    
    function countNeighbors(x, y) {
      let count = 0;
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (i === 0 && j === 0) continue;
          const nx = (x + i + gridWidth) % gridWidth;
          const ny = (y + j + gridHeight) % gridHeight;
          count += grid[ny][nx] ? 1 : 0;
        }
      }
      return count;
    }
    
    function updateGrid() {
      const newGrid = createGrid();
      for (let y = 0; y < gridHeight; y++) {
        for (let x = 0; x < gridWidth; x++) {
          const neighbors = countNeighbors(x, y);
          if (grid[y][x]) {
            newGrid[y][x] = neighbors === 2 || neighbors === 3;
          } else {
            newGrid[y][x] = neighbors === 3;
          }
        }
      }
      grid = newGrid;
    }
    
    function gameLoop() {
      updateGrid();
      drawGrid();  
      requestAnimationFrame(gameLoop);
    }
    
    gameLoop();
  }, []);

  return <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <canvas id="gameCanvas" width="800" height="600"></canvas>
      <i>Life is the eternal fight against entropy.</i>
    </div>
}