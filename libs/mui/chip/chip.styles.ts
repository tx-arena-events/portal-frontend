import type { SxProps, Theme } from '@mui/material';
import {
  CHIP_PROGRESS_RADIUS,
  CHIP_RADIUS,
  CHIP_TYPE_PALETTE,
} from './chip.constants';
import type { ChipType } from './chip.type';

export function chipSx(type: ChipType): SxProps<Theme> {
  const isProgress = type === 'progress';
  const status = CHIP_TYPE_PALETTE[type];

  return {
    borderRadius: isProgress ? CHIP_PROGRESS_RADIUS : CHIP_RADIUS,
    ':hover': {
      cursor: isProgress ? 'auto' : 'pointer',
      ...(status && {
        backgroundColor: `${status}.main`,
        color: `${status}.contrastText`,
      }),
    },
  };
}
