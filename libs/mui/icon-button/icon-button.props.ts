import type { IconButtonProps as MuiIconButtonProps } from '@mui/material';
import type {
  IconButtonColor,
  IconButtonSize,
  IconButtonVariant,
} from './icon-button.type';

export type IconButtonProps = Omit<MuiIconButtonProps, 'size' | 'color'> & {
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  color?: IconButtonColor;
};
