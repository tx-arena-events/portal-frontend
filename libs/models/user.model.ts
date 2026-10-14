import { type KeycloakResourceAccess } from 'keycloak-js';

export type IUser = {
  authenticated: boolean;
  username?: string;
  name?: string;
  company?: string;
  access: KeycloakResourceAccess;
};
