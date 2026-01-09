import { ROLES } from "./constants";

export const permissions = {
  admin: ["manage_users", "manage_payments"],
  model: ["edit_profile", "upload_portfolio"],
  enterprise: ["view_models", "subscribe"],
};

export function hasPermission(
  role: string,
  permission: string
): boolean {
  return permissions[role as keyof typeof permissions]?.includes(permission);
}
