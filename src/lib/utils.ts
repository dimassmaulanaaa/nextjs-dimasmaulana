import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFormatMonthYear(date: string) {
  const options = {
    year: "numeric",
    month: "long",
  } as const;

  return new Date(date).toLocaleDateString("en-US", options);
}
