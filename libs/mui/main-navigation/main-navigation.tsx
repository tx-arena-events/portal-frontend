import { Box } from '@mui/material';
import { Children } from 'react';
import { Navigation } from '../navigation/navigation';
import type { MainNavigationProps } from './main-navigation.props';
import {
  MAIN_NAVIGATION_ACTIONS_SX,
  MAIN_NAVIGATION_LOGO_SX,
  MAIN_NAVIGATION_MENU_SX,
  MAIN_NAVIGATION_SX,
} from './main-navigation.styles';

export function MainNavigation(props: MainNavigationProps) {
  const { items, component, children } = props;
  const [logo, actions] = Children.toArray(children);

  return (
    <Box sx={MAIN_NAVIGATION_SX}>
      {logo && <Box sx={MAIN_NAVIGATION_LOGO_SX}>{logo}</Box>}
      <Box sx={MAIN_NAVIGATION_MENU_SX}>
        <Navigation items={items} component={component} />
      </Box>
      {actions && <Box sx={MAIN_NAVIGATION_ACTIONS_SX}>{actions}</Box>}
    </Box>
  );
}
