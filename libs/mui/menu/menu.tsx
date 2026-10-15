import { Box, Divider, List } from '@mui/material';
import { MenuItem } from '../menu-item/menu-item';
import { menuItemKey } from './menu.helper';
import type { MenuProps } from './menu.props';
import { MENU_DIVIDER_SX, MENU_LIST_SX } from './menu.styles';

export function Menu(props: MenuProps) {
  const { items, divider, component, onItemClick, ...box } = props;

  return (
    <Box {...box}>
      <List sx={MENU_LIST_SX}>
        {items.map((item) => (
          <MenuItem
            key={menuItemKey(item)}
            {...item}
            component={component}
            menuProps={box}
            submenu={Menu}
            onClick={onItemClick}
          />
        ))}
      </List>
      {divider && <Divider sx={MENU_DIVIDER_SX} />}
    </Box>
  );
}
