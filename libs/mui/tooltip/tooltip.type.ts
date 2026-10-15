import type { TooltipProps as MuiTooltipProps } from '@mui/material';

export type TooltipTone = 'dark' | 'light';

export type TooltipPlacement = NonNullable<MuiTooltipProps['placement']>;

export type TooltipToneColors = {
  color: string;
  backgroundColor: string;
};
