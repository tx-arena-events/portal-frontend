import type { TFunction } from 'i18next';
import type { PAGES } from '../enums';
import type { Tree } from '../models';
import type { MenuItemData } from '../mui';

export function toMenuItem(name: PAGES, t: TFunction): MenuItemData {
  return {
    to: `/${name}`,
    title: t(`pages:${name}`),
  };
}

export function toMenuItems(
  names: Array<PAGES>,
  t: TFunction,
): Array<MenuItemData> {
  return names.map((name) => toMenuItem(name, t));
}

export function toMenuTree(
  tree: Array<Tree>,
  t: TFunction,
): Array<MenuItemData> {
  return tree.map((item) => ({
    ...toMenuItem(item.name, t),
    hint: item.hint ? t(`hints:${item.hint}`) : '',
    children: item.children && toMenuTree(item.children, t),
  }));
}
