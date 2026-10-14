import { type Resource } from 'i18next';
import { type IPage } from './page.model';

export type IConfig = {
  languages: Array<string>;
  fallbackLng: string;
  languageResources: Resource;
  ALL_PAGES: Array<IPage>;
};
