import {
  createContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react';
import { hasRole, mapUser } from '../helpers';
import type { IUser } from '../models';
import { KeycloakService } from '../services';

type AuthContextValue = {
  user: IUser;
  login: () => void;
  logout: () => void;
  hasRole: (client: string, role: string | Array<string>) => boolean;
};

export const authContext = createContext<AuthContextValue | undefined>(
  undefined,
);

export function AuthProvider(props: Readonly<PropsWithChildren>) {
  const { children } = props;
  const [user, setUser] = useState<IUser>(() => mapUser());

  useEffect(() => {
    const sync = () => setUser(mapUser(KeycloakService.tokenParsed));
    const unsubscribe = KeycloakService.onTokenRefreshed(sync);

    KeycloakService.init()
      .then((authenticated) => {
        if (authenticated) sync();
        else KeycloakService.login();
      })
      .catch((error: unknown) => {
        console.error('Keycloak initialization failed:', error);
      });

    return unsubscribe;
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      login: () => KeycloakService.login(),
      logout: () => KeycloakService.logout(),
      hasRole: (client, role) => hasRole(user, client, role),
    }),
    [user],
  );

  if (!user.authenticated) return null;

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}