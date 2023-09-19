import { TAU } from "./math";

export const setupCanvas = (canvas: HTMLCanvasElement) => {
  const dpr = window.devicePixelRatio || 1;

  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;

  const ctx = canvas.getContext("2d")!;
  ctx.scale(dpr, dpr);

  return ctx;
};

export const point = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number,
) => {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, TAU);
  ctx.fill();
};
