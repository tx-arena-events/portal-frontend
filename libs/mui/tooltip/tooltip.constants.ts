import type { TooltipTone, TooltipToneColors } from './tooltip.type';

export const TOOLTIP_TONES: Record<TooltipTone, TooltipToneColors> = {
  dark: { color: 'common.white', backgroundColor: 'background.background14' },
  light: { color: 'text.primary', backgroundColor: 'grey.100' },
};
