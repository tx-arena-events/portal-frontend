import type { TooltipProps as MuiTooltipProps } from '@mui/material';
import { TOOLTIP_TONES } from './tooltip.constants';
import type { TooltipTone } from './tooltip.type';

export function tooltipSlotProps(
  tone: TooltipTone,
): MuiTooltipProps['slotProps'] {
  const { color, backgroundColor } = TOOLTIP_TONES[tone];

  return {
    tooltip: {
      sx: {
        color,
        backgroundColor,
        padding: '15px',
        maxWidth: '300px',
        fontSize: '14px',
        lineHeight: '20px',
      },
    },
    arrow: { sx: { color: backgroundColor } },
  };
}
