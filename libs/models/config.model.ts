import { type Resource } from 'i18next';
import { type IPage } from './page.model';
import type { PAGES } from '../enums';
import type { Tree } from './tree.model';

export type IConfig = {
  languages: Array<string>;
  fallbackLng: string;
  languageResources: Resource;
  LOGO_URL: string;
  ALL_PAGES: Array<IPage>;
  MAIN_MENU: Array<Tree>;
  USER_MENU: Array<PAGES>;
  FOOTER_MENU: Array<PAGES>;
};
