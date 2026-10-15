import { Box, Link } from '@mui/material';
import { useState } from 'react';
import { Menu } from '../menu/menu';
import type { NavigationItemProps } from './navigation-item.props';
import {
  NAVIGATION_DROPDOWN_SX,
  NAVIGATION_ITEM_SX,
  navigationItemLinkSx,
} from './navigation-item.styles';

export function NavigationItem(props: NavigationItemProps) {
  const {
    title,
    children,
    component = Link,
    isActive = false,
    unstyled = false,
    hint: _hint,
    disable: _disable,
    ...link
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={NAVIGATION_ITEM_SX}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        component={component}
        className={isActive ? 'active' : undefined}
        sx={navigationItemLinkSx(unstyled)}
        {...link}
      >
        {title}
      </Link>
      {children && open && (
        <Menu
          items={children}
          component={component}
          sx={NAVIGATION_DROPDOWN_SX}
        />
      )}
    </Box>
  );
}
