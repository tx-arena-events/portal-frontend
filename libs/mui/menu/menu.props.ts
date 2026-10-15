import type { BoxProps } from '@mui/material';
import type { ElementType, MouseEventHandler } from 'react';
import type { MenuItemData } from '../menu-item/menu-item.type';

export type MenuProps = Omit<BoxProps, 'onClick'> & {
  items: Array<MenuItemData>;
  component?: ElementType;
  divider?: boolean;
  onItemClick?: MouseEventHandler;
};
