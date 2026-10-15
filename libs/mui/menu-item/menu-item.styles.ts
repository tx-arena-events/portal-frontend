import type { SxProps, Theme } from '@mui/material';
import {
  MENU_ITEM_HINT_BACKGROUND,
  MENU_ITEM_HINT_COLOR,
} from './menu-item.constants';

export function menuItemSx(clickable: boolean): SxProps<Theme> {
  return {
    display: 'block',
    position: 'relative',
    px: 1,
    py: 0,
    ...(clickable && { cursor: 'pointer' }),
  };
}

export function menuItemLinkSx(
  hasHint: boolean,
  disabled: boolean,
): SxProps<Theme> {
  return {
    color: disabled ? 'text.disabled' : 'text.primary',
    pointerEvents: disabled ? 'none' : 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    py: hasHint ? 1.3 : 1.5,
    px: 2,
    borderRadius: 3,
    typography: 'label3',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    ':hover': {
      backgroundColor: 'selected.hover',
      color: 'primary.dark',
      '.MuiSvgIcon-root': {
        color: 'primary.dark',
      },
    },
  };
}

export const MENU_ITEM_HINT_SX: SxProps<Theme> = {
  backgroundColor: MENU_ITEM_HINT_BACKGROUND,
  borderRadius: '5px',
  minWidth: '40px',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  marginLeft: '12px',
  padding: '5px',
};

export const MENU_ITEM_HINT_TEXT_SX: SxProps<Theme> = {
  display: 'block',
  fontSize: '10px',
  lineHeight: '14px',
  fontWeight: 'bold',
  color: MENU_ITEM_HINT_COLOR,
};

export const MENU_ITEM_CHEVRON_SX: SxProps<Theme> = {
  color: 'icon.icon02',
};
