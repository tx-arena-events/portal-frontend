import type { Resource } from 'i18next';
import { useMemo, useState, type PropsWithChildren } from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';
import { createI18n } from '../helpers';
import { i18nContext, type I18nContextValue } from './i18n.context';

type I18nProviderProps = {
  fallbackLang: string;
  supportedLangs: Array<string>;
  resources: Resource;
};

export function I18nProvider(
  props: Readonly<PropsWithChildren<I18nProviderProps>>,
) {
  const { children, fallbackLang, supportedLangs, resources } = props;
  const [i18n] = useState(() =>
    createI18n({ fallbackLang, supportedLangs, resources }),
  );
  const { t } = useTranslation(undefined, { i18n });
  const language = i18n.resolvedLanguage ?? fallbackLang;

  const value = useMemo<I18nContextValue>(
    () => ({
      language,
      supportedLanguages: supportedLangs,
      changeLanguage: async (lang) => {
        await i18n.changeLanguage(lang);
      },
      t,
    }),
    [language, supportedLangs, i18n, t],
  );

  return (
    <I18nextProvider i18n={i18n}>
      <i18nContext.Provider value={value}>{children}</i18nContext.Provider>
    </I18nextProvider>
  );
}
