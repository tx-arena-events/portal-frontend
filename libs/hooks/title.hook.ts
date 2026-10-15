import { useEffect } from 'react';
import { useI18n } from './i18n.hook';

export function useDocumentTitle(key: string) {
  const { t } = useI18n();

  useEffect(() => {
    document.title = t(key);
  }, [t, key]);
}
