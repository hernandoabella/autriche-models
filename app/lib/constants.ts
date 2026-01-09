export const ROLES = {
  ADMIN: "ADMIN",
  MODEL: "MODEL",
  ENTERPRISE: "ENTERPRISE",
} as const;

export type Role = typeof ROLES[keyof typeof ROLES];