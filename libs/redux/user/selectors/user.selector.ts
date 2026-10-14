import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { selectUser } from './base.selector';
import { UserModel } from '../user.model';

export const selectUsername = createDraftSafeSelector(
  selectUser,
  (state: UserModel) => state.username,
);

export const selectName = createDraftSafeSelector(
  selectUser,
  (state: UserModel) => state.name,
);

export const selectCompany = createDraftSafeSelector(
  selectUser,
  (state: UserModel) => state.company,
);
