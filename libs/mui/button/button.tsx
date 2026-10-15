import { Button as MuiButton } from '@mui/material';
import {
  BUTTON_DEFAULT_COLOR,
  BUTTON_DEFAULT_VARIANT,
} from './button.defaults';
import { resolveButtonColor } from './button.helper';
import type { ButtonProps } from './button.props';

export function Button(props: ButtonProps) {
  const {
    variant = BUTTON_DEFAULT_VARIANT,
    color = BUTTON_DEFAULT_COLOR,
    ...rest
  } = props;

  return (
    <MuiButton
      variant={variant}
      color={resolveButtonColor(variant, color)}
      {...rest}
    />
  );
}
