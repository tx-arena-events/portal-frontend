import { IconButton as MuiIconButton } from '@mui/material';
import { mergeSx } from '../shared';
import { ICON_BUTTON_DEFAULT_SIZE } from './icon-button.defaults';
import type { IconButtonProps } from './icon-button.props';
import { iconButtonSx } from './icon-button.styles';

export function IconButton(props: IconButtonProps) {
  const { size = ICON_BUTTON_DEFAULT_SIZE, variant, sx, ...rest } = props;

  return (
    <MuiIconButton
      size={size}
      sx={mergeSx(iconButtonSx(variant), sx)}
      {...rest}
    />
  );
}
