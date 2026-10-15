import type { TooltipProps as MuiTooltipProps } from '@mui/material';
import type { TooltipTone } from './tooltip.type';

export type TooltipProps = MuiTooltipProps & {
  tone?: TooltipTone;
};
