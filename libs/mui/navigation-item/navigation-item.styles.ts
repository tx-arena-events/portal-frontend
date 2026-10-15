import type { SxProps, Theme } from '@mui/material';

export const NAVIGATION_ITEM_SX: SxProps<Theme> = {
  position: 'relative',
};

export function navigationItemLinkSx(unstyled: boolean): SxProps<Theme> {
  return {
    display: 'block',
    typography: 'body3',
    mx: 1,
    ':hover, &.active': {
      color: 'primary.dark',
    },
    ...(!unstyled && {
      typography: 'label3',
      color: 'text.tertiary',
      py: 1,
      mx: 2,
      '&.active': {
        color: 'primary.main',
        borderBottom: '2px solid',
        marginBottom: '-2px',
      },
    }),
  };
}

export const NAVIGATION_DROPDOWN_SX: SxProps<Theme> = {
  position: 'absolute',
  top: (theme) => theme.spacing(4.5),
  left: (theme) => theme.spacing(-1),
  minWidth: 220,
  py: 2,
  borderRadius: 4,
  backgroundColor: 'background.background01',
  boxShadow: 20,
  '.MuiBox-root': {
    left: 256,
    top: (theme) => theme.spacing(-2),
  },
};
