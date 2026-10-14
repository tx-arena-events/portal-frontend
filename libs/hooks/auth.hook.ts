import { useContext } from 'react';
import { authContext } from '../context';

export function useAuth() {
  const ctx = useContext(authContext);
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>');
  return ctx;
}
