import type { ElementType, MouseEventHandler } from 'react';
import type { MenuItemData } from '../menu-item/menu-item.type';

export type NavigationItemProps = MenuItemData & {
  component?: ElementType;
  isActive?: boolean;
  unstyled?: boolean;
  onClick?: MouseEventHandler;
};
