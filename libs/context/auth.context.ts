import { createContext } from 'react';
import type { IUser } from '../models';

export type AuthContextValue = {
  user: IUser;
  login: () => void;
  logout: () => void;
  hasRole: (client: string, role: string | Array<string>) => boolean;
};

export const authContext = createContext<AuthContextValue | undefined>(
  undefined,
);
