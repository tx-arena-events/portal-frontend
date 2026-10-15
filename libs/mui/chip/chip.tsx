import { Chip as MuiChip } from '@mui/material';
import { mergeSx } from '../shared';
import {
  CHIP_DEFAULT_COLOR,
  CHIP_DEFAULT_TYPE,
  CHIP_DEFAULT_VARIANT,
  CHIP_DEFAULT_WITH_ICON,
} from './chip.defaults';
import { resolveChipDelete, resolveChipIcon } from './chip.helper';
import type { ChipProps } from './chip.props';
import { chipSx } from './chip.styles';

export function Chip(props: ChipProps) {
  const {
    variant = CHIP_DEFAULT_VARIANT,
    color = CHIP_DEFAULT_COLOR,
    type = CHIP_DEFAULT_TYPE,
    withIcon = CHIP_DEFAULT_WITH_ICON,
    onDelete,
    sx,
    ...rest
  } = props;

  return (
    <MuiChip
      variant={variant}
      color={color}
      icon={resolveChipIcon(type, withIcon)}
      onDelete={resolveChipDelete(type, onDelete)}
      sx={mergeSx(chipSx(type), sx)}
      {...rest}
    />
  );
}
