export const setupCanvas = (canvas: HTMLCanvasElement) => {
  const dpr = window.devicePixelRatio || 1;

  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;

  console.log("canvas.width", canvas.width);
  console.log("canvas.height", canvas.height);

  const ctx = canvas.getContext("2d")!;
  ctx.scale(dpr, dpr);

  return ctx;
};
