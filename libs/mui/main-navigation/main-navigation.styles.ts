import type { SxProps, Theme } from '@mui/material';
import {
  MAIN_NAVIGATION_ACTIONS_WIDTH,
  MAIN_NAVIGATION_BOTTOM_LINE,
  MAIN_NAVIGATION_HEIGHT,
  MAIN_NAVIGATION_LOGO_WIDTH,
  MAIN_NAVIGATION_SLOT_PADDING,
} from './main-navigation.constants';

const slot = {
  paddingTop: MAIN_NAVIGATION_SLOT_PADDING,
  paddingBottom: MAIN_NAVIGATION_SLOT_PADDING,
};

export const MAIN_NAVIGATION_SX: SxProps<Theme> = {
  height: `${MAIN_NAVIGATION_HEIGHT}px`,
  display: 'flex',
  padding: '0px 30px',
  backgroundImage: MAIN_NAVIGATION_BOTTOM_LINE,
  backgroundRepeat: 'repeat-x',
  backgroundPosition: '0 bottom',
};

export const MAIN_NAVIGATION_LOGO_SX: SxProps<Theme> = {
  ...slot,
  width: MAIN_NAVIGATION_LOGO_WIDTH,
};

export const MAIN_NAVIGATION_MENU_SX: SxProps<Theme> = {
  ...slot,
  marginRight: 'auto',
  marginLeft: 'auto',
};

export const MAIN_NAVIGATION_ACTIONS_SX: SxProps<Theme> = {
  ...slot,
  width: MAIN_NAVIGATION_ACTIONS_WIDTH,
};
