import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material';
import { CHECKBOX_DEFAULT_SIZE } from './checkbox.defaults';
import type { CheckboxProps } from './checkbox.props';

export function Checkbox(props: CheckboxProps) {
  const { size = CHECKBOX_DEFAULT_SIZE, label, ...rest } = props;
  const checkbox = <MuiCheckbox size={size} {...rest} />;

  if (label === undefined) return checkbox;

  return <FormControlLabel control={checkbox} label={label} />;
}
