import type { TFunction } from 'i18next';
import { createContext } from 'react';

export type I18nContextValue = {
  language: string;
  supportedLanguages: Array<string>;
  changeLanguage: (lang: string) => Promise<void>;
  t: TFunction;
};

export const i18nContext = createContext<I18nContextValue | undefined>(
  undefined,
);
