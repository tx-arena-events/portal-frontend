import type { MenuItemData } from '../menu-item/menu-item.type';

export function menuItemKey(item: MenuItemData): string {
  return item.to ?? item.href ?? item.title;
}
