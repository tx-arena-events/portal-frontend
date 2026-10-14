import { type IUser } from '../models';
import { ENV } from '../env';

export function hasRole(
  user: IUser,
  client: string,
  role: string | Array<string>,
): boolean {
  const roles = user?.access?.[client]?.roles ?? [];
  return Array.isArray(role)
    ? role.some((r) => roles.includes(r))
    : roles.includes(role);
}

export function hasPortalRole(
  user: IUser,
  role: string | Array<string>,
): boolean {
  return hasRole(user, ENV.getClientId, role);
}

export function hasSemanticHubRole(
  user: IUser,
  role: string | Array<string>,
): boolean {
  return hasRole(user, ENV.getClientIdSemantic, role);
}

export function hasBpdmRole(
  user: IUser,
  role: string | Array<string>,
): boolean {
  return hasRole(user, ENV.getClientIdBpdm, role);
}

export function hasRegistrationRole(
  user: IUser,
  role: string | Array<string>,
): boolean {
  return hasRole(user, ENV.getClientIdRegistration, role);
}

export function hasSsiRole(user: IUser, role: string | Array<string>): boolean {
  return hasRole(user, ENV.getClientIdSsiCredential, role);
}
