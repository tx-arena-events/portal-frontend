import { useContext } from 'react';
import { i18nContext } from '../context';

export function useI18n() {
  const ctx = useContext(i18nContext);
  if (!ctx) throw new Error('useI18n must be used inside <I18nProvider>');
  return ctx;
}
