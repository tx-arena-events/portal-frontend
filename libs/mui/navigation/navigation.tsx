import { Box } from '@mui/material';
import { menuItemKey } from '../menu/menu.helper';
import { NavigationItem } from '../navigation-item/navigation-item';
import { isActiveItem } from './navigation.helper';
import type { NavigationProps } from './navigation.props';
import { NAVIGATION_SX } from './navigation.styles';

export function Navigation(props: NavigationProps) {
  const {
    items,
    component,
    active = '',
    unstyled = false,
    selectedItem,
  } = props;

  return (
    <Box component="nav" sx={NAVIGATION_SX}>
      {items.map((item) => (
        <NavigationItem
          key={menuItemKey(item)}
          {...item}
          isActive={isActiveItem(item, active)}
          component={component}
          unstyled={unstyled}
          onClick={() => selectedItem?.(item.href ?? '')}
        />
      ))}
    </Box>
  );
}
