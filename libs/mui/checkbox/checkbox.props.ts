import type { CheckboxProps as MuiCheckboxProps } from '@mui/material';
import type { CheckboxLabel, CheckboxSize } from './checkbox.type';

export type CheckboxProps = Omit<MuiCheckboxProps, 'size'> & {
  size?: CheckboxSize;
  label?: CheckboxLabel;
};
