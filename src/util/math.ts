export interface Vec2 {
  x: number;
  y: number;
}

export const TAU = Math.PI * 2;
export const randomInt = (max: number) => Math.floor(Math.random() * max);
export const randomElement = <T>(arr: T[]) => arr[randomInt(arr.length)]!;
