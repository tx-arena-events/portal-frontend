import { IUser } from '../models';

export function hasRole(
  user: IUser,
  client: string,
  role: string | Array<string>,
): boolean {
  const roles = user.access[client]?.roles ?? [];
  return Array.isArray(role)
    ? role.some((r) => roles.includes(r))
    : roles.includes(role);
}
