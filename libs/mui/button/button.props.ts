import type { ButtonProps as MuiButtonProps } from '@mui/material';
import type { ButtonColor, ButtonVariant } from './button.type';

export type ButtonProps = Omit<MuiButtonProps, 'variant' | 'color'> & {
  variant?: ButtonVariant;
  color?: ButtonColor;
};
