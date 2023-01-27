import { setupCanvas } from "./canvas";
import { randomInt, TAU } from "./math";
import { mkSimplexNoise } from "@spissvinkel/simplex-noise";

// Inspired by https://editor.p5js.org/BarneyCodes/sketches/2eES4fBEL

const canvas = document.getElementById("background") as HTMLCanvasElement;
const ctx = setupCanvas(canvas);

// canvas.style.width = `200px`;
// canvas.style.height = `200px`;

const particles = Array(10000)
  .fill(0)
  .map(() => ({
    x: randomInt(canvas.width),
    y: randomInt(canvas.height),
  }));

let noiseGenerator = mkSimplexNoise(Math.random);
const noiseScale = 0.01 / 5;

canvas.addEventListener("click", () => {
  noiseGenerator = mkSimplexNoise(Math.random);
});

const point = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number
) => {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, TAU);
  ctx.fill();
};

let frame = 0;
const draw = () => {
  ctx.globalCompositeOperation = "destination-out";
  ctx.fillStyle = "rgba(0, 0, 0, .05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = "source-over";

  // dark futuristic blue
  ctx.fillStyle = "#3b82f6";

  particles.forEach((p) => {
    const noise = noiseGenerator.noise3D(
      p.x * noiseScale,
      p.y * noiseScale,
      frame * noiseScale * noiseScale
    );
    const a = noise * TAU;
    p.x += Math.cos(a);
    p.y += Math.sin(a);

    // If particle is outside of canvas, randomize it's position

    if (p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
      p.x = randomInt(canvas.width);
      p.y = randomInt(canvas.height);
    }

    point(ctx, p.x, p.y, 1);
  });

  frame++;
  requestAnimationFrame(draw);
};

draw();
