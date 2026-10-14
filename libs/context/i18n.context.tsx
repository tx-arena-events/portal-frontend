import i18n, { type Resource, type TFunction } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { createContext, useMemo, type PropsWithChildren } from 'react';
import {
  I18nextProvider,
  initReactI18next,
  useTranslation,
} from 'react-i18next';

type I18nContextValue = {
  language: string;
  supportedLanguages: Array<string>;
  changeLanguage: (lang: string) => Promise<void>;
  t: TFunction;
};

type I18nProviderProps = {
  fallbackLang: string;
  supportedLangs: Array<string>;
  resources: Resource;
};

export const i18nContext = createContext<I18nContextValue | undefined>(
  undefined,
);

export function I18nProvider(
  props: Readonly<PropsWithChildren<I18nProviderProps>>,
) {
  const { children, fallbackLang, supportedLangs, resources } = props;

  if (!i18n.isInitialized) {
    i18n
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        resources,
        fallbackLng: fallbackLang,
        supportedLngs: supportedLangs,
        interpolation: { escapeValue: false },
        initAsync: false,
      })
      .catch((error: unknown) => {
        console.error('Translation library init got error:', error);
      });
  }

  const { t, i18n: instance } = useTranslation();
  const language = instance.resolvedLanguage ?? fallbackLang;

  const value = useMemo<I18nContextValue>(
    () => ({
      language,
      supportedLanguages: supportedLangs,
      changeLanguage: async (lang) => {
        await instance.changeLanguage(lang);
      },
      t,
    }),
    [language, supportedLangs, instance, t],
  );

  return (
    <I18nextProvider i18n={i18n}>
      <i18nContext.Provider value={value}>{children}</i18nContext.Provider>
    </I18nextProvider>
  );
}
