import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const classNames = (...args: string[]) => args.filter(Boolean).join(" ");

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
