import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export function mapObjectValues(obj, callback) {
  const result = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = callback(obj[key], key, obj);
    }
  }
  return result;
}
