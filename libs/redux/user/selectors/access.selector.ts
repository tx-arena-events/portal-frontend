import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { selectUser } from './base.selector';
import { UserModel } from '../user.model';

export const selectAuthenticated = createDraftSafeSelector(
  selectUser,
  (state: UserModel) => state.authenticated,
);

export const selectAccess = createDraftSafeSelector(
  selectUser,
  (state: UserModel) => state.access,
);
