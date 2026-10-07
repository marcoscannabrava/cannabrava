import React, { useEffect, useRef } from "react"

const CELL = 10
const FRAMES_PER_STEP = 4

export default function GameOfLife() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext("2d")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    const w = Math.ceil(canvas.width / CELL)
    const h = Math.ceil(canvas.height / CELL)
    let grid = Array.from({ length: h }, () =>
      Array.from({ length: w }, () => Math.random() < 0.3)
    )
    let frame = 0
    let raf

    function next() {
      return grid.map((row, y) =>
        row.map((alive, x) => {
          let n = 0
          for (let i = -1; i <= 1; i++)
            for (let j = -1; j <= 1; j++)
              if (i || j) n += grid[(y + j + h) % h][(x + i + w) % w] ? 1 : 0
          return alive ? n === 2 || n === 3 : n === 3
        })
      )
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      grid.forEach((row, y) =>
        row.forEach(
          (alive, x) =>
            alive && ctx.fillRect(x * CELL, y * CELL, CELL - 1, CELL - 1)
        )
      )
    }

    function loop() {
      if (++frame % FRAMES_PER_STEP === 0) {
        grid = next()
        draw()
      }
      raf = requestAnimationFrame(loop)
    }

    draw()
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) loop()
    return () => cancelAnimationFrame(raf)
  }, [])

  return <canvas ref={ref} className="life-backdrop" aria-hidden="true" />
}
