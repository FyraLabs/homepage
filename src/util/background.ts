import { point, setupCanvas } from "./canvas";
import { randomInt, TAU, randomElement } from "./math";
import { mkSimplexNoise } from "@spissvinkel/simplex-noise";

// Inspired by https://editor.p5js.org/BarneyCodes/sketches/2eES4fBEL

const canvas = document.getElementById("background") as HTMLCanvasElement;
let ctx = setupCanvas(canvas);

window.addEventListener("resize", () => (ctx = setupCanvas(canvas)));

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

window.addEventListener("keypress", (event) => {
  if (event.code === "Space") {
    noiseGenerator = mkSimplexNoise(Math.random);
  }
});

let startTime: number | undefined = undefined;

// elapsed is the amount of time since the ENTIRE animation started
// deltaTime is the time between this frame and the last
// lastBlankTime is the time since we last "blanked" the canvas to achieve the fade effect
const draw = (elapsed: number, deltaTime: number, lastBlankTime: number) => {
  if (lastBlankTime + 67 <= elapsed) {
    lastBlankTime = elapsed;
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
      (elapsed / 1000) * 60 * noiseScale * noiseScale
    );
    const a = noise * TAU;
    p.x += Math.cos(a) * (deltaTime / 12);
    p.y += Math.sin(a) * (deltaTime / 12);

    // If particle is outside of canvas, randomize it's position
    if (p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
      p.x = randomInt(canvas.width);
      p.y = randomInt(canvas.height);
    }

    point(ctx, p.x, p.y, 1);
  });

  requestAnimationFrame((time) => {
    if (startTime === undefined) {
      startTime = time;
    }

    draw(time - startTime, time - startTime - elapsed, lastBlankTime);
  });
};

draw(0, 0, 0);
