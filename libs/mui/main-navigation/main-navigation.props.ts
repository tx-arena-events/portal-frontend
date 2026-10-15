import type { ElementType, ReactNode } from 'react';
import type { MenuItemData } from '../menu-item/menu-item.type';

export type MainNavigationProps = {
  items: Array<MenuItemData>;
  component?: ElementType;
  // First child goes into the logo slot, second into the actions slot.
  children?: ReactNode;
};
