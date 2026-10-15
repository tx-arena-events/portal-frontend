import ArrowForward from '@mui/icons-material/ArrowForward';
import { Box, Divider, Link, ListItem, Typography } from '@mui/material';
import { Fragment, useState } from 'react';
import type { MenuItemProps } from './menu-item.props';
import {
  MENU_ITEM_CHEVRON_SX,
  MENU_ITEM_HINT_SX,
  MENU_ITEM_HINT_TEXT_SX,
  menuItemLinkSx,
  menuItemSx,
} from './menu-item.styles';

export function MenuItem(props: MenuItemProps) {
  const {
    title,
    hint,
    disable = false,
    children,
    divider,
    component = Link,
    menuProps,
    onClick,
    submenu: Submenu,
    ...link
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <ListItem
      sx={menuItemSx(!!onClick)}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={disable ? undefined : onClick}
    >
      <Link
        component={component}
        sx={menuItemLinkSx(!!hint, disable)}
        {...link}
      >
        {title}
        {hint && (
          <Box sx={MENU_ITEM_HINT_SX}>
            <Typography variant="helper" sx={MENU_ITEM_HINT_TEXT_SX}>
              {hint}
            </Typography>
          </Box>
        )}
        {children && (
          <ArrowForward fontSize="small" sx={MENU_ITEM_CHEVRON_SX} />
        )}
        <Fragment key="NotificationCount" />
      </Link>
      {Submenu && children && open && (
        <Submenu items={children} component={component} {...menuProps} />
      )}
      {divider && <Divider />}
    </ListItem>
  );
}
