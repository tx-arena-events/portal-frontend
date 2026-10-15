import type { IUser } from './user.model.ts';

export type RestrictedItem = {
  name: string;
  allowTo?: (user: IUser) => boolean;
};
