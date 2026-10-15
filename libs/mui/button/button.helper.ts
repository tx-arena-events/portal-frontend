import { BUTTON_DEFAULT_COLOR } from './button.defaults';
import type { ButtonColor, ButtonVariant } from './button.type';

// Only contained buttons may change color; outlined and text stay primary.
export function resolveButtonColor(
  variant: ButtonVariant,
  color: ButtonColor,
): ButtonColor {
  return variant === 'contained' ? color : BUTTON_DEFAULT_COLOR;
}
