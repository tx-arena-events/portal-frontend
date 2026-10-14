import type { KeycloakTokenParsed } from 'keycloak-js';
import type { IUser } from '../models';

export function mapUser(token?: KeycloakTokenParsed): IUser {
  return {
    authenticated: !!token,
    username: token?.preferred_username,
    name: token?.name,
    company: token?.organisation,
    access: token?.resource_access ?? {},
    token: token,
  };
}
