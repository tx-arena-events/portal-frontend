import { useAppDispatch, useAppSelector } from '../storeTypes';
import {
  selectAccess,
  selectAuthenticated,
  selectCompany,
  selectName,
  selectUsername,
} from './selectors';
import { useCallback } from 'react';
import { IUser } from '../../models';

export function useUserState() {
  const dispatch = useAppDispatch();
  //
  const isAuthenticated = useAppSelector(selectAuthenticated);
  const username = useAppSelector(selectUsername);
  const name = useAppSelector(selectName);
  const company = useAppSelector(selectCompany);
  const access = useAppSelector(selectAccess);
  //
  const updateUser = useCallback((user: IUser) => {}, []);
  const clearUser = useCallback(() => {}, []);
  //
  return {
    isAuthenticated,
    username,
    name,
    company,
    access,
    updateUser,
    clearUser,
  };
}
