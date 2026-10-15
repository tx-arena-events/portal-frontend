import { createInstance, type i18n, type Resource } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

type I18nOptions = {
  fallbackLang: string;
  supportedLangs: Array<string>;
  resources: Resource;
};

// Own instance instead of the global i18next singleton; initialised synchronously.
export function createI18n(options: I18nOptions): i18n {
  const { fallbackLang, supportedLangs, resources } = options;
  const instance = createInstance();

  instance
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

  return instance;
}
