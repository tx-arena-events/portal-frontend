import type { HINTS, PAGES } from '../enums';

export interface Tree {
  name: PAGES;
  hint?: HINTS;
  children?: Array<Tree>;
}
