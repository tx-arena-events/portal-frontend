import { Tooltip as MuiTooltip } from '@mui/material';
import {
  TOOLTIP_DEFAULT_ARROW,
  TOOLTIP_DEFAULT_PLACEMENT,
  TOOLTIP_DEFAULT_TONE,
} from './tooltip.defaults';
import type { TooltipProps } from './tooltip.props';
import { tooltipSlotProps } from './tooltip.styles';

export function Tooltip(props: TooltipProps) {
  const {
    placement = TOOLTIP_DEFAULT_PLACEMENT,
    arrow = TOOLTIP_DEFAULT_ARROW,
    tone = TOOLTIP_DEFAULT_TONE,
    ...rest
  } = props;

  return (
    <MuiTooltip
      placement={placement}
      arrow={arrow}
      slotProps={tooltipSlotProps(tone)}
      {...rest}
    />
  );
}
