import type { SxProps, Theme } from '@mui/material';
import type { IconButtonVariant } from './icon-button.type';

const OUTLINED_SX: SxProps<Theme> = { border: '2px solid' };

export function iconButtonSx(variant?: IconButtonVariant): SxProps<Theme> {
  return variant === 'outlined' ? OUTLINED_SX : {};
}
