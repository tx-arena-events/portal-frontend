import { type UserModel } from './user.model';

export const userState: UserModel = {
  authenticated: false,
  username: undefined,
  name: undefined,
  company: undefined,
  access: {},
};
