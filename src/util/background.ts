import { point, setupCanvas } from "./canvas";
import { randomInt, TAU, randomElement } from "./math";
import { mkSimplexNoise } from "@spissvinkel/simplex-noise";

// Inspired by https://editor.p5js.org/BarneyCodes/sketches/2eES4fBEL

const canvas = document.getElementById("background") as HTMLCanvasElement;
const ctx = setupCanvas(canvas);

const particles = Array(1000)
  .fill(0)
  .map(() => ({
    x: randomInt(canvas.width),
    y: randomInt(canvas.height),
    color: randomElement([
      "#3b82f6",
      "#8b5cf6",
      "#a855f7",
      "#d946ef",
      "#ec4899",
    ]),
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

  particles.forEach((p) => {
    ctx.fillStyle = p.color;

    const noise = noiseGenerator.noise3D(
      p.x * noiseScale,
      p.y * noiseScale,
      frame * noiseScale * noiseScale
    );
    const a = noise * TAU;
    p.x += Math.cos(a) * 1.5;
    p.y += Math.sin(a) * 1.5;

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
