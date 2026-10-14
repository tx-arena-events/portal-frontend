import { type Resource } from 'i18next';
import { type IPage } from './page.model';

export type IConfig = {
  ENV: Record<string, string>;
  languages: Array<string>;
  fallbackLng: string;
  languageResources: Resource;
  ALL_PAGES: Array<IPage>;
};
