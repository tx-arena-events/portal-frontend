import type { BoxProps } from '@mui/material';
import type { ComponentType, ElementType, MouseEventHandler } from 'react';
import type { MenuProps } from '../menu/menu.props';
import type { MenuItemData } from './menu-item.type';

export type MenuItemProps = MenuItemData & {
  component?: ElementType;
  divider?: boolean;
  menuProps?: Omit<BoxProps, 'onClick'>;
  onClick?: MouseEventHandler;
  // Injected by Menu to render nested items without a circular import.
  submenu?: ComponentType<MenuProps>;
};
