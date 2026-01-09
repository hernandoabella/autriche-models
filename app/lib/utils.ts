import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/* Tailwind class merge */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* Capitalize strings */
export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/* Safe date formatting */
export function formatDate(date: Date | string) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
  }).format(new Date(date));
}

/* Mask email for previews */
export function maskEmail(email: string) {
  const [name, domain] = email.split("@");
  return `${name.slice(0, 2)}***@${domain}`;
}
