import type { ChipProps as MuiChipProps } from '@mui/material';
import type { ChipColor, ChipType, ChipVariant } from './chip.type';

export type ChipProps = Omit<MuiChipProps, 'variant' | 'color'> & {
  variant?: ChipVariant;
  color?: ChipColor;
  type?: ChipType;
  withIcon?: boolean;
};
