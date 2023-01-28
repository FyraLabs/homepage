import { point, setupCanvas } from "./canvas";
import { randomInt, TAU } from "./math";
import { mkSimplexNoise } from "@spissvinkel/simplex-noise";

// Inspired by https://editor.p5js.org/BarneyCodes/sketches/2eES4fBEL

const canvas = document.getElementById("background") as HTMLCanvasElement;
const ctx = setupCanvas(canvas);

const particles = Array(2000)
  .fill(0)
  .map(() => ({
    x: randomInt(canvas.width),
    y: randomInt(canvas.height),
  }));

let noiseGenerator = mkSimplexNoise(Math.random);
const noiseScale = 0.01 / 2;

canvas.addEventListener("click", () => {
  noiseGenerator = mkSimplexNoise(Math.random);
});

window.addEventListener("resize", () => {
  setupCanvas(canvas);
});

const draw = (frame: number) => {
  if (frame % 4 == 0) {
    ctx.globalAlpha = 0.1;
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  ctx.globalAlpha = 1;
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

  requestAnimationFrame(() => draw(frame + 1));
};

draw(0);
