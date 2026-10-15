import type { IConfig } from '../models';
import {
  FALLBACK_LANGUAGE,
  LANGUAGE_RESOURCES,
  LANGUAGES,
} from './i18n.config';
import { FOOTER_MENU, MAIN_MENU, USER_MENU } from './menu.config';
import {
  ADMINISTRATION_PAGES,
  MARKETPLACE_PAGES,
  PROVIDER_PAGES,
  PUBLIC_PAGES,
} from './pages';

export const config: IConfig = {
  languages: LANGUAGES,
  fallbackLng: FALLBACK_LANGUAGE,
  languageResources: LANGUAGE_RESOURCES,
  LOGO_URL: '/logo.svg',
  ALL_PAGES: [
    ...PUBLIC_PAGES,
    ...MARKETPLACE_PAGES,
    ...PROVIDER_PAGES,
    ...ADMINISTRATION_PAGES,
  ],
  MAIN_MENU,
  USER_MENU,
  FOOTER_MENU,
};
