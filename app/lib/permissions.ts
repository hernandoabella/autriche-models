import type { Role } from "./constants";

type Permissions = {
  canAccessAdmin?: boolean;
  canManageModels?: boolean;
  canManageEnterprises?: boolean;
  canManagePayments?: boolean;
  canViewAllModels?: boolean;
  canEditAllProfiles?: boolean;

  canAccessModelDashboard?: boolean;
  canEditOwnProfile?: boolean;
  canPublishProfile?: boolean;
  canViewEnterpriseRequests?: boolean;

  canAccessEnterpriseDashboard?: boolean;
  canViewCatalog?: boolean;
  canViewModelPreview?: boolean;
  canContactModels?: boolean;
};

export const PERMISSIONS: Record<Role, Permissions> = {
  ADMIN: {
    canAccessAdmin: true,
    canManageModels: true,
    canManageEnterprises: true,
    canManagePayments: true,
    canViewAllModels: true,
    canEditAllProfiles: true,
  },

  MODEL: {
    canAccessModelDashboard: true,
    canEditOwnProfile: true,
    canPublishProfile: true,
    canViewEnterpriseRequests: true,
  },

  ENTERPRISE: {
    canAccessEnterpriseDashboard: true,
    canViewCatalog: true,
    canViewModelPreview: true,
    canContactModels: false,
  },
};

export function hasPermission(
  role: Role,
  permission: keyof Permissions
): boolean {
  return Boolean(PERMISSIONS[role]?.[permission]);
}
