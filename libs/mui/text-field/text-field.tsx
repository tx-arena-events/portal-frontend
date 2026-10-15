import { TextField as MuiTextField } from '@mui/material';
import { TEXT_FIELD_DEFAULT_VARIANT } from './text-field.defaults';
import type { TextFieldProps } from './text-field.props';

export function TextField(props: TextFieldProps) {
  const { variant = TEXT_FIELD_DEFAULT_VARIANT, ...rest } = props;

  return <MuiTextField variant={variant} {...rest} />;
}
