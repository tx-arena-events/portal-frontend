import type { RestrictedItem } from './restrictedItem.model';
import { type PAGES } from '../enums';

export type IPage = Omit<RestrictedItem, 'name'> & {
  name: PAGES;
  path?: string;
  param?: string;
  props?: Record<string, unknown>;
};
