import type { ElementType } from 'react';
import type { MenuItemData } from '../menu-item/menu-item.type';

export type NavigationProps = {
  items: Array<MenuItemData>;
  component?: ElementType;
  active?: string;
  unstyled?: boolean;
  selectedItem?: (href: string) => void;
};
