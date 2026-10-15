import type { MenuItemData } from '../menu-item/menu-item.type';

export function isActiveItem(item: MenuItemData, active: string): boolean {
  return item.href === active || item.to === active;
}
